import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Instagram Image Downloader Online – Fast & No Signup | 30tools",
	description: "Download Instagram Image online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, fast, and no signup required.",
	keywords: "instagram image downloader, free instagram image downloader, online instagram image downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/instagram-image-downloader",
	},
	openGraph: {
		title: "Free Instagram Image Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram Image online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, fast, and no signup required.",
		url: "https://30tools.com/instagram-image-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Image Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram Image online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "instagram-image-downloader",
        "name": "Instagram Image Downloader",
        "description": "Download Instagram Image online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required.",
        "route": "/instagram-image-downloader",
        "extraSlugs": [
                "ig-image-downloader",
                "instagram-photo-downloader",
                "instagram-picture-saver",
                "instagram-profile-photo-hd",
                "instagram-profile-pic-downloader",
                "instagram-profile-picture-viewer",
                "profile-pic-viewer-instagram"
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
						url: "https://30tools.com/instagram-image-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Instagram Image Downloader" />
			</ToolLayout>
		</>
	);
}
