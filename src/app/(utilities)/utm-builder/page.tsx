import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free UTM Builder Online – Fast & No Signup | 30tools",
	description: "Easily build campaign URLs with UTM parameters for Google Analytics tracking. 100% free, fast, and no signup required.",
	keywords: "utm builder, free utm builder, online utm builder, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/utm-builder",
	},
	openGraph: {
		title: "Free UTM Builder Online – Fast & No Signup | 30tools",
		description: "Easily build campaign URLs with UTM parameters for Google Analytics tracking. 100% free, fast, and no signup required.",
		url: "https://30tools.com/utm-builder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free UTM Builder Online – Fast & No Signup | 30tools",
		description: "Easily build campaign URLs with UTM parameters for Google Analytics tracking. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "utm-builder",
        "name": "UTM Builder",
        "description": "Easily build campaign URLs with UTM parameters for Google Analytics tracking.",
        "route": "/utm-builder",
        "extraSlugs": [
                "utm-link-builder-for-google-analytics-4",
                "ga4-utm-generator"
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
						url: "https://30tools.com/utm-builder",
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
