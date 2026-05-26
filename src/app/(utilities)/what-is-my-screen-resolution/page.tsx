import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ScreenResolutionTool from "@/components/tools/built-ins/ScreenResolutionTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free What Is My Screen Resolution Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free What Is My Screen Resolution online. Fast, secure browser-based utility with no registration. Easy to use.",
	keywords: "what is my screen resolution, free online tool, no signup, what-is-my-screen-resolution, free what-is-my-screen-resolution, What Is My Screen Resolution online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/what-is-my-screen-resolution",
	},
	openGraph: {
		title: "Free What Is My Screen Resolution Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free What Is My Screen Resolution online. Fast, secure browser-based utility with no registration. Easy to use.",
		url: "https://30tools.com/what-is-my-screen-resolution",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free What Is My Screen Resolution Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free What Is My Screen Resolution online. Fast, secure browser-based utility with no registration. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/what-is-my-screen-resolution");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ScreenResolutionTool />
		</ToolLayout>
	);
}
