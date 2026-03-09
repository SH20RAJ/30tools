import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";
import { generateToolJsonLd, generateToolMetadata } from "@/lib/seo-helper";

export const metadata = generateToolMetadata("meta-tag-analyzer", "seo", {
	title: "Meta Tag Analyzer | Free Meta Title & Description Checker | 30Tools",
	description:
		"Analyze title tags, meta descriptions, Open Graph tags, and other on-page metadata for SEO issues.",
	image: "/og-images/meta-tag-analyzer.jpg",
});

const jsonLd = generateToolJsonLd("meta-tag-analyzer", "seo", {
	name: "Meta Tag Analyzer",
	description:
		"Analyze title tags, meta descriptions, Open Graph tags, and other on-page metadata for SEO issues.",
});

export default function MetaTagAnalyzerPage() {
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
