import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import RentReceiptGenerator from "@/components/tools/generators/RentReceiptGenerator";

export const metadata = {
	title: "Free Rent Receipt Generator Online - No Signup | 30tools",
	description: "Generate HRA-compliant rent receipts online for free. Fill in tenant, landlord, and rent details, and download print-ready receipts instantly.",
	keywords: "rent-receipt-generator, Rent Receipt Generator, print rent receipt, hra rent receipt, rent slip maker, 30tools",
	alternates: {
		canonical: "https://30tools.com/rent-receipt-generator",
	},
	openGraph: {
		title: "Free Rent Receipt Generator Online - No Signup | 30tools",
		description: "Generate HRA-compliant rent receipts online for free. Fill in tenant, landlord, and rent details, and download print-ready receipts instantly.",
		url: "https://30tools.com/rent-receipt-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Rent Receipt Generator Online - No Signup | 30tools",
		description: "Generate HRA-compliant rent receipts online for free. Fill in tenant, landlord, and rent details, and download print-ready receipts instantly.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/rent-receipt-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<RentReceiptGenerator />
		</ToolLayout>
	);
}
