import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free YouTube Title Length Checker Online – Fast & No Signup | 30tools",
	description: "Check if your YouTube video title is the optimal length for search and browse. Our free online checker helps you avoid truncation and ensure your full title is visible in search results. 100% free, fast, and no signup required.",
	keywords: "youtube title length checker, free youtube title length checker, online youtube title length checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-title-length-checker",
	},
	openGraph: {
		title: "Free YouTube Title Length Checker Online – Fast & No Signup | 30tools",
		description: "Check if your YouTube video title is the optimal length for search and browse. Our free online checker helps you avoid truncation and ensure your full title is visible in search results. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-title-length-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Title Length Checker Online – Fast & No Signup | 30tools",
		description: "Check if your YouTube video title is the optimal length for search and browse. Our free online checker helps you avoid truncation and ensure your full title is visible in search results. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-title-length-checker",
        "name": "YouTube Title Length Checker",
        "description": "Check if your YouTube video title is the optimal length for search and browse. Our free online checker helps you avoid truncation and ensure your full title is visible in search results.",
        "route": "/youtube-title-length-checker",
        "extraSlugs": [
                "free-youtube-title-length-checker-online",
                "meta-length-checker",
                "serp-title-checker",
                "text-length-checker",
                "title-rewrite-checker",
                "title-tag-checker",
                "youtube-title-length-checker-tool",
                "optimize-youtube-title-length"
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
						url: "https://30tools.com/youtube-title-length-checker",
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
