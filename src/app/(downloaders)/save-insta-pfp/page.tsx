import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Save Insta Pfp Online – Fast & No Signup | 30tools",
	description: "View and download Instagram profile pictures in full resolution. Our free online tool provides high-quality DP downloads for any public Instagram account. 100% free, fast, and no signup required.",
	keywords: "save insta pfp, free save insta pfp, online save insta pfp, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-insta-pfp",
	},
	openGraph: {
		title: "Free Save Insta Pfp Online – Fast & No Signup | 30tools",
		description: "View and download Instagram profile pictures in full resolution. Our free online tool provides high-quality DP downloads for any public Instagram account. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-insta-pfp",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Insta Pfp Online – Fast & No Signup | 30tools",
		description: "View and download Instagram profile pictures in full resolution. Our free online tool provides high-quality DP downloads for any public Instagram account. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "save-insta-pfp",
        "name": "Save Insta Pfp",
        "description": "View and download Instagram profile pictures in full resolution. Our free online tool provides high-quality DP downloads for any public Instagram account.",
        "route": "/save-insta-pfp",
        "extraSlugs": [
                "save-insta-pfp",
                "download-instagram-profile-picture-hd"
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
						url: "https://30tools.com/save-insta-pfp",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Save Insta Pfp" />
			</ToolLayout>
		</>
	);
}
