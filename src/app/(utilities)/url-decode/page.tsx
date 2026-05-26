import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UrlCodecTool from "@/components/tools/built-ins/UrlCodecTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free URL Decode Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free URL Decode online. Fast, secure browser-based utility with no registration. 100% free and easy to use.",
	keywords: "url decode, free online tool, no signup, url-decode, free url-decode, Url Decode online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/url-decode",
	},
	openGraph: {
		title: "Free URL Decode Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free URL Decode online. Fast, secure browser-based utility with no registration. 100% free and easy to use.",
		url: "https://30tools.com/url-decode",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Decode Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free URL Decode online. Fast, secure browser-based utility with no registration. 100% free and easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/url-decode");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UrlCodecTool mode="dec" />
		</ToolLayout>
	);
}
