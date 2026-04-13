import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Backwards Text Generator Online - No Signup | 30tools",
	description: "Generate backwards text instantly. Our free reverse text tool flips characters, words, or entire paragraphs. Perfect for Instagram, Discord, and creative writing.",
	keywords: "backwards text generator, free online tool, no signup, text, backwards text generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/backwards-text-generator",
	},
	openGraph: {
		title: "Free Backwards Text Generator Online - No Signup | 30tools",
		description: "Generate backwards text instantly. Our free reverse text tool flips characters, words, or entire paragraphs. Perfect for Instagram, Discord, and creative writing.",
		url: "https://30tools.com/backwards-text-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Backwards Text Generator Online - No Signup | 30tools",
		description: "Generate backwards text instantly. Our free reverse text tool flips characters, words, or entire paragraphs. Perfect for Instagram, Discord, and creative writing.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "backwards-text-generator",
		"name": "Backwards Text Generator",
		"description": "Generate backwards text instantly. Our free reverse text tool flips characters, words, or entire paragraphs. Perfect for Instagram, Discord, and creative writing.",
		"route": "/backwards-text-generator",
		"extraSlugs": [
				"dummy-text-generator",
				"fake-text-message-maker",
				"filler-text-maker",
				"free-backwards-text-generator-online",
				"mirror-text-generator",
				"random-text-generator",
				"reverse-text-generator",
				"stylish-text-generator"
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
			name: "Backwards Text Generator",
			url: "/backwards-text-generator",
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
						name: "Backwards Text Generator",
						description: "Generate backwards text instantly. Our free reverse text tool flips characters, words, or entire paragraphs. Perfect for Instagram, Discord, and creative writing.",
						url: "https://30tools.com/backwards-text-generator",
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
