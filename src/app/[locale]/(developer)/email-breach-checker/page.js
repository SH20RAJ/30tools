import EmailBreachCheckerTool from "@/components/tools/developer/EmailBreachCheckerTool";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldAlert,
  MailWarning,
  Lock,
  Search,
  History,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Email Breach Checker (2026) - Have You Been Pwned?",
  description: "Best Free Email Breach Checker 2026. Check if your email address has appeared in data leaks. Securely search the Have I Been Pwned database.",
  keywords: [
    "email breach checker",
    "have i been pwned online",
    "email hack check",
    "data breach search",
    "compromised email scanner",
    "email leak detector",
    "identity theft check",
    "cybersecurity monitoring",
    "account security tool",
    "free breach scan"
  ],
  authors: [{ name: "30Tools Team" }],
  creator: "30Tools",
  publisher: "30Tools",
  alternates: {
    canonical: "https://30tools.com/email-breach-checker",
  },
  openGraph: {
    title: "Email Breach Checker (2026) - Is Your Email Safe?",
    description: "⚡ Check if your email is in a data breach! Instant search across 11B+ records. Find out what data was exposed.",
    url: "https://30tools.com/email-breach-checker",
    siteName: "30Tools",
    type: "website",
    images: [
      {
        url: "/og-images/email-breach-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Email Breach Check 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Breach Checker - Have You Been Pwned?",
    description: "⚡ Search leaked databases to see if your email was exposed. 100% Free.",
    images: ["/og-images/email-breach-checker.jpg"],
    creator: "@30tools",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Email Breach Checker",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Check email against major data breaches",
      "See which sites leaked your data",
      "Find out what data was compromised",
      "Instant results",
      "Free to use"
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does this tool work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This tool securely queries public databases of known data breaches (like Have I Been Pwned) to see if your email address appears in them."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if I've been pwned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your email is found in a breach, you should immediately change your password for that specific service. If you reused that password elsewhere, change it there too. Enable Two-Factor Authentication (2FA) for added security."
        }
      },
      {
        "@type": "Question",
        "name": "Do you hack the accounts to check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! We only check against lists of data that have effectively already been made public by hackers. We do not perform any hacking actions ourselves."
        }
      }
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check for Data Breaches",
    "description": "Step-by-step guide to scan your email for leaks.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Email",
        "text": "Type your email address into the search box.",
        "image": "https://30tools.com/og-images/email-breach-checker.jpg",
        "url": "https://30tools.com/email-breach-checker#step1"
      },
      {
        "@type": "HowToStep",
        "name": "Scan",
        "text": "Click 'Check' to search the breach database.",
        "url": "https://30tools.com/email-breach-checker#step2"
      },
      {
        "@type": "HowToStep",
        "name": "Review",
        "text": "See a list of breaches involving your email and what data was exposed.",
        "url": "https://30tools.com/email-breach-checker#step3"
      }
    ]
  }
};

export default function EmailBreachCheckerPage() {
  const features = [
    {
      icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
      title: "Comprehensive Database",
      description: "Scans billions of records from thousands of known data breaches globally.",
    },
    {
      icon: <History className="w-5 h-5 text-emerald-500" />,
      title: "Breach History",
      description: "See not just if you were breached, but when and by which service.",
    },
    {
      icon: <Search className="w-5 h-5 text-blue-500" />,
      title: "Detailed Reports",
      description: "Learn exactly what data was exposed: passwords, phone numbers, IP addresses, etc.",
    },
    {
      icon: <Lock className="w-5 h-5 text-violet-500" />,
      title: "Protect Identity",
      description: "Early detection helps you secure your accounts before identity theft occurs.",
    },
  ];

  const steps = [
    { title: "Enter Email", desc: "Your email address." },
    { title: "Search", desc: "Scan breaches." },
    { title: "Verify", desc: "See exposure details." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Email <span className="text-primary">Breach Checker</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find out if your email address has been exposed in a data breach. Search billions of leaked records instantly.
          </p>
        </div>

        <div className="mb-20">
          <EmailBreachCheckerTool />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <div key={i} className="bg-card/50 hover:bg-card p-6 rounded-2xl border border-border/50 transition-all duration-200">
              <div className="bg-background w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-4 border border-border/50">
                {f.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* How To */}
        <section className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20 border border-border/50">
          <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-1/2" />
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-background p-6 rounded-2xl border border-border/50 transition-transform hover:scale-105 duration-300 shadow-sm w-full md:w-1/3 z-10">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {jsonLdSchemas.faq.mainEntity.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-border/50">
                <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">
                  {faq.name}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.acceptedAnswer.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Content Block for SEO */}
        <article className="prose dark:prose-invert max-w-none mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Stay Safe Online</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Understanding Data Breaches</h3>
              <p className="text-muted-foreground">
                A data breach occurs when sensitive information is accessed without authorization. This can include usernames, passwords, and personal details. Knowing you're part of a breach is the first step to securing your digital life.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
              <p className="text-muted-foreground">
                Use a password manager to generate unique, complex passwords for every site. Enable Two-Factor Authentication (2FA) wherever possible. This ensures that even if one password is leaked, your other accounts remain secure.
              </p>
            </div>
          </div>
        </article>

      </div>
    </>
  );
}
