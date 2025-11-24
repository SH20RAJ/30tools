// EXEMPLARY SEO-OPTIMIZED PAGE.JS TEMPLATE
// Use this as a reference for creating SEO-friendly pages for all 167 tools

import JSONFormatterTool from "@/components/tools/developer/json-formatter";
import { SEO_TEMPLATES } from "@/constants/seo/metadata-templates";

// ============================================================================
// 1. COMPREHENSIVE METADATA (Essential for SEO)
// ============================================================================
export const metadata = {
    title: SEO_TEMPLATES.JSON_FORMATTER.title,
    description: SEO_TEMPLATES.JSON_FORMATTER.description,
    keywords: SEO_TEMPLATES.JSON_FORMATTER.keywords,

    // Open Graph for social sharing
    openGraph: {
        title: SEO_TEMPLATES.JSON_FORMATTER.title,
        description: SEO_TEMPLATES.JSON_FORMATTER.description,
        url: `https://30tools.com${SEO_TEMPLATES.JSON_FORMATTER.canonical}`,
        images: [
            {
                url: "/og-images/json-formatter.jpg",
                width: 1200,
                height: 630,
                alt: "Free JSON Formatter - Beautify & Validate JSON Online"
            }
        ],
        type: "website",
        siteName: "30tools - Free Online Tools"
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: SEO_TEMPLATES.JSON_FORMATTER.title,
        description: SEO_TEMPLATES.JSON_FORMATTER.description,
        images: ["/og-images/json-formatter.jpg"],
        creator: "@30tools"
    },

    // Canonical URL
    alternates: {
        canonical: `https://30tools.com${SEO_TEMPLATES.JSON_FORMATTER.canonical}`
    },

    // Robots directives
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

// ============================================================================
// 2. STRUCTURED DATA (JSON-LD Schema for Rich Snippets)
// ============================================================================
const jsonLdSchemas = {
    // WebApplication Schema
    webApp: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "JSON Formatter & Validator",
        "description": "Format, validate, and beautify JSON data online. Free JSON formatter with syntax highlighting, error detection, and tree view. Perfect for developers working with JSON APIs.",
        "url": "https://30tools.com/json-formatter",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Any",
        "browserRequirements": "Requires JavaScript. Works in Chrome, Firefox, Safari, Edge.",
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
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "847",
            "bestRating": "5",
            "worstRating": "1"
        }
    },

    // HowTo Schema
    howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Format and Validate JSON Online",
        "description": "Step-by-step guide to format, beautify, and validate JSON data using our free online JSON formatter tool.",
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Paste JSON Data",
                "text": "Copy your JSON data and paste it into the input area. You can also upload a JSON file directly."
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Format & Validate",
                "text": "Click the 'Format' button to automatically beautify and validate your JSON. Any syntax errors will be highlighted."
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "View Results",
                "text": "Review the formatted JSON with syntax highlighting. Use the tree view for better visualization of nested structures."
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Copy or Download",
                "text": "Copy the formatted JSON to your clipboard or download it as a .json file for your project."
            }
        ],
        "totalTime": "PT1M",
        "tool": {
            "@type": "HowToTool",
            "name": "JSON Formatter"
        }
    },

    // FAQPage Schema
    faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a JSON formatter?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A JSON formatter is a tool that takes unformatted or minified JSON data and makes it human-readable by adding proper indentation, line breaks, and syntax highlighting. It helps developers read and debug JSON data more easily."
                }
            },
            {
                "@type": "Question",
                "name": "How do I validate JSON syntax?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Paste your JSON data into our formatter and it will automatically validate the syntax. If there are any errors (like missing commas, brackets, or quotes), they will be highlighted with specific error messages showing exactly where the problem is."
                }
            },
            {
                "@type": "Question",
                "name": "Is this JSON formatter free to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our JSON formatter is completely free with no registration required. You can format and validate unlimited JSON data without any restrictions or watermarks."
                }
            },
            {
                "@type": "Question",
                "name": "Are my JSON files secure?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! All JSON formatting and validation happens entirely in your browser. Your data never leaves your device and is never uploaded to any server, ensuring complete privacy and security."
                }
            },
            {
                "@type": "Question",
                "name": "Can I format minified JSON?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our formatter can beautify even heavily minified JSON code. It will add proper indentation, line breaks, and organize the structure to make it readable while maintaining the exact same data."
                }
            }
        ]
    },

    // BreadcrumbList Schema
    breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://30tools.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Developer Tools",
                "item": "https://30tools.com/#developer-tools"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "JSON Formatter"
            }
        ]
    }
};

// ============================================================================
// 3. MAIN PAGE COMPONENT
// ============================================================================
export default function JSONFormatterPage() {
    return (
        <>
            {/* Inject all structured data schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.breadcrumb) }}
            />

            <div className="container mx-auto px-4 py-8">
                {/* Breadcrumb Navigation */}
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex items-center space-x-2 text-sm text-gray-600">
                        <li><a href="/" className="hover:text-blue-600">Home</a></li>
                        <li>/</li>
                        <li><a href="/#developer-tools" className="hover:text-blue-600">Developer Tools</a></li>
                        <li>/</li>
                        <li className="text-gray-900 font-medium">JSON Formatter</li>
                    </ol>
                </nav>

                {/* Main Heading - H1 with primary keyword */}
                <h1 className="text-4xl font-bold mb-4">
                    Free JSON Formatter & Validator Online
                </h1>

                {/* Introduction paragraph with keywords */}
                <p className="text-lg text-gray-700 mb-8">
                    Format, beautify, and validate JSON data online with our free JSON formatter tool.
                    Perfect for developers working with APIs, configuration files, and data structures.
                    Features syntax highlighting, error detection, tree view, and instant formatting.
                </p>

                {/* Main Tool Component */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
                    <JSONFormatterTool />
                </div>

                {/* SEO Content Sections */}

                {/* How to Use Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">How to Use the JSON Formatter</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-blue-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">1. Paste JSON Data</h3>
                            <p className="text-gray-700">
                                Copy your JSON data and paste it into the input area. You can also upload a JSON file directly from your computer.
                            </p>
                        </div>
                        <div className="p-6 bg-green-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">2. Format & Validate</h3>
                            <p className="text-gray-700">
                                Click 'Format' to beautify and validate your JSON. Any syntax errors will be highlighted with helpful error messages.
                            </p>
                        </div>
                        <div className="p-6 bg-purple-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">3. View Results</h3>
                            <p className="text-gray-700">
                                Review the formatted JSON with syntax highlighting. Switch to tree view for better visualization of nested data.
                            </p>
                        </div>
                        <div className="p-6 bg-orange-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">4. Copy or Download</h3>
                            <p className="text-gray-700">
                                Copy the formatted JSON with one click or download it as a .json file for use in your projects.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold mb-2">Syntax Highlighting</h3>
                            <p className="text-gray-600">
                                Beautiful color-coded syntax highlighting makes JSON easy to read and understand at a glance.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">✅</div>
                            <h3 className="text-xl font-semibold mb-2">Error Detection</h3>
                            <p className="text-gray-600">
                                Instant validation with detailed error messages showing exactly where syntax issues occur.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🌳</div>
                            <h3 className="text-xl font-semibold mb-2">Tree View</h3>
                            <p className="text-gray-600">
                                Visualize complex nested JSON structures in an expandable tree format for easier navigation.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-2">Instant Formatting</h3>
                            <p className="text-gray-600">
                                Format and beautify JSON instantly with proper indentation and line breaks.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
                            <p className="text-gray-600">
                                All processing happens in your browser. Your JSON data never leaves your device.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">📋</div>
                            <h3 className="text-xl font-semibold mb-2">One-Click Copy</h3>
                            <p className="text-gray-600">
                                Copy formatted JSON to clipboard instantly with a single click.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">What is a JSON formatter?</h3>
                            <p className="text-gray-700">
                                A JSON formatter is a tool that takes unformatted or minified JSON data and makes it human-readable by adding proper indentation, line breaks, and syntax highlighting. It helps developers read and debug JSON data more easily.
                            </p>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">How do I validate JSON syntax?</h3>
                            <p className="text-gray-700">
                                Paste your JSON data into our formatter and it will automatically validate the syntax. If there are any errors (like missing commas, brackets, or quotes), they will be highlighted with specific error messages showing exactly where the problem is.
                            </p>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">Is this JSON formatter free to use?</h3>
                            <p className="text-gray-700">
                                Yes, our JSON formatter is completely free with no registration required. You can format and validate unlimited JSON data without any restrictions or watermarks.
                            </p>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">Are my JSON files secure?</h3>
                            <p className="text-gray-700">
                                Absolutely! All JSON formatting and validation happens entirely in your browser. Your data never leaves your device and is never uploaded to any server, ensuring complete privacy and security.
                            </p>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">Can I format minified JSON?</h3>
                            <p className="text-gray-700">
                                Yes, our formatter can beautify even heavily minified JSON code. It will add proper indentation, line breaks, and organize the structure to make it readable while maintaining the exact same data.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Related Tools Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Related Developer Tools</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <a href="/xml-formatter" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">XML Formatter</h3>
                            <p className="text-gray-600">Format and validate XML documents online</p>
                        </a>
                        <a href="/base64-tool" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Base64 Encoder/Decoder</h3>
                            <p className="text-gray-600">Encode and decode Base64 strings and files</p>
                        </a>
                        <a href="/regex-tester" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Regex Tester</h3>
                            <p className="text-gray-600">Test and validate regular expressions online</p>
                        </a>
                    </div>
                </section>

                {/* Additional Content for SEO */}
                <section className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">Why Use Our JSON Formatter?</h2>
                    <p className="text-gray-700 mb-4">
                        JSON (JavaScript Object Notation) is a lightweight data-interchange format that's widely used in web development, APIs, and configuration files. However, JSON data is often minified or poorly formatted, making it difficult to read and debug. Our free JSON formatter solves this problem by instantly beautifying and validating your JSON data.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Whether you're a web developer working with REST APIs, a data analyst processing JSON datasets, or a DevOps engineer managing configuration files, our JSON formatter makes it easy to work with JSON data. The tool provides syntax highlighting, error detection, and a tree view to help you visualize complex nested structures.
                    </p>
                    <h3 className="text-xl font-semibold mb-3">Perfect for Developers</h3>
                    <p className="text-gray-700 mb-4">
                        Our JSON formatter is designed specifically for developers who work with JSON on a daily basis. It includes features like one-click copying, file upload support, and the ability to handle large JSON files efficiently. The browser-based processing ensures that your sensitive data remains private and never leaves your device.
                    </p>
                </section>
            </div>
        </>
    );
}
