import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Fb Clip Downloader Online – Fast & No Signup | 30tools",
	description: "Download Facebook video clips and highlights in high resolution instantly. Our free online downloader is fast, secure, and easy to use. No signup required for unlimited downloads.",
	keywords: "fb clip downloader, free fb clip downloader, online fb clip downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/fb-clip-downloader",
	},
	openGraph: {
		title: "Free Fb Clip Downloader Online – Fast & No Signup | 30tools",
		description: "Download Facebook video clips and highlights in high resolution instantly. Our free online downloader is fast, secure, and easy to use. No signup required for unlimited downloads.",
		url: "https://30tools.com/fb-clip-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Fb Clip Downloader Online – Fast & No Signup | 30tools",
		description: "Download Facebook video clips and highlights in high resolution instantly. Our free online downloader is fast, secure, and easy to use. No signup required for unlimited downloads.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "fb-clip-downloader",
        "name": "Fb Clip Downloader",
        "description": "Download Facebook video clips and highlights in high resolution instantly. Our free online downloader is fast, secure, and easy to use. No signup required for unlimited downloads.",
        "route": "/fb-clip-downloader",
        "extraSlugs": [
                "fb-clip-downloader",
                "fb-highlights-downloader",
                "save-facebook-videos-hd"
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
						url: "https://30tools.com/fb-clip-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
