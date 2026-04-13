
import ToolLayout from "@/components/tools/shared/ToolLayout";


export const metadata = {
  title: "Free JWT Decoder Online - No Signup | 30tools",
  description: "Decode and verify JSON Web Tokens 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "jwt decoder, free online tool, no signup, developer, jwt decoder online, 30tools",
  alternates: {
    canonical: "https://30tools.com/jwt-decoder",
  },
  openGraph: {
    title: "Free JWT Decoder Online - No Signup | 30tools",
    description: "Decode and verify JSON Web Tokens 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/jwt-decoder",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free JWT Decoder Online - No Signup | 30tools",
    description: "Decode and verify JSON Web Tokens 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "jwt-decoder",
  "name": "JWT Decoder",
  "description": "Decode and verify JSON Web Tokens",
  "route": "/jwt-decoder",
  "extraSlugs": [
    "decode-jwt-online",
    "decode-jwt-token",
    "decode-jwt-without-secret-online",
    "jwt-debugger",
    "jwt-parser",
    "jwt-token-decoder",
    "read-jwt-content",
    "verify-jwt-signature-free"
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
    "name": "JWT Decoder",
    "url": "/jwt-decoder"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"JWT Decoder","description":"Decode and verify JSON Web Tokens","url":"https://30tools.com/jwt-decoder","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
