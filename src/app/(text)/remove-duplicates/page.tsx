
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free Remove Duplicates Online - No Signup | 30tools",
  description: "Remove duplicate lines from text lists 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "remove duplicates, free online tool, no signup, text, remove duplicates online, 30tools",
  alternates: {
    canonical: "https://30tools.com/remove-duplicates",
  },
  openGraph: {
    title: "Free Remove Duplicates Online - No Signup | 30tools",
    description: "Remove duplicate lines from text lists 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/remove-duplicates",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Remove Duplicates Online - No Signup | 30tools",
    description: "Remove duplicate lines from text lists 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "remove-duplicates",
  "name": "Remove Duplicates",
  "description": "Remove duplicate lines from text lists",
  "route": "/remove-duplicates",
  "extraSlugs": [
    "remove-duplicates-from-list-online",
    "clean-duplicate-lines",
    "remove-bg-online",
    "remove-extra-spaces",
    "remove-duplicate-lines",
    "clean-duplicates-list"
  ],
  "popular": true,
  "category": "text"
};
  const breadcrumbs = [
  {
    "name": "Text Tools",
    "url": "/text-tools"
  },
  {
    "name": "Remove Duplicates",
    "url": "/remove-duplicates"
  }
];
  const relatedTools = [
  {
    "id": "markdown-to-text",
    "name": "AI-to-Text Converter (Markdown Stripper)",
    "description": "Clean up AI-generated content from ChatGPT, Claude, and Grok. Convert Markdown into clean, readable plain text instantly. Perfect for emails and social sharing.",
    "route": "/markdown-to-text",
    "extraSlugs": [
      "add-text-to-pdf",
      "ai-text-rewriter",
      "alt-text-checker",
      "beautify-text",
      "calculate-text-complexity",
      "calculate-text-length",
      "capitalize-text-online",
      "chatgpt-text-converter",
      "clean-markdown-text",
      "clean-up-text-from-chatgpt-markdown",
      "convert-markdown-to-plain-text",
      "deduplicate-text-online",
      "delete-duplicate-text",
      "encrypt-text-online",
      "extract-links-from-text",
      "extract-text-from-pdf",
      "fake-text-message-maker",
      "filler-text-maker",
      "filter-emails-from-text",
      "find-emails-in-text",
      "find-text-differences",
      "fix-text-spacing",
      "format-text-online",
      "generate-images-from-text",
      "generate-placeholder-text",
      "humanize-chatgpt-text",
      "instagram-fancy-text",
      "listen-to-text",
      "make-ai-text-human",
      "markdown-parser-online",
      "markdown-to-html",
      "markdown-to-plain-text",
      "pdf-to-text-converter",
      "read-text-aloud",
      "remove-markdown-formatting",
      "render-markdown-html",
      "seo-text-analyzer",
      "strip-markdown-online",
      "strip-markdown-syntax",
      "text-analysis-tool",
      "text-case-converter",
      "text-cleaner-tool",
      "text-comparison-tool",
      "text-diff",
      "text-formatter",
      "text-to-image-ai",
      "text-to-speech-ai",
      "text-tools"
    ],
    "popular": true,
    "category": "text"
  },
  {
    "id": "article-rewriter",
    "name": "Article Rewriter",
    "description": "Free article rewriter tool to process your data instantly with privacy-friendly browser-based workflows.",
    "route": "/article-rewriter",
    "extraSlugs": [
      "free-article-rewriter-online",
      "article-rewriter-tool"
    ],
    "popular": false,
    "category": "text"
  },
  {
    "id": "backwards-text-generator",
    "name": "Backwards Text Generator",
    "description": "Generate backwards text instantly. Our free reverse text tool flips characters, words, or entire paragraphs. Perfect for Instagram, Discord, and creative writing.",
    "route": "/backwards-text-generator",
    "extraSlugs": [
      "dummy-text-generator",
      "fake-text-message-maker",
      "filler-text-maker",
      "free-backwards-text-generator-online",
      "mirror-text-generator",
      "random-text-generator",
      "reverse-text-generator",
      "stylish-text-generator"
    ],
    "popular": true,
    "category": "text"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Remove Duplicates","description":"Remove duplicate lines from text lists","url":"https://30tools.com/remove-duplicates","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <div>{/* Tool component placeholder */}</div>
      </ToolLayout>
    </>
  );
}
