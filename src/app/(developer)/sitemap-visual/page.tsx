import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Sitemap Visual Online - No Signup | 30tools",
	description: "Free Sitemap Visual online tool. Fast and secure.",
	keywords: "sitemap visual, free online tool, no signup, developer, sitemap visual online, 30tools",
	alternates: {
		canonical: "https://30tools.com/sitemap-visual",
	},
	openGraph: {
		title: "Free Sitemap Visual Online - No Signup | 30tools",
		description: "Free Sitemap Visual online tool. Fast and secure.",
		url: "https://30tools.com/sitemap-visual",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Sitemap Visual Online - No Signup | 30tools",
		description: "Free Sitemap Visual online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "sitemap-visual",
		"name": "Sitemap Visual",
		"description": "Free Sitemap Visual online tool. Fast and secure.",
		"route": "/sitemap-visual",
		"extraSlugs": [],
		"popular": false,
		"category": "developer"
};
	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: "Sitemap Visual",
			url: "/sitemap-visual",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "Sitemap Visual",
						description: "Free Sitemap Visual online tool. Fast and secure.",
						url: "https://30tools.com/sitemap-visual",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
			>
				<ToolPlaceholderPage toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
