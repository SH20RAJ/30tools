import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BrowserDetectTool from "@/components/tools/built-ins/BrowserDetectTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free What Is My Browser Online - No Signup | 30tools",
	description: "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "what is my browser, free online tool, no signup, what-is-my-browser, free what-is-my-browser, What Is My Browser online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/what-is-my-browser",
	},
	openGraph: {
		title: "Free What Is My Browser Online - No Signup | 30tools",
		description: "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/what-is-my-browser",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free What Is My Browser Online - No Signup | 30tools",
		description: "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/what-is-my-browser");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BrowserDetectTool />
		</ToolLayout>
	);
}
