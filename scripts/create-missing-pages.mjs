/**
 * Script to generate missing page.tsx files for tools that exist in tools.json
 * but don't have a corresponding page in the app directory.
 * 
 * USAGE: node scripts/create-missing-pages.mjs
 * 
 * This creates pages following the exact same pattern as existing pages like pdf-grayscale/page.tsx
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Tool definitions for missing pages: [slug, name, description, category-group, category]
const MISSING_TOOLS = [
	// Generators
	["business-name-generator", "Business Name Generator", "Generate unique, creative business name ideas instantly. Our free Business Name Generator helps entrepreneurs find the perfect brand name with AI-powered suggestions.", "(generators)", "generators"],
	["ai-poem-generator", "AI Poem Generator", "Create beautiful, unique poems on any topic instantly. Our free AI Poem Generator crafts rhyming and free-verse poetry for any occasion in seconds.", "(generators)", "generators"],
	["fake-chat-generator", "Fake Chat Generator", "Create realistic fake chat screenshots for social media, presentations, or fun. Our free Fake Chat Generator supports multiple messaging app styles.", "(generators)", "generators"],
	["excuse-generator", "Excuse Generator", "Generate creative, believable excuses instantly. Our free Excuse Generator creates funny and realistic excuses for any situation — work, school, or social events.", "(generators)", "generators"],
	["font-generator", "Font Generator", "Transform your text into 15+ fancy Unicode font styles instantly. Copy stylish text for Instagram, Twitter, Discord, and more with our free Font Generator.", "(generators)", "generators"],
	["number-generator", "Random Number Generator", "Generate random numbers with configurable ranges, counts, and unique options. Our free Random Number Generator is perfect for lotteries, games, and statistics.", "(generators)", "generators"],
	["poetry-generator", "Poetry Generator", "Create beautiful poems with randomized templates and literary devices. Our free Poetry Generator crafts verse on demand for inspiration and creativity.", "(generators)", "generators"],
	// Image
	["icon-generator", "Icon Generator", "Create professional app icons and favicons from any image. Our free Icon Generator outputs multiple sizes for iOS, Android, and web applications.", "(image)", "image"],
	["image-editor", "Image Editor", "Edit, resize, crop, and transform images directly in your browser. Our free Image Editor provides professional-grade tools with zero uploads required.", "(image)", "image"],
	// Video
	["video-converter", "Video Converter", "Convert videos between MP4, AVI, MOV, WEBM, and more formats. Our free Video Converter processes files entirely in your browser for maximum privacy.", "(video)", "video"],
	["video-editor", "Video Editor", "Trim, cut, and edit video clips directly in your browser. Our free Video Editor requires no software installation and supports all major formats.", "(video)", "video"],
	// Developer
	["css-gradient-generator", "CSS Gradient Generator", "Create beautiful CSS gradients with a visual editor. Our free CSS Gradient Generator supports linear, radial, and conic gradients with live preview and copy-paste CSS code.", "(developer)", "developer"],
	["css-shadow-generator", "CSS Shadow Generator", "Design perfect CSS box-shadows with our visual editor. Adjust offset, blur, spread, color, and opacity with live preview. Copy production-ready CSS code instantly.", "(developer)", "developer"],
	["code-formatter", "Code Formatter", "Format and beautify JavaScript, HTML, CSS, and other code instantly. Our free Code Formatter improves readability with proper indentation and syntax highlighting.", "(developer)", "developer"],
];

// API Key Tester tools — these share a template
const API_KEY_PROVIDERS = [
	["amazon-ses", "Amazon SES"],
	["anthropic", "Anthropic"],
	["attio", "Attio"],
	["brevo", "Brevo"],
	["clearbit", "Clearbit"],
	["cohere", "Cohere"],
	["coresignal", "Coresignal"],
	["crunchbase", "Crunchbase"],
	["data-axle", "Data Axle"],
	["datanyze", "Datanyze"],
	["deepseek", "DeepSeek"],
	["demandbase", "Demandbase"],
	["enrich", "Enrich"],
	["freshdesk", "Freshdesk"],
	["fullcontact", "FullContact"],
	["google-gemini", "Google Gemini"],
	["groq", "Groq"],
	["hg-insights", "HG Insights"],
	["hubspot", "HubSpot"],
	["intercom", "Intercom"],
	["leadgenius", "LeadGenius"],
	["leadspace", "Leadspace"],
	["loops", "Loops"],
	["lusha", "Lusha"],
	["mailgun", "Mailgun"],
	["mattermark", "Mattermark"],
	["melissa", "Melissa"],
	["openai", "OpenAI"],
	["people-data-labs", "People Data Labs"],
	["pipedrive", "Pipedrive"],
	["pipl", "Pipl"],
	["postmark", "Postmark"],
	["resend", "Resend"],
	["sendgrid", "SendGrid"],
	["snov-io", "Snov.io"],
	["sparkpost", "SparkPost"],
	["stripe", "Stripe"],
	["twilio", "Twilio"],
	["zendesk", "Zendesk"],
	["zoominfo", "ZoomInfo"],
];

function generatePageContent(slug, name, description, category) {
	return `import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free ${name} Online - No Signup | 30tools",
	description: "${description.replace(/"/g, '\\"')}",
	keywords: "${slug.replace(/-/g, ", ")}, free ${slug.replace(/-/g, " ")}, online ${slug.replace(/-/g, " ")}, 30tools",
	alternates: { canonical: "https://30tools.com/${slug}" },
	openGraph: { title: "Free ${name} Online - No Signup | 30tools", description: "${description.replace(/"/g, '\\"').slice(0, 150)}.", url: "https://30tools.com/${slug}", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free ${name} Online - No Signup | 30tools", description: "${description.replace(/"/g, '\\"').slice(0, 150)}.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "${slug}", name: "${name}", description: "${description.replace(/"/g, '\\"')}", route: "/${slug}", category: "${category}" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/${slug}", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}
`;
}

let created = 0;
let skipped = 0;

// Create standard tool pages
for (const [slug, name, desc, group, cat] of MISSING_TOOLS) {
	const dir = path.join(ROOT, "src/app", group, slug);
	const filePath = path.join(dir, "page.tsx");

	if (fs.existsSync(filePath)) {
		console.log(`SKIP: ${slug} (already exists)`);
		skipped++;
		continue;
	}

	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(filePath, generatePageContent(slug, name, desc, cat));
	console.log(`CREATED: ${filePath}`);
	created++;
}

// Create API Key Tester dynamic route
const apiDir = path.join(ROOT, "src/app/(developer)/api-key-tester/[provider]");
const apiPagePath = path.join(apiDir, "page.tsx");

if (!fs.existsSync(apiPagePath)) {
	fs.mkdirSync(apiDir, { recursive: true });

	const providers = API_KEY_PROVIDERS.map(([slug, name]) => `\t{ slug: "${slug}", name: "${name}" },`).join("\n");

	const apiPageContent = `import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import { notFound } from "next/navigation";

const PROVIDERS = [
${providers}
];

const providerMap = new Map(PROVIDERS.map((p) => [p.slug, p]));

export function generateStaticParams() {
	return PROVIDERS.map((p) => ({ provider: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ provider: string }> }) {
	const { provider } = await params;
	const p = providerMap.get(provider);
	if (!p) return {};
	return {
		title: \`Free \${p.name} API Key Tester Online - No Signup | 30tools\`,
		description: \`Test and validate your \${p.name} API key instantly. Check key format, permissions, and connectivity with our free online API Key Tester. No data stored.\`,
		alternates: { canonical: \`https://30tools.com/api-key-tester/\${p.slug}\` },
		openGraph: { title: \`Free \${p.name} API Key Tester Online | 30tools\`, description: \`Validate your \${p.name} API key format and permissions instantly.\`, url: \`https://30tools.com/api-key-tester/\${p.slug}\`, siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
		robots: { index: true, follow: true },
	};
}

export default async function ToolPage({ params }: { params: Promise<{ provider: string }> }) {
	const { provider } = await params;
	const p = providerMap.get(provider);
	if (!p) notFound();
	const tool = { id: \`\${p.slug}-api-key-tester\`, name: \`\${p.name} API Key Tester\`, description: \`Test and validate your \${p.name} API key instantly. Check format, permissions, and connectivity.\`, route: \`/api-key-tester/\${p.slug}\`, category: "developer" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: \`https://30tools.com/api-key-tester/\${p.slug}\`, applicationCategory: "DeveloperApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}
`;

	fs.writeFileSync(apiPagePath, apiPageContent);
	console.log(`CREATED: ${apiPagePath}`);
	created++;
} else {
	console.log("SKIP: api-key-tester/[provider] (already exists)");
	skipped++;
}

console.log(`\nDone! Created: ${created}, Skipped: ${skipped}`);
