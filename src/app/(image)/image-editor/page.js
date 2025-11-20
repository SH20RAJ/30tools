import ImageEditor from "@/components/tools/image/ImageEditorTool";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";

export const metadata = {
  title: "Image Editor - Edit Images Online | 30tools",
  description:
    "Edit images online with filters, effects, and basic editing tools. Adjust brightness, contrast, saturation, and apply various filters to enhance your photos.",
  keywords:
    "image editor, photo editor, online image editing, filters, effects, brightness, contrast, saturation",
  openGraph: {
    title: "Image Editor - Edit Images Online | 30tools",
    description:
      "Edit images online with filters, effects, and basic editing tools.",
    type: "website",
    images: [
      {
        url: "/og-images/image-editor.jpg",
        width: 1200,
        height: 630,
        alt: "Image Editor Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Editor - Free Image Tool | Professional Quality",
    description:
      "Professional image editor for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
    images: ["/og-images/image-editor.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/image-editor",
  },
};

export default function ImageEditorPage() {
  return (
    <ToolSEOLayout toolId="image-editor">
      <ImageEditor />
    </ToolSEOLayout>
  );
}
