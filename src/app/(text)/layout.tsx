import type { Metadata } from "next";
import { GoogleFooter } from "@/components/footers/GoogleFooter";
import { GoogleNavbar } from "@/components/navigation/GoogleNavbar";

export const metadata: Metadata = {
	title: "Text Tools - Free Online Text Utilities | 30tools",
	description:
		"Free online text tools to sort, convert, clean, and format text instantly. Privacy-first and browser-based with no signup required.",
	keywords:
		"text tools, line sorter, case converter, word counter, text reverser, markdown to text, free online text utilities",
	openGraph: {
		title: "Text Tools - Free Online Text Utilities | 30tools",
		description:
			"Sort, clean, and transform text instantly with free browser-based tools.",
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
			<GoogleNavbar />
			<main className="flex-1">{children}</main>
			<GoogleFooter />
		</div>
	);
}
