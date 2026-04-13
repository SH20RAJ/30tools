
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free Send Http Request Online - No Signup | 30tools",
  description: "Free Send Http Request online. Send Http Request allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "send http request, free online tool, no signup, developer, send http request online, 30tools",
  alternates: {
    canonical: "https://30tools.com/send-http-request",
  },
  openGraph: {
    title: "Free Send Http Request Online - No Signup | 30tools",
    description: "Free Send Http Request online. Send Http Request allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/send-http-request",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Send Http Request Online - No Signup | 30tools",
    description: "Free Send Http Request online. Send Http Request allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "send-http-request",
  "name": "Send Http Request",
  "description": "Free Send Http Request online. Send Http Request allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  "route": "/send-http-request",
  "extraSlugs": [
    "send-http-request"
  ],
  "category": "developer"
};
  const breadcrumbs = [
  {
    "name": "Developer Tools",
    "url": "/developer-tools"
  },
  {
    "name": "Send Http Request",
    "url": "/send-http-request"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Send Http Request","description":"Free Send Http Request online. Send Http Request allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.","url":"https://30tools.com/send-http-request","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
