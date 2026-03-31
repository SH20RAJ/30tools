import type { Metadata } from "next";
import RemoveDuplicates from "@/components/tools/text/RemoveDuplicates";

export const metadata: Metadata = {
	title: {
		absolute: "Remove Duplicates from List Online Free | Clean Duplicate Lines",
	},
	description:
		"Remove duplicates from any list online for free. Best tool to clean duplicate lines, dedup text, and organize your data instantly. Secure and easy to use.",
	keywords: [
		"remove duplicates from list online",
		"clean duplicate lines",
		"dedup list free",
		"remove repetitive text online",
		"duplicate line remover",
		"text deduplication tool",
		"online list cleaner",
	],
};

export default async function ToolPage({ searchParams }) {
	const _params = await searchParams;
	return (
		<div className="container mx-auto px-4 py-8 md:py-12">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Remove Duplicates from List Online
				</h1>
				<p className="text-muted-foreground">
					Paste your text list below to automatically remove repetitive lines.
				</p>
			</div>
			<RemoveDuplicates />
		</div>
	);
}
