import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free Image Converter Online – Fast & No Signup | 30tools",
	description: "Convert images between any format (PNG, JPG, WEBP, BMP, GIF, SVG) online for free. Fast, high-quality conversion with batch support and 100% privacy.",
	keywords: "image converter, free image converter, online image converter, no signup, 30tools, convert png to jpg, convert jpg to webp",
	alternates: {
		canonical: "https://30tools.com/image-converter",
	},
	openGraph: {
		title: "Free Image Converter Online – Fast & No Signup | 30tools",
		description: "Convert images between any format (PNG, JPG, WEBP, BMP, GIF, SVG) online for free. Fast, high-quality conversion with batch support and 100% privacy.",
		url: "https://30tools.com/image-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Converter Online – Fast & No Signup | 30tools",
		description: "Convert images between any format (PNG, JPG, WEBP, BMP, GIF, SVG) online for free. Fast, high-quality conversion with batch support and 100% privacy.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolById("image-converter");

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

