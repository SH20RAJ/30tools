import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free WCAG Color Contrast Checker Online - No Signup | 30tools",
	description: "Free WCAG Color Contrast Checker. Ensure your color combinations meet accessibility standards.",
	keywords: "wcag color contrast checker, free online tool, no signup, developer, wcag color contrast checker online, 30tools",
	alternates: {
		canonical: "https://30tools.com/contrast-checker",
	},
	openGraph: {
		title: "Free WCAG Color Contrast Checker Online - No Signup | 30tools",
		description: "Free WCAG Color Contrast Checker. Ensure your color combinations meet accessibility standards.",
		url: "https://30tools.com/contrast-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free WCAG Color Contrast Checker Online - No Signup | 30tools",
		description: "Free WCAG Color Contrast Checker. Ensure your color combinations meet accessibility standards.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "contrast-checker",
		"name": "WCAG Color Contrast Checker",
		"description": "Free WCAG Color Contrast Checker. Ensure your color combinations meet accessibility standards.",
		"route": "/contrast-checker",
		"extraSlugs": [
				"color-contrast-checker",
				"wcag-checker",
				"accessibility-contrast"
		],
		"popular": false,
		"category": "developer"
};
	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: "WCAG Color Contrast Checker",
			url: "/contrast-checker",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "WCAG Color Contrast Checker",
						description: "Free WCAG Color Contrast Checker. Ensure your color combinations meet accessibility standards.",
						url: "https://30tools.com/contrast-checker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
			>
				<ToolInteractivePlaceholder toolName={tool.name} />
			</ToolLayout>
		</>
	);
}
