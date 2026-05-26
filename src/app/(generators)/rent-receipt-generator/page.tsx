import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import RentReceiptGenerator from "@/components/tools/generators/RentReceiptGenerator";

export const metadata = {
	title: "Free Rent Receipt Generator Online - No Signup | 30tools",
	description: "Create custom content with our free Rent Receipt Generator online. Generate high-quality outputs instantly with no registration required. 100% free and secure.",
	keywords: "rent-receipt-generator, Rent Receipt Generator, print rent receipt, hra rent receipt, rent slip maker, 30tools",
	alternates: {
		canonical: "https://30tools.com/rent-receipt-generator",
	},
	openGraph: {
		title: "Free Rent Receipt Generator Online - No Signup | 30tools",
		description: "Create custom content with our free Rent Receipt Generator online. Generate high-quality outputs instantly with no registration required. 100% free and secure.",
		url: "https://30tools.com/rent-receipt-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Rent Receipt Generator Online - No Signup | 30tools",
		description: "Create custom content with our free Rent Receipt Generator online. Generate high-quality outputs instantly with no registration required. 100% free and secure.",
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
