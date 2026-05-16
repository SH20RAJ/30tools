import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LegalTemplateGenerator from "@/components/tools/built-ins/LegalTemplateGenerator";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Disclaimer Generator Online – Fast & No Signup | 30tools",
	description: "Create professional disclaimers for your website or app instantly. Our free online generator helps you protect your business and comply with legal requirements. 100% free, fast, and no signup required.",
	keywords: "disclaimer generator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/disclaimer-generator",
	},
	openGraph: {
		title: "Free Disclaimer Generator Online – Fast & No Signup | 30tools",
		description: "Create professional disclaimers for your website or app instantly. Our free online generator helps you protect your business and comply with legal requirements. 100% free, fast, and no signup required.",
		url: "https://30tools.com/disclaimer-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Disclaimer Generator Online – Fast & No Signup | 30tools",
		description: "Create professional disclaimers for your website or app instantly. Our free online generator helps you protect your business and comply with legal requirements. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/disclaimer-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LegalTemplateGenerator />
		</ToolLayout>
	);
}
