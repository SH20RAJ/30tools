import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Cron Expression Generator Online - No Signup | 30tools",
	description: "Free Cron Expression Generator online. Easily generate cron schedules for your applications.",
	keywords: "cron expression generator, free online tool, no signup, developer, cron expression generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/cron-expression-generator",
	},
	openGraph: {
		title: "Free Cron Expression Generator Online - No Signup | 30tools",
		description: "Free Cron Expression Generator online. Easily generate cron schedules for your applications.",
		url: "https://30tools.com/cron-expression-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Cron Expression Generator Online - No Signup | 30tools",
		description: "Free Cron Expression Generator online. Easily generate cron schedules for your applications.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "cron-expression-generator",
		"name": "Cron Expression Generator",
		"description": "Free Cron Expression Generator online. Easily generate cron schedules for your applications.",
		"route": "/cron-expression-generator",
		"extraSlugs": [
			"cron-generator",
			"cron-scheduler",
			"crontab-generator"
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
			name: "Cron Expression Generator",
			url: "/cron-expression-generator",
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
						name: "Cron Expression Generator",
						description: "Free Cron Expression Generator online. Easily generate cron schedules for your applications.",
						url: "https://30tools.com/cron-expression-generator",
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
