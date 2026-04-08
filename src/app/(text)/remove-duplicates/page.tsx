import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import RemoveDuplicates from "@/components/tools/text/RemoveDuplicates";

export const metadata = generateToolMetadata("remove-duplicates", "others");

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
