import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import LineSorter from "@/components/tools/text/LineSorter";

export const metadata = generateToolMetadata("line-sorter", "text");

export default async function LineSorterPage({
	searchParams,
}: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
	const _params = await searchParams;
	return (
		<div className="container mx-auto px-4 py-8 md:py-12">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Alphabetize List & Sort Lines Online
				</h1>
				<p className="text-muted-foreground">
					Organize your lists instantly. Sort alphabetically, by length, or
					shuffle.
				</p>
			</div>
			<LineSorter />
		</div>
	);
}
