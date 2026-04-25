import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Text Tools Online – Fast & No Signup | 30tools",
	description: "Format, convert, and manipulate text content 100% free, fast, and no signup required.",
	keywords: "text tools, free text tools, online text tools, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-tools",
	},
	openGraph: {
		title: "Free Text Tools Online – Fast & No Signup | 30tools",
		description: "Format, convert, and manipulate text content 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Tools Online – Fast & No Signup | 30tools",
		description: "Format, convert, and manipulate text content 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-tools",
        "name": "Text Tools",
        "description": "Format, convert, and manipulate text content",
        "route": "/text-tools",
        "extraSlugs": [],
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
						url: "https://30tools.com/text-tools",
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
