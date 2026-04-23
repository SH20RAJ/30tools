import ToolLayout from "@/components/tools/shared/ToolLayout";
import Fragment from "react";


export const metadata = {
	title: "Best Free Alternative to ChatGPT for Daily Tasks | 30tools Expert Guide",
	description: "Looking for a free ChatGPT alternative? Build a focused stack for writing, metadata, image generation, and voice tasks with free online tools.",
	keywords: "best free alternative to chatgpt for daily tasks, best free alternative to chatgpt for daily tasks guide, 30tools",
	alternates: {
		canonical: "https://30tools.com/best-free-alternative-to-chatgpt",
	},
	openGraph: {
		title: "Best Free Alternative to ChatGPT for Daily Tasks | 30tools Expert Guide",
		description: "Looking for a free ChatGPT alternative? Build a focused stack for writing, metadata, image generation, and voice tasks with free online tools.",
		url: "https://30tools.com/best-free-alternative-to-chatgpt",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Best Free Alternative to ChatGPT for Daily Tasks | 30tools Expert Guide",
		description: "Looking for a free ChatGPT alternative? Build a focused stack for writing, metadata, image generation, and voice tasks with free online tools.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "best-free-alternative-to-chatgpt",
        "name": "Best Free Alternative to ChatGPT for Daily Tasks",
        "description": "Looking for a free ChatGPT alternative? Build a focused stack for writing, metadata, image generation, and voice tasks with free online tools.",
        "route": "/best-free-alternative-to-chatgpt",
        "extraSlugs": [],
        "popular": false,
        "category": "content"
};

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
						url: "https://30tools.com/best-free-alternative-to-chatgpt",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "content" }}>
				<div className='min-h-[100px]'  />
			</ToolLayout>
		</>
	);
}
