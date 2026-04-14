import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free RSA Key Pair Generator Online - No Signup | 30tools",
	description: "Free RSA Key Pair Generator online. Generate secure public and private keys for encryption.",
	keywords: "rsa key pair generator, free online tool, no signup, developer, rsa key pair generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/rsa-key-generator",
	},
	openGraph: {
		title: "Free RSA Key Pair Generator Online - No Signup | 30tools",
		description: "Free RSA Key Pair Generator online. Generate secure public and private keys for encryption.",
		url: "https://30tools.com/rsa-key-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free RSA Key Pair Generator Online - No Signup | 30tools",
		description: "Free RSA Key Pair Generator online. Generate secure public and private keys for encryption.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "rsa-key-generator",
		"name": "RSA Key Pair Generator",
		"description": "Free RSA Key Pair Generator online. Generate secure public and private keys for encryption.",
		"route": "/rsa-key-generator",
		"extraSlugs": [
				"rsa-generator",
				"generate-rsa-keys",
				"public-private-key-generator"
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
			name: "RSA Key Pair Generator",
			url: "/rsa-key-generator",
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
						name: "RSA Key Pair Generator",
						description: "Free RSA Key Pair Generator online. Generate secure public and private keys for encryption.",
						url: "https://30tools.com/rsa-key-generator",
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
