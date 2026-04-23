import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Privacy Policy Generator Online – Fast & No Signup | 30tools",
	description: "Free privacy policy generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "privacy policy generator, free privacy policy generator, online privacy policy generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/privacy-policy-generator",
	},
	openGraph: {
		title: "Free Privacy Policy Generator Online – Fast & No Signup | 30tools",
		description: "Free privacy policy generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/privacy-policy-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Privacy Policy Generator Online – Fast & No Signup | 30tools",
		description: "Free privacy policy generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "privacy-policy-generator",
        "name": "Privacy Policy Generator",
        "description": "Free privacy policy generator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/privacy-policy-generator",
        "extraSlugs": [
                "free-privacy-policy-generator-online",
                "privacy",
                "privacy-policy-generator-tool"
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
						url: "https://30tools.com/privacy-policy-generator",
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
