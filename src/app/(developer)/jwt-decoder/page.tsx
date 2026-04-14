import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free JWT Decoder Online - No Signup | 30tools",
	description: "Decode and verify JSON Web Tokens",
	keywords: "jwt decoder, free online tool, no signup, developer, jwt decoder online, 30tools",
	alternates: {
		canonical: "https://30tools.com/jwt-decoder",
	},
	openGraph: {
		title: "Free JWT Decoder Online - No Signup | 30tools",
		description: "Decode and verify JSON Web Tokens",
		url: "https://30tools.com/jwt-decoder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JWT Decoder Online - No Signup | 30tools",
		description: "Decode and verify JSON Web Tokens",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "jwt-decoder",
		"name": "JWT Decoder",
		"description": "Decode and verify JSON Web Tokens",
		"route": "/jwt-decoder",
		"extraSlugs": [
			"decode-jwt-online",
			"decode-jwt-token",
			"decode-jwt-without-secret-online",
			"jwt-debugger",
			"jwt-parser",
			"jwt-token-decoder",
			"read-jwt-content",
			"verify-jwt-signature-free"
		],
		"popular": true,
		"category": "developer"
	};
	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: "JWT Decoder",
			url: "/jwt-decoder",
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
						name: "JWT Decoder",
						description: "Decode and verify JSON Web Tokens",
						url: "https://30tools.com/jwt-decoder",
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
