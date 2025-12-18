import PasswordBreachCheckerTool from "@/components/tools/developer/PasswordBreachCheckerTool";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldAlert,
  Fingerprint,
  Lock,
  Database,
  Search,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Password Breach Checker (2026) - Check Compromised Passwords",
  description: "Best Free Password Breach Checker 2026. Securely check if your password has been exposed in data leaks. Uses K-Anonymity for 100% privacy.",
  keywords: [
    "data breach checker",
    "password leak check",
    "have i been pwned password",
    "check compromised password",
    "password security checker",
    "safe password check",
    "data leak search",
    "identity theft protection",
    "cybersecurity tool",
    "k-anonymity checker"
  ],
  authors: [{ name: "30Tools Team" }],
  creator: "30Tools",
  publisher: "30Tools",
  alternates: {
    canonical: "https://30tools.com/password-breach-checker",
  },
  openGraph: {
    title: "Password Breach Checker (2026) - Is Your Password Safe?",
    description: "⚡ Check if your password is in a data breach! Secure k-anonymity search ensures your password never leaves your device.",
    url: "https://30tools.com/password-breach-checker",
    siteName: "30Tools",
    type: "website",
    images: [
      {
        url: "/og-images/password-breach-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Password Breach Check 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Password Breach Checker - Is Your Password Leaked?",
    description: "⚡ Securely check your password against billions of leaked records. 100% Private.",
    images: ["/og-images/password-breach-checker.jpg"],
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
    "name": "Password Breach Checker",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Check password against 11B+ breached records",
      "K-Anonymity privacy protection",
      "Instant results",
      "Secure and anonymous",
      "Free to use"
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it safe to enter my password here?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. We use a method called k-anonymity. We only send the first 5 characters of your password's SHA-1 hash to the API. Your actual password is NEVER sent to us or anyone else."
        }
      },
      {
        "@type": "Question",
        "name": "What database do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We query the 'Have I Been Pwned' database, which contains billions of exposed passwords from known data breaches."
        }
      },
      {
        "@type": "Question",
        "name": "What if my password is found?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your password is found, it means it has been exposed in a data breach. You should change it immediately on all sites where you use it. Do not reuse breached passwords."
        }
      }
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check Password Safety",
    "description": "Step-by-step guide to check if a password has been leaked.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Password",
        "text": "Type a password into the secure input field.",
        "image": "https://30tools.com/og-images/password-breach-checker.jpg",
        "url": "https://30tools.com/password-breach-checker#step1"
      },
      {
        "@type": "HowToStep",
        "name": "Scan",
        "text": "The tool hashes your password locally and checks the database prefix.",
        "url": "https://30tools.com/password-breach-checker#step2"
      },
      {
        "@type": "HowToStep",
        "name": "Result",
        "text": "See instantly if the password has appeared in any known data breaches.",
        "url": "https://30tools.com/password-breach-checker#step3"
      }
    ]
  }
};

export default function PasswordBreachCheckerPage() {
  const features = [
    {
      icon: <Fingerprint className="w-5 h-5 text-amber-500" />,
      title: "K-Anonymity",
      description: "We use mathematical privacy protection. Your full password never leaves your browser.",
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      title: "11 Billion+ Records",
      description: "Checks against a massive, constantly updated database of leaked credentials.",
    },
    {
      icon: <Lock className="w-5 h-5 text-blue-500" />,
      title: "Secure Hashing",
      description: "Passwords are hashed using SHA-1 locally before any partial check is performed.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-violet-500" />,
      title: "Instant Verification",
      description: "Get results in milliseconds. Know immediately if you need to change your password.",
    },
  ];

  const steps = [
    { title: "Type Password", desc: "Enter securely." },
    { title: "Check", desc: "Scan database." },
    { title: "Secure Account", desc: "Change if leaked." },
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
            Password <span className="text-primary">Breach Checker</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Securely check if your password has been compromised in a data breach. We use K-Anonymity to ensure your privacy.
          </p>
        </div>

        <div className="mb-20">
          <PasswordBreachCheckerTool />
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
          <h2 className="text-3xl font-bold text-center mb-6">Why Check for Breaches?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Credential Stuffing Attacks</h3>
              <p className="text-muted-foreground">
                Hackers use lists of breached username/password pairs to try and log into other services (like banking or social media). Using a unique, unbreached password everywhere is your best defense.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Proactive Security</h3>
              <p className="text-muted-foreground">
                Data breaches happen daily. Regularly checking your passwords ensures you stay ahead of bad actors. If a password you use is flagged, you can change it before anyone exploits it.
              </p>
            </div>
          </div>
        </article>

      </div>
    </>
  );
}
