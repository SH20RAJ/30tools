import { notFound } from "next/navigation";
import { getAllTools, getToolByRoute } from "@/lib/tools";
import { generateMetadata as baseGenerateMetadata } from "@/lib/seo";
import ToolPageContent from "@/components/tools/shared/ToolPageContent";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const tools = getAllTools();
    return tools.map(t => ({ slug: t.route.replace(/^\//, "") }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const tool = getAllTools().find(t => t.id === slug || t.route === `/${slug}`);

    if (!tool) return {};

    return baseGenerateMetadata({
        title: tool.seoTitle || `${tool.name} Online - 30tools`,
        description: tool.seoDescription || tool.description,
        path: `/tools/${slug}`, // Canonical as /tools/ for this route
    });
}

export default async function ToolsSlugPage({ params }: PageProps) {
    const { slug } = await params;
    const tool = getAllTools().find(t => t.id === slug || t.route === `/${slug}`);

    if (!tool) return notFound();

    return <ToolPageContent tool={tool} />;
}
