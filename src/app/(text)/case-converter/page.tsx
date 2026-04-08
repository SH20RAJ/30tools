import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import CaseConverter from "@/components/tools/text/CaseConverter";

export const metadata = generateToolMetadata("case-converter", "text");

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
