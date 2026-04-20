import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Company | 30tools",
	description:
		"Learn about 30tools — our mission to provide 365+ free browser-based tools, contact information, privacy policy, and terms of service. Privacy-first, no registration required.",
	keywords:
		"30tools company, about 30tools, contact 30tools, privacy policy, terms of service, free online tools company, privacy focused tools, no signup tools",
	openGraph: {
		title: "Company | 30tools",
		description:
			"Learn about 30tools — our mission, contact details, privacy policy, and terms of service.",
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
