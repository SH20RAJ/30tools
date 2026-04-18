import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free Binary to Octal Converter Online - No Signup | 30tools",
	description:
		"Convert binary code to octal notation instantly. Free online tool to process your data with privacy-friendly browser-based workflows. 100% free, no signup required.",
	keywords:
		"binary to octal converter, binary to octal, translate binary, binary decoder online, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-octal-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "binary-to-octal-converter",
		name: "Binary to Octal Converter",
		description:
			"Convert binary code into octal (base-8) notation. Input your binary sequence (separated by spaces, commas, or newlines) to see the octal translation.",
		route: "/binary-to-octal-converter",
		category: "developer",
		features: [
			"Instant translation",
			"Supports space, comma, and newline binary separators",
			"Privacy-focused (browser-based)",
			"100% free and easy to use",
		],
		howTo: {
			steps: [
				{
					name: "Input Binary Data",
					text: "Enter a binary sequence like '01001000 01100101'.",
				},
				{
					name: "Automatic Translation",
					text: "The tool translates the binary data into octal values immediately.",
				},
				{
					name: "Save Results",
					text: "Copy the octal results or download them as a text file.",
				},
			],
		},
		faqs: [
			{
				question: "What is Octal?",
				answer: "Octal is a base-8 number system. It uses digits 0-7. This tool helps you convert binary (base-2) data into this format easily.",
			},
			{
				question: "Is my data safe?",
				answer: "Yes, all binary-to-octal conversion is done entirely in your browser. No data is sent to our servers.",
			},
		],
	};

	return (
		<ToolLayout tool={tool}>
			<BaseConverter
				title="Binary to Octal"
				inputPlaceholder="Enter binary sequence (e.g., 01001000 01100101)..."
				outputPlaceholder="Octal output will appear here..."
				converterKind="binary-to-octal"
			/>
		</ToolLayout>
	);
}
