import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export const metadata = {
	title: "Free Page Speed Test Tool Online - No Signup | 30tools",
	description:
		"SEO tools: Page Speed Test Tool. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your browser",
	keywords: [
		"page speed test tool",
		"page speed test tool free",
		"page speed test tool online",
		"page speed test tool tool",
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

const jsonLd = generateToolJsonLd("page-speed-test", "seo", {
	name: "Page Speed Test",
	description:
		"Test page speed, Core Web Vitals, and load performance to find issues that can hurt SEO and user experience.",
});

export default async function PageSpeedTestPage({ searchParams }) {
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
					Page Speed <span className="text-primary">Test</span>
				</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Analyze your website's loading speed and performance metrics.
				</p>
			</div>
			<SeoAnalyzer type="page-speed" title="Test Speed" />
		</div>
	);
}
