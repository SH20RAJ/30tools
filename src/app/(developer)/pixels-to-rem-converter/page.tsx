import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Pixels to REM Converter Online - No Signup | 30tools",
	description: "Free Pixels to REM Converter online. Convert pixels (px) to REM units based on your base font size.",
	keywords: "pixels to rem converter, free online tool, no signup, developer, pixels to rem converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pixels-to-rem-converter",
	},
	openGraph: {
		title: "Free Pixels to REM Converter Online - No Signup | 30tools",
		description: "Free Pixels to REM Converter online. Convert pixels (px) to REM units based on your base font size.",
		url: "https://30tools.com/pixels-to-rem-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pixels to REM Converter Online - No Signup | 30tools",
		description: "Free Pixels to REM Converter online. Convert pixels (px) to REM units based on your base font size.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "pixels-to-rem-converter",
		"name": "Pixels to REM Converter",
		"description": "Free Pixels to REM Converter online. Convert pixels (px) to REM units based on your base font size.",
		"route": "/pixels-to-rem-converter",
		"extraSlugs": [
				"px-to-rem",
				"rem-converter",
				"pixels-to-rem"
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
			name: "Pixels to REM Converter",
			url: "/pixels-to-rem-converter",
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
						name: "Pixels to REM Converter",
						description: "Free Pixels to REM Converter online. Convert pixels (px) to REM units based on your base font size.",
						url: "https://30tools.com/pixels-to-rem-converter",
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
				<ToolPlaceholderPage toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
