import { notFound } from "next/navigation";
import { getToolByRoute, getRelatedTools } from "@/lib/tools";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ApiKeyTester from "@/components/tools/developer/ApiKeyTester";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const route = `/api-key-tester/${slug}`;
	const tool = getToolByRoute(route);

	if (!tool) return {};

	return {
		title: `${tool.seoTitle || tool.name} - Free Online Tester | 30tools`,
		description: tool.seoDescription || tool.description,
		keywords: `api tester, ${tool.name.toLowerCase()}, validate api key, debug api, 30tools`,
		alternates: {
			canonical: `https://30tools.com/api-key-tester/${slug}`,
		},
		openGraph: {
			title: `${tool.name} - Free Online Tester | 30tools`,
			description: tool.description,
			url: `https://30tools.com/api-key-tester/${slug}`,
			siteName: "30tools",
			images: [{ url: "/og-image.jpg" }],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: `${tool.name} - Free Online Tester | 30tools`,
			description: tool.description,
			images: ["/og-image.jpg"],
		},
		robots: { index: true, follow: true },
	};
}

export default async function ApiKeyTesterPage({ params }) {
	const { slug } = await params;
	const route = `/api-key-tester/${slug}`;
	const tool = getToolByRoute(route);

	if (!tool) {
		notFound();
	}

	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: tool.name,
			url: route,
		},
	];

	const relatedTools = getRelatedTools(tool, 10);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: `https://30tools.com/api-key-tester/${slug}`,
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<ApiKeyTester toolName={tool.name} />
			</ToolLayout>
		</>
	);
}
