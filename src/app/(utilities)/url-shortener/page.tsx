import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free URL Shortener Online – Fast & No Signup | 30tools",
	description: "Shorten long URLs for easier sharing 100% free, fast, and no signup required.",
	keywords: "url shortener, free url shortener, online url shortener, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/url-shortener",
	},
	openGraph: {
		title: "Free URL Shortener Online – Fast & No Signup | 30tools",
		description: "Shorten long URLs for easier sharing 100% free, fast, and no signup required.",
		url: "https://30tools.com/url-shortener",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Shortener Online – Fast & No Signup | 30tools",
		description: "Shorten long URLs for easier sharing 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "url-shortener",
        "name": "URL Shortener",
        "description": "Shorten long URLs for easier sharing",
        "route": "/url-shortener",
        "extraSlugs": [
                "custom-url-shortener-for-instagram",
                "free-link-shortener"
        ],
        "popular": false,
        "category": "utilities"
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
						url: "https://30tools.com/url-shortener",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
