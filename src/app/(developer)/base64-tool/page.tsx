import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import Base64Tool from "@/components/tools/developer/Base64Tool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Base64 Tool Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free Base64 Tool online. Secure, local developer utility with no registration. No signup required.",
	keywords: "base64 tool, base64 encoder decoder, encode decode base64, base64 converter, free tool, 30tools, base64-tool, free base64-tool, base64 tool online, developer tool, online code utility, free developer tool",
	alternates: {
		canonical: "https://30tools.com/base64-tool",
	},
	openGraph: {
		title: "Free Base64 Tool Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free Base64 Tool online. Secure, local developer utility with no registration. No signup required.",
		url: "https://30tools.com/base64-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Base64 Tool Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free Base64 Tool online. Secure, local developer utility with no registration. No signup required.",
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
