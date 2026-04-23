import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Save Snaps To Gallery Online – Fast & No Signup | 30tools",
	description: "Save public Snapchat snaps and videos directly to your phone gallery. Our free online tool works in your browser on all mobile devices and desktop computers. 100% free, fast, and no signup required.",
	keywords: "save snaps to gallery, free save snaps to gallery, online save snaps to gallery, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-snaps-to-gallery",
	},
	openGraph: {
		title: "Free Save Snaps To Gallery Online – Fast & No Signup | 30tools",
		description: "Save public Snapchat snaps and videos directly to your phone gallery. Our free online tool works in your browser on all mobile devices and desktop computers. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-snaps-to-gallery",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Snaps To Gallery Online – Fast & No Signup | 30tools",
		description: "Save public Snapchat snaps and videos directly to your phone gallery. Our free online tool works in your browser on all mobile devices and desktop computers. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "save-snaps-to-gallery",
        "name": "Save Snaps To Gallery",
        "description": "Save public Snapchat snaps and videos directly to your phone gallery. Our free online tool works in your browser on all mobile devices and desktop computers.",
        "route": "/save-snaps-to-gallery",
        "extraSlugs": [
                "save-snaps-to-gallery",
                "download-snapchat-videos-hd"
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
						url: "https://30tools.com/save-snaps-to-gallery",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Save Snaps To Gallery" />
			</ToolLayout>
		</>
	);
}
