import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Blogger Video Downloader Online – Fast & No Signup | 30tools",
	description: "Easily download videos from any Blogger post. 100% free, fast, and no signup required.",
	keywords: "blogger video downloader, free blogger video downloader, online blogger video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/blogger-video-downloader",
	},
	openGraph: {
		title: "Free Blogger Video Downloader Online – Fast & No Signup | 30tools",
		description: "Easily download videos from any Blogger post. 100% free, fast, and no signup required.",
		url: "https://30tools.com/blogger-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Blogger Video Downloader Online – Fast & No Signup | 30tools",
		description: "Easily download videos from any Blogger post. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "blogger-video-downloader",
        "name": "Blogger Video Downloader",
        "description": "Easily download videos from any Blogger post.",
        "route": "/blogger-video-downloader",
        "extraSlugs": [],
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
						url: "https://30tools.com/blogger-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Blogger Video Downloader" />
			</ToolLayout>
		</>
	);
}
