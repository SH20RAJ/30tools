import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Convert Youtube Videos High Quality 320kbps Mp3 Online - No Signup | 30tools",
	description: "Free Convert Youtube Videos High Quality 320kbps Mp3 online tool. Fast and secure.",
	keywords: "convert youtube videos high quality 320kbps mp3, free online tool, no signup, others, convert youtube videos high quality 320kbps mp3 online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/convert-youtube-videos-high-quality-320kbps-mp3",
	},
	openGraph: {
		title: "Free Convert Youtube Videos High Quality 320kbps Mp3 Online - No Signup | 30tools",
		description: "Free Convert Youtube Videos High Quality 320kbps Mp3 online tool. Fast and secure.",
		url: "https://30tools.com/blog/convert-youtube-videos-high-quality-320kbps-mp3",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Convert Youtube Videos High Quality 320kbps Mp3 Online - No Signup | 30tools",
		description: "Free Convert Youtube Videos High Quality 320kbps Mp3 online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "convert-youtube-videos-high-quality-320kbps-mp3",
		"name": "Convert Youtube Videos High Quality 320kbps Mp3",
		"description": "Free Convert Youtube Videos High Quality 320kbps Mp3 online tool. Fast and secure.",
		"route": "/blog/convert-youtube-videos-high-quality-320kbps-mp3",
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
			name: "Convert Youtube Videos High Quality 320kbps Mp3",
			url: "/blog/convert-youtube-videos-high-quality-320kbps-mp3",
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
						name: "Convert Youtube Videos High Quality 320kbps Mp3",
						description: "Free Convert Youtube Videos High Quality 320kbps Mp3 online tool. Fast and secure.",
						url: "https://30tools.com/blog/convert-youtube-videos-high-quality-320kbps-mp3",
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
