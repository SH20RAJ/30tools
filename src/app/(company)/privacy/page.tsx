import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Privacy Online - No Signup | 30tools",
	description: "Free Privacy online tool. Fast and secure.",
	keywords: "privacy, free online tool, no signup, others, privacy online, 30tools",
	alternates: {
		canonical: "https://30tools.com/privacy",
	},
	openGraph: {
		title: "Free Privacy Online - No Signup | 30tools",
		description: "Free Privacy online tool. Fast and secure.",
		url: "https://30tools.com/privacy",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Privacy Online - No Signup | 30tools",
		description: "Free Privacy online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "privacy",
		"name": "Privacy",
		"description": "Free Privacy online tool. Fast and secure.",
		"route": "/privacy",
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
			name: "Privacy",
			url: "/privacy",
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
						name: "Privacy",
						description: "Free Privacy online tool. Fast and secure.",
						url: "https://30tools.com/privacy",
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
