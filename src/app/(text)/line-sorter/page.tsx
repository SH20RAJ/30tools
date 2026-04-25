import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Line Sorter Online – Fast & No Signup | 30tools",
	description: "Sort lists, names, or lines alphabetically or by length instantly. Our free online Line Sorter helps you organize data for cleaner documentation and code. Privacy-friendly and fast. 100% free, fast, and no signup required.",
	keywords: "line sorter, free line sorter, online line sorter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/line-sorter",
	},
	openGraph: {
		title: "Free Line Sorter Online – Fast & No Signup | 30tools",
		description: "Sort lists, names, or lines alphabetically or by length instantly. Our free online Line Sorter helps you organize data for cleaner documentation and code. Privacy-friendly and fast. 100% free, fast, and no signup required.",
		url: "https://30tools.com/line-sorter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Line Sorter Online – Fast & No Signup | 30tools",
		description: "Sort lists, names, or lines alphabetically or by length instantly. Our free online Line Sorter helps you organize data for cleaner documentation and code. Privacy-friendly and fast. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "line-sorter",
        "name": "Line Sorter",
        "description": "Sort lists, names, or lines alphabetically or by length instantly. Our free online Line Sorter helps you organize data for cleaner documentation and code. Privacy-friendly and fast.",
        "route": "/line-sorter",
        "extraSlugs": [
                "alphabetize-list-online-free",
                "sort-lines-alphabetically",
                "online-list-sorter"
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
						url: "https://30tools.com/line-sorter",
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
