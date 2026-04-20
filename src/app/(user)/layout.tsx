import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "User Area | 30tools",
	description:
		"Manage your 30tools account, saved preferences, and dashboard settings.",
	keywords:
		"30tools account, user dashboard, profile settings, creator dashboard, saved tools, tool preferences",
	openGraph: {
		title: "User Area | 30tools",
		description: "Manage your 30tools account, preferences, and dashboard.",
		url: "https://30tools.com/account",
		siteName: "30tools",
		type: "website",
	},
};

export default function UserGroupLayout({
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
