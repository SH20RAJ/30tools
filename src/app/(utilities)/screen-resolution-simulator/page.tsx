import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ScreenResolutionTool from "@/components/tools/built-ins/ScreenResolutionTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Screen Resolution Simulator Online – Fast & No Signup | 30tools",
	description: "Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "screen resolution simulator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/screen-resolution-simulator",
	},
	openGraph: {
		title: "Free Screen Resolution Simulator Online – Fast & No Signup | 30tools",
		description: "Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/screen-resolution-simulator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Screen Resolution Simulator Online – Fast & No Signup | 30tools",
		description: "Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/screen-resolution-simulator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ScreenResolutionTool />
		</ToolLayout>
	);
}
