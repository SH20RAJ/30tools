import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import Base64Tool from "@/components/tools/developer/Base64Tool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Base64 Decode Online - No Signup | 30tools",
	description: "Decode Base64 strings back to their original plain text instantly. Our privacy-first tool processes everything in your browser, ensuring your data never...",
	keywords: "base64 decode, free online tool, no signup, base64-decode, free base64-decode, Base64 Decode online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/base64-decode",
	},
	openGraph: {
		title: "Free Base64 Decode Online - No Signup | 30tools",
		description: "Decode Base64 strings back to their original plain text instantly. Our privacy-first tool processes everything in your browser, ensuring your data never...",
		url: "https://30tools.com/base64-decode",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Base64 Decode Online - No Signup | 30tools",
		description: "Decode Base64 strings back to their original plain text instantly. Our privacy-first tool processes everything in your browser, ensuring your data never...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/base64-decode");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<Base64Tool initialMode="decode" />
		</ToolLayout>
	);
}
