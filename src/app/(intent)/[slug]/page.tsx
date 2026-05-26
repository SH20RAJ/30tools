import { notFound, permanentRedirect } from "next/navigation";
import { getIntentBySlug } from "@/lib/intent-data";
import { getToolById } from "@/lib/tools";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const intent = getIntentBySlug(slug);

    if (!intent) return {};

    const parentTool = getToolById(intent.parentToolId);
    if (!parentTool) return {};

    const canonicalUrl = `https://30tools.com${parentTool.route}`;

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
        robots: { index: false, follow: true },
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

    // 308 permanent redirect to the canonical parent tool URL
    permanentRedirect(parentTool.route);
}
