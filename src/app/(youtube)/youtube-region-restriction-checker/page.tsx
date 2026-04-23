import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Region Restriction Checker Online – Fast & No Signup | 30tools",
	description: "Check if a YouTube video is blocked or restricted in specific countries instantly. Our free online tool helps you verify global availability for your content. Fast and accurate. 100% free, fast, and no signup required.",
	keywords: "youtube region restriction checker, free youtube region restriction checker, online youtube region restriction checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-region-restriction-checker",
	},
	openGraph: {
		title: "Free YouTube Region Restriction Checker Online – Fast & No Signup | 30tools",
		description: "Check if a YouTube video is blocked or restricted in specific countries instantly. Our free online tool helps you verify global availability for your content. Fast and accurate. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-region-restriction-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Region Restriction Checker Online – Fast & No Signup | 30tools",
		description: "Check if a YouTube video is blocked or restricted in specific countries instantly. Our free online tool helps you verify global availability for your content. Fast and accurate. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-region-restriction-checker",
        "name": "YouTube Region Restriction Checker",
        "description": "Check if a YouTube video is blocked or restricted in specific countries instantly. Our free online tool helps you verify global availability for your content. Fast and accurate.",
        "route": "/youtube-region-restriction-checker",
        "extraSlugs": [
                "free-youtube-region-restriction-checker-online",
                "youtube-region-restriction-checker-tool",
                "check-youtube-video-block-status"
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
						url: "https://30tools.com/youtube-region-restriction-checker",
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
