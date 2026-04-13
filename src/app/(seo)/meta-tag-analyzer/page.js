import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export const metadata = {
	title: "Free Meta Tag Analyzer Online - No Signup | 30tools",
	description:
		"SEO tools: Meta Tag Analyzer. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your browser fo",
	keywords: [
		"meta tag analyzer",
		"meta tag analyzer free",
		"meta tag analyzer online",
		"meta tag analyzer tool",
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

const jsonLd = generateToolJsonLd("meta-tag-analyzer", "seo", {
	name: "Meta Tag Analyzer",
	description:
		"Analyze title tags, meta descriptions, Open Graph tags, and other on-page metadata for SEO issues.",
});

export default async function MetaTagAnalyzerPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	return (
		<div className="container mx-auto px-4 py-16 md:py-24">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="text-center space-y-4 mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
					Meta Tag <span className="text-primary">Analyzer</span>
				</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Examine your page's meta tags to ensure they are optimized for search
					engines.
				</p>
			</div>
			<SeoAnalyzer type="meta-tags" title="Analyze Meta Tags" />
		</div>
	);
}
