import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free HTTP Status Code Checker Online – Fast & No Signup | 30tools",
	description: "Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "http status code checker, free http status code checker, online http status code checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/http-status-code-checker",
	},
	openGraph: {
		title: "Free HTTP Status Code Checker Online – Fast & No Signup | 30tools",
		description: "Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/http-status-code-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTTP Status Code Checker Online – Fast & No Signup | 30tools",
		description: "Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "http-status-code-checker",
        "name": "HTTP Status Code Checker",
        "description": "Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/http-status-code-checker",
        "extraSlugs": [
                "free-http-status-code-checker-online",
                "http-status-code-checker-tool",
                "whatsapp-status-checker"
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
						url: "https://30tools.com/http-status-code-checker",
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
