import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UTMBuilderTool from "@/components/tools/utilities/UTMBuilderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free UTM Builder Online - No Signup | 30tools",
	description: "Easily build campaign URLs with UTM parameters for Google Analytics tracking.",
	keywords: "utm builder, free online tool, no signup, utm-builder, free utm-builder, Utm Builder online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/utm-builder",
	},
	openGraph: {
		title: "Free UTM Builder Online - No Signup | 30tools",
		description: "Easily build campaign URLs with UTM parameters for Google Analytics tracking.",
		url: "https://30tools.com/utm-builder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free UTM Builder Online - No Signup | 30tools",
		description: "Easily build campaign URLs with UTM parameters for Google Analytics tracking.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/utm-builder");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UTMBuilderTool />
		</ToolLayout>
	);
}
