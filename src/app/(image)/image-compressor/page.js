import ImageCompressorTool from "@/components/tools/image/ImageCompressorTool";
import {
  BreadcrumbsEnhanced,
  RelatedTools,
  UserComments,
  QuickActions,
} from "@/components/seo";
import {
  GeneratorToolFeatures,
  GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";
import { TrendingUp, DollarSign, Smartphone } from "lucide-react";

const researchedKeywords = [
  "compress picture size online free", "compress picture free", "image compression tool",
  "picture compressor free", "photo size reducer free", "imagecompressor.com",
  "compress photo size free", "image compressor free online", "free image compressor online",
  "compress image size free", "photo quality reducer", "compress image size online free",
  "image compressor without losing quality", "image reducer", "compress image file",
  "picture compress", "image compress online", "optimizilla image compressor", "image size reducer free",
  "reduce image quality", "photo compression", "jpeg image compressor", "how to compress an image",
  "compress image online free", "how to reduce picture file size", "bulk image compressor",
  "compress photo free", "compress photo online", "reduce photo file size", "image compressor online free",
  "compress images online", "compress the image", "how to reduce image file size", "reduce pic size",
  "image downsizer", "how to reduce photo file size", "image resizer compressor", "imagecompressor",
  "compress pictures", "image size reducer online", "image mb reducer", "i love image compressor",
  "shrink image size", "photo compressor online", "compression image", "reduce image size free",
  "reduire la taille d'une image", "réduire taille image", "reduce size image", "compresseur image",
  "i love img compress", "compress picture size", "online photo compressor", "compress image free",
  "how to reduce image size", "reduce images", "compress photos", "image quality reducer",
  "free image compressor", "comprimir imágenes", "make image smaller", "photo compressor free",
  "compressnow", "image reduce", "compresser une image", "reduce image file size", "reduire taille photo",
  "reduce image size online", "picture size reducer", "comprimir jpg ilovepdf", "reduce picture size",
  "image file size reducer", "image compression", "image optimizer", "image reduce size",
  "image size reduce", "jpeg optimizer", "photo reducer", "jpeg image compressor high res",
  "compress img", "compress picture", "reduce size", "reduire taille image", "compressor image",
  "compress image online", "compresser photo", "image compressor free", "caesium image compressor",
  "reduce size of image", "picture compressor", "comprimir foto", "reducir tamaño de imagen",
  "photo compress", "online image compressor", "compress photo size", "comprimir imagenes",
  "photo size compressor", "img compress", "comprimir fotos", "compress images", "size compressor",
  "reduce image", "compress foto", "optimizilla", "decrease image size", "image size compressor",
  "comprimir imagen", "image compress", "reduce photo size", "compress image size", "image compressor online",
  "compresser image", "compress photo", "reduce jpg file size", "jpeg compressor", "jpg size reducer",
  "image resize", "photo size reducer", "compress jpg", "size reducer", "i love image", "photo compressor",
  "compressor", "image size reducer", "jpg compressor", "reduce image size", "compress image", "iloveimg", "compress jpeg"
];

export const metadata = {
  title: "Image Compressor (2026) - Reduce Photo Size Online Free | 30Tools",
  description: "Professional image compressor for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
  keywords: researchedKeywords.join(", "),

  openGraph: {
    title: "Image Compressor (2026) - Reduce Size Online Free",
    description: "⚡ Fast & Free image compression tool. Reduce photo file size for JPEG, PNG, and WebP. Bulk compress pictures online easily!",
    url: "https://30tools.com/image-compressor",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/image-compressor.jpg", width: 1200, height: 630, alt: "Free Image Compressor 2026" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Image Compressor (2026) - Free Online Tool",
    description: "⚡ The ultimate image size reducer. Compress images online without quality loss!",
    images: ["/og-images/image-compressor.jpg"],
    creator: "@30tools"
  },

  alternates: { canonical: "https://30tools.com/image-compressor" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  softwareApp: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Image Compressor",
    "alternateName": ["Optimizilla Alternative", "ILoveImg Alternative", "Image Compressor Online"],
    "description": "Professional tool to compress images online for free. Reduce image size of JPEG, PNG, and WebP files without losing clarity.",
    "url": "https://30tools.com/image-compressor",
    "applicationCategory": ["MultimediaApplication", "UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "288426" }
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Compress Image Size Online",
    "description": "Learn how to reduce image file size using our free online image compressor.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Upload Photos", "text": "Drag and drop your pictures or click to select files for bulk image compressor processing." },
      { "@type": "HowToStep", "position": 2, "name": "Set Compression", "text": "Adjust the quality slider to find the perfect balance between photo compression and quality." },
      { "@type": "HowToStep", "position": 3, "name": "Download Compressed Images", "text": "Click download to save your reduced size images to your device." }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this a free image compressor online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 30Tools provides a 100% free image compressor online free for all users."
        }
      },
      {
        "@type": "Question",
        "name": "Can I compress images without losing quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tool uses advanced algorithms for image compressor without losing quality, ensuring your photos remain sharp while reducing the file size."
        }
      },
      {
        "@type": "Question",
        "name": "What formats do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support jpeg image compressor, png optimizer, and webp compression. It is a true all-in-one image compression tool."
        }
      }
    ]
  }
};

export default function ImageCompressorPage() {
  const toolData = {
    id: "image-compressor",
    name: "Image Compressor",
    description: "Compress images without losing quality",
    category: "image",
    route: "/image-compressor",
  };

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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.softwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-6">
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
              allows you to <strong>compress images online</strong> up to 90% while maintaining high clarity. Whether you need a
              <strong>jpeg image compressor</strong> or want to <strong>reduce image size free</strong>, 30Tools works exactly like
              <strong>optimizilla</strong> or <strong>iloveimg</strong> but with zero limits.
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
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <p>
                  In 2026, website speed is everything. Our <strong>image size reducer free</strong> helps you
                  <strong>compress photo online</strong> to ensure your site loads instantly. We offer a
                  <strong>bulk image compressor</strong> that processes dozens of files at once. Whether you're
                  looking for an <strong>image reducer</strong> or <strong>photo size reducer free</strong>,
                  our <strong>image compressor without losing quality</strong> is the perfect choice.
                </p>
                <p>
                  We support global searches for <strong>reduire la taille d'une image</strong> and <strong>réduire taille image</strong>.
                  Our <strong>image downsizer</strong> also works as a <strong>photo quality reducer</strong>, giving
                  you full control over the <strong>compression image</strong> ratio.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
                <h3 className="text-xl font-bold text-primary">Popular Optimizer Targets:</h3>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-medium list-none p-0 marker:text-primary">
                  <li>✅ <strong>JPG Size Reducer</strong></li>
                  <li>✅ <strong>Optimizilla Compressor</strong></li>
                  <li>✅ <strong>I Love Image Compress</strong></li>
                  <li>✅ <strong>Compress JPEG</strong> HD</li>
                  <li>✅ <strong>Reduce PNG Size</strong></li>
                  <li>✅ <strong>Shrink Image Size</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Business & Revenue Optimization Section (High CPC) */}
          <section className="mb-20 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-950/20 p-8 md:p-12 rounded-3xl border border-indigo-100 dark:border-indigo-900/50">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Boosting E-commerce <span className="text-primary">Revenue</span> & UX
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Increase Conversion Rates</h3>
                <p className="text-sm text-muted-foreground">
                  Faster loading pages directly correlate with higher <strong>e-commerce sales</strong>. Optimizing product iphotos reduces bounce rates, improving your overall <strong>Conversion Rate Optimization (CRO)</strong> strategy.
                </p>
              </div>
              <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">SEO ROI</h3>
                <p className="text-sm text-muted-foreground">
                  Core Web Vitals are a key ranking factor. By using our tool, you improve <strong>Mobile Page Speed</strong> scores, leading to better rankings and higher organic traffic—a massive <strong>ROI</strong> for your business.
                </p>
              </div>
              <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Reduce Hosting Costs</h3>
                <p className="text-sm text-muted-foreground">
                  Smaller file sizes mean less bandwidth usage. For high-traffic sites, this translates to significant <strong>hosting cost reduction</strong> and streamlined <strong>digital asset management</strong>.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground bg-background/50 inline-block px-4 py-2 rounded-full border border-border/50">
                Pro Tip: Use <strong className="text-foreground">WebP</strong> format for the best balance of quality and performance in <strong>commercial photography</strong>.
              </p>
            </div>
          </section>

          {/* Features & Examples */}
          <GeneratorToolFeatures tool={toolData} features={features} />
          <GeneratorToolExamples tool={toolData} examples={examples} title="Compression Benchmarks" />

          {/* Global Multi-language Support */}
          <section className="my-20">
            <h2 className="text-3xl font-bold text-center mb-10">Multi-Language Compresseur Image Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-muted/20 rounded-xl border border-border">
                <p className="text-2xl mb-2">🇫🇷</p>
                <p className="font-bold"><strong>Compresseur Image</strong></p>
                <p className="text-xs text-muted-foreground text-center">Réduire Taille Photo</p>
              </div>
              <div className="p-4 bg-muted/20 rounded-xl border border-border">
                <p className="text-2xl mb-2">🇪🇸</p>
                <p className="font-bold"><strong>Comprimir Imágenes</strong></p>
                <p className="text-xs text-muted-foreground text-center">Reducir Tamaño Imagen</p>
              </div>
              <div className="p-4 bg-muted/20 rounded-xl border border-border">
                <p className="text-2xl mb-2">🇮🇷</p>
                <p className="font-bold"><strong>Compress Foto</strong></p>
                <p className="text-xs text-muted-foreground text-center">Image Reduce Size</p>
              </div>
              <div className="p-4 bg-muted/20 rounded-xl border border-border">
                <p className="text-2xl mb-2">🇩🇪</p>
                <p className="font-bold"><strong>Bild Komprimieren</strong></p>
                <p className="text-xs text-muted-foreground text-center">Image File Size Reducer</p>
              </div>
            </div>
          </section>

          {/* How to steps */}
          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Reduce Picture File Size</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { s: 1, t: "Upload", d: "Choose files for the <strong>image file size reducer</strong>." },
                { s: 2, t: "Adjust", d: "Select the <strong>photo compression</strong> level you need." },
                { s: 3, t: "Download", d: "Save your <strong>compressed images</strong> instantly." }
              ].map((step, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border text-center relative group">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">{step.s}</div>
                  <h3 className="font-semibold text-lg mb-2">{step.t}</h3>
                  <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: step.d }} />
                </div>
              ))}
            </div>
          </div>

          {/* User Reviews & Comments */}
          <div className="mb-12">
            <UserComments toolId="image-compressor" toolName="Image Compressor" showStats={true} allowComments={true} />
          </div>

          {/* Keyword Cloud */}
          <div className="bg-muted/30 rounded-3xl p-8 mb-20 text-center border border-border/50">
            <p className="text-xs font-bold text-primary mb-6 uppercase tracking-widest opacity-80">Image Optimization Tags</p>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 opacity-50">
              {researchedKeywords.map(kw => (
                <span key={kw} className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors cursor-default">
                  {kw} <span className="opacity-30">|</span>
                </span>
              ))}
            </div>
          </div>

          {/* Related Tools */}
          <div className="mb-12">
            <RelatedTools currentTool="image-compressor" category="image" tools={[{ id: "image-resizer", name: "Image Resizer", description: "Resize dimensions", route: "/image-resizer", category: "image" }, { id: "image-converter", name: "Image Converter", description: "Convert formats", route: "/image-converter", category: "image" }]} title="More Graphics Tools" />
          </div>
        </main>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(7) }} />
    </>
  );
}
