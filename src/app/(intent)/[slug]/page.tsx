import { notFound } from "next/navigation";
import { getIntentBySlug } from "@/lib/intent-data";
import { getAllTools, getToolById, type Tool } from "@/lib/tools";
import IntentToolDispatcher from "@/components/tools/shared/IntentToolDispatcher";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SeoOpportunityTool from "@/components/seo/SeoOpportunityTool";
import {
    getSeoOpportunityBySlug,
    type SeoOpportunity,
} from "@/data/seo-opportunities";

function categoryKeyForOpportunity(opportunity: SeoOpportunity) {
    if (opportunity.category === "Exam Image Tools") return "exam-tools";
    if (opportunity.category === "Student Calculators") return "calculators";
    if (opportunity.category === "API Key Testers") return "developer";
    if (opportunity.category === "SEO Tools") return "seo";
    return "utilities";
}

function syntheticToolFromOpportunity(opportunity: SeoOpportunity): Tool {
    const parentTool = getToolById(opportunity.parentToolSlug);

    return {
        id: opportunity.slug,
        name: opportunity.h1,
        description: opportunity.intro,
        route: opportunity.route,
        category: categoryKeyForOpportunity(opportunity),
        categoryName: opportunity.category,
        categorySlug: categoryKeyForOpportunity(opportunity),
        seoTitle: opportunity.title,
        seoDescription: opportunity.metaDescription,
        features: opportunity.useCases,
        faqs: opportunity.faqs,
        howTo: {
            name: `How to use ${opportunity.h1}`,
            steps: opportunity.steps.map((text, index) => ({
                name: `Step ${index + 1}`,
                text,
            })),
        },
        article: `
## ${opportunity.h1}
${opportunity.intro}

## Why this page exists
${opportunity.intent}

## Parent tool
This page uses the same core workflow as ${parentTool?.name || "the related 30tools utility"}, with settings and guidance focused on "${opportunity.keyword}".
`,
    };
}

function relatedToolsForOpportunity(opportunity: SeoOpportunity) {
    const tools = getAllTools();
    const relatedRoutes = new Set([
        opportunity.parentToolRoute,
        ...opportunity.relatedSlugs.map((slug) => `/${slug}`),
    ]);

    return tools
        .filter((tool) => relatedRoutes.has(tool.route) || opportunity.relatedSlugs.includes(tool.id))
        .slice(0, 12);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const opportunity = getSeoOpportunityBySlug(slug);

    if (opportunity?.standalone) {
        const canonicalUrl = `https://30tools.com${opportunity.route}`;

        return {
            title: opportunity.title,
            description: opportunity.metaDescription,
            alternates: {
                canonical: canonicalUrl,
            },
            openGraph: {
                title: opportunity.title,
                description: opportunity.metaDescription,
                url: canonicalUrl,
                siteName: "30tools",
                images: [{ url: "/og-image.jpg" }],
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title: opportunity.title,
                description: opportunity.metaDescription,
                images: ["/og-image.jpg"],
            },
            robots: { index: true, follow: true },
        };
    }

    const intent = getIntentBySlug(slug);

    if (!intent) return {};

    const parentTool = getToolById(intent.parentToolId);
    if (!parentTool) return {};

    const canonicalUrl = `https://30tools.com/${slug}`;
    const brandedTitle = `${intent.title} | 30tools`;

    return {
        title: brandedTitle,
        description: intent.description,
        keywords: intent.keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: brandedTitle,
            description: intent.description,
            url: canonicalUrl,
            siteName: "30tools",
            images: [{ url: "/og-image.jpg" }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: brandedTitle,
            description: intent.description,
            images: ["/og-image.jpg"],
        },
        robots: { index: true, follow: true },
    };
}

export default async function IntentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const opportunity = getSeoOpportunityBySlug(slug);

    if (opportunity?.standalone) {
        const tool = syntheticToolFromOpportunity(opportunity);
        const relatedTools = relatedToolsForOpportunity(opportunity);
        const breadcrumbs = [
            { name: opportunity.category, url: opportunity.categoryHub },
            { name: opportunity.h1, url: opportunity.route },
        ];

        return (
            <ToolLayout tool={tool} breadcrumbs={breadcrumbs} relatedTools={relatedTools}>
                <SeoOpportunityTool opportunity={opportunity} />
            </ToolLayout>
        );
    }

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
