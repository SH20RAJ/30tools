import Script from "next/script";
import {
	BreadcrumbsEnhanced,
	QuickActions,
	RelatedTools,
	UserComments,
} from "@/components/seo";
// @ts-expect-error
import {
	GeneratorToolExamples,
	GeneratorToolFeatures,
} from "@/components/seo/GeneratorToolsHub";
import ImageCompressorTool from "@/components/tools/image/ImageCompressorTool";
import { generateToolMetadata, getToolData } from "@/lib/seo-helper";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string; variant?: string }> }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	const variant = params.variant;
	return generateToolMetadata("image-compressor", "image", lang, {}, variant);
}

export default async function ImageCompressorPage({ searchParams }: { searchParams: Promise<{ lang?: string; variant?: string }> }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	const variant = params.variant;
	const toolData = getToolData("image-compressor", "image");

	if (!toolData) return <div>Tool not found</div>;

	// Dynamic Title based on variant
	const displayTitle = variant 
		? variant.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
		: "Image Compressor";

	const features = [
		"Bulk Image Compressor (Pack processing)",
		"Compress JPG, PNG, WebP & GIF",
		"Reduce size by up to 90%",
		"No Watermarks",
		"Image compressor without losing quality",
		"100% Free image compressor online",
		"Secure Local Processing",
		"Optimized for Website Speed",
	];

	const examples = [
		{
			title: "Website Optimization",
			description: "Increase SEO ranking",
			input: "Hero Photo (5MB)",
			output: "Web Optimized (500KB)",
		},
		{
			title: "Social Media",
			description: "Fit upload limits",
			input: "High-res Portrait",
			output: "Compressed JPEG",
		},
	];

	return (
		<>
			<Script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
				crossOrigin="anonymous"
			/>

			<div className="min-h-screen bg-background">
				<div className="container mx-auto px-4 pt-6">
					<BreadcrumbsEnhanced
						customBreadcrumbs={[
							{ name: "Image Tools", url: "/image-tools" },
							{ name: displayTitle, url: variant ? `/${variant}` : "/image-compressor" },
						]}
					/>
				</div>

				<main className="container mx-auto px-4 py-8 max-w-6xl">
					{/* Hero Section */}
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
							Free Online <span className="text-primary">{displayTitle}</span>
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
							Welcome to the best <strong>image compressor free online</strong>{" "}
							utility. Our <strong>{displayTitle} tool</strong>
							allows you to <strong>compress images online</strong> up to 90%
							while maintaining high clarity.
						</p>

						<QuickActions
							toolName={displayTitle}
							toolUrl={variant ? `https://30tools.com/${variant}` : "https://30tools.com/image-compressor"}
							showBookmark={true}
							showShare={true}
						/>
					</div>

					{/* Tool Interface */}
					<div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
						<ImageCompressorTool />
					</div>

					{/* SEO Content Section */}
					<section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-8 text-center md:text-left">
							Lossless Picture Compressor Free Online
						</h2>
						<div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
							<p>Optimize your images for the web anonymously and securely.</p>
						</div>
					</section>

					{/* Features & Examples */}
					{/* @ts-ignore */}
					<GeneratorToolFeatures tool={toolData} features={features} />
					{/* @ts-ignore */}
					<GeneratorToolExamples
						tool={toolData}
						examples={examples}
						title="Compression Benchmarks"
					/>

					{/* User Reviews & Comments */}
					<div className="mb-12">
						<UserComments
							toolId="image-compressor"
							toolName="Image Compressor"
							showStats={true}
							allowComments={true}
						/>
					</div>

					{/* Related Tools */}
					<div className="mb-12">
						{/* @ts-ignore */}
						<RelatedTools
							currentTool="image-compressor"
							category="image"
							tools={[
								{
									id: "image-resizer",
									name: "Image Resizer",
									description: "Resize dimensions",
									route: "/image-resizer",
									category: "image",
								},
								{
									id: "image-converter",
									name: "Image Converter",
									description: "Convert formats",
									route: "/image-converter",
									category: "image",
								},
							]}
							title="More Graphics Tools"
						/>
					</div>
				</main>
			</div>

			<Script
				id="ads"
				dangerouslySetInnerHTML={{
					__html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(
						3,
					),
				}}
			/>
		</>
	);
}
