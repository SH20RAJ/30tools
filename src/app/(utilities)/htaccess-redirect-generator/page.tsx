import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Htaccess Redirect Generator Online – Fast & No Signup | 30tools",
	description: "Free htaccess redirect generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "htaccess redirect generator, free htaccess redirect generator, online htaccess redirect generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/htaccess-redirect-generator",
	},
	openGraph: {
		title: "Free Htaccess Redirect Generator Online – Fast & No Signup | 30tools",
		description: "Free htaccess redirect generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/htaccess-redirect-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Htaccess Redirect Generator Online – Fast & No Signup | 30tools",
		description: "Free htaccess redirect generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "htaccess-redirect-generator",
        "name": "Htaccess Redirect Generator",
        "description": "Free htaccess redirect generator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/htaccess-redirect-generator",
        "extraSlugs": [
                "free-htaccess-redirect-generator-online",
                "htaccess-redirect-generator-tool"
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
						url: "https://30tools.com/htaccess-redirect-generator",
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
