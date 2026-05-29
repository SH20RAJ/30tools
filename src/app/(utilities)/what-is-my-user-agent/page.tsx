import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UserAgentTool from "@/components/tools/built-ins/UserAgentTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free What Is My User Agent Online - No Signup | 30tools",
	description: "Free what is my user agent tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "what is my user agent, free online tool, no signup, what-is-my-user-agent, free what-is-my-user-agent, What Is My User Agent online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/what-is-my-user-agent",
	},
	openGraph: {
		title: "Free What Is My User Agent Online - No Signup | 30tools",
		description: "Free what is my user agent tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/what-is-my-user-agent",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free What Is My User Agent Online - No Signup | 30tools",
		description: "Free what is my user agent tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/what-is-my-user-agent");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UserAgentTool />
		</ToolLayout>
	);
}
