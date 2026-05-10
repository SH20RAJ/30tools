import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getIntentBySlug } from "@/lib/intent-data";
import { getToolById } from "@/lib/tools";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const intent = getIntentBySlug(slug);

    if (!intent) return {};

    return {
        title: intent.title,
        description: intent.description,
        keywords: intent.keywords,
        alternates: {
            canonical: `https://30tools.com/${slug}`,
        },
    };
}

export default async function IntentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const intent = getIntentBySlug(slug);

    if (!intent) {
        return notFound();
    }

    const parentTool = getToolById(intent.parentToolId);
    if (!parentTool) {
        return notFound();
    }

    // Merge intent content into the tool object for the layout
    const enrichedTool = {
        ...parentTool,
        name: intent.title.split(" - ")[0], // Use the short title
        description: intent.description,
        article: intent.article,
        faqs: intent.faqs,
    };

    return (
        <ToolLayout tool={enrichedTool}>
            <div className="min-h-[400px]">
                <iframe
                    src={parentTool.route}
                    className="w-full h-[800px]"
                    title={enrichedTool.name}
                    style={{ border: 'none' }}
                />
            </div>
        </ToolLayout>
    );
}
