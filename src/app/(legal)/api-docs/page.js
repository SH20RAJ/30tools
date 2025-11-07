import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftIcon, CodeIcon, KeyIcon, BookIcon } from 'lucide-react';

export const metadata = {
  title: "API Documentation - 30tools.com | Developer Resources",
  description: "Professional api docs with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords: "API, documentation, developer, integration, search suggestions, REST API",
  robots: { index: true, follow: true },

  openGraph: {
    title: "Api Docs - Free Online Tool | Professional Results",
    description: "Professional api docs tool. Free online processing with high-quality results. No registration required, instant results.",
    url: "https://30tools.com/api-docs",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/api-docs.jpg",
        width: 1200,
        height: 630,
        alt: "Api Docs - Free Online Tool | Professional Results"
      },
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Api Docs - Free Online Tool | Professional Results",
    description: "Professional api docs tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/api-docs.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/api-docs"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Api Docs",
  "description": "Professional api docs tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/api-docs",
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
  },
};

export default function APIDocsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">API Documentation</h1>
          <p className="text-muted-foreground">Integrate 30tools.com into your applications with our simple APIs.</p>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookIcon className="h-5 w-5 text-primary" />
              API Overview
            </CardTitle>
            <CardDescription>
              Simple, RESTful APIs to enhance your applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-sm text-primary">No API keys required</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">Fast</div>
                <div className="text-sm text-primary">Sub-100ms response times</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">Simple</div>
                <div className="text-sm text-primary">JSON responses</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Suggestions API */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CodeIcon className="h-5 w-5 text-primary" />
                  Search Suggestions API
                </CardTitle>
                <CardDescription>
                  Get search suggestions for tool discovery
                </CardDescription>
              </div>
              <Badge>GET</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Endpoint</h3>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                GET https://30tools.com/api/suggestions?q=&#123;query&#125;
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Parameters</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-2 text-left">Parameter</th>
                      <th className="border border-border p-2 text-left">Type</th>
                      <th className="border border-border p-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2 font-mono">q</td>
                      <td className="border border-border p-2">string</td>
                      <td className="border border-border p-2">Search query (required)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Example Request</h3>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                curl https://30tools.com/api/suggestions?q=image
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Example Response</h3>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                {`[
  "image",
  [
    "image compressor",
    "image optimizer", 
    "image converter",
    "image minimizer"
  ]
]`}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rate Limits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <KeyIcon className="h-5 w-5 text-primary" />
              Rate Limits & Usage
            </CardTitle>
            <CardDescription>
              Fair usage policies and limits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Rate Limits</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>1000 requests per hour per IP address</li>
                  <li>10 requests per second per IP address</li>
                  <li>No authentication required for basic usage</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Response Headers</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-2 text-left">Header</th>
                        <th className="border border-border p-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-2 font-mono">X-RateLimit-Limit</td>
                        <td className="border border-border p-2">Requests per hour limit</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2 font-mono">X-RateLimit-Remaining</td>
                        <td className="border border-border p-2">Remaining requests this hour</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2 font-mono">X-RateLimit-Reset</td>
                        <td className="border border-border p-2">Time when limit resets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Examples</CardTitle>
            <CardDescription>
              Integration examples in popular languages
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">JavaScript (Fetch)</h3>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm overflow-x-auto">
                {`async function getSearchSuggestions(query) {
  const response = await fetch(
    \`https://30tools.com/api/suggestions?q=\${encodeURIComponent(query)}\`
  );
  const [originalQuery, suggestions] = await response.json();
  return suggestions;
}

// Usage
const suggestions = await getSearchSuggestions('image');
console.log(suggestions); // ['image compressor', 'image optimizer', ...]`}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Python (requests)</h3>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm overflow-x-auto">
                {`import requests

def get_search_suggestions(query):
    url = f"https://30tools.com/api/suggestions"
    params = {"q": query}
    response = requests.get(url, params=params)
    original_query, suggestions = response.json()
    return suggestions

# Usage
suggestions = get_search_suggestions("image")
print(suggestions)  # ['image compressor', 'image optimizer', ...]`}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">PHP (cURL)</h3>
              <div className="bg-muted p-3 rounded-lg font-mono text-sm overflow-x-auto">
                {`function getSearchSuggestions($query) {
    $url = 'https://30tools.com/api/suggestions?q=' . urlencode($query);
    $response = file_get_contents($url);
    $data = json_decode($response, true);
    return $data[1]; // Return suggestions array
}

// Usage
$suggestions = getSearchSuggestions('image');
print_r($suggestions); // Array of suggestions`}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact for API Support */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              Get support for API integration
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">
              Need higher rate limits, custom endpoints, or integration support?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button>
                  Contact API Support
                </Button>
              </Link>
              <Button variant="outline">
                View Examples on GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}
