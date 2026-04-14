import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Download Videos From Any Website Online - No Signup | 30tools",
	description: "Free Download Videos From Any Website online tool. Fast and secure.",
	keywords: "download videos from any website, free online tool, no signup, others, download videos from any website online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/download-videos-from-any-website",
	},
	openGraph: {
		title: "Free Download Videos From Any Website Online - No Signup | 30tools",
		description: "Free Download Videos From Any Website online tool. Fast and secure.",
		url: "https://30tools.com/blog/download-videos-from-any-website",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Download Videos From Any Website Online - No Signup | 30tools",
		description: "Free Download Videos From Any Website online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "download-videos-from-any-website",
		"name": "Download Videos From Any Website",
		"description": "Free Download Videos From Any Website online tool. Fast and secure.",
		"route": "/blog/download-videos-from-any-website",
		"extraSlugs": [],
		"popular": false,
		"category": "others"
	};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Download Videos From Any Website",
			url: "/blog/download-videos-from-any-website",
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
						name: "Download Videos From Any Website",
						description: "Free Download Videos From Any Website online tool. Fast and secure.",
						url: "https://30tools.com/blog/download-videos-from-any-website",
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
