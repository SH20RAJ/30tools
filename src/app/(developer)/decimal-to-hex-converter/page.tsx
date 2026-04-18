import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";

export const metadata = {
	title: "Free Decimal to HEX Converter Online - No Signup | 30tools",
	description:
		"Convert decimal numbers to hexadecimal code instantly. Our free online decimal to HEX converter is secure, browser-based, and requires no registration.",
	keywords:
		"decimal to hex converter, dec to hex, convert number to hexadecimal, hex converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/decimal-to-hex-converter",
	},
};

export default function ToolPage() {
	const tool = {
		id: "decimal-to-hex-converter",
		name: "Decimal to HEX Converter",
		description:
			"Easy conversion from decimal (base-10) to hexadecimal (base-16). This tool provides quick results for developers working with memory addresses or colors.",
		route: "/decimal-to-hex-converter",
		category: "developer",
		features: [
			"Instant decimal to HEX conversion",
			"Supports multiple numeric inputs",
			"Uppercase HEX output format",
			"Privacy-focused browser processing",
			"100% free with no signup",
		],
		howTo: {
			steps: [
				{
					name: "Input Decimal Data",
					text: "Enter your base-10 numbers, separated by spaces or commas.",
				},
				{
					name: "Automatic HEX Mapping",
					text: "The tool translates each number into its hexadecimal counterpart instantly.",
				},
				{
					name: "Copy Output",
					text: "Copy the HEX strings directly to your clipboard.",
				},
			],
		},
		faqs: [
			{
				question: "What is hexadecimal?",
				answer: "Hexadecimal is a base-16 system that uses digits 0-9 and letters A-F. It is widely used in computer science to represent binary data compactly.",
			},
			{
				question: "Can I convert negative numbers?",
				answer: "This tool is optimized for positive integers. For negative values, standard two's complement representation may be required depending on your needs.",
			},
		],
	};

	return (
		<ToolLayout tool={tool}>
			<BaseConverter
				title="Decimal to HEX"
				inputPlaceholder="Enter decimal (e.g., 255 1024)..."
				outputPlaceholder="HEX output will appear here..."
				converterKind="decimal-to-hex"
			/>
		</ToolLayout>
	);
}
