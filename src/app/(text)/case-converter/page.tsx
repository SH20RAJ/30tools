import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Case Converter Online - No Signup | 30tools",
	description: "Convert text between upper case, lower case, title case, sentence case, and more instantly. Perfect for writers, developers, and social media managers.",
	keywords: "case converter, free online tool, no signup, text, case converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/case-converter",
	},
	openGraph: {
		title: "Free Case Converter Online - No Signup | 30tools",
		description: "Convert text between upper case, lower case, title case, sentence case, and more instantly. Perfect for writers, developers, and social media managers.",
		url: "https://30tools.com/case-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Case Converter Online - No Signup | 30tools",
		description: "Convert text between upper case, lower case, title case, sentence case, and more instantly. Perfect for writers, developers, and social media managers.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "case-converter",
		"name": "Case Converter",
		"description": "Convert text between upper case, lower case, title case, sentence case, and more instantly. Perfect for writers, developers, and social media managers.",
		"route": "/case-converter",
		"extraSlugs": [
				"change-text-case-online",
				"upper-case-to-lower-case",
				"title-case-converter",
				"sentence-case-tool"
		],
		"popular": true,
		"category": "text"
};
	const breadcrumbs = [
		{
			name: "Text Tools",
			url: "/text-tools",
		},
		{
			name: "Case Converter",
			url: "/case-converter",
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
						name: "Case Converter",
						description: "Convert text between upper case, lower case, title case, sentence case, and more instantly. Perfect for writers, developers, and social media managers.",
						url: "https://30tools.com/case-converter",
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
