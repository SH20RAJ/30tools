import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free WordPress Theme Detector Online – Fast & No Signup | 30tools",
	description: "Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "wordpress theme detector, free wordpress theme detector, online wordpress theme detector, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/wordpress-theme-detector",
	},
	openGraph: {
		title: "Free WordPress Theme Detector Online – Fast & No Signup | 30tools",
		description: "Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/wordpress-theme-detector",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free WordPress Theme Detector Online – Fast & No Signup | 30tools",
		description: "Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "wordpress-theme-detector",
        "name": "WordPress Theme Detector",
        "description": "Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/wordpress-theme-detector",
        "extraSlugs": [
                "free-wordpress-theme-detector-online",
                "wordpress-theme-detector-tool",
                "disposable-email-detector"
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
						url: "https://30tools.com/wordpress-theme-detector",
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
