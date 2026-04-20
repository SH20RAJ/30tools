import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Text Tools - Free Online Text Utilities | 30tools",
	description:
		"Free online text tools: word counter, case converter, line sorter, find & replace with regex, duplicate remover, text reverser, and Markdown converter. Unicode-aware, privacy-first, browser-based. No signup required.",
	keywords:
		"text tools, line sorter, case converter, word counter, text reverser, markdown to text, free online text utilities, text case changer, remove duplicate lines, find and replace online, text formatter, character counter, reading time calculator, uppercase converter, lowercase converter",
	openGraph: {
		title: "Text Tools - Free Online Text Utilities | 30tools",
		description:
			"Count words, convert case, sort lines, and clean text instantly with free browser-based tools. No signup required.",
		url: "https://30tools.com/text-tools",
		siteName: "30tools",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Text Tools - Free Online Text Utilities",
		description:
			"Sort, clean, and transform text instantly with free browser-based tools.",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	name: "Text Tools",
	description:
		"A collection of free online text utilities for sorting, cleaning, and formatting content.",
	url: "https://30tools.com/text-tools",
};

export default function TextGroupLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<main className="flex-1">{children}</main>
		</div>
	);
}
