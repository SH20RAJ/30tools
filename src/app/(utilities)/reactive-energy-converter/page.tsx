import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Reactive Energy Converter Online – Fast & No Signup | 30tools",
	description: "Free reactive energy converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "reactive energy converter, free reactive energy converter, online reactive energy converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/reactive-energy-converter",
	},
	openGraph: {
		title: "Free Reactive Energy Converter Online – Fast & No Signup | 30tools",
		description: "Free reactive energy converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/reactive-energy-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Reactive Energy Converter Online – Fast & No Signup | 30tools",
		description: "Free reactive energy converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "reactive-energy-converter",
        "name": "Reactive Energy Converter",
        "description": "Free reactive energy converter tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/reactive-energy-converter",
        "extraSlugs": [
                "free-reactive-energy-converter-online",
                "reactive-energy-converter-tool"
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
						url: "https://30tools.com/reactive-energy-converter",
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
