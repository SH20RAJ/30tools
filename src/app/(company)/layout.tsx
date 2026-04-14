import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Company - 30tools",
	description:
		"Learn more about 30tools, including our mission, contact details, privacy policy, and terms of service.",
	keywords:
		"30tools company, about 30tools, contact 30tools, privacy policy, terms of service",
	openGraph: {
		title: "Company - 30tools",
		description:
			"Learn more about 30tools, including our mission, contact details, privacy policy, and terms of service.",
		url: "https://30tools.com/about",
		siteName: "30tools",
		type: "website",
	},
};

export default function CompanyGroupLayout({
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
