import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Free Terms of Use Online Online – Fast & No Signup | 30tools",
	description: "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration. 100% free, fast, and no signup required.",
	keywords: "free terms of use online, free free terms of use online, online free terms of use online, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/terms",
	},
	openGraph: {
		title: "Free Free Terms of Use Online Online – Fast & No Signup | 30tools",
		description: "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration. 100% free, fast, and no signup required.",
		url: "https://30tools.com/terms",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Free Terms of Use Online Online – Fast & No Signup | 30tools",
		description: "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "terms",
        "name": "Free Terms of Use Online",
        "description": "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.",
        "route": "/terms",
        "extraSlugs": [],
        "popular": false,
        "category": "company"
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
						url: "https://30tools.com/terms",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "company" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
