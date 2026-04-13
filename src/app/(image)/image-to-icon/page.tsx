import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Image To Icon Online - No Signup | 30tools",
	description: "Free Image To Icon online. Image To Icon allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "image to icon, free online tool, no signup, others, image to icon online, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-to-icon",
	},
	openGraph: {
		title: "Free Image To Icon Online - No Signup | 30tools",
		description: "Free Image To Icon online. Image To Icon allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/image-to-icon",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image To Icon Online - No Signup | 30tools",
		description: "Free Image To Icon online. Image To Icon allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "image-to-icon",
		"name": "Image To Icon",
		"description": "Image To Icon - Coming Soon",
		"route": "/image-to-icon",
		"extraSlugs": [
				"ios-app-icon-creator"
		],
		"popular": false,
		"category": "others"
};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Image To Icon",
			url: "/image-to-icon",
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
						name: "Image To Icon",
						description: "Free Image To Icon online. Image To Icon allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/image-to-icon",
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
