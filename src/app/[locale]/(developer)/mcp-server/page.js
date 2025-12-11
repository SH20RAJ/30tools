import McpServerTool from "@/components/tools/developer/McpServerTool";

export const metadata = {
  title: "MCP Server Generator - Model Context Protocol for Claude",
  description:
    "Professional mcp server for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  keywords:
    "mcp server, model context protocol, claude mcp, anthropic mcp, ai integration, #21stdev, mcp generator, claude tools, ai development, mcp sdk, context protocol",
  openGraph: {
    title: "MCP Server Generator - Build AI Tools for Claude",
    description:
      "Generate production-ready Model Context Protocol servers for Claude AI. Perfect for #21stdev developers. Support for TypeScript, JavaScript, and Python.",
    type: "website",
    url: "https://30tools.com/mcp-server",
    images: [
      {
        url: "https://30tools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MCP Server Generator for Claude AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Server Generator - Build AI Tools for Claude",
    description:
      "Generate production-ready Model Context Protocol servers for Claude AI. Perfect for #21stdev developers.",
    images: ["https://30tools.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/mcp-server",
  },
};

export default function McpServerPage() {
  return (
    <>
      <McpServerTool />

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "MCP Server Generator",
            description:
              "Generate Model Context Protocol servers for Claude AI and other assistants",
            url: "https://30tools.com/mcp-server",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            permissions: "browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            featureList: [
              "TypeScript MCP server generation",
              "JavaScript MCP server templates",
              "Python MCP server scaffolding",
              "Authentication integration",
              "CORS configuration",
              "Tool definitions",
              "Ready-to-deploy code",
            ],
            creator: {
              "@type": "Organization",
              name: "30tools",
              url: "https://30tools.com",
            },
            about: [
              {
                "@type": "Thing",
                name: "Model Context Protocol",
                description:
                  "Open standard for connecting AI assistants to external data and tools",
              },
              {
                "@type": "Thing",
                name: "Claude AI",
                description:
                  "Anthropic AI assistant that supports MCP integration",
              },
              {
                "@type": "Thing",
                name: "#21stdev",
                description:
                  "Modern development practices for AI-first applications",
              },
            ],
          }),
        }}
      />
    </>
  );
}
