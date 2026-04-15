import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free Binary to Text Converter Online - No Signup | 30tools",
	description:
		"Translate binary code into readable text instantly. Our free online binary to text converter works entirely in your browser for maximum privacy. No signup required.",
	keywords:
		"binary to text converter, translate binary to english, binary decoder, binary to ascii, free online tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-text-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "binary-to-text-converter",
		name: "Binary to Text Converter",
		description:
			"Convert binary (base-2) code into human-readable text. This tool decodes binary sequences into ASCII/Unicode characters instantly.",
		route: "/binary-to-text-converter",
		category: "developer",
		features: [
			"Instant binary to text decoding",
			"Supports 8-bit binary formatting",
			"Privacy-first browser processing",
			"Free and no registration required",
			"Works offline after loading",
		],
		howTo: {
			steps: [
				{
					name: "Paste Binary Code",
					text: "Enter your binary sequence (e.g., 01001000 01101001) into the input box.",
				},
				{
					name: "Automatic Translation",
					text: "The tool decodes each binary block into its corresponding text character.",
				},
				{
					name: "Copy Result",
					text: "Use the copy button to save your translated text.",
				},
			],
		},
		faqs: [
			{
				question: "How do I translate binary to text?",
				answer: "Simply paste your binary code into our converter. It will interpret each 8-bit sequence as a character and display the full message instantly.",
			},
			{
				question: "Is this binary decoder private?",
				answer: "Absolutely. All decoding is done using JavaScript in your browser. Your data never leaves your computer.",
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
				title="Binary to Text"
				inputPlaceholder="Enter binary sequence (e.g., 01001000 01101001)..."
				outputPlaceholder="Text output will appear here..."
				convertFn={convertFn}
			/>
		</ToolLayout>
	);
}
