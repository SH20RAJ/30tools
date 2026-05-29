import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ExamPhotoResizer from "@/components/tools/exam/ExamPhotoResizer";

export const metadata = {
	title: "Free Compress Image to 20KB Online - No Signup | 30tools",
	description: "Compress any image file (JPG, PNG, WebP) to fit strictly under 20KB while maintaining the best possible visual clarity.",
	keywords: "compress-image-to-20kb, Compress Image to 20KB, compress image 20kb, photo size under 20kb, 30tools",
	alternates: {
		canonical: "https://30tools.com/compress-image-to-20kb",
	},
	openGraph: {
		title: "Free Compress Image to 20KB Online - No Signup | 30tools",
		description: "Compress any image file (JPG, PNG, WebP) to fit strictly under 20KB while maintaining the best possible visual clarity.",
		url: "https://30tools.com/compress-image-to-20kb",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Compress Image to 20KB Online - No Signup | 30tools",
		description: "Compress any image file (JPG, PNG, WebP) to fit strictly under 20KB while maintaining the best possible visual clarity.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/compress-image-to-20kb");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ExamPhotoResizer
				examName="20KB Limit"
				presetWidth={350}
				presetHeight={350}
				presetMinKb={5}
				presetMaxKb={20}
				showSignatureOption={false}
				disclaimer="Compress your images to exactly under 20KB for online form portals."
			/>
		</ToolLayout>
	);
}
