import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog & Guides | 30tools",
	description:
		"Read practical guides, tutorials, and tool comparisons from 30tools for text, video, PDF, and productivity workflows.",
	keywords:
		"30tools blog, online tools guides, productivity tutorials, downloader guides, text tool tutorials",
	openGraph: {
		title: "Blog & Guides | 30tools",
		description:
			"Read practical guides, tutorials, and tool comparisons from 30tools.",
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
