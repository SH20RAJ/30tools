import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free Binary to ASCII Converter Online - No Signup | 30tools",
	description:
		"Convert binary code to ASCII text instantly. Free online tool to process your data with privacy-friendly browser-based workflows. 100% free, no signup required.",
	keywords:
		"binary to ascii converter, binary to text, translate binary, binary decoder online, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-ascii-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "binary-to-ascii-converter",
		name: "Binary to ASCII Converter",
		description:
			"Convert binary code back into readable ASCII text. Input your binary sequence (separated by spaces, commas, or newlines) to see the translated characters.",
		route: "/binary-to-ascii-converter",
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
					text: "Enter a binary sequence like '01001000 01100101 01101100 01101100 01101111'.",
				},
				{
					name: "Automatic Decoding",
					text: "The tool translates the binary data into readable ASCII characters immediately.",
				},
				{
					name: "Save Results",
					text: "Copy the decoded text or download it as a text file.",
				},
			],
		},
		faqs: [
			{
				question: "What format should the binary data be in?",
				answer: "This tool works best with 8-bit binary chunks separated by spaces. However, it will also process chunks separated by commas or newlines.",
			},
			{
				question: "Is my data safe?",
				answer: "Yes, all binary-to-text conversion is done entirely in your browser. No data is sent to our servers.",
			},
		],
	};

	const convertFn = (input: string) => {
		return input
			.trim()
			.split(/[\s,]+/)
			.map((bin) => {
				const num = parseInt(bin, 2);
				return isNaN(num) ? "" : String.fromCharCode(num);
			})
			.join("");
	};

	return (
		<ToolLayout tool={tool}>
			<BaseConverter
				title="Binary to ASCII"
				inputPlaceholder="Enter binary sequence (e.g., 01001000 01100101)..."
				outputPlaceholder="Text output will appear here..."
				convertFn={convertFn}
			/>
		</ToolLayout>
	);
}
