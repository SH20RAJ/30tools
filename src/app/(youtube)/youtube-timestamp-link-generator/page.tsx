import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Timestamp Link Generator Online – Fast & No Signup | 30tools",
	description: "Create direct links to specific parts of any YouTube video instantly. Our free online tool helps you share precise moments with friends, students, or your audience. Fast and easy. 100% free, fast, and no signup required.",
	keywords: "youtube timestamp link generator, free youtube timestamp link generator, online youtube timestamp link generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-timestamp-link-generator",
	},
	openGraph: {
		title: "Free YouTube Timestamp Link Generator Online – Fast & No Signup | 30tools",
		description: "Create direct links to specific parts of any YouTube video instantly. Our free online tool helps you share precise moments with friends, students, or your audience. Fast and easy. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-timestamp-link-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Timestamp Link Generator Online – Fast & No Signup | 30tools",
		description: "Create direct links to specific parts of any YouTube video instantly. Our free online tool helps you share precise moments with friends, students, or your audience. Fast and easy. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-timestamp-link-generator",
        "name": "YouTube Timestamp Link Generator",
        "description": "Create direct links to specific parts of any YouTube video instantly. Our free online tool helps you share precise moments with friends, students, or your audience. Fast and easy.",
        "route": "/youtube-timestamp-link-generator",
        "extraSlugs": [
                "free-youtube-timestamp-link-generator-online",
                "timestamp-decoder",
                "timestamp-translator",
                "youtube-timestamp-generator",
                "youtube-timestamp-link-generator-tool",
                "link-to-youtube-at-specific-time"
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
						url: "https://30tools.com/youtube-timestamp-link-generator",
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
