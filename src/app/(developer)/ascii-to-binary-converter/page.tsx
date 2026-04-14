import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free ASCII to Binary Converter Online - No Signup | 30tools",
	description:
		"Convert ASCII text to binary code instantly. Free online tool to process your data with privacy-friendly browser-based workflows. 100% free, no signup required.",
	keywords:
		"ascii to binary converter, text to binary, ascii code to binary, binary converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/ascii-to-binary-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "ascii-to-binary-converter",
		name: "ASCII to Binary Converter",
		description:
			"Convert ASCII text to binary code instantly. Every character is transformed into its 8-bit binary representation.",
		route: "/ascii-to-binary-converter",
		category: "developer",
		features: [
			"Real-time conversion",
			"8-bit binary output",
			"Space-separated binary blocks",
			"Privacy-focused (browser-based)",
			"Free and no signup",
		],
		howTo: {
			steps: [
				{
					name: "Enter ASCII Text",
					text: "Type or paste your text into the input field.",
				},
				{
					name: "Get Binary Code",
					text: "The tool automatically converts each character to its 8-bit binary value.",
				},
				{
					name: "Copy or Download",
					text: "Click the copy or download button to save your binary result.",
				},
			],
		},
		faqs: [
			{
				question: "How does ASCII to Binary conversion work?",
				answer: "Each character in ASCII has a decimal code (e.g., 'A' is 65). This decimal value is then converted into a base-2 (binary) number, typically padded to 8 bits.",
			},
			{
				question: "Is this tool secure?",
				answer: "Yes, all processing happens locally in your browser. Your data is never sent to any server.",
			},
		],
	};

	const convertFn = (input: string) => {
		return input
			.split("")
			.map((char) => {
				const binary = char.charCodeAt(0).toString(2);
				return "00000000".slice(binary.length) + binary;
			})
			.join(" ");
	};

	return (
		<ToolLayout tool={tool}>
			<BaseConverter
				title="ASCII to Binary"
				inputPlaceholder="Enter text here (e.g., Hello)..."
				outputPlaceholder="Binary output will appear here..."
				convertFn={convertFn}
			/>
		</ToolLayout>
	);
}
