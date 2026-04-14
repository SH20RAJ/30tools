import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export const metadata = {
	title: "SEO Toolkit - Free Online SEO Audit & Analysis",
	description:
		"Comprehensive SEO toolkit to analyze your website's performance, technical SEO, and on-page elements.",
};

export default function SeoToolkitLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-background">
			<main className="flex-1">{children}</main>
		</div>
	);
}
