import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Terabox Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Terabox videos with direct links and embed custom video players 100% free, fast, and no signup required.",
	keywords: "terabox video downloader, free terabox video downloader, online terabox video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/terabox-downloader",
	},
	openGraph: {
		title: "Free Terabox Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Terabox videos with direct links and embed custom video players 100% free, fast, and no signup required.",
		url: "https://30tools.com/terabox-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Terabox Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Terabox videos with direct links and embed custom video players 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "terabox-downloader",
        "name": "Terabox Video Downloader",
        "description": "Download Terabox videos with direct links and embed custom video players",
        "route": "/terabox-downloader",
        "extraSlugs": [
                "download-terabox-file",
                "download-terabox-videos-without-app",
                "terabox-direct-download",
                "terabox-link-downloader",
                "terabox-player-online",
                "terabox-video-player-online",
                "terabox-video-saver"
        ],
        "popular": true,
        "category": "video",
		"features": [
			"Download TeraBox Videos and Files Directly",
			"No TeraBox App Installation Required",
			"Bypass Login and Ad-heavy Pages",
			"High-Speed File Transfer Proxy",
			"Works on Mobile and Desktop Browsers"
		],
		"article": `
## Download from TeraBox Without the App
TeraBox is a popular cloud storage platform, but downloading files from shared links often forces users to install their desktop or mobile applications, navigate through ads, or create an account. Our TeraBox Downloader tool allows you to bypass these restrictions and download the files directly to your device via your web browser.

### Lawful Use Notice
**Important:** This tool is designed to facilitate the downloading of public, shared files. You must only download content that is legally shared, not copyrighted, or that you have explicit permission to access. Do not use this tool to download pirated movies, unauthorized software, or illegal content.

### Limitations and Processing
Due to TeraBox's evolving infrastructure, links may occasionally expire or require re-fetching. Our proxy engine attempts to extract the direct download URL, but extremely large files (e.g., over 5GB) may experience timeouts or require you to use the official app for reliable resume support.
		`,
		"howTo": {
			"name": "How to Download TeraBox Files",
			"steps": [
				{
					"name": "Copy the TeraBox Link",
					"text": "Get the shared TeraBox link (e.g., https://teraboxapp.com/s/...) from your source."
				},
				{
					"name": "Paste the Link",
					"text": "Paste the complete URL into the input field above and click 'Fetch Download Links'."
				},
				{
					"name": "Select Your File",
					"text": "If the link contains multiple files, our tool will display a list. Click the download button next to the file you want."
				},
				{
					"name": "Save to Device",
					"text": "The file will begin downloading directly through your browser. No extra software is needed."
				}
			]
		},
		"faqs": [
			{
				"question": "Do I need a TeraBox account to use this tool?",
				"answer": "No. Our tool fetches the direct download link without requiring you to log in or create an account."
			},
			{
				"question": "Is it safe to download files this way?",
				"answer": "Yes, our tool securely proxies the download request. However, always ensure you trust the person who shared the link, as we cannot scan the contents of the file for malware."
			},
			{
				"question": "Why did my download fail at 99%?",
				"answer": "Browser-based downloads can be unstable for very large files over unreliable internet connections. If it fails, try re-fetching the link and downloading again."
			}
		]
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
						url: "https://30tools.com/terabox-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "video" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
