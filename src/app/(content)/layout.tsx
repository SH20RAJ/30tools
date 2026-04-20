import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog & Guides | 30tools",
	description:
		"Practical guides, step-by-step tutorials, and tool comparisons from 30tools. Learn how to compress images, merge PDFs, download videos, optimize SEO, and boost productivity with free online tools.",
	keywords:
		"30tools blog, online tools guides, productivity tutorials, downloader guides, text tool tutorials, image compression guide, pdf merge tutorial, video download how to, seo tips, free tools blog",
	openGraph: {
		title: "Blog & Guides | 30tools",
		description:
			"Practical guides, tutorials, and tool comparisons for free online productivity tools.",
		url: "https://30tools.com/blog",
		siteName: "30tools",
		type: "website",
	},
};

export default function ContentGroupLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<main className="flex-1">{children}</main>
		</div>
	);
}
