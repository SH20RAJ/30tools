import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Modify Mp3 File Online – Fast & No Signup | 30tools",
	description: "Trim, cut, and edit your MP3 files instantly. Our free online audio editor helps you create ringtones and clean up recordings with a simple, browser-based interface. 100% free, fast, and no signup required.",
	keywords: "modify mp3 file, free modify mp3 file, online modify mp3 file, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/modify-mp3-file",
	},
	openGraph: {
		title: "Free Modify Mp3 File Online – Fast & No Signup | 30tools",
		description: "Trim, cut, and edit your MP3 files instantly. Our free online audio editor helps you create ringtones and clean up recordings with a simple, browser-based interface. 100% free, fast, and no signup required.",
		url: "https://30tools.com/modify-mp3-file",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Modify Mp3 File Online – Fast & No Signup | 30tools",
		description: "Trim, cut, and edit your MP3 files instantly. Our free online audio editor helps you create ringtones and clean up recordings with a simple, browser-based interface. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "modify-mp3-file",
        "name": "Modify Mp3 File",
        "description": "Trim, cut, and edit your MP3 files instantly. Our free online audio editor helps you create ringtones and clean up recordings with a simple, browser-based interface.",
        "route": "/modify-mp3-file",
        "extraSlugs": [
                "cut-mp3-file",
                "modify-mp3-file",
                "online-mp3-trimmer"
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
						url: "https://30tools.com/modify-mp3-file",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Modify Mp3 File" />
			</ToolLayout>
		</>
	);
}
