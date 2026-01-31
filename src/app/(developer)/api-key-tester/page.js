
import Link from "next/link";
import {

  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbsEnhanced } from "@/components/seo";
import { API_KEY_TOOLS } from "@/data/api-key-tools";
import { ShieldCheck, Terminal, Globe } from "lucide-react";

export const metadata = {
  title: "API Key Tester - Test OpenAI, Stripe, & More Keys Online",
  description:
    "Securely test your API keys for OpenAI, Stripe, SendGrid, and 30+ other services. Check if your API keys are valid directly in your browser or via terminal.",
  keywords:
    "api key tester, test openai api key, test stripe api key, api key validator, check api key, developer tools",
  openGraph: {
    title: "Api Key Tester - Free Developer Tool | Professional Coding",
    description: "Professional api key tester for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
    url: "https://30tools.com/api-key-tester",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/api-key-tester.jpg",
        width: 1200,
        height: 630,
        alt: "Api Key Tester - Free Developer Tool | Professional Coding"
      }
    ],
    type: "website"
  }
,
  twitter: {
    card: "summary_large_image",
    title: "Api Key Tester - Free Developer Tool | Professional Coding",
    description: "Professional api key tester for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
    images: ["/og-images/api-key-tester.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/api-key-tester"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Api Key Tester",
  "description": "Professional api key tester for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  "url": "https://30tools.com/api-key-tester",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function ApiKeyTesterHub() {
  const breadcrumbs = [
    { name: "Developer Tools", url: "/developer-tools" },
    { name: "API Key Tester", url: "/api-key-tester" },
  ];

  // Group tools by category
  const categories = API_KEY_TOOLS.reduce((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {});

  return (
        <>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge className="mb-2" variant="secondary">
            Developer Utilities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            API Key Tester
          </h1>
          <p className="text-xl text-muted-foreground">
            Instantly verify your API keys for over 30+ popular services. Secure,
            client-side testing for supported APIs.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {Object.entries(categories).map(([category, tools]) => (
            <div key={category} className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-foreground">
                {tools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/api-key-tester/${tool.id}`}
                    className="block h-full group transition-all hover:-translate-y-1"
                  >
                    <Card className="h-full border hover:border-primary transition-colors hover:shadow-lg">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          {tool.type === "browser" ? (
                            <Badge
                              variant="outline"
                              className="bg-green-500/5 text-green-600 border-green-200"
                            >
                              <Globe className="w-3 h-3 mr-1" /> Browser
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-orange-500/5 text-orange-600 border-orange-200"
                            >
                              <Terminal className="w-3 h-3 mr-1" /> Terminal
                            </Badge>
                          )}
                          <ShieldCheck className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <CardTitle className="text-xl">{tool.name}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  
        </>
);
}
