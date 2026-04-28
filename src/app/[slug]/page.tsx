import { notFound } from "next/navigation";
import { getAllTools, getToolByRoute } from "@/lib/tools";
import { getIntentBySlug, intentData } from "@/lib/intent-data";
import { generateMetadata as baseGenerateMetadata } from "@/lib/seo";
import ToolPageContent from "@/components/tools/shared/ToolPageContent";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const tools = getAllTools();
    const intentSlugs = Object.keys(intentData);
    
    const params = [
        ...tools.map(t => ({ slug: t.route.replace(/^\//, "") })),
        ...intentSlugs.map(s => ({ slug: s }))
    ].filter(p => p.slug); // Remove empty slugs

    return params;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const route = `/${slug}`;
    
    const tool = getToolByRoute(route);
    const intent = getIntentBySlug(slug);

    if (!tool && !intent) return {};

    const title = intent?.title || tool?.seoTitle || `${tool?.name} Online - Free & No Signup`;
    const description = intent?.description || tool?.seoDescription || tool?.description || "";

    return baseGenerateMetadata({
        title,
        description,
        path: route,
    });
}

export default async function DynamicSlugPage({ params }: PageProps) {
    const { slug } = await params;
    const route = `/${slug}`;
    
    const tool = getToolByRoute(route);
    const intent = getIntentBySlug(slug);

    // If it's a tool or an intent page (which maps to a parent tool)
    if (tool) {
        return <ToolPageContent tool={tool} />;
    }

    if (intent && intent.parentToolId) {
        const parentTool = getAllTools().find(t => t.id === intent.parentToolId);
        if (parentTool) {
            return <ToolPageContent tool={parentTool} intentData={intent} />;
        }
    }

    return notFound();
}
