import ToolLayout from "@/components/tools/shared/ToolLayout";

export async function generateMetadata({ params }) {
	const { username, slug } = await params;
	const name = slug
		.split("-")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");
	return {
		title: `${name} by ${username} Online - No Signup | 30tools`,
		description: `Free ${name} tool by ${username}. Fast and secure. 100% free, no signup required, and privacy-focused processing in your browser.`,
		keywords: `${slug}, ${username}, free online tool, no signup, 30tools`,
		alternates: {
			canonical: `https://30tools.com/blogs/${username}/${slug}`,
		},
		openGraph: {
			title: `${name} by ${username} Online - No Signup | 30tools`,
			description: `Free ${name} tool by ${username}. Fast and secure. 100% free, no signup required, and privacy-focused processing in your browser.`,
			url: `https://30tools.com/blogs/${username}/${slug}`,
			siteName: "30tools",
			images: [{ url: "/og-image.jpg" }],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: `${name} by ${username} Online - No Signup | 30tools`,
			description: `Free ${name} tool by ${username}. Fast and secure. 100% free, no signup required, and privacy-focused processing in your browser.`,
			images: ["/og-image.jpg"],
		},
		robots: { index: true, follow: true },
	};
}

export default async function ToolPage({ params }) {
	const { username, slug } = await params;
	const name = slug
		.split("-")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");

	const tool = {
		id: slug,
		name: name,
		description: `Free ${name} tool by ${username}. Fast and secure.`,
		route: `/blogs/${username}/${slug}`,
		extraSlugs: [],
		popular: false,
		category: "others",
	};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: name,
			url: `/blogs/${username}/${slug}`,
		},
	];

	const relatedTools = [
		{
			id: "ai-video-summarizer",
			name: "Ai Video Summarizer",
			description: "Ai Video Summarizer - Coming Soon",
			route: "/ai-video-summarizer",
			extraSlugs: [],
			popular: false,
			category: "others",
		},
		{
			id: "all-downloaders",
			name: "All Downloaders",
			description: "All Downloaders - Coming Soon",
			route: "/all-downloaders",
			extraSlugs: [],
			popular: false,
			category: "others",
		},
		{
			id: "audio-equalizer",
			name: "Audio Equalizer",
			description: "Audio Equalizer - Coming Soon",
			route: "/audio-equalizer",
			extraSlugs: [
				"audio-tools",
				"audio-trimmer",
				"change-audio-format",
				"mp4-audio-ripper",
				"optimize-audio-files",
				"shorten-audio-clip",
				"split-audio-file",
			],
			popular: false,
			category: "others",
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
						name: name,
						description: tool.description,
						url: `https://30tools.com${tool.route}`,
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<div>{/* Tool component placeholder */}</div>
			</ToolLayout>
		</>
	);
}
