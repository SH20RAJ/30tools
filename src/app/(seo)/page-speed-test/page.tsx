import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Page Speed Test Tool Online - No Signup | 30tools",
	description: "Test website page speed and performance. Get detailed insights on Core Web Vitals, loading times, and optimization suggestions.",
	keywords: "page speed test tool, free online tool, no signup, seo, page speed test tool online, 30tools",
	alternates: {
		canonical: "https://30tools.com/page-speed-test",
	},
	openGraph: {
		title: "Free Page Speed Test Tool Online - No Signup | 30tools",
		description: "Test website page speed and performance. Get detailed insights on Core Web Vitals, loading times, and optimization suggestions.",
		url: "https://30tools.com/page-speed-test",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Page Speed Test Tool Online - No Signup | 30tools",
		description: "Test website page speed and performance. Get detailed insights on Core Web Vitals, loading times, and optimization suggestions.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "page-speed-test",
		"name": "Page Speed Test Tool",
		"description": "Test website page speed and performance. Get detailed insights on Core Web Vitals, loading times, and optimization suggestions.",
		"route": "/page-speed-test",
		"extraSlugs": [],
		"popular": true,
		"category": "seo"
};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "Page Speed Test Tool",
			url: "/page-speed-test",
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
						name: "Page Speed Test Tool",
						description: "Test website page speed and performance. Get detailed insights on Core Web Vitals, loading times, and optimization suggestions.",
						url: "https://30tools.com/page-speed-test",
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
				<ToolInteractivePlaceholder toolName={tool.name} />
			</ToolLayout>
		</>
	);
}
