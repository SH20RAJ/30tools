
import OgImageGenerator from "@/components/tools/image/OgImageGenerator/OgImageGenerator";
import { BreadcrumbsEnhanced } from "@/components/seo";
import { FAQSection } from "@/components/seo";


export const metadata = {
  title: "Free Open Graph Image Generator | Create OG Images Online",
  description:
    "Create professional Open Graph (OG) images for your website, blog, or social media. Customizable templates, instant preview, and free download.",
  keywords:
    "og image generator, open graph image creator, social media image generator, blog post image generator, free og image tool",
};

export default function OgImageGeneratorPage() {
  const breadcrumbs = [
    { name: "Image Tools", url: "/image-tools" },
    { name: "OG Image Generator", url: "/og-image-generator" },
  ];

  const faqs = [
    {
      question: "What is an Open Graph (OG) Image?",
      answer:
        "An Open Graph image is the preview image that appears when your website link is shared on social media platforms like Facebook, Twitter (X), LinkedIn, and others. It is crucial for click-through rates.",
    },
    {
      question: "What is the recommended size for OG images?",
      answer:
        "The standard recommended size for Open Graph images is 1200x630 pixels. This aspect ratio (1.91:1) works best across most major social platforms.",
    },
    {
      question: "Is this tool free?",
      answer:
        "Yes, this OG Image Generator is 100% free to use. All processing happens in your browser, and you can download unlimited images.",
    },
    {
      question: "Can I use my own logo?",
      answer:
        "Absolutely! You can upload your own logo and background images to fully customize the design to match your brand.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Free OG Image Generator
          </h1>
          <p className="text-xl text-muted-foreground">
            Create stunning social media preview images for your website in
            seconds. No design skills required.
          </p>
        </div>

        {/* Tool */}
        <OgImageGenerator />

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="prose dark:prose-invert max-w-none">
                <h2>Why You Need Custom OG Images</h2>
                <p>
                    When you share a link on social media, the platform looks for metadata tags to decide what to show. 
                    The most important visual element is the <code>og:image</code> tag.
                    Links with custom, relevant images get significantly higher engagement and click-through rates than those without.
                </p>
                <p>
                    Our tool helps you ensure every blog post and page on your site has a professional looking preview image, 
                    without needing to open complex design software like Photoshop every time.
                </p>
            </div>

            <FAQSection
                faqs={faqs}
                title="Frequently Asked Questions"
                categoryTitle="OG Image Generator"
            />
        </div>
      </main>
    </div>
  );
}
