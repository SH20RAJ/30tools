import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "User Area - 30tools",
	description:
		"Manage your 30tools account and dashboard from the user area.",
	keywords:
		"30tools account, user dashboard, profile settings, creator dashboard",
	openGraph: {
		title: "User Area - 30tools",
		description:
			"Manage your 30tools account and dashboard.",
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
