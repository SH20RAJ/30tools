import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Save Reels Video Online – Fast & No Signup | 30tools",
	description: "Download viral Reels from Instagram and other platforms instantly. Our free online tool provides high-speed downloads for all your favorite short-form video content. 100% free, fast, and no signup required.",
	keywords: "save reels video, free save reels video, online save reels video, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-reels-video",
	},
	openGraph: {
		title: "Free Save Reels Video Online – Fast & No Signup | 30tools",
		description: "Download viral Reels from Instagram and other platforms instantly. Our free online tool provides high-speed downloads for all your favorite short-form video content. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-reels-video",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Reels Video Online – Fast & No Signup | 30tools",
		description: "Download viral Reels from Instagram and other platforms instantly. Our free online tool provides high-speed downloads for all your favorite short-form video content. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "save-reels-video",
        "name": "Save Reels Video",
        "description": "Download viral Reels from Instagram and other platforms instantly. Our free online tool provides high-speed downloads for all your favorite short-form video content.",
        "route": "/save-reels-video",
        "extraSlugs": [
                "save-reels-video",
                "download-viral-reels-online"
        ],
        "popular": false,
        "category": "downloaders"
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
						url: "https://30tools.com/save-reels-video",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Save Reels Video" />
			</ToolLayout>
		</>
	);
}
