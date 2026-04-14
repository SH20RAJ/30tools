import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Best Free Youtube To Mp3 Converters 2025 Online - No Signup | 30tools",
	description: "Free Best Free Youtube To Mp3 Converters 2025 online tool. Fast and secure.",
	keywords: "best free youtube to mp3 converters 2025, free online tool, no signup, others, best free youtube to mp3 converters 2025 online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/best-free-youtube-to-mp3-converters-2025",
	},
	openGraph: {
		title: "Free Best Free Youtube To Mp3 Converters 2025 Online - No Signup | 30tools",
		description: "Free Best Free Youtube To Mp3 Converters 2025 online tool. Fast and secure.",
		url: "https://30tools.com/blog/best-free-youtube-to-mp3-converters-2025",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Best Free Youtube To Mp3 Converters 2025 Online - No Signup | 30tools",
		description: "Free Best Free Youtube To Mp3 Converters 2025 online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "best-free-youtube-to-mp3-converters-2025",
		"name": "Best Free Youtube To Mp3 Converters 2025",
		"description": "Free Best Free Youtube To Mp3 Converters 2025 online tool. Fast and secure.",
		"route": "/blog/best-free-youtube-to-mp3-converters-2025",
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
			name: "Best Free Youtube To Mp3 Converters 2025",
			url: "/blog/best-free-youtube-to-mp3-converters-2025",
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
						name: "Best Free Youtube To Mp3 Converters 2025",
						description: "Free Best Free Youtube To Mp3 Converters 2025 online tool. Fast and secure.",
						url: "https://30tools.com/blog/best-free-youtube-to-mp3-converters-2025",
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
