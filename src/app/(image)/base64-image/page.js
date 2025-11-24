import Base64ImageTool from "@/components/tools/image/Base64ImageTool";

export const metadata = {
  title: "Base64 Image Converter - Image to Base64 Base64 to Image",
  description:
    "Professional base64 image for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
  keywords:
    "base64 image, image to base64, base64 to image, base64 encoder, base64 decoder, image encoder",
  openGraph: {
    title: "Base64 Image Converter - Image to Base64 Base64 to Image",
    description:
      "Convert images to Base64 and decode Base64 to images instantly.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Base64 Image - Free Image Tool | Professional Quality",
    description:
      "Professional base64 image for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
    images: ["/og-images/base64-image.jpg"],
    creator: "@30tools",
  },

  alternates: {
    canonical: "https://30tools.com/base64-image",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Base64 Image",
  description:
    "Professional base64 image for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
  url: "https://30tools.com/base64-image",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function Base64ImagePage() {
  return <Base64ImageTool />;
}
