import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Pinterest Gif Downloader Online – Fast & No Signup | 30tools",
	description: "Free online tool to download high-quality GIFs from Pinterest instantly. No registration required. 100% free, fast, and no signup required.",
	keywords: "pinterest gif downloader, free pinterest gif downloader, online pinterest gif downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pinterest-gif-downloader",
	},
	openGraph: {
		title: "Free Pinterest Gif Downloader Online – Fast & No Signup | 30tools",
		description: "Free online tool to download high-quality GIFs from Pinterest instantly. No registration required. 100% free, fast, and no signup required.",
		url: "https://30tools.com/pinterest-gif-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Gif Downloader Online – Fast & No Signup | 30tools",
		description: "Free online tool to download high-quality GIFs from Pinterest instantly. No registration required. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pinterest-gif-downloader",
        "name": "Pinterest Gif Downloader",
        "description": "Free online tool to download high-quality GIFs from Pinterest instantly. No registration required.",
        "route": "/pinterest-gif-downloader",
        "extraSlugs": [
                "pinterest-clip-saver",
                "pinterest-media-downloader",
                "twitter-gif-downloader"
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
						url: "https://30tools.com/pinterest-gif-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Pinterest Gif Downloader" />
			</ToolLayout>
		</>
	);
}
