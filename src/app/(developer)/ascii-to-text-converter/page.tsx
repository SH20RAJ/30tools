import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free ASCII to Text Converter Online - No Signup | 30tools",
	description:
		"Convert ASCII decimal codes to plain text instantly. Free online tool to process your data with privacy-friendly browser-based workflows. 100% free, no signup required.",
	keywords:
		"ascii to text converter, ascii decimal to text, character code to text, ascii converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/ascii-to-text-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "ascii-to-text-converter",
		name: "ASCII to Text Converter",
		description:
			"Convert ASCII decimal codes back to text. Input a series of decimal values (separated by spaces, commas, or newlines) to see the decoded characters.",
		route: "/ascii-to-text-converter",
		category: "developer",
		features: [
			"Instant decoding",
			"Supports space, comma, and newline separators",
			"Privacy-focused processing",
			"100% free and easy to use",
		],
		howTo: {
			steps: [
				{
					name: "Input ASCII Codes",
					text: "Enter a sequence of decimal values like '72 101 108 108 111'.",
				},
				{
					name: "Automatic Translation",
					text: "The tool converts these codes into readable text immediately.",
				},
				{
					name: "Save Results",
					text: "Copy the decoded text or download it as a text file.",
				},
			],
		},
		faqs: [
			{
				question: "What is an ASCII decimal code?",
				answer: "Each character is represented by a number (e.g., 'H' is 72). This tool reverses that mapping to turn numbers back into text.",
			},
			{
				question: "Can I use separators other than spaces?",
				answer: "Yes, you can separate the numbers with spaces, commas, or newlines.",
			},
		],
	};

	const convertFn = (input: string) => {
		return input
			.trim()
			.split(/[\s,]+/)
			.map((code) => {
				const num = parseInt(code, 10);
				return isNaN(num) ? "" : String.fromCharCode(num);
			})
			.join("");
	};

	return (
		<ToolLayout tool={tool}>
			<BaseConverter
				title="ASCII to Text"
				inputPlaceholder="Enter ASCII codes (e.g., 72 101 108 108 111)..."
				outputPlaceholder="Text output will appear here..."
				convertFn={convertFn}
			/>
		</ToolLayout>
	);
}
