import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JSON Editor Online – Fast & No Signup | 30tools",
	description: "Edit, modify, and manage JSON data with our free online JSON Editor. Features syntax highlighting, tree view, and validation to help you structure your data perfectly. 100% free, fast, and no signup required.",
	keywords: "json editor, free json editor, online json editor, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-editor",
	},
	openGraph: {
		title: "Free JSON Editor Online – Fast & No Signup | 30tools",
		description: "Edit, modify, and manage JSON data with our free online JSON Editor. Features syntax highlighting, tree view, and validation to help you structure your data perfectly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-editor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Editor Online – Fast & No Signup | 30tools",
		description: "Edit, modify, and manage JSON data with our free online JSON Editor. Features syntax highlighting, tree view, and validation to help you structure your data perfectly. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "json-editor",
        "name": "JSON Editor",
        "description": "Edit, modify, and manage JSON data with our free online JSON Editor. Features syntax highlighting, tree view, and validation to help you structure your data perfectly.",
        "route": "/json-editor",
        "extraSlugs": [
                "free-json-editor-online",
                "json-editor-tool",
                "online-json-structurer"
        ],
        "popular": false,
        "category": "developer"
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
						url: "https://30tools.com/json-editor",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "developer" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
