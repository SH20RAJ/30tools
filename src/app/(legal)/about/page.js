import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftIcon, UserIcon, CodeIcon, HeartIcon, StarIcon } from 'lucide-react';

export const metadata = {
  title: "About - Free Online Tool | Professional Results",
  description: "Learn about 30tools.com - the privacy-first platform for free online tools. Discover our mission, values, and commitment to user privacy.",
  keywords: [
    "about",
    "about online",
    "free about",
    "about tool",
    "online about free",
    "professional about",
    "about online tool",
    "best about free",
    "about web app",
    "about utility",
    "online tool",
    "free utility",
    "web application"
  ].join(", "),
  robots: { index: true, follow: true }
,
  openGraph: {
    title: "About - Free Online Tool | Professional Results",
    description: "Professional about tool. Free online processing with high-quality results. No registration required, instant results.",
    url: "https://30tools.com/about",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/about.jpg",
        width: 1200,
        height: 630,
        alt: "About - Free Online Tool | Professional Results"
      }
    ],
    type: "website"
  }
,
  twitter: {
    card: "summary_large_image",
    title: "About - Free Online Tool | Professional Results",
    description: "Professional about tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/about.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/about"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "About",
  "description": "Professional about tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/about",
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

export default function AboutPage() {
  return (
        <>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">About 30tools.com</h1>
          <p className="text-muted-foreground text-lg">
            Empowering users with free, privacy-first online tools for everyday file processing needs.
          </p>
        </div>

        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartIcon className="h-5 w-5 text-destructive" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                At 30tools.com, we believe that powerful file processing tools should be accessible to everyone,
                without compromising privacy or requiring expensive software licenses.
              </p>
              <p className="text-muted-foreground">
                Our mission is to provide free, fast, and secure online tools that process files directly in your browser,
                ensuring your data never leaves your device while delivering professional-grade results.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose 30tools.com?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  Privacy First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All file processing happens locally in your browser. We never see, store, or have access to your files.
                  Your privacy is guaranteed by design, not just by policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Lightning Fast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No upload/download times. No server delays. Our tools process files instantly in your browser
                  using optimized algorithms and WebAssembly technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  Completely Free
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No subscriptions, no hidden fees, no premium tiers. All tools are free to use with no file size limits
                  or watermarks. Supported by ethical advertising.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📱</span>
                  Works Everywhere
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use our tools on any device - desktop, tablet, or mobile. No software installation required.
                  Progressive Web App technology for native-like experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CodeIcon className="h-5 w-5 text-primary" />
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                30tools.com is built with modern web technologies to ensure maximum performance, security, and reliability:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">Frontend</Badge>
                  <p className="text-sm">Next.js 15</p>
                  <p className="text-sm">React 18</p>
                  <p className="text-sm">TypeScript</p>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">Styling</Badge>
                  <p className="text-sm">Tailwind CSS</p>
                  <p className="text-sm">Shadcn/ui</p>
                  <p className="text-sm">Responsive Design</p>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">Processing</Badge>
                  <p className="text-sm">WebAssembly</p>
                  <p className="text-sm">Canvas API</p>
                  <p className="text-sm">Web Workers</p>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mb-2">Deployment</Badge>
                  <p className="text-sm">Cloudflare</p>
                  <p className="text-sm">Edge Computing</p>
                  <p className="text-sm">Global CDN</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <StarIcon className="h-4 w-4 text-primary" />
                  Quality & Reliability
                </h3>
                <p className="text-muted-foreground">
                  We continuously test and improve our tools to ensure they work flawlessly across all browsers and devices.
                  Our commitment to quality means you can rely on consistent, professional results every time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <UserIcon className="h-4 w-4 text-primary" />
                  User-Centric Development
                </h3>
                <p className="text-muted-foreground">
                  Every feature we build is driven by real user needs. We actively listen to feedback and prioritize
                  tools that solve actual problems faced by our community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-primary">🌱</span>
                  Sustainable Growth
                </h3>
                <p className="text-muted-foreground">
                  We believe in sustainable, ethical business practices. Our revenue comes from non-intrusive advertising,
                  allowing us to keep all tools free while maintaining and improving our services.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Join Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                30tools.com is more than just a website - it&apos;s a community of users who value privacy, efficiency, and quality tools.
                Here&apos;s how you can be part of our growing community:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl mb-2 block">💬</span>
                  <h3 className="font-semibold mb-2">Share Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    Help us improve by sharing your experience and suggestions
                  </p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl mb-2 block">🔗</span>
                  <h3 className="font-semibold mb-2">Spread the Word</h3>
                  <p className="text-sm text-muted-foreground">
                    Share 30tools.com with friends, colleagues, and social media
                  </p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl mb-2 block">💡</span>
                  <h3 className="font-semibold mb-2">Request Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Suggest new tools and features you&apos;d like to see
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We love hearing from our users! Whether you have questions, suggestions, or just want to say hello,
                don&apos;t hesitate to reach out.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
                <Link href="mailto:hello@30tools.com">
                  <Button variant="outline">Email: hello@30tools.com</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
