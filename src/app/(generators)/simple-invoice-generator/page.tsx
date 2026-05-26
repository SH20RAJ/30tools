import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import InvoiceGenerator from "@/components/tools/generators/InvoiceGenerator";

export const metadata = {
	title: "Free Simple Invoice Generator Online - No Signup | 30tools",
	description: "Create custom content with our free Simple Invoice Generator online. Generate high-quality outputs instantly with no registration required. No signup required.",
	keywords: "simple-invoice-generator, Simple Invoice Generator",
	alternates: {
		canonical: "https://30tools.com/simple-invoice-generator",
	},
	openGraph: {
		title: "Free Simple Invoice Generator Online - No Signup | 30tools",
		description: "Create custom content with our free Simple Invoice Generator online. Generate high-quality outputs instantly with no registration required. No signup required.",
		url: "https://30tools.com/simple-invoice-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Simple Invoice Generator Online - No Signup | 30tools",
		description: "Create custom content with our free Simple Invoice Generator online. Generate high-quality outputs instantly with no registration required. No signup required.",
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
