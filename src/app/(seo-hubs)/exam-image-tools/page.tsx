import type { Metadata } from "next";
import SeoHubPage from "@/components/seo/SeoHubPage";

export const metadata: Metadata = {
	title: "Exam Image Tools - Photo and Signature Resizers | 30tools",
	description: "Resize and compress photos, signatures, PDFs, and form images for SSC, UPSC, NEET, JEE, CUET, railway, and bank exam uploads.",
	alternates: { canonical: "https://30tools.com/exam-image-tools" },
};

export default function ExamImageToolsHub() {
	return (
		<SeoHubPage
			title="Exam Image Tools"
			description="Specific photo, signature, DPI, and KB-size tools for Indian exam forms and application portals. Built for exact-use searches, not generic image editing."
			route="/exam-image-tools"
			categoryNames={["Exam Image Tools"]}
			guideTitle="How To Prepare Exam Uploads"
			guidePoints={[
				"Start with the official notification and note dimensions, format, and KB limits.",
				"Crop before compression so the face, signature, or document area remains readable.",
				"Use exact target pages such as 20KB, 50KB, SSC, UPSC, NEET, or JEE when available.",
				"Download and inspect the final image before uploading it to the official portal.",
			]}
			faqs={[
				{ question: "Are these official exam specifications?", answer: "No. They are practical presets for common upload requirements. Always verify the current official notification." },
				{ question: "Are files uploaded to 30tools?", answer: "Image processing runs in the browser when possible, and 30tools does not store your files." },
				{ question: "Which pages should generic image tools link to?", answer: "Image Compressor and Image Resizer should link to exact-use pages like 10KB, 20KB, SSC Photo Resizer, and Resize Image in CM." },
			]}
		/>
	);
}
