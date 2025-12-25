import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon } from "lucide-react";

export const metadata = {
  title: "Privacy - Free Online Tool | Professional Results",
  description:
    "Learn how 30tools.com protects your privacy. We process all files locally in your browser and never store your data on our servers.",
  keywords: [
    "privacy",
    "privacy online",
    "free privacy",
    "privacy tool",
    "online privacy free",
    "professional privacy",
    "privacy online tool",
    "best privacy free",
    "privacy web app",
    "privacy utility",
    "online tool",
    "free utility",
    "web application",
  ].join(", "),
  robots: { index: true, follow: true },

  openGraph: {
    title: "Privacy - Free Online Tool | Professional Results",
    description:
      "Professional privacy tool. Free online processing with high-quality results. No registration required, instant results.",
    url: "https://30tools.com/privacy",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy - Free Online Tool | Professional Results",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy - Free Online Tool | Professional Results",
    description:
      "Professional privacy tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/privacy.jpg"],
    creator: "@30tools",
  },

  alternates: {
    canonical: "https://30tools.com/privacy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Privacy",
  description:
    "Professional privacy tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/privacy",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function PrivacyPolicyPage() {
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
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
              <Badge variant="secondary">Updated Dec 2024</Badge>
            </div>
            <p className="text-muted-foreground">
              Effective Date: December 14, 2025
            </p>
          </div>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Information We Collect
              </h2>
              <h3 className="text-xl font-medium mb-2">Personal Information</h3>
              <p className="mb-4">
                30tools.com is committed to protecting your privacy. We do NOT
                collect, store, or process any personal files you upload to our
                tools. All file processing happens locally in your browser.
              </p>

              <h3 className="text-xl font-medium mb-2">Analytics Data</h3>
              <p className="mb-4">
                We collect anonymous usage data through Google Analytics to
                improve our services:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Page views and tool usage statistics</li>
                <li>Browser type and device information</li>
                <li>Geographic location (country/city level)</li>
                <li>Referral sources and user behavior patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">The limited data we collect is used to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Improve website performance and user experience</li>
                <li>Understand which tools are most popular</li>
                <li>Fix technical issues and optimize loading times</li>
                <li>Display relevant advertisements through Google AdSense and Ezoic</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. File Processing Privacy
              </h2>
              <p className="mb-4 font-semibold text-primary">
                🔒 Your files NEVER leave your device. All image compression,
                PDF processing, and file conversions happen locally in your
                browser using JavaScript and WebAssembly.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>No files are uploaded to our servers</li>
                <li>No files are stored in our databases</li>
                <li>No third parties have access to your files</li>
                <li>Your data remains completely private and secure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Cookies and Tracking
              </h2>
              <p className="mb-4">We use cookies for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Google Analytics (anonymous usage tracking)</li>
                <li>Google AdSense (advertisement personalization)</li>
                <li>PWA functionality (offline app features)</li>
                <li>User preferences (theme, language settings)</li>
              </ul>
              <p className="mb-4">
                You can disable cookies in your browser settings, but some
                features may not work properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Third-Party Services
              </h2>
              <h3 className="text-xl font-medium mb-2">Google Analytics</h3>
              <p className="mb-4">
                We use Google Analytics to understand how visitors use our site.
                Google may use this data according to their privacy policy.
              </p>

              <h3 className="text-xl font-medium mb-2">Google AdSense / Ezoic</h3>
              <p className="mb-4">
                We display advertisements through Google AdSense and Ezoic. These partners may use
                cookies or web beacons to show relevant ads based on your browsing history and to optimize ad performance. Ezoic's privacy policy can be found <a href="https://www.ezoic.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary underline">here</a>.
              </p>

              <h3 className="text-xl font-medium mb-2">Cloudflare</h3>
              <p className="mb-4">
                Our website is served through Cloudflare for performance and
                security. Cloudflare may collect technical data for these
                purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="mb-4">
                We implement industry-standard security measures:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>HTTPS encryption for all connections</li>
                <li>Regular security audits and updates</li>
                <li>Minimal data collection philosophy</li>
                <li>No sensitive data storage on our servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Opt-out of analytics tracking</li>
                <li>Disable personalized advertisements</li>
                <li>Request information about data we collect</li>
                <li>Use our tools without creating an account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Children&apos;s Privacy
              </h2>
              <p className="mb-4">
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                9. International Users
              </h2>
              <p className="mb-4">
                30tools.com is operated from the United States. By using our
                services, you consent to the processing of your data in the
                United States in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                10. Changes to Privacy Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will
                notify users of any material changes by posting the updated
                policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p>
                  <strong>Email:</strong> mail@30tools.com
                </p>
                <p>
                  <strong>Website:</strong> https://30tools.com
                </p>
                <p>
                  <strong>Response Time:</strong> Within 48 hours
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
