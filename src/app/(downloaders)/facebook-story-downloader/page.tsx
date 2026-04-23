import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Facebook Story Downloader Online – Fast & No Signup | 30tools",
	description: "Download Facebook stories in high resolution instantly. Our free online tool helps you save story content for offline viewing without any signup or account login. 100% free, fast, and no signup required.",
	keywords: "facebook story downloader, free facebook story downloader, online facebook story downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/facebook-story-downloader",
	},
	openGraph: {
		title: "Free Facebook Story Downloader Online – Fast & No Signup | 30tools",
		description: "Download Facebook stories in high resolution instantly. Our free online tool helps you save story content for offline viewing without any signup or account login. 100% free, fast, and no signup required.",
		url: "https://30tools.com/facebook-story-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Facebook Story Downloader Online – Fast & No Signup | 30tools",
		description: "Download Facebook stories in high resolution instantly. Our free online tool helps you save story content for offline viewing without any signup or account login. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "facebook-story-downloader",
        "name": "Facebook Story Downloader",
        "description": "Download Facebook stories in high resolution instantly. Our free online tool helps you save story content for offline viewing without any signup or account login.",
        "route": "/facebook-story-downloader",
        "extraSlugs": [
                "free-facebook-story-downloader-online",
                "save-fb-stories-hd"
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
						url: "https://30tools.com/facebook-story-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Facebook Story Downloader" />
			</ToolLayout>
		</>
	);
}
