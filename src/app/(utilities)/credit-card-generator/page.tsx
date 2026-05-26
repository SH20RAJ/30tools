import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import CreditCardGeneratorTool from "@/components/tools/security/CreditCardGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Credit Card Generator Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Credit Card Generator online. Fast, secure browser-based utility with no registration. No signup required.",
	keywords: "credit card generator, free online tool, no signup, credit-card-generator, free credit-card-generator, Credit Card Generator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/credit-card-generator",
	},
	openGraph: {
		title: "Free Credit Card Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Credit Card Generator online. Fast, secure browser-based utility with no registration. No signup required.",
		url: "https://30tools.com/credit-card-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Credit Card Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Credit Card Generator online. Fast, secure browser-based utility with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/credit-card-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<CreditCardGeneratorTool />
		</ToolLayout>
	);
}
