import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Facebook ID Finder Online – Fast & No Signup | 30tools",
	description: "Free facebook id finder tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "facebook id finder, free facebook id finder, online facebook id finder, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/facebook-id-finder",
	},
	openGraph: {
		title: "Free Facebook ID Finder Online – Fast & No Signup | 30tools",
		description: "Free facebook id finder tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/facebook-id-finder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Facebook ID Finder Online – Fast & No Signup | 30tools",
		description: "Free facebook id finder tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "facebook-id-finder",
        "name": "Facebook ID Finder",
        "description": "Free facebook id finder tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/facebook-id-finder",
        "extraSlugs": [
                "free-facebook-id-finder-online",
                "facebook-id-finder-tool"
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
						url: "https://30tools.com/facebook-id-finder",
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
