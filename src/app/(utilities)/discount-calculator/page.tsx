import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Discount Calculator Online - No Signup | 30tools",
	description: "Calculate the final price after discounts and taxes instantly. Our free online tool helps you find the best deals and savings while shopping.",
	keywords: "discount calculator, free online tool, no signup, discount-calculator, free discount-calculator, Discount Calculator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/discount-calculator",
	},
	openGraph: {
		title: "Free Discount Calculator Online - No Signup | 30tools",
		description: "Calculate the final price after discounts and taxes instantly. Our free online tool helps you find the best deals and savings while shopping.",
		url: "https://30tools.com/discount-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Discount Calculator Online - No Signup | 30tools",
		description: "Calculate the final price after discounts and taxes instantly. Our free online tool helps you find the best deals and savings while shopping.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/discount-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="discount-calculator" />
		</ToolLayout>
	);
}
