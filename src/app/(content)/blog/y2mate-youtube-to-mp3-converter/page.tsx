import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Y2mate Youtube To Mp3 Converter Online - No Signup | 30tools",
	description: "Free Y2mate Youtube To Mp3 Converter online tool. Fast and secure.",
	keywords: "y2mate youtube to mp3 converter, free online tool, no signup, others, y2mate youtube to mp3 converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/y2mate-youtube-to-mp3-converter",
	},
	openGraph: {
		title: "Free Y2mate Youtube To Mp3 Converter Online - No Signup | 30tools",
		description: "Free Y2mate Youtube To Mp3 Converter online tool. Fast and secure.",
		url: "https://30tools.com/blog/y2mate-youtube-to-mp3-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Y2mate Youtube To Mp3 Converter Online - No Signup | 30tools",
		description: "Free Y2mate Youtube To Mp3 Converter online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "y2mate-youtube-to-mp3-converter",
		"name": "Y2mate Youtube To Mp3 Converter",
		"description": "Free Y2mate Youtube To Mp3 Converter online tool. Fast and secure.",
		"route": "/blog/y2mate-youtube-to-mp3-converter",
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
			name: "Y2mate Youtube To Mp3 Converter",
			url: "/blog/y2mate-youtube-to-mp3-converter",
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
						name: "Y2mate Youtube To Mp3 Converter",
						description: "Free Y2mate Youtube To Mp3 Converter online tool. Fast and secure.",
						url: "https://30tools.com/blog/y2mate-youtube-to-mp3-converter",
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
