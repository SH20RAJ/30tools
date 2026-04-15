import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free Decimal to Octal Converter Online - No Signup | 30tools",
	description:
		"Convert decimal numbers to octal notation instantly. Our free online decimal to octal converter is fast, private, and works without registration.",
	keywords:
		"decimal to octal converter, dec to oct, convert number to octal, online octal converter, 30tools",
	alternates: {
		canonical: "https://30tools.com/decimal-to-octal-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "decimal-to-octal-converter",
		name: "Decimal to Octal Converter",
		description:
			"Convert decimal (base-10) numbers into the octal (base-8) system. A clean, simple tool for legacy system calculations and mathematical hobbyists.",
		route: "/decimal-to-octal-converter",
		category: "developer",
		features: [
			"Instant decimal to octal conversion",
			"Supports bulk input of numbers",
			"Privacy-centric browser processing",
			"Free for unlimited use",
			"No signup or email required",
		],
		howTo: {
			steps: [
				{
					name: "Enter Decimal Numbers",
					text: "Type your base-10 values (e.g., 64, 128) into the input box.",
				},
				{
					name: "Automatic Octal Decoding",
					text: "The tool converts each decimal number to its octal representation immediately.",
				},
				{
					name: "Export Result",
					text: "Copy the octal output or download it as a text file.",
				},
			],
		},
		faqs: [
			{
				question: "What is an octal number?",
				answer: "Octal is a base-8 numeral system that uses digits 0 through 7. It was historically popular in early computing for representing 12-bit, 24-bit, or 36-bit words.",
			},
			{
				question: "How do I convert multiple numbers?",
				answer: "Simply separate each decimal number with a space, comma, or newline in the input field.",
			},
		],
	};

	const convertFn = (input: string) => {
		return input
			.trim()
			.split(/[\s,]+/)
			.map((dec) => {
				const num = parseInt(dec, 10);
				return isNaN(num) ? "" : num.toString(8);
			})
			.join(" ");
	};

	return (
		<ToolLayout tool={tool}>
			<BaseConverter
				title="Decimal to Octal"
				inputPlaceholder="Enter decimal (e.g., 8 64 100)..."
				outputPlaceholder="Octal output will appear here..."
				convertFn={convertFn}
			/>
		</ToolLayout>
	);
}
