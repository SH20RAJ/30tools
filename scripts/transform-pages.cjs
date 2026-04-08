#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Load tools data
const toolsData = JSON.parse(
	fs.readFileSync("src/constants/tools.json", "utf8"),
);

// Build tool map
const toolMap = {};
Object.entries(toolsData.categories).forEach(([catKey, cat]) => {
	if (cat.tools) {
		cat.tools.forEach((tool) => {
			toolMap[tool.id] = { ...tool, categoryKey: catKey };
		});
	}
});

// Valid tool categories
const VALID_CATEGORIES = [
	"audio",
	"developer",
	"downloaders",
	"generators",
	"image",
	"pdf",
	"seo",
	"text",
	"utilities",
	"video",
	"youtube",
];

// Gather all page files recursively under src/app
const pageFiles = [];
function collectAllPages(dir) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			collectAllPages(full);
		} else if (entry.name === "page.tsx" || entry.name === "page.js") {
			pageFiles.push(full);
		}
	}
}
collectAllPages("src/app");

console.log(`Found ${pageFiles.length} page files total`);

// Filter to only those under a tool category (i.e., have a parent folder that is a tool category)
const filteredFiles = pageFiles.filter((file) => {
	const rel = path.relative("src/app", file);
	const parts = rel.split(path.sep);
	// Check if any part matches (category) or equals a category
	// We look for a segment that after parentheses becomes a valid category
	for (const part of parts) {
		const stripped = part.replace(/^\(|\)$/g, "");
		if (VALID_CATEGORIES.includes(stripped)) {
			return true;
		}
	}
	return false;
});

console.log(`Processing ${filteredFiles.length} pages under tool categories`);

const stats = { updated: 0, skipped: 0, errors: 0 };

function addImport(content, importStmt) {
	if (content.includes(importStmt)) return content;
	// Find last import line
	const importRegex = /^import\s+.*;\s*/gm;
	const match = importRegex.exec(content);
	if (match) {
		const insertPos = match.index + match[0].length;
		return (
			content.slice(0, insertPos) + importStmt + "\n" + content.slice(insertPos)
		);
	} else {
		// No imports? prepend
		return importStmt + "\n" + content;
	}
}

for (const file of filteredFiles) {
	try {
		const original = fs.readFileSync(file, "utf8");
		let newContent = original;
		let modified = false;

		// Check if this is a ToolPlaceholderPage page
		if (original.includes("ToolPlaceholderPage")) {
			// Extract toolId from toolId="..."
			const toolIdMatch = original.match(/toolId\s*=\s*["']([^"']+)["']/);
			if (!toolIdMatch) {
				console.log(`⚠ Could not extract toolId from ${file}, skipping`);
				stats.skipped++;
				continue;
			}
			const toolId = toolIdMatch[1];
			const tool = toolMap[toolId];
			if (!tool) {
				console.log(
					`⚠ Tool ${toolId} not found in tools.json for ${file}, skipping`,
				);
				stats.skipped++;
				continue;
			}
			const category = tool.categoryKey;

			// Build new content
			const imports = `import type { Metadata } from "next";\nimport { generateToolMetadata } from "@/lib/seo-helper";\nimport ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";`;
			const metadataExport = `export const metadata = generateToolMetadata("${toolId}", "${category}");`;
			const defaultExport = `export default function ToolPage() {\n  return <ToolPlaceholderPage toolId="${toolId}" />;\n}`;

			newContent = [imports, metadataExport, "", defaultExport].join("\n");
			modified = true;
		} else if (
			original.includes("export const metadata") &&
			!original.includes("generateToolMetadata") &&
			!original.includes("async function generateMetadata")
		) {
			// Determine toolId from directory structure: look for folder name that is a tool id
			const dir = path.dirname(file);
			const parentDir = path.basename(dir); // might be tool-id
			// Check if parentDir is a known tool id
			let tool = toolMap[parentDir];
			if (!tool) {
				// Maybe the folder name is something else; try to find tool by matching the closest segment in path
				// Walk up path to find a segment that matches a tool id
				let checkDir = dir;
				while (path.dirname(checkDir) !== checkDir) {
					const base = path.basename(checkDir);
					if (toolMap[base]) {
						tool = toolMap[base];
						break;
					}
					checkDir = path.dirname(checkDir);
				}
			}
			if (!tool) {
				stats.skipped++;
				continue;
			}
			const category = tool.categoryKey;
			const toolId = tool.id;

			// Prepare import for generateToolMetadata
			const importStmt =
				'import { generateToolMetadata } from "@/lib/seo-helper";';
			if (!original.includes("generateToolMetadata")) {
				newContent = addImport(newContent, importStmt);
			} else {
				newContent = original;
			}

			// Replace the metadata export block with generateToolMetadata call
			const metadataRegex =
				/export\s+const\s+metadata(\s*:\s*Metadata)?\s*=\s*\{[\s\S]*?\};/;
			if (metadataRegex.test(newContent)) {
				newContent = newContent.replace(
					metadataRegex,
					`export const metadata = generateToolMetadata("${toolId}", "${category}");`,
				);
				modified = true;
			} else {
				stats.skipped++;
				continue;
			}
		} else {
			stats.skipped++;
			continue;
		}

		if (modified) {
			fs.writeFileSync(file, newContent);
			stats.updated++;
			console.log(`✓ Updated ${file}`);
		}
	} catch (err) {
		console.error(`✗ Error processing ${file}:`, err.message);
		stats.errors++;
	}
}

console.log(`\n✅ Page transformation complete!`);
console.log(`Updated: ${stats.updated}`);
console.log(`Skipped: ${stats.skipped}`);
console.log(`Errors: ${stats.errors}`);
