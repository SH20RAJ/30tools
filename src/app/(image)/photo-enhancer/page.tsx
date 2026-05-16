import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PhotoEnhancerTool from "@/components/tools/image/PhotoEnhancerTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Photo Enhancer Online – Fast & No Signup | 30tools",
	description: "Enhance photo quality with AI-powered image enhancement 100% free, fast, and no signup required.",
	keywords: "photo enhancer, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/photo-enhancer",
	},
	openGraph: {
		title: "Free Photo Enhancer Online – Fast & No Signup | 30tools",
		description: "Enhance photo quality with AI-powered image enhancement 100% free, fast, and no signup required.",
		url: "https://30tools.com/photo-enhancer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Photo Enhancer Online – Fast & No Signup | 30tools",
		description: "Enhance photo quality with AI-powered image enhancement 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/photo-enhancer");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PhotoEnhancerTool />
		</ToolLayout>
	);
}
