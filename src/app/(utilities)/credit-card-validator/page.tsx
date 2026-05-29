import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import CreditCardValidatorTool from "@/components/tools/security/CreditCardValidatorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Credit Card Validator Online - No Signup | 30tools",
	description: "Check if a credit card number is valid using the Luhn algorithm instantly. Our free online tool helps you verify card formats and identify card types for...",
	keywords: "credit card validator, free online tool, no signup, credit-card-validator, free credit-card-validator, Credit Card Validator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/credit-card-validator",
	},
	openGraph: {
		title: "Free Credit Card Validator Online - No Signup | 30tools",
		description: "Check if a credit card number is valid using the Luhn algorithm instantly. Our free online tool helps you verify card formats and identify card types for...",
		url: "https://30tools.com/credit-card-validator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Credit Card Validator Online - No Signup | 30tools",
		description: "Check if a credit card number is valid using the Luhn algorithm instantly. Our free online tool helps you verify card formats and identify card types for...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/credit-card-validator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<CreditCardValidatorTool />
		</ToolLayout>
	);
}
