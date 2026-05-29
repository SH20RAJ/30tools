import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Redirect Checker Online - No Signup | 30tools",
	description: "Free redirect checker tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "redirect checker, free online tool, no signup, redirect-checker, free redirect-checker, Redirect Checker online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/redirect-checker",
	},
	openGraph: {
		title: "Free Redirect Checker Online - No Signup | 30tools",
		description: "Free redirect checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/redirect-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Redirect Checker Online - No Signup | 30tools",
		description: "Free redirect checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/redirect-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="redirect-checker" />
		</ToolLayout>
	);
}
