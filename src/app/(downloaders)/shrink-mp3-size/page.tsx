import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Shrink Mp3 Size Online – Fast & No Signup | 30tools",
	description: "Reduce the file size of your MP3 audio while maintaining great sound quality. Our free online compressor is perfect for optimizing audio for web use and mobile devices. 100% free, fast, and no signup required.",
	keywords: "shrink mp3 size, free shrink mp3 size, online shrink mp3 size, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/shrink-mp3-size",
	},
	openGraph: {
		title: "Free Shrink Mp3 Size Online – Fast & No Signup | 30tools",
		description: "Reduce the file size of your MP3 audio while maintaining great sound quality. Our free online compressor is perfect for optimizing audio for web use and mobile devices. 100% free, fast, and no signup required.",
		url: "https://30tools.com/shrink-mp3-size",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Shrink Mp3 Size Online – Fast & No Signup | 30tools",
		description: "Reduce the file size of your MP3 audio while maintaining great sound quality. Our free online compressor is perfect for optimizing audio for web use and mobile devices. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "shrink-mp3-size",
        "name": "Shrink Mp3 Size",
        "description": "Reduce the file size of your MP3 audio while maintaining great sound quality. Our free online compressor is perfect for optimizing audio for web use and mobile devices.",
        "route": "/shrink-mp3-size",
        "extraSlugs": [
                "shrink-mp3-size",
                "compress-mp3-online-free"
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
						url: "https://30tools.com/shrink-mp3-size",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Shrink Mp3 Size" />
			</ToolLayout>
		</>
	);
}
