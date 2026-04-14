import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Instagram Reel Maker Online - No Signup | 30tools",
	description: "Free Instagram Reel Maker online. Instagram Reel Maker allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "instagram reel maker, free online tool, no signup, others, instagram reel maker online, 30tools",
	alternates: {
		canonical: "https://30tools.com/instagram-reel-maker",
	},
	openGraph: {
		title: "Free Instagram Reel Maker Online - No Signup | 30tools",
		description: "Free Instagram Reel Maker online. Instagram Reel Maker allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/instagram-reel-maker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Reel Maker Online - No Signup | 30tools",
		description: "Free Instagram Reel Maker online. Instagram Reel Maker allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "instagram-reel-maker",
		"name": "Instagram Reel Maker",
		"description": "Instagram Reel Maker - Coming Soon",
		"route": "/instagram-reel-maker",
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
			name: "Instagram Reel Maker",
			url: "/instagram-reel-maker",
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
						name: "Instagram Reel Maker",
						description: "Free Instagram Reel Maker online. Instagram Reel Maker allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/instagram-reel-maker",
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
