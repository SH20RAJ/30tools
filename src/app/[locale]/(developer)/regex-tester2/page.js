import RegexTesterTool from "@/components/tools/developer/RegexTesterTool";
import {
  BreadcrumbsEnhanced,
  FAQSection,
  ReviewSnippets,
  RelatedTools,
  ToolFeatures,
  UserComments,
  QuickActions,
} from "@/components/seo";
import { DeveloperToolExamples } from "@/components/seo/DeveloperToolsHub";
import { getDeveloperToolFAQs } from "@/constants/seo/developer-faqs";

export const metadata = {
  title: "Regex Tester2 - Free Developer Tool | Professional Coding",
  description:
    "Professional regex tester2 for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  keywords:
    "regex tester, regular expression tester, regex validator, pattern tester, regex matcher, regexp tester, regex debugger, pattern validator, regex tester online free javascript, regular expression validator python, regex pattern tester with examples, regex matcher online tool, test regex patterns online, regex debugger with explanations, regular expression tester php, regex validator with test cases",
  openGraph: {
    title:
      "Free Regex Tester & Pattern Validator Online - Test Regular Expressions",
    description:
      "Test & validate regular expressions with real-time matching. Supports multiple regex flavors with pattern explanation.",
    url: "https://30tools.com/regex-tester2",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/regex-tester.jpg",
        width: 1200,
        height: 630,
        alt: "Regex Tester Tool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Regex Tester & Pattern Validator Online",
    description:
      "Test regular expressions with real-time matching and pattern explanation. Perfect for developers.",
    images: ["/og-images/regex-tester.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/regex-tester2",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Developer Tools",
};

export default function RegexTesterPage() {
  // Tool-specific data
  const toolData = {
    id: "regex-tester",
    name: "Regex Tester & Pattern Validator",
    description:
      "Test and validate regular expressions with real-time matching",
    category: "developer-tools",
    route: "/regex-tester2",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Developer Tools", url: "/developer-tools" },
    { name: "Regex Tester", url: "/regex-tester2" },
  ];

  // Tool features
  const features = [
    "Real-time pattern matching",
    "Multiple regex flavors",
    "Match highlighting",
    "Pattern explanation",
    "Test case management",
    "Capture group display",
    "Syntax error detection",
    "Performance metrics",
  ];

  // Usage examples
  const examples = [
    {
      title: "Email Validation",
      description: "Validate email addresses with regex pattern",
      input: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
      output: "Matches: user@example.com, test.email+tag@domain.co.uk",
    },
    {
      title: "Phone Number Extraction",
      description: "Extract phone numbers from text",
      input: "\\(?\\d{3}\\)?[-.]?\\d{3}[-.]?\\d{4}",
      output: "Matches: (555) 123-4567, 555.123.4567, 555-123-4567",
    },
    {
      title: "URL Pattern Matching",
      description: "Match URLs and extract components",
      input: "https?://[\\w.-]+\\.[a-zA-Z]{2,}(/[^\\s]*)?",
      output: "Matches: https://example.com, http://subdomain.site.org/path",
    },
  ];

  // FAQ data
  const faqs = getDeveloperToolFAQs("regex-tester");

  // Related tools
  const relatedTools = [
    {
      id: "json-formatter",
      name: "JSON Formatter",
      description: "Format and validate JSON data",
      route: "/json-formatter",
      category: "developer-tools",
    },
    {
      id: "api-tester",
      name: "API Tester",
      description: "Test REST APIs with custom headers",
      route: "/api-tester",
      category: "developer-tools",
    },
    {
      id: "url-encoder",
      name: "URL Encoder",
      description: "Encode and decode URLs",
      route: "/url-encoder",
      category: "developer-tools",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Breadcrumbs with Schema */}
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Free Regex Tester & Pattern Validator Online - Test Regular
            Expressions
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Test & validate regular expressions with real-time matching.
            Supports JavaScript, Python, PHP regex flavors. Pattern explanation,
            match highlighting, capture groups, and test case management.
            Perfect for developers and data validation.
          </p>

          <QuickActions
            toolName="Regex Tester"
            toolUrl="https://30tools.com/regex-tester2"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <RegexTesterTool />
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <ToolFeatures
            features={features}
            title="Why Choose Our Regex Tester?"
            variant="grid"
          />
        </div>

        {/* Usage Examples */}
        <DeveloperToolExamples tool={toolData} examples={examples} />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="regex-tester"
            title="What Developers Say About Our Regex Tester"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Regex Tester FAQ"
            categoryTitle="Regular Expression Testing & Validation"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="regex-tester2"
            category="developer-tools"
            tools={relatedTools}
            title="More Developer Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="regex-tester"
          toolName="Regex Tester"
          showStats={true}
          allowComments={true}
        />
      </main>

      {/* Structured Data for Tool */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Regex Tester & Pattern Validator",
            description:
              "Test and validate regular expressions with real-time matching and pattern explanation",
            url: "https://30tools.com/regex-tester2",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "30tools",
              url: "https://30tools.com",
            },
            featureList: features,
            screenshot: "https://30tools.com/screenshots/regex-tester.jpg",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "1645",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
    </div>
  );
}
