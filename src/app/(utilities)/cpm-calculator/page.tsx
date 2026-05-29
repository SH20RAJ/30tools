import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free CPM Calculator Online - No Signup | 30tools",
	description: "Calculate Cost Per Mille (CPM) for your advertising campaigns instantly. Our free online tool helps marketers and creators understand their ad spend and...",
	keywords: "cpm calculator, free online tool, no signup, cpm-calculator, free cpm-calculator, Cpm Calculator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/cpm-calculator",
	},
	openGraph: {
		title: "Free CPM Calculator Online - No Signup | 30tools",
		description: "Calculate Cost Per Mille (CPM) for your advertising campaigns instantly. Our free online tool helps marketers and creators understand their ad spend and...",
		url: "https://30tools.com/cpm-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CPM Calculator Online - No Signup | 30tools",
		description: "Calculate Cost Per Mille (CPM) for your advertising campaigns instantly. Our free online tool helps marketers and creators understand their ad spend and...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/cpm-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="cpm-calculator" />
		</ToolLayout>
	);
}
