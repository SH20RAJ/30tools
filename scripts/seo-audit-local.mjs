#!/usr/bin/env node
/**
 * SEO Audit Script for 30tools
 * Fetches live pages and checks for SEO requirements
 */

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

// Configuration
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const verbose = process.argv.includes("--verbose");
const jsonOutput = process.argv.includes("--json");

// ANSI colors
const colors = {
	red: "\x1b[31m",
	green: "\x1b[32m",
	yellow: "\x1b[33m",
	blue: "\x1b[34m",
	reset: "\x1b[0m",
};

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
let warnings = 0;

const results = [];

function log(msg, color = colors.reset) {
	console.log(`${color}${msg}${colors.reset}`);
}

function info(msg) {
	if (verbose) log(`  ℹ  ${msg}`, colors.blue);
}

function pass(msg) {
	passedChecks++;
	if (verbose) log(`  ✓  ${msg}`, colors.green);
}

function fail(msg, url = "") {
	failedChecks++;
	const entry = { status: "FAIL", message: msg, url };
	results.push(entry);
	log(`  ✗  ${msg}${url ? ` (${url})` : ""}`, colors.red);
}

function warn(msg, url = "") {
	warnings++;
	const entry = { status: "WARN", message: msg, url };
	results.push(entry);
	log(`  ⚠  ${msg}`, colors.yellow);
}

async function fetchPage(url) {
	try {
		const res = await fetch(url, {
			headers: { "User-Agent": "SEO-Audit-Bot/1.0" },
		});
		const html = await res.text();
		return { status: res.status, html, ok: res.ok };
	} catch (error) {
		return { status: 0, html: "", ok: false, error: error.message };
	}
}

function parseHtml(html) {
	return {
		hasTitle: /<title[^>]*>([^<]+)<\/title>/i.test(html),
		title: html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] || "",
		hasMetaDesc: /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i.test(html),
		metaDesc: html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1] || "",
		hasCanonical: /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i.test(html),
		canonical: html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] || "",
		hasH1: /<h1[^>]*>([^<]+)<\/h1>/i.test(html),
		h1Count: (html.match(/<h1[^>]*>/gi) || []).length,
		h1: html.match(/<h1[^>]*>([^<]+)<\/h1>/i)?.[1] || "",
		hasNoindex: /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html),
		hasLoadingOnly:
			html.includes("Loading") &&
			!html.includes("<main") &&
			html.length < 5000,
		bodyText: html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
		bodyLength: html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().length,
		hasShellOnly:
			html.includes("<header") &&
			html.includes("<footer") &&
			html.replace(/<header[^>]*>[\s\S]*<\/header>/gi, "").replace(/<footer[^>]*>[\s\S]*<\/footer>/gi, "").length < 3000,
		hasReviewSchema: /"@type":\s*"Review"/.test(html),
		hasAggregateRating: /"@type":\s*"AggregateRating"/.test(html),
		hasFaqSchema: /"@type":\s*"FAQPage"/.test(html),
		hasVisibleFaq: /<h[23][^>]*>.*\?/.test(html),
	};
}

async function checkUrl(name, url, options = {}) {
	totalChecks++;
	const { status, html, ok, error } = await fetchPage(url);

	if (error) {
		fail(`Failed to fetch ${name}`, url);
		return null;
	}

	if (!ok && options.expectError) {
		pass(`${name} correctly returns ${status}`);
		return null;
	}

	if (!ok && !options.expectError) {
		fail(`${name} returns ${status} instead of 200`, url);
		return null;
	}

	const parsed = parseHtml(html);

	if (options.expectNoindex) {
		if (parsed.hasNoindex) {
			pass(`${name} is noindex`);
		} else {
			fail(`${name} should be noindex but is indexable`, url);
		}
		return null;
	}

	if (options.expectShell) {
		return parsed;
	}

	if (parsed.hasTitle) {
		pass(`${name} has title`);
	} else {
		fail(`${name} missing title`, url);
	}

	if (parsed.hasMetaDesc) {
		pass(`${name} has meta description`);
	} else {
		fail(`${name} missing meta description`, url);
	}

	if (parsed.hasCanonical) {
		pass(`${name} has canonical URL`);
	} else {
		fail(`${name} missing canonical URL`, url);
	}

	if (parsed.hasH1) {
		if (parsed.h1Count === 1) {
			pass(`${name} has exactly one H1`);
		} else {
			fail(`${name} has ${parsed.h1Count} H1s (should be 1)`, url);
		}
	} else {
		fail(`${name} missing H1`, url);
	}

	if (parsed.bodyLength > 1000) {
		pass(`${name} has meaningful body content (${parsed.bodyLength} chars)`);
	} else {
		fail(`${name} body content too thin (< 1000 chars)`, url);
	}

	if (!parsed.hasLoadingOnly) {
		pass(`${name} not loading-only`);
	} else {
		fail(`${name} shows loading state only`, url);
	}

	return parsed;
}

async function checkSitemap() {
	totalChecks += 3;

	const robots = await fetchPage(`${BASE_URL}/robots.txt`);
	if (robots.status === 200) {
		pass("robots.txt returns 200");
		if (robots.html.includes("sitemap")) {
			pass("robots.txt contains sitemap reference");
		} else {
			fail("robots.txt missing sitemap reference");
		}
	} else {
		fail("robots.txt should return 200", "/robots.txt");
	}

	const sitemap = await fetchPage(`${BASE_URL}/sitemap.xml`);
	if (sitemap.status === 200) {
		pass("sitemap.xml returns 200");

		if (/\?/.test(sitemap.html)) {
			warn("sitemap.xml contains query URLs");
		} else {
			pass("sitemap.xml has no query URLs");
		}

		const urls = sitemap.html.match(/<loc>([^<]+)<\/loc>/g) || [];
		let hasNoindex = false;
		for (const loc of urls.slice(0, 20)) {
			const url = loc.replace(/<\/?loc>/g, "");
			if (url.includes("/search?")) {
				hasNoindex = true;
				break;
			}
		}
		if (!hasNoindex) {
			pass("sitemap.xml excludes search query URLs");
		}
	} else {
		fail("sitemap.xml should return 200", "/sitemap.xml");
	}
}

async function checkCriticalPages() {
	const pages = [
		{ name: "Homepage", url: "/" },
		{ name: "About", url: "/about" },
		{ name: "Contact", url: "/contact" },
		{ name: "Privacy", url: "/privacy" },
		{ name: "Terms", url: "/terms" },
		{ name: "Image Tools", url: "/image-tools" },
		{ name: "PDF Tools", url: "/pdf-tools" },
		{ name: "Video Tools", url: "/video-tools" },
		{ name: "Image Compressor", url: "/image-compressor" },
		{ name: "PDF Editor", url: "/pdf-editor" },
	];

	for (const page of pages) {
		await checkUrl(page.name, `${BASE_URL}${page.url}`);
	}
}

async function checkSearchNoindex() {
	totalChecks++;
	const searchPage = await fetchPage(`${BASE_URL}/search`);
	if (searchPage.status === 200) {
		const parsed = parseHtml(searchPage.html);
		if (parsed.hasNoindex) {
			pass("/search is noindex");
		} else {
			warn("/search should be noindex");
		}
	} else {
		fail("/search returned non-200 status", "/search");
	}
}

async function checkApiTestersNoindex() {
	totalChecks++;
	const tester = await fetchPage(`${BASE_URL}/api-key-tester/amazon-ses`);
	if (tester.status === 200) {
		const parsed = parseHtml(tester.html);
		if (parsed.hasNoindex) {
			pass("API key tester pages are noindex");
		} else {
			fail("API key tester pages should be noindex", "/api-key-tester/[slug]");
		}
	} else {
		info("API key tester page not accessible, skipping");
	}
}

async function checkSchema() {
	totalChecks++;
	info("Checking structured data...");

	const homepage = await fetchPage(`${BASE_URL}/`);
	if (homepage.ok) {
		const hasOrgSchema = /"@type":\s*"Organization"/.test(homepage.html);
		const hasWebSiteSchema = /"@type":\s*"WebSite"/.test(homepage.html);

		if (hasOrgSchema || hasWebSiteSchema) {
			pass("Homepage has Organization or WebSite schema");
		} else {
			warn("Homepage missing Organization/WebSite schema");
		}

		const parsed = parseHtml(homepage.html);
		if (parsed.hasAggregateRating) {
			warn("AggregateRating schema detected - ensure reviews are real");
		}
	}
}

async function checkDownloaderPages() {
	totalChecks++;
	info("Checking downloader pages...");

	const downloaders = [
		{ name: "YouTube Downloader", url: "/youtube-downloader" },
		{ name: "Reddit Downloader", url: "/reddit-downloader" },
	];

	for (const dl of downloaders) {
		const page = await fetchPage(`${BASE_URL}${dl.url}`);
		if (page.ok) {
			const hasLawfulUse =
				/copyright|intellectual property|permission|lawful/i.test(page.html) ||
				/only download|respect|own or have permission/i.test(page.html);

			if (hasLawfulUse) {
				pass(`${dl.name} has lawful use notice`);
			} else {
				warn(`${dl.name} should have lawful use notice`, dl.url);
			}
		}
	}
}

async function main() {
	log("\n🛠️  30tools SEO Audit\n");
	log("═".repeat(50), colors.blue);

	const startTime = Date.now();

	try {
		await checkSitemap();
		await checkCriticalPages();
		await checkSearchNoindex();
		await checkApiTestersNoindex();
		await checkSchema();
		await checkDownloaderPages();
	} catch (error) {
		fail(`Audit failed: ${error.message}`);
	}

	const duration = ((Date.now() - startTime) / 1000).toFixed(2);

	log("\n" + "═".repeat(50), colors.blue);
	log(`\n📊 Audit Summary (${duration}s)`);
	log("-".repeat(30));

	const summary = {
		total: totalChecks,
		passed: passedChecks,
		failed: failedChecks,
		warnings: warnings,
		timestamp: new Date().toISOString(),
		baseUrl: BASE_URL,
	};

	if (jsonOutput) {
		console.log(JSON.stringify({ ...summary, results }, null, 2));
	} else {
		log(`  Total checks: ${totalChecks}`);
		log(`  ${colors.green}Passed: ${passedChecks}${colors.reset}`);
		log(`  ${colors.red}Failed: ${failedChecks}${colors.reset}`);
		log(`  ${colors.yellow}Warnings: ${warnings}${colors.reset}`);
	}

	const reportPath = join(process.cwd(), "seo-audit-report.json");
	writeFileSync(reportPath, JSON.stringify({ ...summary, results }, null, 2));
	info(`Report written to ${reportPath}`);

	if (failedChecks > 0) {
		log("\n✗ Audit completed with failures", colors.red);
		process.exit(1);
	} else if (warnings > 0) {
		log("\n⚠ Audit completed with warnings", colors.yellow);
		process.exit(0);
	} else {
		log("\n✓ All checks passed!", colors.green);
		process.exit(0);
	}
}

main().catch((error) => {
	console.error("Fatal error:", error);
	process.exit(1);
});
