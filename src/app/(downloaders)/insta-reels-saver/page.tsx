import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Insta Reels Saver Online – Fast & No Signup | 30tools",
	description: "Save Instagram Reels with original audio in HD quality. Our free online downloader works instantly on mobile and desktop without any app installation. 100% free, fast, and no signup required.",
	keywords: "insta reels saver, free insta reels saver, online insta reels saver, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/insta-reels-saver",
	},
	openGraph: {
		title: "Free Insta Reels Saver Online – Fast & No Signup | 30tools",
		description: "Save Instagram Reels with original audio in HD quality. Our free online downloader works instantly on mobile and desktop without any app installation. 100% free, fast, and no signup required.",
		url: "https://30tools.com/insta-reels-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Insta Reels Saver Online – Fast & No Signup | 30tools",
		description: "Save Instagram Reels with original audio in HD quality. Our free online downloader works instantly on mobile and desktop without any app installation. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "insta-reels-saver",
        "name": "Insta Reels Saver",
        "description": "Save Instagram Reels with original audio in HD quality. Our free online downloader works instantly on mobile and desktop without any app installation.",
        "route": "/insta-reels-saver",
        "extraSlugs": [
                "insta-reels-saver",
                "download-ig-reels-hd"
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
						url: "https://30tools.com/insta-reels-saver",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Insta Reels Saver" />
			</ToolLayout>
		</>
	);
}
