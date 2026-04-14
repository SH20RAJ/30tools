import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Zoom Recorder Online - No Signup | 30tools",
	description: "Free Zoom Recorder online. Zoom Recorder allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "zoom recorder, free online tool, no signup, others, zoom recorder online, 30tools",
	alternates: {
		canonical: "https://30tools.com/zoom-recorder",
	},
	openGraph: {
		title: "Free Zoom Recorder Online - No Signup | 30tools",
		description: "Free Zoom Recorder online. Zoom Recorder allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/zoom-recorder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Zoom Recorder Online - No Signup | 30tools",
		description: "Free Zoom Recorder online. Zoom Recorder allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "zoom-recorder",
		"name": "Zoom Recorder",
		"description": "Zoom Recorder - Coming Soon",
		"route": "/zoom-recorder",
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
			name: "Zoom Recorder",
			url: "/zoom-recorder",
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
						name: "Zoom Recorder",
						description: "Free Zoom Recorder online. Zoom Recorder allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/zoom-recorder",
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
