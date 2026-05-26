import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ScreenResolutionTool from "@/components/tools/built-ins/ScreenResolutionTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Screen Resolution Simulator Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Screen Resolution Simulator online. Fast, secure browser-based utility with no registration. Easy to use.",
	keywords: "screen resolution simulator, free online tool, no signup, screen-resolution-simulator, free screen-resolution-simulator, Screen Resolution Simulator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/screen-resolution-simulator",
	},
	openGraph: {
		title: "Free Screen Resolution Simulator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Screen Resolution Simulator online. Fast, secure browser-based utility with no registration. Easy to use.",
		url: "https://30tools.com/screen-resolution-simulator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Screen Resolution Simulator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Screen Resolution Simulator online. Fast, secure browser-based utility with no registration. Easy to use.",
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
