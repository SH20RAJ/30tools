import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UrlCodecTool from "@/components/tools/built-ins/UrlCodecTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free URL Encode Online – Fast & No Signup | 30tools",
	description: "Free url encode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "url encode, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/url-encode",
	},
	openGraph: {
		title: "Free URL Encode Online – Fast & No Signup | 30tools",
		description: "Free url encode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/url-encode",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Encode Online – Fast & No Signup | 30tools",
		description: "Free url encode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/url-encode");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UrlCodecTool />
		</ToolLayout>
	);
}
