import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InternetSpeedTestTool from "@/components/tools/utilities/InternetSpeedTestTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Internet Speed Test Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Internet Speed Test online. Fast, secure browser-based utility with no registration. 100% free and secure.",
	keywords: "internet speed test, check internet speed, broadband speed test, wifi speed test, free tool, 30tools, internet-speed-test, free internet-speed-test, internet speed test online, online utility, free converter, browser tool",
	alternates: {
		canonical: "https://30tools.com/internet-speed-test",
	},
	openGraph: {
		title: "Free Internet Speed Test Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Internet Speed Test online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		url: "https://30tools.com/internet-speed-test",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Internet Speed Test Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Internet Speed Test online. Fast, secure browser-based utility with no registration. 100% free and secure.",
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
