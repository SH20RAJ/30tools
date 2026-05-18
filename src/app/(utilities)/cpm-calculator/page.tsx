import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free CPM Calculator Online – Fast & No Signup | 30tools",
	description: "Calculate Cost Per Mille (CPM) for your advertising campaigns instantly. Our free online tool helps marketers and creators understand their ad spend and reach efficiency. 100% free, fast, and no signup required.",
	keywords: "cpm calculator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/cpm-calculator",
	},
	openGraph: {
		title: "Free CPM Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate Cost Per Mille (CPM) for your advertising campaigns instantly. Our free online tool helps marketers and creators understand their ad spend and reach efficiency. 100% free, fast, and no signup required.",
		url: "https://30tools.com/cpm-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CPM Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate Cost Per Mille (CPM) for your advertising campaigns instantly. Our free online tool helps marketers and creators understand their ad spend and reach efficiency. 100% free, fast, and no signup required.",
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
