import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Public IP Checker Online - No Signup | 30tools",
	description: "Free Public IP Checker online. Quickly find your public IP address and network details.",
	keywords: "public ip checker, free online tool, no signup, utilities, public ip checker online, 30tools",
	alternates: {
		canonical: "https://30tools.com/public-ip-checker",
	},
	openGraph: {
		title: "Free Public IP Checker Online - No Signup | 30tools",
		description: "Free Public IP Checker online. Quickly find your public IP address and network details.",
		url: "https://30tools.com/public-ip-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Public IP Checker Online - No Signup | 30tools",
		description: "Free Public IP Checker online. Quickly find your public IP address and network details.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "public-ip-checker",
		"name": "Public IP Checker",
		"description": "Free Public IP Checker online. Quickly find your public IP address and network details.",
		"route": "/public-ip-checker",
		"extraSlugs": [
			"my-ip",
			"whats-my-ip",
			"ip-checker"
		],
		"popular": false,
		"category": "utilities"
	};
	const breadcrumbs = [
		{
			name: "Utilities Tools",
			url: "/utilities-tools",
		},
		{
			name: "Public IP Checker",
			url: "/public-ip-checker",
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
						name: "Public IP Checker",
						description: "Free Public IP Checker online. Quickly find your public IP address and network details.",
						url: "https://30tools.com/public-ip-checker",
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
