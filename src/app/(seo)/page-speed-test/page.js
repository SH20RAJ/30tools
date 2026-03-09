import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";
import { generateToolJsonLd, generateToolMetadata } from "@/lib/seo-helper";

export const metadata = generateToolMetadata("page-speed-test", "seo", {
	title: "Page Speed Test | Free Website Performance Checker | 30Tools",
	description:
		"Test page speed, Core Web Vitals, and load performance to find issues that can hurt SEO and user experience.",
	image: "/og-images/page-speed-test.jpg",
});

const jsonLd = generateToolJsonLd("page-speed-test", "seo", {
	name: "Page Speed Test",
	description:
		"Test page speed, Core Web Vitals, and load performance to find issues that can hurt SEO and user experience.",
});

export default function PageSpeedTestPage() {
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
