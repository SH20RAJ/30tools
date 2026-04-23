import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Password Generator Online – Fast & No Signup | 30tools",
	description: "Create strong, secure passwords instantly with customizable settings. 100% free, fast, and no signup required.",
	keywords: "password generator, free password generator, online password generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/password-generator",
	},
	openGraph: {
		title: "Free Password Generator Online – Fast & No Signup | 30tools",
		description: "Create strong, secure passwords instantly with customizable settings. 100% free, fast, and no signup required.",
		url: "https://30tools.com/password-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Password Generator Online – Fast & No Signup | 30tools",
		description: "Create strong, secure passwords instantly with customizable settings. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "password-generator",
        "name": "Password Generator",
        "description": "Create strong, secure passwords instantly with customizable settings.",
        "route": "/password-generator",
        "extraSlugs": [
                "advanced-password-generator",
                "custom-password-maker",
                "secure-password-creator",
                "secure-password-generator-for-wifi",
                "strong-password-generator",
                "strong-password-maker-online"
        ],
        "popular": true,
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
						url: "https://30tools.com/password-generator",
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
