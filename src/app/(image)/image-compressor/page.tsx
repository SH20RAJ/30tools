import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free Image Compressor Online – Fast & No Signup | 30tools",
	description: "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images instantly. Secure, browser-based processing.",
	keywords: "image compressor, free image compressor, online image compressor, no signup, 30tools, compress jpg, compress png",
	alternates: {
		canonical: "https://30tools.com/image-compressor",
	},
	openGraph: {
		title: "Free Image Compressor Online – Fast & No Signup | 30tools",
		description: "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images instantly. Secure, browser-based processing.",
		url: "https://30tools.com/image-compressor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Compressor Online – Fast & No Signup | 30tools",
		description: "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images instantly. Secure, browser-based processing.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolById("image-compressor");

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

