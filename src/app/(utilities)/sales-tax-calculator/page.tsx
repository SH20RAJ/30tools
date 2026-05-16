import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Sales Tax Calculator Online – Fast & No Signup | 30tools",
	description: "Free sales tax calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "sales tax calculator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/sales-tax-calculator",
	},
	openGraph: {
		title: "Free Sales Tax Calculator Online – Fast & No Signup | 30tools",
		description: "Free sales tax calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/sales-tax-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Sales Tax Calculator Online – Fast & No Signup | 30tools",
		description: "Free sales tax calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/sales-tax-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators />
		</ToolLayout>
	);
}
