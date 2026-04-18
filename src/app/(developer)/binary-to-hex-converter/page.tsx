import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free Binary to HEX Converter Online - No Signup | 30tools",
	description:
		"Convert binary code to hexadecimal instantly. Free online tool to process your data with privacy-friendly browser-based workflows. 100% free, no signup required.",
	keywords:
		"binary to hex converter, binary to hexadecimal, translate binary, binary decoder online, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-hex-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "binary-to-hex-converter",
		name: "Binary to HEX Converter",
		description:
			"Convert binary code into hexadecimal notation. Input your binary sequence (separated by spaces, commas, or newlines) to see the HEX translation.",
		route: "/binary-to-hex-converter",
		category: "developer",
		features: [
			"Instant conversion",
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
					text: "The tool translates the binary data into hexadecimal values immediately.",
				},
				{
					name: "Save Results",
					text: "Copy the HEX results or download them as a text file.",
				},
			],
		},
		faqs: [
			{
				question: "What is the result of Binary to HEX conversion?",
				answer: "This tool takes binary (base-2) and converts it into hexadecimal (base-16), a common format in computing. For example, '01001000' becomes '48'.",
			},
			{
				question: "Is my data safe?",
				answer: "Yes, all binary-to-hex conversion is done entirely in your browser. No data is sent to our servers.",
			},
		],
	};

	return (
		<ToolLayout tool={tool}>
			<BaseConverter
				title="Binary to HEX"
				inputPlaceholder="Enter binary sequence (e.g., 01001000 01100101)..."
				outputPlaceholder="HEX output will appear here..."
				converterKind="binary-to-hex"
			/>
		</ToolLayout>
	);
}
