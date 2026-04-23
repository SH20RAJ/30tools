import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Ig Highlights Saver Online – Fast & No Signup | 30tools",
	description: "Download Instagram story highlights to your device easily. Our free online tool helps you archive your favorite moments and creators' content in high quality. 100% free, fast, and no signup required.",
	keywords: "ig highlights saver, free ig highlights saver, online ig highlights saver, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ig-highlights-saver",
	},
	openGraph: {
		title: "Free Ig Highlights Saver Online – Fast & No Signup | 30tools",
		description: "Download Instagram story highlights to your device easily. Our free online tool helps you archive your favorite moments and creators' content in high quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ig-highlights-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ig Highlights Saver Online – Fast & No Signup | 30tools",
		description: "Download Instagram story highlights to your device easily. Our free online tool helps you archive your favorite moments and creators' content in high quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ig-highlights-saver",
        "name": "Ig Highlights Saver",
        "description": "Download Instagram story highlights to your device easily. Our free online tool helps you archive your favorite moments and creators' content in high quality.",
        "route": "/ig-highlights-saver",
        "extraSlugs": [
                "ig-highlights-saver",
                "download-instagram-highlights-online"
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
						url: "https://30tools.com/ig-highlights-saver",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Ig Highlights Saver" />
			</ToolLayout>
		</>
	);
}
