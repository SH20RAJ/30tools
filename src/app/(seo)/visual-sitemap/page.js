import VisualSitemapTool from "@/components/tools/seo/VisualSitemapTool";
import toolsData from "@/constants/tools.json";

export const metadata = {
	title: "Free Visual Sitemap Generator Online - No Signup | 30tools",
	description:
		"SEO tools: Visual Sitemap Generator. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your bro",
	keywords: [
		"visual sitemap generator",
		"visual sitemap generator free",
		"visual sitemap generator online",
		"visual sitemap generator tool",
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const jsonLd = generateToolJsonLd("visual-sitemap", "seo", {
	name: "Visual Sitemap Generator",
	description:
		"Turn an XML sitemap into a visual tree so you can review site structure, hierarchy, and internal navigation more clearly.",
});

export default async function VisualSitemapPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	const _tool = toolsData.categories.seo.tools.find(
		(t) => t.id === "visual-sitemap",
	);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="container mx-auto px-4 py-12">
				<VisualSitemapTool />

				<div className="mt-16 max-w-4xl mx-auto prose dark:prose-invert">
					<h2>About Visual Sitemap Generator</h2>
					<p>
						The Visual Sitemap Generator helps SEO professionals, web
						developers, and site owners visualize the structure of their
						website. By parsing your standard XML sitemap, we create an
						interactive, collapsible tree diagram that reveals your sites
						hierarchy.
					</p>

					<h3>Why Visualize Your Sitemap?</h3>
					<ul>
						<li>
							<strong>Identify Structure Issues:</strong> Quickly spot deep
							nesting or orphaned sections.
						</li>
						<li>
							<strong>Audit Site Architecture:</strong> Ensure your content acts
							as a logical silo structure.
						</li>
						<li>
							<strong>Client Presentations:</strong> Show clients a clear
							"birds-eye view" of their website.
						</li>
					</ul>

					<h3>How to Use</h3>
					<ol>
						<li>
							Enter your sitemap URL (e.g.,{" "}
							<code>https://example.com/sitemap.xml</code>).
						</li>
						<li>
							Click <strong>Visualize</strong>.
						</li>
						<li>Explore the directory tree by expanding/collapsing folders.</li>
					</ol>
				</div>
			</div>
		</>
	);
}
