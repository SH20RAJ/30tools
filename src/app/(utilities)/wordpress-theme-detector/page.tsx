import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free WordPress Theme Detector Online - No Signup | 30tools",
	description: "Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "wordpress theme detector, free online tool, no signup, wordpress-theme-detector, free wordpress-theme-detector, Wordpress Theme Detector online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/wordpress-theme-detector",
	},
	openGraph: {
		title: "Free WordPress Theme Detector Online - No Signup | 30tools",
		description: "Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/wordpress-theme-detector",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free WordPress Theme Detector Online - No Signup | 30tools",
		description: "Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/wordpress-theme-detector");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="wordpress-theme-detector" />
		</ToolLayout>
	);
}
