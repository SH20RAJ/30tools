import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Currency Converter Online – Fast & No Signup | 30tools",
	description: "Convert currencies with real-time exchange rates instantly. Our free online tool supports all major global currencies for travel, business, and financial planning. 100% free, fast, and no signup required.",
	keywords: "currency converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/currency-converter",
	},
	openGraph: {
		title: "Free Currency Converter Online – Fast & No Signup | 30tools",
		description: "Convert currencies with real-time exchange rates instantly. Our free online tool supports all major global currencies for travel, business, and financial planning. 100% free, fast, and no signup required.",
		url: "https://30tools.com/currency-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Currency Converter Online – Fast & No Signup | 30tools",
		description: "Convert currencies with real-time exchange rates instantly. Our free online tool supports all major global currencies for travel, business, and financial planning. 100% free, fast, and no signup required.",
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
			<BuiltInCalculators />
		</ToolLayout>
	);
}
