import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Downloaders Online – Fast & No Signup | 30tools",
	description: "Explore our comprehensive collection of social media downloaders. Save videos, photos, and audio from all major platforms in high quality for free. 100% free, fast, and no signup required.",
	keywords: "downloaders, free downloaders, online downloaders, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/downloaders",
	},
	openGraph: {
		title: "Free Downloaders Online – Fast & No Signup | 30tools",
		description: "Explore our comprehensive collection of social media downloaders. Save videos, photos, and audio from all major platforms in high quality for free. 100% free, fast, and no signup required.",
		url: "https://30tools.com/downloaders",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Downloaders Online – Fast & No Signup | 30tools",
		description: "Explore our comprehensive collection of social media downloaders. Save videos, photos, and audio from all major platforms in high quality for free. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "downloaders",
        "name": "Downloaders",
        "description": "Explore our comprehensive collection of social media downloaders. Save videos, photos, and audio from all major platforms in high quality for free.",
        "route": "/downloaders",
        "extraSlugs": [
                "all-social-media-downloader",
                "free-online-video-saver"
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
						url: "https://30tools.com/downloaders",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Downloaders" />
			</ToolLayout>
		</>
	);
}
