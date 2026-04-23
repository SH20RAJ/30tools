import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Snapchat Saver Online Online – Fast & No Signup | 30tools",
	description: "Download Snapchat stories and spotlight videos in high quality. Our free online tool helps you save ephemeral content before it disappears forever. 100% free, fast, and no signup required.",
	keywords: "snapchat saver online, free snapchat saver online, online snapchat saver online, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/snapchat-saver-online",
	},
	openGraph: {
		title: "Free Snapchat Saver Online Online – Fast & No Signup | 30tools",
		description: "Download Snapchat stories and spotlight videos in high quality. Our free online tool helps you save ephemeral content before it disappears forever. 100% free, fast, and no signup required.",
		url: "https://30tools.com/snapchat-saver-online",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Snapchat Saver Online Online – Fast & No Signup | 30tools",
		description: "Download Snapchat stories and spotlight videos in high quality. Our free online tool helps you save ephemeral content before it disappears forever. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "snapchat-saver-online",
        "name": "Snapchat Saver Online",
        "description": "Download Snapchat stories and spotlight videos in high quality. Our free online tool helps you save ephemeral content before it disappears forever.",
        "route": "/snapchat-saver-online",
        "extraSlugs": [
                "snapchat-saver-online",
                "save-snapchat-stories-free"
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
						url: "https://30tools.com/snapchat-saver-online",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Snapchat Saver Online" />
			</ToolLayout>
		</>
	);
}
