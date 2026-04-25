import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Keyword Density Checker Online – Fast & No Signup | 30tools",
	description: "Free keyword density checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "keyword density checker, free keyword density checker, online keyword density checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/keyword-density-checker",
	},
	openGraph: {
		title: "Free Keyword Density Checker Online – Fast & No Signup | 30tools",
		description: "Free keyword density checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/keyword-density-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Keyword Density Checker Online – Fast & No Signup | 30tools",
		description: "Free keyword density checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "keyword-density-checker",
        "name": "Keyword Density Checker",
        "description": "Free keyword density checker tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/keyword-density-checker",
        "extraSlugs": [
                "content-density-check",
                "free-keyword-density-checker-online",
                "keyword-density",
                "keyword-density-checker-tool"
        ],
        "popular": false,
        "category": "seo"
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
						url: "https://30tools.com/keyword-density-checker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "seo" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
