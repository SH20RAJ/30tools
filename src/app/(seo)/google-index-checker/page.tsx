import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Google Index Checker Online – Fast & No Signup | 30tools",
	description: "Free google index checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "google index checker, free google index checker, online google index checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/google-index-checker",
	},
	openGraph: {
		title: "Free Google Index Checker Online – Fast & No Signup | 30tools",
		description: "Free google index checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/google-index-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Google Index Checker Online – Fast & No Signup | 30tools",
		description: "Free google index checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "google-index-checker",
        "name": "Google Index Checker",
        "description": "Free google index checker tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/google-index-checker",
        "extraSlugs": [
                "bulk-google-index-checker",
                "free-google-index-checker-online",
                "google-index-checker-tool",
                "google-index-status",
                "website-index-checker"
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
						url: "https://30tools.com/google-index-checker",
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
