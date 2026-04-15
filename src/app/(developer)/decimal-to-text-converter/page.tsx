import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free Decimal to Text Converter Online - No Signup | 30tools",
	description:
		"Convert decimal numbers (ASCII codes) to text instantly. Our free online decimal to text converter provides secure, private processing in your browser.",
	keywords:
		"decimal to text converter, dec to text, character code to text, translate numbers to letters, 30tools",
	alternates: {
		canonical: "https://30tools.com/decimal-to-text-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "decimal-to-text-converter",
		name: "Decimal to Text Converter",
		description:
			"Translate decimal codes back into text. Perfect for decoding numeric strings or learning how characters are represented by numbers.",
		route: "/decimal-to-text-converter",
		category: "developer",
		features: [
			"Instant decimal to text conversion",
			"Supports space and comma separated values",
			"Secure browser-side translation",
			"100% free with no registration",
			"User-friendly interface",
		],
		howTo: {
			steps: [
				{
					name: "Enter Decimal Codes",
					text: "Paste your numeric values (e.g., 72 101 108 108 111) into the input box.",
				},
				{
					name: "Automatic Translation",
					text: "The tool immediately translates the decimal codes into readable text.",
				},
				{
					name: "Get Result",
					text: "Copy the decoded text or download it as a text file.",
				},
			],
		},
		faqs: [
			{
				question: "What are decimal codes for text?",
				answer: "These are numeric representations of characters based on standards like ASCII. For example, the decimal code 65 corresponds to the letter 'A'.",
			},
			{
				question: "Can I convert large blocks of decimal values?",
				answer: "Yes, our tool handles large text conversions instantly without sending any data to our servers.",
			},
		],
	};

	const convertFn = (input: string) => {
		return input
			.trim()
			.split(/[\s,]+/)
			.map((dec) => {
				const num = parseInt(dec, 10);
				return isNaN(num) ? "" : String.fromCharCode(num);
			})
			.join("");
	};

	return (
		<ToolLayout tool={tool}>
			<BaseConverter
				title="Decimal to Text"
				inputPlaceholder="Enter decimal codes (e.g., 72 101 108 108 111)..."
				outputPlaceholder="Text output will appear here..."
				convertFn={convertFn}
			/>
		</ToolLayout>
	);
}
