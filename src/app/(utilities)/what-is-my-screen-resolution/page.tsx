import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free What Is My Screen Resolution Online – Fast & No Signup | 30tools",
	description: "Free what is my screen resolution tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "what is my screen resolution, free what is my screen resolution, online what is my screen resolution, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/what-is-my-screen-resolution",
	},
	openGraph: {
		title: "Free What Is My Screen Resolution Online – Fast & No Signup | 30tools",
		description: "Free what is my screen resolution tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/what-is-my-screen-resolution",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free What Is My Screen Resolution Online – Fast & No Signup | 30tools",
		description: "Free what is my screen resolution tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "what-is-my-screen-resolution",
        "name": "What Is My Screen Resolution",
        "description": "Free what is my screen resolution tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/what-is-my-screen-resolution",
        "extraSlugs": [
                "free-what-is-my-screen-resolution-online",
                "what-is-my-screen-resolution-tool"
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
						url: "https://30tools.com/what-is-my-screen-resolution",
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
