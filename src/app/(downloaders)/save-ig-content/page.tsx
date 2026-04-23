import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Save Ig Content Online – Fast & No Signup | 30tools",
	description: "Download any public Instagram content—photos, videos, reels, and stories—to your device for free. Our all-in-one downloader provides high-quality media saves instantly. 100% free, fast, and no signup required.",
	keywords: "save ig content, free save ig content, online save ig content, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-ig-content",
	},
	openGraph: {
		title: "Free Save Ig Content Online – Fast & No Signup | 30tools",
		description: "Download any public Instagram content—photos, videos, reels, and stories—to your device for free. Our all-in-one downloader provides high-quality media saves instantly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-ig-content",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Ig Content Online – Fast & No Signup | 30tools",
		description: "Download any public Instagram content—photos, videos, reels, and stories—to your device for free. Our all-in-one downloader provides high-quality media saves instantly. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "save-ig-content",
        "name": "Save Ig Content",
        "description": "Download any public Instagram content\u2014photos, videos, reels, and stories\u2014to your device for free. Our all-in-one downloader provides high-quality media saves instantly.",
        "route": "/save-ig-content",
        "extraSlugs": [
                "save-ig-content",
                "instagram-media-downloader-all"
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
						url: "https://30tools.com/save-ig-content",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Save Ig Content" />
			</ToolLayout>
		</>
	);
}
