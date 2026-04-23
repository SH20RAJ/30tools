import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Youtube Video Title Capitalizer Online – Fast & No Signup | 30tools",
	description: "Automatically capitalize your YouTube video titles for maximum professional impact and CTR. Our free online tool follows industry standards to make your titles stand out. 100% free, fast, and no signup required.",
	keywords: "youtube video title capitalizer, free youtube video title capitalizer, online youtube video title capitalizer, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-title-capitalizer",
	},
	openGraph: {
		title: "Free Youtube Video Title Capitalizer Online – Fast & No Signup | 30tools",
		description: "Automatically capitalize your YouTube video titles for maximum professional impact and CTR. Our free online tool follows industry standards to make your titles stand out. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-title-capitalizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Youtube Video Title Capitalizer Online – Fast & No Signup | 30tools",
		description: "Automatically capitalize your YouTube video titles for maximum professional impact and CTR. Our free online tool follows industry standards to make your titles stand out. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-title-capitalizer",
        "name": "Youtube Video Title Capitalizer",
        "description": "Automatically capitalize your YouTube video titles for maximum professional impact and CTR. Our free online tool follows industry standards to make your titles stand out.",
        "route": "/youtube-title-capitalizer",
        "extraSlugs": [
                "free-youtube-title-capitalizer-online",
                "youtube-title-capitalizer-tool",
                "fix-title-capitalization-online"
        ],
        "popular": false,
        "category": "youtube"
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
						url: "https://30tools.com/youtube-title-capitalizer",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
