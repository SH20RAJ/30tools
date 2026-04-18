import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free Binary to Decimal Converter Online - No Signup | 30tools",
	description:
		"Convert binary numbers to decimal instantly. Our free online binary to decimal converter works without signup, providing privacy-focused processing in your browser.",
	keywords:
		"binary to decimal converter, bin to dec, translate binary to numbers, binary decoder online, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-decimal-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "binary-to-decimal-converter",
		name: "Binary to Decimal Converter",
		description:
			"Convert binary (base-2) values into decimal (base-10) numbers. Perfect for developers, students, and engineers needing quick, private conversions.",
		route: "/binary-to-decimal-converter",
		category: "developer",
		features: [
			"Real-time binary to decimal conversion",
			"Supports multiple binary blocks",
			"100% browser-based privacy",
			"No registration or signup required",
			"Free for unlimited use",
		],
		howTo: {
			steps: [
				{
					name: "Enter Binary Number",
					text: "Paste your binary sequence (e.g., 1010 1101) into the input area.",
				},
				{
					name: "Automatic Conversion",
					text: "The tool instantly calculates the decimal equivalent for each binary block.",
				},
				{
					name: "Copy Result",
					text: "Copy the decimal output to your clipboard or download it as a file.",
				},
			],
		},
		faqs: [
			{
				question: "What is a binary to decimal converter?",
				answer: "It's a tool that translates numbers from the binary system (base-2, using 0s and 1s) to the decimal system (base-10, the standard number system we use daily).",
			},
			{
				question: "Can I convert large binary numbers?",
				answer: "Yes, this tool can handle large binary sequences instantly directly in your browser.",
			},
		],
	};

	return (
		<ToolLayout tool={tool}>
			<BaseConverter
				title="Binary to Decimal"
				inputPlaceholder="Enter binary (e.g., 1010 1111)..."
				outputPlaceholder="Decimal output will appear here..."
				converterKind="binary-to-decimal"
			/>
		</ToolLayout>
	);
}
