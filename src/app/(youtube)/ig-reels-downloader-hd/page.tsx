import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Ig Reels Downloader Hd Online – Fast & No Signup | 30tools",
	description: "Download Instagram Reels in high-definition quality instantly. Our free online downloader is optimized for speed and works on all devices. Save your favorite Reels with one click. 100% free, fast, and no signup required.",
	keywords: "ig reels downloader hd, free ig reels downloader hd, online ig reels downloader hd, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ig-reels-downloader-hd",
	},
	openGraph: {
		title: "Free Ig Reels Downloader Hd Online – Fast & No Signup | 30tools",
		description: "Download Instagram Reels in high-definition quality instantly. Our free online downloader is optimized for speed and works on all devices. Save your favorite Reels with one click. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ig-reels-downloader-hd",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ig Reels Downloader Hd Online – Fast & No Signup | 30tools",
		description: "Download Instagram Reels in high-definition quality instantly. Our free online downloader is optimized for speed and works on all devices. Save your favorite Reels with one click. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ig-reels-downloader-hd",
        "name": "Ig Reels Downloader Hd",
        "description": "Download Instagram Reels in high-definition quality instantly. Our free online downloader is optimized for speed and works on all devices. Save your favorite Reels with one click.",
        "route": "/ig-reels-downloader-hd",
        "extraSlugs": [
                "ig-downloader-all",
                "ig-reels-downloader-hd",
                "save-instagram-reels-online"
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
						url: "https://30tools.com/ig-reels-downloader-hd",
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
