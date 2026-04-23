import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Save Instagram Clips Online – Fast & No Signup | 30tools",
	description: "Save Instagram clips, videos, and photos to your device instantly. Our free online downloader supports all public IG content and provides high-quality MP4/JPG files. 100% free, fast, and no signup required.",
	keywords: "save instagram clips, free save instagram clips, online save instagram clips, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-instagram-clips",
	},
	openGraph: {
		title: "Free Save Instagram Clips Online – Fast & No Signup | 30tools",
		description: "Save Instagram clips, videos, and photos to your device instantly. Our free online downloader supports all public IG content and provides high-quality MP4/JPG files. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-instagram-clips",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Instagram Clips Online – Fast & No Signup | 30tools",
		description: "Save Instagram clips, videos, and photos to your device instantly. Our free online downloader supports all public IG content and provides high-quality MP4/JPG files. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "save-instagram-clips",
        "name": "Save Instagram Clips",
        "description": "Save Instagram clips, videos, and photos to your device instantly. Our free online downloader supports all public IG content and provides high-quality MP4/JPG files.",
        "route": "/save-instagram-clips",
        "extraSlugs": [
                "save-instagram-clips",
                "save-instagram-photos",
                "download-ig-videos-free"
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
						url: "https://30tools.com/save-instagram-clips",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Save Instagram Clips" />
			</ToolLayout>
		</>
	);
}
