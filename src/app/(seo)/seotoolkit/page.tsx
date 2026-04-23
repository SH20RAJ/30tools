import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free SEO Toolkit Online – Fast & No Signup | 30tools",
	description: "All-in-one SEO audit and analysis tool. 27+ checks. 100% free, fast, and no signup required.",
	keywords: "seo toolkit, free seo toolkit, online seo toolkit, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/seotoolkit",
	},
	openGraph: {
		title: "Free SEO Toolkit Online – Fast & No Signup | 30tools",
		description: "All-in-one SEO audit and analysis tool. 27+ checks. 100% free, fast, and no signup required.",
		url: "https://30tools.com/seotoolkit",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free SEO Toolkit Online – Fast & No Signup | 30tools",
		description: "All-in-one SEO audit and analysis tool. 27+ checks. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "seotoolkit",
        "name": "SEO Toolkit",
        "description": "All-in-one SEO audit and analysis tool. 27+ checks.",
        "route": "/seotoolkit",
        "extraSlugs": [],
        "popular": true,
        "category": "seo"
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
						url: "https://30tools.com/seotoolkit",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "seo" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
