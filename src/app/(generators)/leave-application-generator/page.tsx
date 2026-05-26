import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import LeaveLetterGenerator from "@/components/tools/generators/LeaveLetterGenerator";

export const metadata = {
	title: "Free Leave Application Generator Online - No Signup | 30tools",
	description: "Create custom content with our free Leave Application Generator online. Generate high-quality outputs instantly with no registration required. Try it free now.",
	keywords: "leave-application-generator, Leave Application Generator",
	alternates: {
		canonical: "https://30tools.com/leave-application-generator",
	},
	openGraph: {
		title: "Free Leave Application Generator Online - No Signup | 30tools",
		description: "Create custom content with our free Leave Application Generator online. Generate high-quality outputs instantly with no registration required. Try it free now.",
		url: "https://30tools.com/leave-application-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Leave Application Generator Online - No Signup | 30tools",
		description: "Create custom content with our free Leave Application Generator online. Generate high-quality outputs instantly with no registration required. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/leave-application-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LeaveLetterGenerator />
		</ToolLayout>
	);
}
