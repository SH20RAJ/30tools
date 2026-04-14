import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Account Online - No Signup | 30tools",
	description: "Free Account online tool. Fast and secure.",
	keywords: "account, free online tool, no signup, others, account online, 30tools",
	alternates: {
		canonical: "https://30tools.com/account",
	},
	openGraph: {
		title: "Free Account Online - No Signup | 30tools",
		description: "Free Account online tool. Fast and secure.",
		url: "https://30tools.com/account",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Account Online - No Signup | 30tools",
		description: "Free Account online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "account",
		"name": "Account",
		"description": "Free Account online tool. Fast and secure.",
		"route": "/account",
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
			name: "Account",
			url: "/account",
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
						name: "Account",
						description: "Free Account online tool. Fast and secure.",
						url: "https://30tools.com/account",
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
