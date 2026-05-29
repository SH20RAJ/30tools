import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import Base64Tool from "@/components/tools/developer/Base64Tool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Base64 Encode Online - No Signup | 30tools",
	description: "Encode plain text into Base64 format instantly. Our free online tool is perfect for developers, data transmission, and secure character representation in...",
	keywords: "base64 encode, free online tool, no signup, base64-encode, free base64-encode, Base64 Encode online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/base64-encode",
	},
	openGraph: {
		title: "Free Base64 Encode Online - No Signup | 30tools",
		description: "Encode plain text into Base64 format instantly. Our free online tool is perfect for developers, data transmission, and secure character representation in...",
		url: "https://30tools.com/base64-encode",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Base64 Encode Online - No Signup | 30tools",
		description: "Encode plain text into Base64 format instantly. Our free online tool is perfect for developers, data transmission, and secure character representation in...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/base64-encode");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<Base64Tool initialMode="encode" />
		</ToolLayout>
	);
}
