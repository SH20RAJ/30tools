import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Redirect Checker Online – Fast & No Signup | 30tools",
	description: "Free redirect checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "redirect checker, free redirect checker, online redirect checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/redirect-checker",
	},
	openGraph: {
		title: "Free Redirect Checker Online – Fast & No Signup | 30tools",
		description: "Free redirect checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/redirect-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Redirect Checker Online – Fast & No Signup | 30tools",
		description: "Free redirect checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "redirect-checker",
        "name": "Redirect Checker",
        "description": "Free redirect checker tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/redirect-checker",
        "extraSlugs": [
                "free-redirect-checker-online",
                "redirect-checker-tool"
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
						url: "https://30tools.com/redirect-checker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
