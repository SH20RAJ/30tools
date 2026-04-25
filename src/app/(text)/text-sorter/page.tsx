import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Text Sorter Online – Fast & No Signup | 30tools",
	description: "Organize your lists and text lines with our free online Text Sorter. Sort alphabetically, by length, or reverse order instantly. Privacy-focused tool for researchers and developers. 100% free, fast, and no signup required.",
	keywords: "text sorter, free text sorter, online text sorter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-sorter",
	},
	openGraph: {
		title: "Free Text Sorter Online – Fast & No Signup | 30tools",
		description: "Organize your lists and text lines with our free online Text Sorter. Sort alphabetically, by length, or reverse order instantly. Privacy-focused tool for researchers and developers. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-sorter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Sorter Online – Fast & No Signup | 30tools",
		description: "Organize your lists and text lines with our free online Text Sorter. Sort alphabetically, by length, or reverse order instantly. Privacy-focused tool for researchers and developers. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-sorter",
        "name": "Text Sorter",
        "description": "Organize your lists and text lines with our free online Text Sorter. Sort alphabetically, by length, or reverse order instantly. Privacy-focused tool for researchers and developers.",
        "route": "/text-sorter",
        "extraSlugs": [
                "free-text-sorter-online",
                "text-sorter-tool",
                "online-text-organizer"
        ],
        "popular": false,
        "category": "text"
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
						url: "https://30tools.com/text-sorter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "text" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
