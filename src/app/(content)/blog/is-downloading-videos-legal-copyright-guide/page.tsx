import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Is Downloading Videos Legal Copyright Guide Online - No Signup | 30tools",
	description: "Free Is Downloading Videos Legal Copyright Guide online tool. Fast and secure.",
	keywords: "is downloading videos legal copyright guide, free online tool, no signup, others, is downloading videos legal copyright guide online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/is-downloading-videos-legal-copyright-guide",
	},
	openGraph: {
		title: "Free Is Downloading Videos Legal Copyright Guide Online - No Signup | 30tools",
		description: "Free Is Downloading Videos Legal Copyright Guide online tool. Fast and secure.",
		url: "https://30tools.com/blog/is-downloading-videos-legal-copyright-guide",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Is Downloading Videos Legal Copyright Guide Online - No Signup | 30tools",
		description: "Free Is Downloading Videos Legal Copyright Guide online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "is-downloading-videos-legal-copyright-guide",
		"name": "Is Downloading Videos Legal Copyright Guide",
		"description": "Free Is Downloading Videos Legal Copyright Guide online tool. Fast and secure.",
		"route": "/blog/is-downloading-videos-legal-copyright-guide",
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
			name: "Is Downloading Videos Legal Copyright Guide",
			url: "/blog/is-downloading-videos-legal-copyright-guide",
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
						name: "Is Downloading Videos Legal Copyright Guide",
						description: "Free Is Downloading Videos Legal Copyright Guide online tool. Fast and secure.",
						url: "https://30tools.com/blog/is-downloading-videos-legal-copyright-guide",
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
