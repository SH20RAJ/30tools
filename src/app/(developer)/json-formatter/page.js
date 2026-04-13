
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JSONFormatterTool from "@/components/tools/developer/JSONFormatterTool"

export const metadata = {
  title: "Free JSON Formatter Online - No Signup | 30tools",
  description: "Format, validate, and beautify JSON data 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "json formatter, free online tool, no signup, developer, json formatter online, 30tools",
  alternates: {
    canonical: "https://30tools.com/json-formatter",
  },
  openGraph: {
    title: "Free JSON Formatter Online - No Signup | 30tools",
    description: "Format, validate, and beautify JSON data 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/json-formatter",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free JSON Formatter Online - No Signup | 30tools",
    description: "Format, validate, and beautify JSON data 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "json-formatter",
  "name": "JSON Formatter",
  "description": "Format, validate, and beautify JSON data",
  "route": "/json-formatter",
  "extraSlugs": [
    "beautify-json-for-email",
    "json-validator-online",
    "sql-formatter",
    "xml-formatter"
  ],
  "popular": true,
  "category": "developer"
};
  const breadcrumbs = [
  {
    "name": "Developer Tools",
    "url": "/developer-tools"
  },
  {
    "name": "JSON Formatter",
    "url": "/json-formatter"
  }
];
  const relatedTools = [
  {
    "id": "amazon-ses-api-key-tester",
    "name": "Amazon SES API Key Tester",
    "description": "Test your Amazon SES credentials with the send email endpoint.",
    "route": "/api-key-tester/amazon-ses",
    "extraSlugs": [
      "api-docs",
      "api-endpoint-tester",
      "api-tester",
      "debug-api-requests",
      "font-tester-tool",
      "regex-flags-tester",
      "regex-match-tester",
      "regex-replace-tester",
      "regex-tester",
      "test-rest-api-online"
    ],
    "popular": false,
    "category": "developer"
  },
  {
    "id": "anthropic-api-key-tester",
    "name": "Anthropic Claude API Key Tester",
    "description": "Test your Anthropic Claude API key with the messages endpoint.",
    "route": "/api-key-tester/anthropic",
    "extraSlugs": [
      "validate-claude-api-key-online",
      "anthropic-api-tester"
    ],
    "popular": false,
    "category": "developer"
  },
  {
    "id": "api-key-tester",
    "name": "API Key Tester",
    "description": "Securely test API keys for OpenAI, Stripe, and 30+ other services directly in your browser or terminal.",
    "route": "/api-key-tester",
    "extraSlugs": [
      "test-openai-api-key-online-safely",
      "validate-api-keys-safely"
    ],
    "popular": true,
    "category": "developer"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"JSON Formatter","description":"Format, validate, and beautify JSON data","url":"https://30tools.com/json-formatter","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <JSONFormatterTool />
      </ToolLayout>
    </>
  );
}
