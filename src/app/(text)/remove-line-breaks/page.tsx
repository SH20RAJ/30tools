import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Remove Line Breaks Online – Fast & No Signup | 30tools",
	description: "Remove line breaks, carriage returns, and extra whitespace from your text instantly. Perfect for cleaning up copied content for clean formatting. Free and privacy-focused online tool. 100% free, fast, and no signup required.",
	keywords: "remove line breaks, free remove line breaks, online remove line breaks, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/remove-line-breaks",
	},
	openGraph: {
		title: "Free Remove Line Breaks Online – Fast & No Signup | 30tools",
		description: "Remove line breaks, carriage returns, and extra whitespace from your text instantly. Perfect for cleaning up copied content for clean formatting. Free and privacy-focused online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/remove-line-breaks",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Remove Line Breaks Online – Fast & No Signup | 30tools",
		description: "Remove line breaks, carriage returns, and extra whitespace from your text instantly. Perfect for cleaning up copied content for clean formatting. Free and privacy-focused online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "remove-line-breaks",
        "name": "Remove Line Breaks",
        "description": "Remove line breaks, carriage returns, and extra whitespace from your text instantly. Perfect for cleaning up copied content for clean formatting. Free and privacy-focused online tool.",
        "route": "/remove-line-breaks",
        "extraSlugs": [
                "free-remove-line-breaks-online",
                "remove-line-breaks-tool",
                "text-cleaner-online"
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
						url: "https://30tools.com/remove-line-breaks",
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
