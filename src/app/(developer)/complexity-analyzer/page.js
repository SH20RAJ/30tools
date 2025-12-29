import ComplexityAnalyzer from "@/components/tools/developer/ComplexityAnalyzer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Cpu,
  Layers,
  Lightbulb,
  Code,
  Zap,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Big O Complexity Analyzer (2026) - AI Code Analysis | 30Tools",
  description: "Best Free Time & Space Complexity Analyzer 2026. Get Big O notation for your code instantly using AI. Supports Python, Java, C++, JS, and more.",
  keywords: [
    "complexity analyzer",
    "big o calculator",
    "time complexity checker",
    "space complexity analyzer",
    "code efficiency tool",
    "algorithm analysis",
    "ai code optimizer",
    "performance tuning",
    "code complexity metric",
    "programming tools"
  ],
  authors: [{ name: "30Tools Team" }],
  creator: "30Tools",
  publisher: "30Tools",
  alternates: {
    canonical: "https://30tools.com/complexity-analyzer",
  },
  openGraph: {
    title: "Big O Complexity Analyzer (2026) - AI Code Analysis",
    description: "⚡ Calculate Time & Space Complexity of your algorithms instantly with AI. Optimize your code performance. Free.",
    url: "https://30tools.com/complexity-analyzer",
    siteName: "30Tools",
    type: "website",
    images: [
      {
        url: "/og-complexity-analyzer.png",
        width: 1200,
        height: 630,
        alt: "Time & Space Complexity Analyzer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big O Complexity Analyzer (2026) - AI Tool",
    description: "⚡ Get Big O notation & optimization tips for your code instantly.",
    images: ["/og-complexity-analyzer.png"],
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
    "name": "Time & Space Complexity Analyzer",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Calculate Time Complexity (Big O)",
      "Calculate Space Complexity",
      "AI-powered code optimization tips",
      "Support for all major programming languages",
      "Free to use"
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Big O Notation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Big O notation describes an algorithm's performance or complexity. It specifically describes the worst-case scenario, and can be used to compare the efficiency of different algorithms."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AI analysis work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tool uses advanced AI models to read your code logic, understand its flow and structure (loops, recursion, etc.), and determine its theoretical time and space complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Which languages are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support almost all popular programming languages including Python, JavaScript, Java, C++, C#, Ruby, Go, and Swift."
        }
      }
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Analyze Code Complexity",
    "description": "Step-by-step guide to get Big O notation for your code.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Paste Code",
        "text": "Paste your function or algorithm into the code editor.",
        "image": "https://30tools.com/og-complexity-analyzer.png",
        "url": "https://30tools.com/complexity-analyzer#step1"
      },
      {
        "@type": "HowToStep",
        "name": "Analyze",
        "text": "Click 'Analyze' to let the AI evaluate performance.",
        "url": "https://30tools.com/complexity-analyzer#step2"
      },
      {
        "@type": "HowToStep",
        "name": "Review",
        "text": "See the Big O Time/Space complexity and read optimization tips.",
        "url": "https://30tools.com/complexity-analyzer#step3"
      }
    ]
  }
};

export default function ComplexityAnalyzerPage() {
  const features = [
    {
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      title: "Time Complexity",
      description: "Accurate Big O estimation for worst-case time scenarios (e.g., O(n), O(log n)).",
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      title: "Space Complexity",
      description: "Understand how much memory your algorithm consumes as input grows.",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-blue-500" />,
      title: "Optimization Tips",
      description: "Get actionable advice on how to refactor your code for better performance.",
    },
    {
      icon: <Code className="w-5 h-5 text-violet-500" />,
      title: "Multi-Language",
      description: "Works with Python, JS, C++, Java, and essentially any readable pseudocode.",
    },
  ];

  const steps = [
    { title: "Input Code", desc: "Paste algorithm." },
    { title: "Analyze", desc: "AI evaluation." },
    { title: "Optimize", desc: "Improve code." },
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
            Complexity <span className="text-primary">Analyzer</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Determine the Time and Space complexity of your code instantly with AI. Optimize algorithms for better performance.
          </p>
        </div>

        <div className="mb-20">
          <ComplexityAnalyzer />
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
          <h2 className="text-3xl font-bold text-center mb-6">Why Complexity Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Scale with Confidence</h3>
              <p className="text-muted-foreground">
                An O(n²) algorithm might work fine for 10 items, but crash your server with 10,000. Understanding complexity helps you write code that scales gracefully as your user base and data grow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Ace Technical Interviews</h3>
              <p className="text-muted-foreground">
                Big O analysis is a staple of software engineering interviews. Practice with our tool to get intuitive feedback on the efficiency of your solutions and improve your problem-solving skills.
              </p>
            </div>
          </div>
        </article>

      </div>
    </>
  );
}
