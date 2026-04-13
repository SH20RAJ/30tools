import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Dashboard Online - No Signup | 30tools",
	description: "Free Dashboard online tool. Fast and secure.",
	keywords: "dashboard, free online tool, no signup, others, dashboard online, 30tools",
	alternates: {
		canonical: "https://30tools.com/dashboard",
	},
	openGraph: {
		title: "Free Dashboard Online - No Signup | 30tools",
		description: "Free Dashboard online tool. Fast and secure.",
		url: "https://30tools.com/dashboard",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Dashboard Online - No Signup | 30tools",
		description: "Free Dashboard online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "dashboard",
		"name": "Dashboard",
		"description": "Free Dashboard online tool. Fast and secure.",
		"route": "/dashboard",
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
			name: "Dashboard",
			url: "/dashboard",
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
						name: "Dashboard",
						description: "Free Dashboard online tool. Fast and secure.",
						url: "https://30tools.com/dashboard",
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
