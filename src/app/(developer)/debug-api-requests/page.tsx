
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free Debug Api Requests Online - No Signup | 30tools",
  description: "Free Debug Api Requests online. Debug Api Requests allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "debug api requests, free online tool, no signup, developer, debug api requests online, 30tools",
  alternates: {
    canonical: "https://30tools.com/debug-api-requests",
  },
  openGraph: {
    title: "Free Debug Api Requests Online - No Signup | 30tools",
    description: "Free Debug Api Requests online. Debug Api Requests allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/debug-api-requests",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Debug Api Requests Online - No Signup | 30tools",
    description: "Free Debug Api Requests online. Debug Api Requests allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "debug-api-requests",
  "name": "Debug Api Requests",
  "description": "Free Debug Api Requests online. Debug Api Requests allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  "route": "/debug-api-requests",
  "extraSlugs": [
    "debug-api-requests"
  ],
  "category": "developer"
};
  const breadcrumbs = [
  {
    "name": "Developer Tools",
    "url": "/developer-tools"
  },
  {
    "name": "Debug Api Requests",
    "url": "/debug-api-requests"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Debug Api Requests","description":"Free Debug Api Requests online. Debug Api Requests allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.","url":"https://30tools.com/debug-api-requests","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <PremiumToolPage toolId={TOOL_ID} />
      </ToolLayout>
    </>
  );
}
