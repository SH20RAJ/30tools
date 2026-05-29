import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ExamPhotoResizer from "@/components/tools/exam/ExamPhotoResizer";

export const metadata = {
	title: "Free Compress Image to 200KB Online - No Signup | 30tools",
	description: "Compress any image file (JPG, PNG, WebP) to fit strictly under 200KB while maintaining the best possible visual clarity.",
	keywords: "compress-image-to-200kb, Compress Image to 200KB",
	alternates: {
		canonical: "https://30tools.com/compress-image-to-200kb",
	},
	openGraph: {
		title: "Free Compress Image to 200KB Online - No Signup | 30tools",
		description: "Compress any image file (JPG, PNG, WebP) to fit strictly under 200KB while maintaining the best possible visual clarity.",
		url: "https://30tools.com/compress-image-to-200kb",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Compress Image to 200KB Online - No Signup | 30tools",
		description: "Compress any image file (JPG, PNG, WebP) to fit strictly under 200KB while maintaining the best possible visual clarity.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/compress-image-to-200kb");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ExamPhotoResizer
				examName="200KB Limit"
				presetWidth={800}
				presetHeight={800}
				presetMinKb={20}
				presetMaxKb={200}
				showSignatureOption={false}
				disclaimer="Compress your images to exactly under 200KB for online form portals."
			/>
		</ToolLayout>
	);
}
