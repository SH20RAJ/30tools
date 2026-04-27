import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free Base64 to Image Converter Online – Fast & No Signup | 30tools",
	description: "Convert Base64 strings to images (PNG, JPG, WebP) instantly. Our privacy-first tool processes data locally in your browser, ensuring your images stay secure. Free and fast Base64 decoder.",
	keywords: "base64 to image converter, free base64 to image converter, online base64 to image converter, no signup, 30tools, base64 decoder",
	alternates: {
		canonical: "https://30tools.com/base64-to-image-converter",
	},
	openGraph: {
		title: "Free Base64 to Image Converter Online – Fast & No Signup | 30tools",
		description: "Convert Base64 strings to images (PNG, JPG, WebP) instantly. Our privacy-first tool processes data locally in your browser, ensuring your images stay secure. Free and fast Base64 decoder.",
		url: "https://30tools.com/base64-to-image-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Base64 to Image Converter Online – Fast & No Signup | 30tools",
		description: "Convert Base64 strings to images (PNG, JPG, WebP) instantly. Our privacy-first tool processes data locally in your browser, ensuring your images stay secure. Free and fast Base64 decoder.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolById("base64-to-image-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<>
			<ToolSEOLayout toolId={tool.id}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolSEOLayout>
		</>
	);
}

