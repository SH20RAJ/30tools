import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeftIcon, MailIcon, MessageCircleIcon, BugIcon } from 'lucide-react';
import TallyContactForm from '@/components/TallyContactForm';

export const metadata = {
  title: "Contact - Free Online Tool | Professional Results",
  description: "Professional contact with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords: "contact 30tools, support, feedback, business inquiries, technical support, mail@30tools.com",
  robots: { index: true, follow: true }

  openGraph: {
    title: "Contact - Free Online Tool | Professional Results",
    description: "Professional contact tool. Free online processing with high-quality results. No registration required, instant results.",
    url: "https://30tools.com/contact",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact - Free Online Tool | Professional Results"
      },
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact - Free Online Tool | Professional Results",
    description: "Professional contact tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/contact.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/contact"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Contact",
  "description": "Professional contact tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/contact",
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

export default function ContactPage() {
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
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            We would love to hear from you! Get in touch with our team for any questions, suggestions, or support needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <p className="text-muted-foreground mb-6">
              Use the form below to get in touch with us. We'll respond as quickly as possible.
            </p>

            {/* Tally Form Embed */}
            <TallyContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Prefer email? Send us a message directly for any type of inquiry.
            </p>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-primary" />
                  General Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For all inquiries including support, feedback, business partnerships, and technical issues
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:mail@30tools.com" className="text-primary hover:underline">mail@30tools.com</a></p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                  <Badge variant="secondary">All Inquiries Welcome</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-primary" />
                    Technical Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    Report bugs, technical problems, or performance issues
                  </p>
                  <Badge variant="outline">Priority Response</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircleIcon className="h-5 w-5 text-primary" />
                    Feature Requests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    Suggest new tools, features, or improvements
                  </p>
                  <Badge variant="secondary">Community Driven</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How do I report a bug?</h3>
                <p className="text-muted-foreground">
                  Email us at <a href="mailto:mail@30tools.com" className="text-primary hover:underline">mail@30tools.com</a> or use the contact form above with details about the issue, including your browser, device, and steps to reproduce the problem.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Can I request a new tool?</h3>
                <p className="text-muted-foreground">
                  Absolutely! Send your suggestions to <a href="mailto:mail@30tools.com" className="text-primary hover:underline">mail@30tools.com</a> or use our contact form. We regularly add new tools based on user requests.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Is there an API available?</h3>
                <p className="text-muted-foreground">
                  We&apos;re working on API access for developers. Contact <a href="mailto:mail@30tools.com" className="text-primary hover:underline">mail@30tools.com</a> to join our early access program.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">How can I support the project?</h3>
                <p className="text-muted-foreground">
                  Share 30tools.com with others, provide feedback through our contact form, and consider whitelisting our ads to help keep the service free.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Do you respond to all messages?</h3>
                <p className="text-muted-foreground">
                  Yes! We read and respond to every message sent through our contact form or email. Response times are typically within 24 hours.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              30tools.com is built and maintained by a passionate team of developers who believe in making powerful tools
              accessible to everyone. We&apos;re committed to privacy, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold">Fast Response</h3>
                <p className="text-sm text-muted-foreground">Quick replies to all inquiries</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold">Privacy Focused</h3>
                <p className="text-sm text-muted-foreground">Your data stays private</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-semibold">User Driven</h3>
                <p className="text-sm text-muted-foreground">Built based on your needs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
