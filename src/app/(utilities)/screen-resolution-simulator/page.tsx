import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Screen Resolution Simulator Online – Fast & No Signup | 30tools",
	description: "Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "screen resolution simulator, free screen resolution simulator, online screen resolution simulator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/screen-resolution-simulator",
	},
	openGraph: {
		title: "Free Screen Resolution Simulator Online – Fast & No Signup | 30tools",
		description: "Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/screen-resolution-simulator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Screen Resolution Simulator Online – Fast & No Signup | 30tools",
		description: "Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "screen-resolution-simulator",
        "name": "Screen Resolution Simulator",
        "description": "Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/screen-resolution-simulator",
        "extraSlugs": [
                "free-screen-recorder",
                "free-screen-resolution-simulator-online",
                "improve-picture-resolution",
                "screen-recorder",
                "screen-resolution-simulator-tool",
                "smartphone-view-simulator"
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
						url: "https://30tools.com/screen-resolution-simulator",
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
