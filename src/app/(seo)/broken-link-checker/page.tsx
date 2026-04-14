import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Broken Link Checker Online - No Signup | 30tools",
	description: "Find broken links on any website. Check for 404 errors, redirect chains, and link health across entire websites or specific pages.",
	keywords: "broken link checker, free online tool, no signup, seo, broken link checker online, 30tools",
	alternates: {
		canonical: "https://30tools.com/broken-link-checker",
	},
	openGraph: {
		title: "Free Broken Link Checker Online - No Signup | 30tools",
		description: "Find broken links on any website. Check for 404 errors, redirect chains, and link health across entire websites or specific pages.",
		url: "https://30tools.com/broken-link-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Broken Link Checker Online - No Signup | 30tools",
		description: "Find broken links on any website. Check for 404 errors, redirect chains, and link health across entire websites or specific pages.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "broken-link-checker",
		"name": "Broken Link Checker",
		"description": "Find broken links on any website. Check for 404 errors, redirect chains, and link health across entire websites or specific pages.",
		"route": "/broken-link-checker",
		"extraSlugs": [
			"broken-link-scanner",
			"inbound-link-checker",
			"link-profile-checker"
		],
		"popular": true,
		"category": "seo"
	};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "Broken Link Checker",
			url: "/broken-link-checker",
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
						name: "Broken Link Checker",
						description: "Find broken links on any website. Check for 404 errors, redirect chains, and link health across entire websites or specific pages.",
						url: "https://30tools.com/broken-link-checker",
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
