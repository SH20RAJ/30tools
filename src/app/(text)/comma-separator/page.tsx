import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Comma Separator Online – Fast & No Signup | 30tools",
	description: "Convert lists, columns, or text into comma-separated values (CSV) instantly. Our free online Comma Separator is perfect for data cleaning and formatting tasks. Privacy-focused browser tool. 100% free, fast, and no signup required.",
	keywords: "comma separator, free comma separator, online comma separator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/comma-separator",
	},
	openGraph: {
		title: "Free Comma Separator Online – Fast & No Signup | 30tools",
		description: "Convert lists, columns, or text into comma-separated values (CSV) instantly. Our free online Comma Separator is perfect for data cleaning and formatting tasks. Privacy-focused browser tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/comma-separator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Comma Separator Online – Fast & No Signup | 30tools",
		description: "Convert lists, columns, or text into comma-separated values (CSV) instantly. Our free online Comma Separator is perfect for data cleaning and formatting tasks. Privacy-focused browser tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "comma-separator",
        "name": "Comma Separator",
        "description": "Convert lists, columns, or text into comma-separated values (CSV) instantly. Our free online Comma Separator is perfect for data cleaning and formatting tasks. Privacy-focused browser tool.",
        "route": "/comma-separator",
        "extraSlugs": [
                "free-comma-separator-online",
                "comma-separator-tool",
                "pdf-page-separator",
                "list-to-comma-separated-values"
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
						url: "https://30tools.com/comma-separator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "text" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
