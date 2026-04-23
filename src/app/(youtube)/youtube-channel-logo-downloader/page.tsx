import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Channel Logo Downloader Online – Fast & No Signup | 30tools",
	description: "Download high-quality YouTube channel logos and profile pictures instantly. Perfect for brand audits and design research. Free, fast, and secure online downloader. 100% free, fast, and no signup required.",
	keywords: "youtube channel logo downloader, free youtube channel logo downloader, online youtube channel logo downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-logo-downloader",
	},
	openGraph: {
		title: "Free YouTube Channel Logo Downloader Online – Fast & No Signup | 30tools",
		description: "Download high-quality YouTube channel logos and profile pictures instantly. Perfect for brand audits and design research. Free, fast, and secure online downloader. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-channel-logo-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Logo Downloader Online – Fast & No Signup | 30tools",
		description: "Download high-quality YouTube channel logos and profile pictures instantly. Perfect for brand audits and design research. Free, fast, and secure online downloader. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-channel-logo-downloader",
        "name": "YouTube Channel Logo Downloader",
        "description": "Download high-quality YouTube channel logos and profile pictures instantly. Perfect for brand audits and design research. Free, fast, and secure online downloader.",
        "route": "/youtube-channel-logo-downloader",
        "extraSlugs": [
                "free-youtube-channel-logo-downloader-online",
                "youtube-channel-logo-downloader-tool",
                "download-youtube-profile-picture"
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
						url: "https://30tools.com/youtube-channel-logo-downloader",
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
