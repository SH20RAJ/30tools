import ImageCompressorTool from "@/components/tools/image/ImageCompressorTool";
import {
  BreadcrumbsEnhanced,
  RelatedTools,
  UserComments,
  QuickActions,
} from "@/components/seo";
// @ts-ignore
import {
  GeneratorToolFeatures,
  GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";
import { generateToolMetadata, getToolData } from "@/lib/seo-helper";
import Script from "next/script";

export async function generateMetadata() {
  return generateToolMetadata("image-compressor", "image");
}

export default function ImageCompressorPage() {
  const toolData = getToolData("image-compressor", "image");

  if (!toolData) return <div>Tool not found</div>;

  const features = [
    "Bulk Image Compressor (Pack processing)", "Compress JPG, PNG, WebP & GIF", "Reduce size by up to 90%",
    "No Watermarks", "Image compressor without losing quality", "100% Free image compressor online",
    "Secure Local Processing", "Optimized for Website Speed"
  ];

  const examples = [
    { title: "Website Optimization", description: "Increase SEO ranking", input: "Hero Photo (5MB)", output: "Web Optimized (500KB)" },
    { title: "Social Media", description: "Fit upload limits", input: "High-res Portrait", output: "Compressed JPEG" }
  ];



  return (
    <>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-6">
          {/* @ts-ignore */}
          <BreadcrumbsEnhanced customBreadcrumbs={[{ name: "Image Tools", url: "/image-tools" }, { name: "Image Compressor", url: "/image-compressor" }]} />
        </div>

        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
              Free Online <span className="text-primary">Image Compressor</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Welcome to the best <strong>image compressor free online</strong> utility. Our <strong>image compression tool</strong>
              allows you to <strong>compress images online</strong> up to 90% while maintaining high clarity.
            </p>

            <QuickActions toolName="Image Compressor" toolUrl="https://30tools.com/image-compressor" showBookmark={true} showShare={true} />
          </div>

          {/* Tool Interface */}
          <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
            <ImageCompressorTool />
          </div>

          {/* SEO Content Section */}
          <section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Lossless Picture Compressor Free Online</h2>
             <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
                <p>Optimize your images for the web anonymously and securely.</p>
             </div>
          </section>

          {/* Features & Examples */}
          {/* @ts-ignore */}
          <GeneratorToolFeatures tool={toolData} features={features} />
          {/* @ts-ignore */}
          <GeneratorToolExamples tool={toolData} examples={examples} title="Compression Benchmarks" />

          {/* User Reviews & Comments */}
          <div className="mb-12">
            <UserComments toolId="image-compressor" toolName="Image Compressor" showStats={true} allowComments={true} />
          </div>
          
           {/* Related Tools */}
           <div className="mb-12">
             {/* @ts-ignore */}
             <RelatedTools currentTool="image-compressor" category="image" tools={[{ id: "image-resizer", name: "Image Resizer", description: "Resize dimensions", route: "/image-resizer", category: "image" }, { id: "image-converter", name: "Image Converter", description: "Convert formats", route: "/image-converter", category: "image" }]} title="More Graphics Tools" />
           </div>

        </main>
      </div>

      <Script id="ads" dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(3) }} />
    </>
  );
}
