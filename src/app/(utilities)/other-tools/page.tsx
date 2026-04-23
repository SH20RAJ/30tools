import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Other Tools Online – Fast & No Signup | 30tools",
	description: "Free Other Tools online tool. Fast and secure. 100% free, fast, and no signup required.",
	keywords: "other tools, free other tools, online other tools, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/other-tools",
	},
	openGraph: {
		title: "Free Other Tools Online – Fast & No Signup | 30tools",
		description: "Free Other Tools online tool. Fast and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/other-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Other Tools Online – Fast & No Signup | 30tools",
		description: "Free Other Tools online tool. Fast and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "other-tools",
        "name": "Other Tools",
        "description": "Free Other Tools online tool. Fast and secure.",
        "route": "/other-tools",
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
						url: "https://30tools.com/other-tools",
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
