import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ExamPhotoResizer from "@/components/tools/exam/ExamPhotoResizer";

export const metadata = {
	title: "Free Compress Image to 10KB Online - No Signup | 30tools",
	description: "Compress any image file (JPG, PNG, WebP) to fit strictly under 10KB while maintaining the best possible visual clarity.",
	keywords: "compress-image-to-10kb, Compress Image to 10KB",
	alternates: {
		canonical: "https://30tools.com/compress-image-to-10kb",
	},
	openGraph: {
		title: "Free Compress Image to 10KB Online - No Signup | 30tools",
		description: "Compress any image file (JPG, PNG, WebP) to fit strictly under 10KB while maintaining the best possible visual clarity.",
		url: "https://30tools.com/compress-image-to-10kb",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Compress Image to 10KB Online - No Signup | 30tools",
		description: "Compress any image file (JPG, PNG, WebP) to fit strictly under 10KB while maintaining the best possible visual clarity.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/compress-image-to-10kb");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ExamPhotoResizer
				examName="10KB Limit"
				presetWidth={350}
				presetHeight={350}
				presetMinKb={2}
				presetMaxKb={10}
				showSignatureOption={false}
				disclaimer="Compress your images to exactly under 10KB for online form portals."
			/>
		</ToolLayout>
	);
}
