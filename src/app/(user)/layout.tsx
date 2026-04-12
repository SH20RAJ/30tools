import type { Metadata } from "next";
import { GoogleFooter } from "@/components/footers/GoogleFooter";
import { GoogleNavbar } from "@/components/navigation/GoogleNavbar";

export const metadata: Metadata = {
	title: "User Area - 30tools",
	description:
		"Manage your 30tools account, dashboard, and personal blog space from the user area.",
	keywords:
		"30tools account, user dashboard, profile settings, user blogs, creator dashboard",
	openGraph: {
		title: "User Area - 30tools",
		description:
			"Manage your 30tools account, dashboard, and personal blog space.",
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
			<GoogleNavbar />
			<main className="flex-1">{children}</main>
			<GoogleFooter />
		</div>
	);
}
