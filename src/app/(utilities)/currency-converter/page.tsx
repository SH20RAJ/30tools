import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Currency Converter Online - No Signup | 30tools",
	description: "Convert currencies with real-time exchange rates instantly. Our free online tool supports all major global currencies for travel, business, and financial...",
	keywords: "currency converter, exchange rate, convert currency, money converter, forex converter, free tool, 30tools, currency-converter, free currency-converter, currency converter online, online utility, free converter",
	alternates: {
		canonical: "https://30tools.com/currency-converter",
	},
	openGraph: {
		title: "Free Currency Converter Online - No Signup | 30tools",
		description: "Convert currencies with real-time exchange rates instantly. Our free online tool supports all major global currencies for travel, business, and financial...",
		url: "https://30tools.com/currency-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Currency Converter Online - No Signup | 30tools",
		description: "Convert currencies with real-time exchange rates instantly. Our free online tool supports all major global currencies for travel, business, and financial...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/currency-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="currency-converter" />
		</ToolLayout>
	);
}
