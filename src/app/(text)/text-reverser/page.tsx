import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Text Reverser Online - No Signup | 30tools",
	description: "Reverse text, words, or lines instantly",
	keywords: "text reverser, free online tool, no signup, text, text reverser online, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-reverser",
	},
	openGraph: {
		title: "Free Text Reverser Online - No Signup | 30tools",
		description: "Reverse text, words, or lines instantly",
		url: "https://30tools.com/text-reverser",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Reverser Online - No Signup | 30tools",
		description: "Reverse text, words, or lines instantly",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "text-reverser",
		"name": "Text Reverser",
		"description": "Reverse text, words, or lines instantly",
		"route": "/text-reverser",
		"extraSlugs": [
				"reverse-text-in-excel",
				"backwards-text-generator"
		],
		"popular": false,
		"category": "text"
};
	const breadcrumbs = [
		{
			name: "Text Tools",
			url: "/text-tools",
		},
		{
			name: "Text Reverser",
			url: "/text-reverser",
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
						name: "Text Reverser",
						description: "Reverse text, words, or lines instantly",
						url: "https://30tools.com/text-reverser",
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
