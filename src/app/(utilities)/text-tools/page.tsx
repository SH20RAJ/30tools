import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Text Tools Online - No Signup | 30tools",
	description: "Free Text Tools online tool. Fast and secure.",
	keywords: "text tools, free online tool, no signup, utilities, text tools online, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-tools",
	},
	openGraph: {
		title: "Free Text Tools Online - No Signup | 30tools",
		description: "Free Text Tools online tool. Fast and secure.",
		url: "https://30tools.com/text-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Tools Online - No Signup | 30tools",
		description: "Free Text Tools online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "text-tools",
		"name": "Text Tools",
		"description": "Free Text Tools online tool. Fast and secure.",
		"route": "/text-tools",
		"extraSlugs": [],
		"popular": false,
		"category": "utilities"
	};
	const breadcrumbs = [
		{
			name: "Utilities Tools",
			url: "/utilities-tools",
		},
		{
			name: "Text Tools",
			url: "/text-tools",
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
						name: "Text Tools",
						description: "Free Text Tools online tool. Fast and secure.",
						url: "https://30tools.com/text-tools",
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
