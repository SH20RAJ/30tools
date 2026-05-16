import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import Base64Tool from "@/components/tools/developer/Base64Tool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Base64 Tool Online – Fast & No Signup | 30tools",
	description: "Encode and decode Base64 strings instantly with our free online tool. Perfect for web development, data transmission, and working with binary data in text format. 100% free, fast, and no signup required.",
	keywords: "base64 tool, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/base64-tool",
	},
	openGraph: {
		title: "Free Base64 Tool Online – Fast & No Signup | 30tools",
		description: "Encode and decode Base64 strings instantly with our free online tool. Perfect for web development, data transmission, and working with binary data in text format. 100% free, fast, and no signup required.",
		url: "https://30tools.com/base64-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Base64 Tool Online – Fast & No Signup | 30tools",
		description: "Encode and decode Base64 strings instantly with our free online tool. Perfect for web development, data transmission, and working with binary data in text format. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/base64-tool");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<Base64Tool />
		</ToolLayout>
	);
}
