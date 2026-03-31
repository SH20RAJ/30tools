import { notFound } from "next/navigation";
import Script from "next/script";
import {
	BreadcrumbsEnhanced,
	QuickActions,
	RelatedTools,
	UserComments,
} from "@/components/seo";
// @ts-ignore
import {
	GeneratorToolExamples,
	GeneratorToolFeatures,
} from "@/components/seo/GeneratorToolsHub";
import { generateToolMetadata, getToolData } from "@/lib/seo-helper";
import { getAllTools } from "@/constants/tools-utils";
import { toolComponentRegistry } from "@/lib/tool-loader";

/**
 * Static paths generator for SSG.
 * Pre-builds all 'extraSlugs' as distinct HTML files.
 */
export async function generateStaticParams() {
	const allTools = getAllTools();
	const params = [];

	allTools.forEach((tool) => {
		if (tool.extraSlugs && Array.isArray(tool.extraSlugs)) {
			tool.extraSlugs.forEach((slug) => {
				params.push({ slug });
			});
		}
	});

	return params;
}

/**
 * SEO Metadata Generator for Variants.
 */
export async function generateMetadata({ params, searchParams }) {
	const resolvedParams = await params;
	const resolvedSearchParams = await searchParams;
	const slug = resolvedParams.slug;
	const lang = resolvedSearchParams.lang || "en";

	// Find the tool that has this extra slug
	const allTools = getAllTools();
	const tool = allTools.find((t) => t.extraSlugs?.includes(slug));

	if (!tool) return notFound();

	return generateToolMetadata(tool.id, tool.categoryKey, lang, {}, slug);
}

/**
 * Main Dynamic Page Component for SEO Variants.
 */
export default async function DynamicToolVariantPage({ params, searchParams }) {
	const resolvedParams = await params;
	const resolvedSearchParams = await searchParams;
	const slug = resolvedParams.slug;
	const lang = resolvedSearchParams.lang || "en";

	// Find the tool that has this extra slug
	const allTools = getAllTools();
	const tool = allTools.find((t) => t.extraSlugs?.includes(slug));

	if (!tool) return notFound();

	const ToolComponent = toolComponentRegistry[tool.id];
	if (!ToolComponent) return notFound();

	// Convert slug to human-readable H1
	const h1Title = slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	// Categories for related tools etc.
	const categoryName = tool.categoryName || tool.categoryKey || "Tools";

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
							{ name: `${categoryName} Tools`, url: `/${tool.categoryKey}-tools` },
							{ name: tool.name, url: tool.route },
							{ name: h1Title, url: `/${slug}` },
						]}
					/>
				</div>

				<main className="container mx-auto px-4 py-8 max-w-6xl">
					{/* Hero Section Optimized for Variant */}
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
							{h1Title}
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
							{tool.description}. Optimized, free, and secure online processing.
						</p>

						<QuickActions
							toolName={h1Title}
							toolUrl={`https://30tools.com/${slug}`}
							showBookmark={true}
							showShare={true}
						/>
					</div>

					{/* Tool Interface */}
					<div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
						<ToolComponent />
					</div>

					{/* Related Tools */}
					<div className="mb-12">
						<RelatedTools
							currentTool={tool.id}
							category={tool.categoryKey}
							title={`More ${categoryName} Utilities`}
						/>
					</div>
					
					{/* User Reviews & Comments */}
					<div className="mb-12">
						<UserComments
							toolId={tool.id}
							toolName={h1Title}
							showStats={true}
							allowComments={true}
						/>
					</div>
				</main>
			</div>
		</>
	);
}
