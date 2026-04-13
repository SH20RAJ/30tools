import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Postmark Server Token Tester Online - No Signup | 30tools",
	description: "Test your Postmark Server Token with the email sending endpoint.",
	keywords: "postmark server token tester, free online tool, no signup, developer, postmark server token tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/postmark",
	},
	openGraph: {
		title: "Free Postmark Server Token Tester Online - No Signup | 30tools",
		description: "Test your Postmark Server Token with the email sending endpoint.",
		url: "https://30tools.com/api-key-tester/postmark",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Postmark Server Token Tester Online - No Signup | 30tools",
		description: "Test your Postmark Server Token with the email sending endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "postmark-api-key-tester",
		"name": "Postmark Server Token Tester",
		"description": "Test your Postmark Server Token with the email sending endpoint.",
		"route": "/api-key-tester/postmark",
		"extraSlugs": [],
		"popular": false,
		"category": "developer"
};
	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: "Postmark Server Token Tester",
			url: "/api-key-tester/postmark",
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
						name: "Postmark Server Token Tester",
						description: "Test your Postmark Server Token with the email sending endpoint.",
						url: "https://30tools.com/api-key-tester/postmark",
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
