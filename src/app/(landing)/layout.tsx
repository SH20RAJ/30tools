import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Free Online Tools Hub | 30tools",
	description:
		"Discover 365+ free online tools for image editing, PDF management, video conversion, audio processing, SEO analysis, developer utilities, and text formatting. No signup, no install — everything runs in your browser.",
	keywords:
		"free online tools hub, 30tools homepage, online utility tools, browser based tools, free web tools, no signup tools, privacy focused tools, all in one toolkit, image tools, pdf tools, video tools, developer tools, seo tools",
	openGraph: {
		title: "Free Online Tools Hub | 30tools",
		description:
			"Discover 365+ free online tools for image editing, PDF management, video conversion, and more. No signup, no install.",
		url: "https://30tools.com",
		siteName: "30tools",
		type: "website",
	},
};

export default function LandingGroupLayout({
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
