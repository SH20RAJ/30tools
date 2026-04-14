import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Image Tools Online - No Signup | 30tools",
	description: "Free Image Tools online tool. Fast and secure.",
	keywords: "image tools, free online tool, no signup, image, image tools online, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-tools",
	},
	openGraph: {
		title: "Free Image Tools Online - No Signup | 30tools",
		description: "Free Image Tools online tool. Fast and secure.",
		url: "https://30tools.com/image-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Tools Online - No Signup | 30tools",
		description: "Free Image Tools online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "image-tools",
		"name": "Image Tools",
		"description": "Free Image Tools online tool. Fast and secure.",
		"route": "/image-tools",
		"extraSlugs": [],
		"popular": false,
		"category": "image"
};
	const breadcrumbs = [
		{
			name: "Image Tools",
			url: "/image-tools",
		},
		{
			name: "Image Tools",
			url: "/image-tools",
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
						name: "Image Tools",
						description: "Free Image Tools online tool. Fast and secure.",
						url: "https://30tools.com/image-tools",
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
