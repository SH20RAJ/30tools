import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free Decimal to Binary Converter Online - No Signup | 30tools",
	description:
		"Convert decimal numbers to binary code instantly. Our free online decimal to binary converter is privacy-focused, fast, and requires no signup.",
	keywords:
		"decimal to binary converter, dec to bin, convert number to binary, online decimal converter, 30tools",
	alternates: {
		canonical: "https://30tools.com/decimal-to-binary-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "decimal-to-binary-converter",
		name: "Decimal to Binary Converter",
		description:
			"Transform standard decimal (base-10) numbers into binary (base-2) format. Ideal for understanding computer data representation and coding.",
		route: "/decimal-to-binary-converter",
		category: "developer",
		features: [
			"Instant decimal to binary conversion",
			"Padded 8-bit output option",
			"Secure, local browser processing",
			"Free for all users, no signup",
			"Mobile-responsive design",
		],
		howTo: {
			steps: [
				{
					name: "Enter Decimal Numbers",
					text: "Type your numbers (e.g., 10, 255) into the input field, separated by spaces or commas.",
				},
				{
					name: "View Binary Output",
					text: "The tool immediately shows the binary equivalent for every number entered.",
				},
				{
					name: "Save Results",
					text: "Copy the binary blocks or download them as a text file.",
				},
			],
		},
		faqs: [
			{
				question: "How is a decimal number converted to binary?",
				answer: "The decimal number is repeatedly divided by 2, and the remainders are recorded in reverse order to form the binary representation.",
			},
			{
				question: "What is the maximum number I can convert?",
				answer: "This tool handles any standard integer size instantly within your browser.",
			},
		],
	};

	return (
		<ToolLayout tool={tool}>
			<BaseConverter
				title="Decimal to Binary"
				inputPlaceholder="Enter decimal numbers (e.g., 10 25)..."
				outputPlaceholder="Binary output will appear here..."
				converterKind="decimal-to-binary"
			/>
		</ToolLayout>
	);
}
