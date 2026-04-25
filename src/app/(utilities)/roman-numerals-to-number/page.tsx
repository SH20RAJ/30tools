import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Roman Numerals to Number Online – Fast & No Signup | 30tools",
	description: "Free roman numerals to number tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "roman numerals to number, free roman numerals to number, online roman numerals to number, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/roman-numerals-to-number",
	},
	openGraph: {
		title: "Free Roman Numerals to Number Online – Fast & No Signup | 30tools",
		description: "Free roman numerals to number tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/roman-numerals-to-number",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Roman Numerals to Number Online – Fast & No Signup | 30tools",
		description: "Free roman numerals to number tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "roman-numerals-to-number",
        "name": "Roman Numerals to Number",
        "description": "Free roman numerals to number tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/roman-numerals-to-number",
        "extraSlugs": [
                "free-roman-numerals-to-number-online",
                "roman-numerals-to-number-tool"
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
						url: "https://30tools.com/roman-numerals-to-number",
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
