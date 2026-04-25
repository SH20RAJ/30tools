import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Logo Generator Online – Fast & No Signup | 30tools",
	description: "Create professional logos with text, fonts, and custom colors 100% free, fast, and no signup required.",
	keywords: "logo generator, free logo generator, online logo generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/logo-generator",
	},
	openGraph: {
		title: "Free Logo Generator Online – Fast & No Signup | 30tools",
		description: "Create professional logos with text, fonts, and custom colors 100% free, fast, and no signup required.",
		url: "https://30tools.com/logo-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Logo Generator Online – Fast & No Signup | 30tools",
		description: "Create professional logos with text, fonts, and custom colors 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "logo-generator",
        "name": "Logo Generator",
        "description": "Create professional logos with text, fonts, and custom colors",
        "route": "/logo-generator",
        "extraSlugs": [
                "brand-logo-generator",
                "business-logo-creator",
                "business-logo-designer",
                "company-logo-maker-free",
                "custom-logo-maker",
                "design-logo-free",
                "free-logo-maker",
                "free-logo-maker-for-twitch",
                "gaming-logo-generator",
                "logo-maker",
                "online-logo-design",
                "simple-logo-creator"
        ],
        "popular": true,
        "category": "image"
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
						url: "https://30tools.com/logo-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
