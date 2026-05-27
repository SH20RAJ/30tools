#!/usr/bin/env node

/**
 * Generate Optimized Tool Pages
 * Creates page.tsx files with enhanced metadata and schema markup
 */

const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

// Get all tools
function getAllTools() {
  const tools = [];
  for (const [categoryKey, categoryData] of Object.entries(toolsData.categories || {})) {
    if (categoryData.tools && Array.isArray(categoryData.tools)) {
      tools.push(...categoryData.tools.map(t => ({ ...t, categoryKey })));
    }
  }
  return tools;
}

// Generate page template with schema
function generatePageTemplate(tool) {
  const componentName = tool.id.split('-').map(w => 
    w.charAt(0).toUpperCase() + w.slice(1)
  ).join('');
  
  const componentPath = `@/components/tools/${tool.categoryKey}/${componentName}`;
  
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://30tools.com" },
      { "@type": "ListItem", position: 2, name: `${tool.categoryKey} Tools`, item: `https://30tools.com/${tool.categoryKey}-tools` },
      { "@type": "ListItem", position: 3, name: tool.name, item: `https://30tools.com${tool.route}` },
    ]
  };
  
  // Generate HowTo schema
  const howToSchema = tool.howTo ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Use ${tool.name}`,
    description: `Step-by-step guide on how to use ${tool.name} online for free.`,
    step: tool.howTo.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
    totalTime: "PT5M",
  } : null;
  
  // Generate FAQ schema
  const faqSchema = tool.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;
  
  // Generate SoftwareApplication schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: `https://30tools.com${tool.route}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
  
  return `import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ${componentName} from "${componentPath}";

export const metadata = {
\ttitle: "Free ${tool.name} Online - No Signup | 30tools",
\tdescription: "${tool.description.slice(0, 155)}...",
\tkeywords: "${tool.name.toLowerCase()}, free online tool, no signup, ${tool.categoryKey} tool, 30tools",
\talternates: {
\t\tcanonical: "https://30tools.com${tool.route}",
\t},
\topenGraph: {
\t\ttitle: "Free ${tool.name} Online - No Signup | 30tools",
\t\tdescription: "${tool.description.slice(0, 155)}...",
\t\turl: "https://30tools.com${tool.route}",
\t\tsiteName: "30tools",
\t\timages: [{ url: "/og-image.jpg" }],
\t\ttype: "website",
\t},
\ttwitter: {
\t\tcard: "summary_large_image",
\t\ttitle: "Free ${tool.name} Online - No Signup | 30tools",
\t\tdescription: "${tool.description.slice(0, 155)}...",
\t\timages: ["/og-image.jpg"],
\t},
\trobots: { index: true, follow: true },
};

export default async function ToolPage() {
\tconst tool = getToolByRoute("${tool.route}");

\tif (!tool) {
\t\treturn notFound();
\t}

\treturn (
\t\t<>
\t\t\t{/* Breadcrumb Schema */}
\t\t\t<script
\t\t\t\ttype="application/ld+json"
\t\t\t\tdangerouslySetInnerHTML={{
\t\t\t\t\t__html: JSON.stringify(${JSON.stringify(breadcrumbSchema)}),
\t\t\t\t}}
\t\t\t/>

${howToSchema ? `\t\t\t{/* HowTo Schema */}
\t\t\t<script
\t\t\t\ttype="application/ld+json"
\t\t\t\tdangerouslySetInnerHTML={{
\t\t\t\t\t__html: JSON.stringify(${JSON.stringify(howToSchema)}),
\t\t\t\t}}
\t\t\t/>
` : ''}
${faqSchema ? `\t\t\t{/* FAQ Schema */}
\t\t\t<script
\t\t\t\ttype="application/ld+json"
\t\t\t\tdangerouslySetInnerHTML={{
\t\t\t\t\t__html: JSON.stringify(${JSON.stringify(faqSchema)}),
\t\t\t\t}}
\t\t\t/>
` : ''}
\t\t\t{/* SoftwareApplication Schema */}
\t\t\t<script
\t\t\t\ttype="application/ld+json"
\t\t\t\tdangerouslySetInnerHTML={{
\t\t\t\t\t__html: JSON.stringify(${JSON.stringify(softwareSchema)}),
\t\t\t\t}}
\t\t\t/>

\t\t\t<ToolLayout tool={tool}>
\t\t\t\t<${componentName} />
\t\t\t</ToolLayout>
\t\t</>
\t);
}
`;
}

// Main function
function main() {
  const tools = getAllTools();
  let updatedCount = 0;
  
  console.log(`\n📝 Generating optimized pages for ${tools.length} tools...\n`);
  
  // For now, just show what would be generated for top 5 tools
  const sampleTools = tools.slice(0, 5);
  
  for (const tool of sampleTools) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`Tool: ${tool.name} (${tool.route})`);
    console.log(`${'='.repeat(80)}\n`);
    console.log(generatePageTemplate(tool));
    updatedCount++;
  }
  
  console.log(`\n✅ Generated ${updatedCount} sample pages`);
  console.log(`\n💡 To apply to all tools, uncomment the file writing logic in the script.\n`);
}

main();
