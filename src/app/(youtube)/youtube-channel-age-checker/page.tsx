import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Channel Age Checker Online – Fast & No Signup | 30tools",
	description: "Find the exact creation date of any YouTube channel with our free online Age Checker. Perfect for creator research, account verification, and competitive analysis. Fast and private. 100% free, fast, and no signup required.",
	keywords: "youtube channel age checker, free youtube channel age checker, online youtube channel age checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-age-checker",
	},
	openGraph: {
		title: "Free YouTube Channel Age Checker Online – Fast & No Signup | 30tools",
		description: "Find the exact creation date of any YouTube channel with our free online Age Checker. Perfect for creator research, account verification, and competitive analysis. Fast and private. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-channel-age-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Age Checker Online – Fast & No Signup | 30tools",
		description: "Find the exact creation date of any YouTube channel with our free online Age Checker. Perfect for creator research, account verification, and competitive analysis. Fast and private. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-channel-age-checker",
        "name": "YouTube Channel Age Checker",
        "description": "Find the exact creation date of any YouTube channel with our free online Age Checker. Perfect for creator research, account verification, and competitive analysis. Fast and private.",
        "route": "/youtube-channel-age-checker",
        "extraSlugs": [
                "compromised-email-checker",
                "diff-checker-online",
                "email-breach-checker",
                "free-youtube-channel-age-checker-online",
                "html-checker",
                "html-error-checker",
                "html-syntax-checker",
                "https-checker",
                "load-time-checker",
                "mobile-seo-checker",
                "plagiarism-checker-seo",
                "readability-score-checker",
                "responsive-design-checker",
                "schema-checker-online",
                "search-volume-checker",
                "seo-competitor-checker",
                "seo-meta-checker",
                "seo-score-checker",
                "ssl-checker",
                "temp-email-checker",
                "whatsapp-checker",
                "youtube-channel-age-checker-tool",
                "check-youtube-channel-creation-date"
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
						url: "https://30tools.com/youtube-channel-age-checker",
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
