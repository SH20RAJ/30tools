import ExifReaderTool from "@/components/tools/image/ExifReaderTool";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";

export const metadata = {
  title: "EXIF Reader - Extract Image Metadata Information | 30tools",
  description:
    "Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata from JPEG, TIFF, and RAW image files.",
  keywords: [
    "exif reader",
    "exif reader online",
    "free exif reader",
    "exif reader tool",
    "online exif reader free",
    "professional exif reader",
    "exif reader online tool",
    "best exif reader free",
    "exif reader web app",
    "exif reader utility",
    "image editing online",
    "photo editor free",
    "image optimization",
    "image converter tool",
    "photo processing online",
  ],
  openGraph: {
    title: "EXIF Reader - Extract Image Metadata Information | 30tools",
    description:
      "Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata from JPEG, TIFF, and RAW image files.",
    type: "website",
    url: "https://30tools.com/exif-reader",
  },
  twitter: {
    card: "summary_large_image",
    title: "EXIF Reader - Extract Image Metadata Information | 30tools",
    description:
      "Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata from JPEG, TIFF, and RAW image files.",
  },
  alternates: {
    canonical: "https://30tools.com/exif-reader",
  },
};

export default function ExifReaderPage() {
  return (
    <ToolSEOLayout toolId="exif-reader">
      <ExifReaderTool />
    </ToolSEOLayout>
  );
}
