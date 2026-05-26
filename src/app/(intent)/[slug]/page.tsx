import { notFound } from "next/navigation";
import { getIntentBySlug } from "@/lib/intent-data";
import { getToolById } from "@/lib/tools";
import IntentToolDispatcher from "@/components/tools/shared/IntentToolDispatcher";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const intent = getIntentBySlug(slug);

    if (!intent) return {};

    const parentTool = getToolById(intent.parentToolId);
    if (!parentTool) return {};

    const canonicalUrl = `https://30tools.com/${slug}`;

    return {
        title: intent.title,
        description: intent.description,
        keywords: intent.keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: intent.title,
            description: intent.description,
            url: canonicalUrl,
            siteName: "30tools",
            images: [{ url: "/og-image.jpg" }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: intent.title,
            description: intent.description,
            images: ["/og-image.jpg"],
        },
        robots: { index: true, follow: true },
    };
}

export default async function IntentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const intent = getIntentBySlug(slug);

    if (!intent) {
        notFound();
    }

    const parentTool = getToolById(intent.parentToolId);
    if (!parentTool) {
        notFound();
    }

    // Build the enriched tool to pass to ToolLayout, overriding the route to point to the intent slug
    const customName = intent.title.split(" - ")[0];
    const enrichedTool = {
        ...parentTool,
        name: customName,
        description: intent.description,
        article: intent.article,
        faqs: intent.faqs,
        route: `/${slug}`,
    };

    return (
        <ToolLayout tool={enrichedTool}>
            <IntentToolDispatcher toolId={parentTool.id} />
        </ToolLayout>
    );
}
