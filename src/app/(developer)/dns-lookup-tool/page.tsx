import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free DNS Lookup Tool Online - No Signup | 30tools",
	description: "Free DNS Lookup Tool online. Check DNS records (A, MX, CNAME, TXT) for any domain.",
	keywords: "dns lookup tool, free online tool, no signup, developer, dns lookup tool online, 30tools",
	alternates: {
		canonical: "https://30tools.com/dns-lookup-tool",
	},
	openGraph: {
		title: "Free DNS Lookup Tool Online - No Signup | 30tools",
		description: "Free DNS Lookup Tool online. Check DNS records (A, MX, CNAME, TXT) for any domain.",
		url: "https://30tools.com/dns-lookup-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free DNS Lookup Tool Online - No Signup | 30tools",
		description: "Free DNS Lookup Tool online. Check DNS records (A, MX, CNAME, TXT) for any domain.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "dns-lookup-tool",
		"name": "DNS Lookup Tool",
		"description": "Free DNS Lookup Tool online. Check DNS records (A, MX, CNAME, TXT) for any domain.",
		"route": "/dns-lookup-tool",
		"extraSlugs": [
			"dns-checker",
			"lookup-dns",
			"dns-records-viewer"
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
			name: "DNS Lookup Tool",
			url: "/dns-lookup-tool",
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
						name: "DNS Lookup Tool",
						description: "Free DNS Lookup Tool online. Check DNS records (A, MX, CNAME, TXT) for any domain.",
						url: "https://30tools.com/dns-lookup-tool",
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
