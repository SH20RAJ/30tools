import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import InvoiceGenerator from "@/components/tools/generators/InvoiceGenerator";

export const metadata = {
	title: "Free Simple Invoice Generator Online - No Signup | 30tools",
	description: "Create and print professional billing invoices online. Add custom line items, tax, discount details, and generate print-ready PDF layouts instantly.",
	keywords: "simple-invoice-generator, Simple Invoice Generator",
	alternates: {
		canonical: "https://30tools.com/simple-invoice-generator",
	},
	openGraph: {
		title: "Free Simple Invoice Generator Online - No Signup | 30tools",
		description: "Create and print professional billing invoices online. Add custom line items, tax, discount details, and generate print-ready PDF layouts instantly.",
		url: "https://30tools.com/simple-invoice-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Simple Invoice Generator Online - No Signup | 30tools",
		description: "Create and print professional billing invoices online. Add custom line items, tax, discount details, and generate print-ready PDF layouts instantly.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/simple-invoice-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InvoiceGenerator />
		</ToolLayout>
	);
}
