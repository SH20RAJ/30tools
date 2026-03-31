import type { Metadata } from "next";
import CaseConverter from "@/components/tools/text/CaseConverter";

export const metadata: Metadata = {
	title: {
		absolute: "Case Converter for SEO Titles & Content | Title Case Converter Online",
	},
	description:
		"Convert text case online instantly. Perfect for SEO titles, YouTube descriptions, and developer notes. Switch between UPPERCASE, Title Case, and camelCase for free.",
	keywords: [
		"case converter for seo titles",
		"title case converter online",
		"convert text to snake case online",
		"camelcase converter for developers",
		"text case transformer free",
		"lowercase to uppercase tool",
	],
};

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	return (
		<div className="container mx-auto px-4 py-8 md:py-12">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Case Converter for SEO & Developers
				</h1>
				<p className="text-muted-foreground">
					Instantly convert text between different cases. Simply type or paste
					your text below.
				</p>
			</div>
			<CaseConverter />
		</div>
	);
}
