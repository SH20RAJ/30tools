import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Pinterest Image Downloader Online – Fast & No Signup | 30tools",
	description: "Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private.",
	keywords: "pinterest image downloader, free pinterest image downloader, online pinterest image downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pinterest-image-downloader",
	},
	openGraph: {
		title: "Free Pinterest Image Downloader Online – Fast & No Signup | 30tools",
		description: "Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private.",
		url: "https://30tools.com/pinterest-image-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Image Downloader Online – Fast & No Signup | 30tools",
		description: "Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pinterest-image-downloader",
        "name": "Pinterest Image Downloader",
        "description": "Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private.",
        "route": "/pinterest-image-downloader",
        "extraSlugs": [
                "free pinterest image downloader",
                "download pinterest images hd",
                "pinterest photo saver",
                "pinterest image downloader no watermark",
                "save pinterest pins",
                "pinterest mood board downloader",
                "pinterest image downloader online",
                "pinterest picture downloader free"
        ],
        "popular": true,
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
						url: "https://30tools.com/pinterest-image-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Pinterest Image Downloader" />
			</ToolLayout>
		</>
	);
}
