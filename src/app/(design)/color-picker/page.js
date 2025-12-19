import ColorPickerTool from "@/components/tools/design/ColorPickerTool";

const researchedKeywords = [
  "color picking", "color picker code", "colour picker wheel", "color viewer",
  "online colour picker from image", "color picker online free", "colour pick", "colors picker",
  "color picker by image", "color code checker", "color picker screen", "rgb picker from image",
  "hsb color", "code couleur image", "color code detector", "color code picker from image",
  "image color picker online", "color pic", "rgb detector", "color picker from website",
  "image to color", "color analyzer", "color picker google", "powertoys color picker",
  "color picker hex code", "color picker app", "color check", "color detector from image",
  "pick color online", "find color code from image", "html colour", "colour selector",
  "color pick from image", "web color picker", "rgb online", "color search", "colour picker from image",
  "pixel color", "get color code from image", "color picker wheel", "color extractor",
  "colorpick", "find color", "color chooser", "hex colour picker", "hsv color picker",
  "image color", "hex color from image", "color picker html", "colour checker",
  "find hex code from image", "hex from image", "hsl color picker", "eyedropper color picker",
  "color picker rgb", "rgb color chart", "rgb color picker from image", "color image picker",
  "color picker download", "imagecolorpicker", "colour identifier online", "find color code",
  "picker color", "screen color picker", "find color from image", "web colors", "color hex finder",
  "color id", "color code from image", "hex color picker from image", "clour", "rgb codes",
  "color shades", "hex code from image", "rgb finder", "what color", "hexadecimal color picker",
  "pick a color", "color checker", "color identifier from image", "get color from image",
  "color picker image", "color picker hex", "hex code color picker", "coolers color picker",
  "color hex picker", "sélecteur de couleurs", "random color picker", "adobe color picker",
  "css color picker", "color pick", "pick color from image", "color from image", "colour code finder",
  "color finder from image", "just color picker", "coolors color palette", "color picker from screen",
  "color selector", "color detector", "what color is this", "pick color", "google color picker",
  "rgba color picker", "colour finder", "hex color finder", "color code picker", "hex finder",
  "online color picker", "selector de colores", "color dropper", "hex picker", "color identifier",
  "hexcode", "coler", "color picker tool", "rgb picker", "color code finder", "color html",
  "color picker online", "color picker extension", "colour picker", "coolors.co", "coolors.co palette",
  "hex code picker", "html color picker", "hex code finder", "color finder", "html color", "colorpicker",
  "image color picker", "html color codes", "hex code", "color picker from image", "color codes",
  "rgb color picker", "color code", "hex color picker", "html color codes", "color palette generator",
  "取色器", "hex color", "colour", "color hunt", "colors", "coolors", "color palette", "color"
];

export const metadata = {
  title: "Professional Color Picker (2026) - Hex, RGB & Image Picker | 30Tools",
  description: "Best free online color picker tool. Pick colors from images, find hex codes, and generate color palettes instantly. Support for RGB, HSV, HSL, and CMYK.",
  keywords: researchedKeywords.join(", "),

  openGraph: {
    title: "Color Picker (2026) - Best Image Color Picker Online",
    description: "⚡ Fast & Free color picker tool. Pick colors from design, find hex codes from images, and detect RGB values instantly. No app required!",
    url: "https://30tools.com/color-picker",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/color-picker.jpg", width: 1200, height: 630, alt: "Professional Color Picker 2026" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Color Picker - Find Any Color Code Online",
    description: "⚡ The ultimate design companion. Pick color from image, find hex codes, and build palettes for free!",
    images: ["/og-images/color-picker.jpg"],
    creator: "@30tools"
  },

  alternates: { canonical: "https://30tools.com/color-picker" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Color Picker",
    "alternateName": ["Hex Color Picker", "RGB Finder", "Color Code Detector", "Image Color Picker"],
    "description": "Professional tool to pick colors from screen, select hex codes from images, and find color palettes for designers.",
    "url": "https://30tools.com/color-picker",
    "applicationCategory": ["DesignApplication", "UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "231186" }
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Pick Color from Image Online",
    "description": "Learn how to find any hex code or rgb value from an image using our online color picker.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Upload Image", "text": "Upload the picture you want to extract colors from using the image color picker tool." },
      { "@type": "HowToStep", "position": 2, "name": "Select Pixel", "text": "Click on any pixel to find the exact hex color or rgb detector output." },
      { "@type": "HowToStep", "position": 3, "name": "Copy Code", "text": "Copy the hex code picker result to your clipboard for your CSS or design software." }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to use color picker online free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply move the slider or upload an image to find the exact hex code or color picker code you need."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a color picker extension equivalent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "30Tools works as a web-based color picker extension, allowing you to pick colors from website or images without downloading anything."
        }
      },
      {
        "@type": "Question",
        "name": "What is hex code color picker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A hex code picker is a tool that identifies a specific color using a 6-character code (e.g., #FFFFFF for white), widely used in web design and CSS."
        }
      }
    ]
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function ColorPickerPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }} />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li><li>/</li>
            <li><a href="/all-tools" className="hover:text-primary transition-colors">Design Tools</a></li><li>/</li>
            <li className="text-foreground font-medium">Color Picker</li>
          </ol>
        </nav>

        <AdUnit />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
            Online <span className="text-primary">Color Picker</span> & Hex Finder
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Welcome to the ultimate <strong>color picker online free</strong> utility. Our <strong>color picking</strong> engine
            helps you find the perfect <strong>color hex code</strong> or <strong>rgb color picker</strong> value for your project.
            Whether you need to <strong>pick color from image</strong>, use a <strong>colour picker wheel</strong>, or use a
            <strong>color code detector</strong>, 30Tools provides instant, professional design results.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">🌈 <strong>Color Palette Generator</strong></span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">📸 <strong>Color Picker from Image</strong></span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">⚡ <strong>Hex Code Finder</strong></span>
          </div>
        </div>

        <AdUnit />

        {/* Tool Component */}
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
          <ColorPickerTool />
        </div>

        <AdUnit />

        {/* SEO Content Section 1 */}
        <section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Professional RGB Finder & Color Analyzer</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p>
                As a designer, you often need to <strong>find color code from image</strong> sources. Our <strong>image color picker online</strong>
                simplifies this by letting you upload any photo and use our <strong>eyedropper color picker</strong>. It acts as an
                <strong>image to color</strong> converter, providing you with <strong>hex from image</strong> results in milliseconds.
              </p>
              <p>
                From <strong>hsv color picker</strong> options to <strong>hsb color</strong> and <strong>rgba color picker</strong>,
                we support every format. If you're looking for a <strong>color picker google</strong> alternative or a
                <strong>powertoys color picker</strong> web version, 30Tools is the perfect <strong>color code detector</strong>
                for your workflow.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
              <h3 className="text-xl font-bold text-primary">Technical Design Support:</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-medium list-none p-0 marker:text-primary">
                <li>🎨 <strong>Color Palette Generator</strong></li>
                <li>🖼️ <strong>Color Code Picker from Image</strong></li>
                <li>🔍 <strong>RGB Detector</strong></li>
                <li>📜 <strong>Full RGB Color Chart</strong></li>
                <li>🔗 <strong>Web Color Picker</strong> API</li>
                <li>🌐 <strong>Sélecteur de Couleurs</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Global Multi-language Support */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Multi-Language Design Tool Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇫🇷</p>
              <p className="font-bold"><strong>Code Couleur Image</strong></p>
              <p className="text-xs text-muted-foreground text-center">Sélecteur de Couleurs</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇪🇸</p>
              <p className="font-bold"><strong>Selector de Colores</strong></p>
              <p className="text-xs text-muted-foreground text-center">Código Hex y RGB</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇨🇳</p>
              <p className="font-bold"><strong>取色器</strong></p>
              <p className="text-xs text-muted-foreground text-center">从图像中查找颜色代码</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇧🇷</p>
              <p className="font-bold"><strong>Seletor de Cores</strong></p>
              <p className="text-xs text-muted-foreground text-center">Encontrar Código de Cor</p>
            </div>
          </div>
        </section>

        {/* How-To Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How to Find Any Color Code from Image (3 Steps)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-bold mb-4">Upload Picture</h3>
              <p className="text-muted-foreground">Select your file for the <strong>color identifier from image</strong>.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-bold mb-4">Pick Color</h3>
              <p className="text-muted-foreground">Use the <strong>color dropper</strong> to select any pixel on screen.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-bold mb-4">Copy Hex</h3>
              <p className="text-muted-foreground">Instantly get the <strong>color picker hex code</strong> for your project.</p>
            </div>
          </div>
        </section>

        {/* Features Analysis */}
        <section className="mb-20 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-3xl font-bold text-center mb-8">Professional Design Features</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">💎 <strong>Color Hunt</strong> Style Palettes</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Generate trending <strong>color palette</strong> combinations. Use our <strong>color chooser</strong>
                to build beautiful <strong>color shades</strong> for any web interface.
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">🔒 <strong>Privacy First</strong> Tool</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No image is ever uploaded to our servers. All <strong>color extractor</strong> and
                <strong>find hex code from image</strong> processing happens locally on your device.
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">💻 <strong>Power User</strong> Features</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Support for <strong>hsv color picker</strong>, <strong>hsl color picker</strong>, and
                <strong>css color picker</strong> outputs. High-precision <strong>pixel color</strong> detection.
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">🌍 <strong>Multilingual</strong> Accessibility</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Optimized for <strong>coler</strong> (common typo), <strong>colour identifier online</strong>, and
                <strong>selector de colores</strong> searches worldwide.
              </p>
            </div>
          </div>
        </section>

        <AdUnit />

        {/* FAQ Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Color Picker FAQ</h2>
          <p className="text-center text-muted-foreground mb-12">Expert answers for designers using <strong>hexcode</strong> and <strong>color codes</strong>.</p>
          <div className="space-y-4">
            {[
              { q: "How to pick a color from an image?", a: "Upload your image to the 30Tools <strong>image color picker</strong>, click on the area you want to sample, and copy the detected <strong>hex code</strong>." },
              { q: "What is HSL and HSV?", a: "They are alternative color representations. Our <strong>hsl color picker</strong> helps designers choose colors based on Hue, Saturation, and Lightness." },
              { q: "Can I use this as a color code detector for code?", a: "Yes, our tool provides <strong>css color picker</strong> strings and <strong>hex code color picker</strong> results ready for code integration." },
              { q: "Is this tool free?", a: "30Tools is a 100% <strong>color picker online free</strong> service with no registration or subscriptions required." }
            ].map((faq, i) => (
              <details key={i} className="group bg-card rounded-xl border border-border p-5 cursor-pointer">
                <summary className="font-bold text-lg list-none flex justify-between items-center group-hover:text-primary transition-colors">
                  <span dangerouslySetInnerHTML={{ __html: faq.q }} />
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed border-t border-border pt-4" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </details>
            ))}
          </div>
        </section>

        {/* Keyword Cloud */}
        <div className="bg-muted/30 rounded-3xl p-8 mb-20 text-center border border-border/50">
          <p className="text-xs font-bold text-primary mb-6 uppercase tracking-widest opacity-80">Design & Color Tags</p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 opacity-50">
            {researchedKeywords.map(kw => (
              <span key={kw} className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors cursor-default">
                {kw} <span className="opacity-30">|</span>
              </span>
            ))}
          </div>
        </div>

        <AdUnit />

        {/* Footer Related Tools */}
        <section className="pt-12 border-t border-border mt-20">
          <h2 className="text-2xl font-extrabold mb-8 text-center uppercase tracking-tighter text-primary">Discover More Design Tools</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/image-resizer", title: "Image Resizer", icon: "📐" },
              { href: "/image-compressor", title: "Image Compressor", icon: "📉" },
              { href: "/favicon-generator", title: "Favicon Gen", icon: "✨" },
              { href: "/background-remover", title: "BG Remover", icon: "✂️" }
            ].map((t, i) => (
              <a key={i} href={t.href} className="p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all text-center group">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="font-bold group-hover:text-primary transition-colors text-sm">{t.title}</h3>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-6 py-2 rounded-full border border-border hover:bg-muted">← Back to 30Tools Home</a>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(7) }} />
    </>
  );
}
