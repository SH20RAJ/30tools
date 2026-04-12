import type { Metadata } from "next";
import { GoogleFooter } from "@/components/footers/GoogleFooter";
import { GoogleNavbar } from "@/components/navigation/GoogleNavbar";

export const metadata: Metadata = {
	title: "Free Online Tools Hub - 30tools",
	description:
		"Explore the 30tools landing hub for fast, private, and free online tools across image, PDF, video, text, and developer categories.",
	keywords:
		"free online tools hub, 30tools homepage, online utility tools, browser based tools",
	openGraph: {
		title: "Free Online Tools Hub - 30tools",
		description:
			"Explore fast, private, and free online tools across multiple categories.",
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
			<GoogleNavbar />
			<main className="flex-1">{children}</main>
			<GoogleFooter />
		</div>
	);
}
