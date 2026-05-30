import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute, getToolById, getRelatedTools } from "@/lib/tools";
import ExamPhotoResizer from "@/components/tools/exam/ExamPhotoResizer";

const relatedToolIds = [
  "signature-resizer-under-20kb",
  "upsc-photo-resizer",
  "railway-exam-photo-resizer",
  "pan-card-photo-resizer",
  "passport-photo-maker",
  "photo-compressor-under-50kb",
  "compress-image-to-20kb",
  "pdf-compressor-under-200kb",
  "jpg-to-pdf-exam-forms",
  "image-to-pdf",
];

export const metadata = {
  title: "SSC Photo Resizer - Resize Photo and Signature for SSC Forms | 30tools",
  description:
    "Resize and compress SSC photos to 350x450 pixels and 20KB-50KB, plus resize signature to 10KB-20KB directly in your browser. Free, private, no signup.",
  alternates: { canonical: "https://30tools.com/ssc-photo-resizer" },
  openGraph: {
    title: "SSC Photo Resizer - Resize Photo and Signature for SSC Forms | 30tools",
    description:
      "Resize SSC photos to 350x450 pixels and 20KB-50KB, and signatures to the required 10KB-20KB band for SSC CGL, CHSL, MTS and other SSC online forms.",
    url: "https://30tools.com/ssc-photo-resizer",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSC Photo Resizer - Resize Photo and Signature for SSC Forms | 30tools",
    description:
      "Resize SSC photos to 350x450 pixels and 20KB-50KB, and signatures to 10KB-20KB. Works in the browser with no signup.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = getToolByRoute("/ssc-photo-resizer");
  if (!tool) return notFound();

  const relatedTools = relatedToolIds
    .map(getToolById)
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <ToolLayout tool={tool} relatedTools={relatedTools}>
      <ExamPhotoResizer examName="SSC" />
    </ToolLayout>
  );
}
