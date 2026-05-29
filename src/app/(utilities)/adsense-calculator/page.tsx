import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Adsense Calculator Online - No Signup | 30tools",
	description: "Free adsense calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "adsense calculator, free online tool, no signup, adsense-calculator, free adsense-calculator, Adsense Calculator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/adsense-calculator",
	},
	openGraph: {
		title: "Free Adsense Calculator Online - No Signup | 30tools",
		description: "Free adsense calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/adsense-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Adsense Calculator Online - No Signup | 30tools",
		description: "Free adsense calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/adsense-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="adsense-calculator" />
		</ToolLayout>
	);
}
