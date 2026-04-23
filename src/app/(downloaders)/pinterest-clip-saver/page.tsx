import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Pinterest Clip Saver Online – Fast & No Signup | 30tools",
	description: "Save Pinterest video clips and GIFs to your device easily. Our free online tool helps you download inspirational content for offline viewing and project reference. 100% free, fast, and no signup required.",
	keywords: "pinterest clip saver, free pinterest clip saver, online pinterest clip saver, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pinterest-clip-saver",
	},
	openGraph: {
		title: "Free Pinterest Clip Saver Online – Fast & No Signup | 30tools",
		description: "Save Pinterest video clips and GIFs to your device easily. Our free online tool helps you download inspirational content for offline viewing and project reference. 100% free, fast, and no signup required.",
		url: "https://30tools.com/pinterest-clip-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Clip Saver Online – Fast & No Signup | 30tools",
		description: "Save Pinterest video clips and GIFs to your device easily. Our free online tool helps you download inspirational content for offline viewing and project reference. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pinterest-clip-saver",
        "name": "Pinterest Clip Saver",
        "description": "Save Pinterest video clips and GIFs to your device easily. Our free online tool helps you download inspirational content for offline viewing and project reference.",
        "route": "/pinterest-clip-saver",
        "extraSlugs": [
                "pinterest-clip-saver",
                "download-pinterest-videos-online"
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
						url: "https://30tools.com/pinterest-clip-saver",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Pinterest Clip Saver" />
			</ToolLayout>
		</>
	);
}
