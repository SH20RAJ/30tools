import type { Metadata } from "next";
import LineSorter from "@/components/tools/text/LineSorter";

export const metadata: Metadata = {
	title: {
		absolute: "Alphabetize List Online Free | Sort Lines Alphabetically Online",
	},
	description:
		"Alphabetize lists online for free instantly. Best tool to sort lines alphabetically (A-Z, Z-A), by length, or randomize order. Perfect for developers and designers.",
	keywords: [
		"alphabetize list online free",
		"sort lines alphabetically",
		"list sorter tool",
		"randomize list online",
		"text sorter online",
		"alphabetizer for lists",
		"sort text by length",
	],
};

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
