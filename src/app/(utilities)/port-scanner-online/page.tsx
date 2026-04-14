import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Online Port Scanner Online - No Signup | 30tools",
	description: "Free Online Port Scanner. Scan common ports of a host to check for open services.",
	keywords: "online port scanner, free online tool, no signup, utilities, online port scanner online, 30tools",
	alternates: {
		canonical: "https://30tools.com/port-scanner-online",
	},
	openGraph: {
		title: "Free Online Port Scanner Online - No Signup | 30tools",
		description: "Free Online Port Scanner. Scan common ports of a host to check for open services.",
		url: "https://30tools.com/port-scanner-online",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Online Port Scanner Online - No Signup | 30tools",
		description: "Free Online Port Scanner. Scan common ports of a host to check for open services.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "port-scanner-online",
		"name": "Online Port Scanner",
		"description": "Free Online Port Scanner. Scan common ports of a host to check for open services.",
		"route": "/port-scanner-online",
		"extraSlugs": [
			"port-scanner",
			"scan-ports",
			"online-port-scan"
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
			name: "Online Port Scanner",
			url: "/port-scanner-online",
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
						name: "Online Port Scanner",
						description: "Free Online Port Scanner. Scan common ports of a host to check for open services.",
						url: "https://30tools.com/port-scanner-online",
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
