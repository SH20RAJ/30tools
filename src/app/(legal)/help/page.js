import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftIcon, HelpCircleIcon, BookOpenIcon, LifeBuoyIcon } from 'lucide-react';

export const metadata = {
  title: "Help - Free Online Tool | Professional Results",
  description: "Professional help with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords: "help, FAQ, support, tutorials, how to use, troubleshooting, guide",
  robots: { index: true, follow: true }

  openGraph: {
    title: "Help - Free Online Tool | Professional Results",
    description: "Professional help tool. Free online processing with high-quality results. No registration required, instant results.",
    url: "https://30tools.com/help",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/help.jpg",
        width: 1200,
        height: 630,
        alt: "Help - Free Online Tool | Professional Results"
      },
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Help - Free Online Tool | Professional Results",
    description: "Professional help tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/help.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/help"
  },
};

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "Are all tools really free?",
        answer: "Yes! All our tools are completely free to use with no hidden fees, registration requirements, or file limits. We believe powerful tools should be accessible to everyone."
      },
      {
        question: "Do I need to create an account?",
        answer: "No account required! You can use all our tools immediately without signing up. Just visit any tool page and start processing your files."
      },
      {
        question: "Are there any file size limits?",
        answer: "We support files up to 50MB for most tools. This covers the vast majority of use cases while ensuring fast processing in your browser."
      },
      {
        question: "Can I use these tools for commercial projects?",
        answer: "Absolutely! You can use our tools for both personal and commercial projects without any restrictions. Check our Terms of Service for complete details."
      },
    ]
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        question: "Do you store my files?",
        answer: "No, we never store your files! All processing happens locally in your browser using client-side JavaScript. Your files never leave your device, ensuring complete privacy."
      },
      {
        question: "Is my data safe?",
        answer: "Yes, your data is completely safe. Since processing happens in your browser, your files are never uploaded to our servers. We can't access your files even if we wanted to."
      },
      {
        question: "Do you collect personal information?",
        answer: "We only collect anonymous usage statistics through Google Analytics to improve our service. We don't collect personal information or file content."
      },
      {
        question: "Are you GDPR compliant?",
        answer: "Yes, we comply with GDPR regulations. Since we don't store personal data or files, compliance is straightforward. See our Privacy Policy for details."
      },
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        question: "Which browsers are supported?",
        answer: "Our tools work on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for best performance."
      },
      {
        question: "Why is processing slow on my device?",
        answer: "Processing speed depends on your device's capabilities and file size. Larger files or older devices may take longer. Consider using smaller files or a more powerful device."
      },
      {
        question: "Can I process multiple files at once?",
        answer: "Yes! Most of our tools support batch processing. You can select multiple files and process them all at once, saving you time."
      },
      {
        question: "What if a tool doesn't work?",
        answer: "Try refreshing the page, clearing your browser cache, or using a different browser. If problems persist, contact us with details about your browser and the issue."
      },
    ]
  },
  {
    category: "File Formats",
    questions: [
      {
        question: "Which image formats are supported?",
        answer: "We support all major image formats including JPEG, PNG, WebP, BMP, GIF, and more. Each tool page lists the specific formats supported."
      },
      {
        question: "Can I convert between different formats?",
        answer: "Yes! Our conversion tools allow you to convert between various formats. For example, you can convert PNG to JPEG, or JPEG to WebP for better web performance."
      },
      {
        question: "Do you support RAW image formats?",
        answer: "Currently, we focus on web-standard formats like JPEG, PNG, and WebP. RAW format support may be added in future updates based on user demand."
      },
      {
        question: "What's the best format for my use case?",
        answer: "JPEG for photos, PNG for images with transparency, WebP for web optimization. Our tools often suggest the best format based on your image content."
      },
    ]
  },
];


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Help",
  "description": "Professional help tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/help",
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

export default function HelpPage() {
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
          <h1 className="text-3xl font-bold mb-2">Help & FAQ</h1>
          <p className="text-muted-foreground">Find answers to common questions and learn how to use our tools effectively.</p>
        </div>

        {/* Quick Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="text-center">
              <HelpCircleIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Getting Started</CardTitle>
              <CardDescription>New to 30tools? Start here!</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Learn the basics of using our tools and get up to speed quickly.
              </p>
              <Button variant="outline" size="sm">
                <BookOpenIcon className="h-4 w-4 mr-2" />
                Quick Start Guide
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <LifeBuoyIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Need Support?</CardTitle>
              <CardDescription>We're here to help!</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Can't find what you're looking for? Get in touch with our team.
              </p>
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  Contact Support
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <BookOpenIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Tutorials</CardTitle>
              <CardDescription>Step-by-step guides</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Detailed tutorials for getting the most out of each tool.
              </p>
              <Button variant="outline" size="sm">
                View Tutorials
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqs.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-2xl font-semibold">{section.category}</h2>
                <Badge variant="secondary">{section.questions.length} questions</Badge>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${section.category}-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <Card className="mt-12">
          <CardHeader className="text-center">
            <CardTitle>Still Need Help?</CardTitle>
            <CardDescription>
              Can't find the answer you're looking for? Our support team is here to help.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button>
                  <LifeBuoyIcon className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </Link>
              <Button variant="outline">
                <BookOpenIcon className="h-4 w-4 mr-2" />
                Browse Documentation
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Average response time: Less than 24 hours
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
