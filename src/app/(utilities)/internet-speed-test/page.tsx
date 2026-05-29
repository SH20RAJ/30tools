import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InternetSpeedTestTool from "@/components/tools/utilities/InternetSpeedTestTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Internet Speed Test Online - No Signup | 30tools",
	description: "Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly.",
	keywords: "internet speed test, check internet speed, broadband speed test, wifi speed test, free tool, 30tools, internet-speed-test, free internet-speed-test, internet speed test online, online utility, free converter, browser tool",
	alternates: {
		canonical: "https://30tools.com/internet-speed-test",
	},
	openGraph: {
		title: "Free Internet Speed Test Online - No Signup | 30tools",
		description: "Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly.",
		url: "https://30tools.com/internet-speed-test",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Internet Speed Test Online - No Signup | 30tools",
		description: "Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/internet-speed-test");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InternetSpeedTestTool />
		</ToolLayout>
	);
}
