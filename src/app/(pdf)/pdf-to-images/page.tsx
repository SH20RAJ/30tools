import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Pdf To Images Online - No Signup | 30tools",
	description: "Free Pdf To Images online tool. Fast and secure.",
	keywords: "pdf to images, free online tool, no signup, pdf, pdf to images online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-to-images",
	},
	openGraph: {
		title: "Free Pdf To Images Online - No Signup | 30tools",
		description: "Free Pdf To Images online tool. Fast and secure.",
		url: "https://30tools.com/pdf-to-images",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pdf To Images Online - No Signup | 30tools",
		description: "Free Pdf To Images online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "pdf-to-images",
		"name": "Pdf To Images",
		"description": "Free Pdf To Images online tool. Fast and secure.",
		"route": "/pdf-to-images",
		"extraSlugs": [],
		"popular": false,
		"category": "pdf"
};
	const breadcrumbs = [
		{
			name: "Pdf Tools",
			url: "/pdf-tools",
		},
		{
			name: "Pdf To Images",
			url: "/pdf-to-images",
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
						name: "Pdf To Images",
						description: "Free Pdf To Images online tool. Fast and secure.",
						url: "https://30tools.com/pdf-to-images",
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
