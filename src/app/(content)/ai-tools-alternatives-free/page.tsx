import ToolLayout from "@/components/tools/shared/ToolLayout";
import Fragment from "react";


export const metadata = {
	title: "AI Tools Alternatives Free - Practical Picks | 30tools Expert Guide",
	description: "Explore free AI tool alternatives for writing, image creation, voice generation, and content ideation without subscriptions.",
	keywords: "ai tools alternatives free - practical picks, ai tools alternatives free - practical picks guide, 30tools",
	alternates: {
		canonical: "https://30tools.com/ai-tools-alternatives-free",
	},
	openGraph: {
		title: "AI Tools Alternatives Free - Practical Picks | 30tools Expert Guide",
		description: "Explore free AI tool alternatives for writing, image creation, voice generation, and content ideation without subscriptions.",
		url: "https://30tools.com/ai-tools-alternatives-free",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "AI Tools Alternatives Free - Practical Picks | 30tools Expert Guide",
		description: "Explore free AI tool alternatives for writing, image creation, voice generation, and content ideation without subscriptions.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ai-tools-alternatives-free",
        "name": "AI Tools Alternatives Free - Practical Picks",
        "description": "Explore free AI tool alternatives for writing, image creation, voice generation, and content ideation without subscriptions.",
        "route": "/ai-tools-alternatives-free",
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
						url: "https://30tools.com/ai-tools-alternatives-free",
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
