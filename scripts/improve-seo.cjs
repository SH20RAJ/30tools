const fs = require("fs");
const path = "/workspaces/30tools/src/constants/tools.json";

const taglines = {
	downloaders: "Free Video Downloader",
	pdf: "Free PDF Tool",
	image: "Free Image Tool",
	text: "Free Text Tool",
	video: "Free Video Tool",
	youtube: "Free Video Tool",
	audio: "Free Audio Tool",
	developer: "Free Developer Tool",
	utilities: "Free Online Tool",
	seo: "Free SEO Tool",
	generators: "Free AI Tool",
	others: "Free Online Tool",
};

function ensureSentence(text) {
	const trimmed = text.trim();
	if (!trimmed) return "";
	return /[.!?]$/.test(trimmed) ? trimmed : trimmed + ".";
}

function truncate(text, max = 158) {
	if (text.length <= max) return text;
	const sub = text.slice(0, max);
	const lastSpace = sub.lastIndexOf(" ");
	if (lastSpace > max * 0.5) {
		return sub.slice(0, lastSpace).trim() + ".";
	}
	return sub.trim() + "...";
}

const raw = fs.readFileSync(path, "utf8");
const data = JSON.parse(raw);
const categories = data.categories;
let changed = false;

for (const [catName, catObj] of Object.entries(categories)) {
	const tagline = taglines[catName] || "Free Online Tool";
	for (const tool of catObj.tools) {
		if (!tool.seoTitle || !tool.seoDescription || !tool.keywords) {
			const name = tool.name;
			if (!tool.seoTitle) {
				tool.seoTitle = `${name} - ${tagline} | 30tools`;
			}
			if (!tool.seoDescription) {
				let base = tool.description || name;
				base = ensureSentence(base);
				const benefits =
					" 100% free, no signup required, fast and secure. Works in browser. Try now!";
				let desc = base + benefits;
				if (desc.length < 150) {
					desc += " Easy and secure.";
				}
				desc = truncate(desc, 158);
				tool.seoDescription = desc;
			}
			if (!tool.keywords) {
				const keywords = new Set();
				if (name) {
					keywords.add(name.toLowerCase());
					const words = name
						.toLowerCase()
						.replace(/[^a-z0-9\s-]/g, "")
						.split(/\s+/)
						.filter((w) => w.length > 2);
					words.forEach((w) => keywords.add(w));
				}
				if (tool.id) {
					keywords.add(tool.id);
					const idWords = tool.id.split("-").filter((w) => w.length > 2);
					idWords.forEach((w) => keywords.add(w));
				}
				keywords.add(catName);
				if (catName !== "others") {
					keywords.add(`${catName} tool`);
				} else {
					keywords.add("online tool");
				}
				[
					"free",
					"online",
					"tool",
					"30tools",
					"no signup",
					"fast",
					"secure",
					"browser-based",
					"instant",
					"easy",
				].forEach((k) => keywords.add(k));
				tool.keywords = Array.from(keywords).slice(0, 30);
			}
			changed = true;
		}
	}
}

if (changed) {
	fs.writeFileSync(path, JSON.stringify(data, null, 2));
	console.log("tools.json updated with SEO metadata");
} else {
	console.log("No updates needed");
}
