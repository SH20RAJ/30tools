import TempEmailCheckerTool from "@/components/tools/developer/TempEmailCheckerTool";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MailX,
  ShieldCheck,
  Globe,
  Zap,
  UserX,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Temporary Email Checker (2026) - Verify Disposable Emails",
  description: "Best Free Temporary Email Detector 2026. Check if an email address uses a disposable domain. prevent spam registrations & verify real users.",
  keywords: [
    "temporary email checker",
    "disposable email detector",
    "fake email scanner",
    "verify email address",
    "temp mail validator",
    "throwaway email checker",
    "spam email blocker",
    "email domain blacklist",
    "prevent fake signups",
    "email verification tool"
  ],
  authors: [{ name: "30Tools Team" }],
  creator: "30Tools",
  publisher: "30Tools",
  alternates: {
    canonical: "https://30tools.com/temp-email-checker",
  },
  openGraph: {
    title: "Temporary Email Checker (2026) - Detect Fake Emails",
    description: "⚡ Instantly verify if an email address is temporary or disposable. Protect your business from spam.",
    url: "https://30tools.com/temp-email-checker",
    siteName: "30Tools",
    type: "website",
    images: [
      {
        url: "/og-images/temp-email-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Temp Email Checker 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Temporary Email Checker - Detect Disposable Emails",
    description: "⚡ Stop fake signups. Check for disposable email domains instantly. 100% Free.",
    images: ["/og-images/temp-email-checker.jpg"],
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
    "name": "Temporary Email Checker",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Detect disposable email providers",
      "Verify email format validity",
      "Prevent spam registrations",
      "Instant domain check",
      "Free to use"
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a disposable email?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A disposable email is a temporary email address created for a short period, often used to bypass registration forms or avoid spam. Services like 10minutemail or TempMail provide these."
        }
      },
      {
        "@type": "Question",
        "name": "Why check for temporary emails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Businesses check for them to ensure they are acquiring high-quality leads and preventing fake accounts, spam, and fraud on their platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Is this tool accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain an extensive, constantly updated database of disposable email domains to ensure high detection accuracy."
        }
      }
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Detect Fake Emails",
    "description": "Step-by-step guide to verify an email address.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Address",
        "text": "Paste the email address you want to verify.",
        "image": "https://30tools.com/og-images/temp-email-checker.jpg",
        "url": "https://30tools.com/temp-email-checker#step1"
      },
      {
        "@type": "HowToStep",
        "name": "Check",
        "text": "Click 'Verify' to scan the domain against our blocklist.",
        "url": "https://30tools.com/temp-email-checker#step2"
      },
      {
        "@type": "HowToStep",
        "name": "Result",
        "text": "Instant feedback: Valid (Safe) or Disposable (Risk).",
        "url": "https://30tools.com/temp-email-checker#step3"
      }
    ]
  }
};

export default function TempEmailCheckerPage() {
  const features = [
    {
      icon: <MailX className="w-5 h-5 text-amber-500" />,
      title: "Disposable Detection",
      description: "Identifies thousands of temporary email providers instantly.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "Fraud Prevention",
      description: "Stop fake users and bots from registering on your platform.",
    },
    {
      icon: <UserX className="w-5 h-5 text-blue-500" />,
      title: "Improve Quality",
      description: "Ensure your user base consists of real people with permanent addresses.",
    },
    {
      icon: <Zap className="w-5 h-5 text-violet-500" />,
      title: "Instant API",
      description: "Fast lookup times ensure zero friction for your legitimate users.",
    },
  ];

  const steps = [
    { title: "Input Email", desc: "Address to check." },
    { title: "Verify", desc: "Scan domain." },
    { title: "Result", desc: "Safe or Fake." },
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
            Temporary Email <span className="text-primary">Checker</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Instantly detect disposable and temporary email addresses. Ensure your lists are clean and users are real.
          </p>
        </div>

        <div className="mb-20">
          <TempEmailCheckerTool />
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
          <h2 className="text-3xl font-bold text-center mb-6">Why Validate Emails?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Reduce Bounce Rates</h3>
              <p className="text-muted-foreground">
                Sending emails to invalid or temporary addresses hurts your sender reputation. Cleaning your list ensures high deliverability and protects your domain from being flagged as spam.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Save Marketing Costs</h3>
              <p className="text-muted-foreground">
                Why pay to send emails to bots or people who won't be there tomorrow? filtering out disposable emails saves you money and improves your marketing ROI.
              </p>
            </div>
          </div>
        </article>

      </div>
    </>
  );
}
