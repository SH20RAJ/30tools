
import { notFound } from "next/navigation";
import { API_KEY_TOOLS } from "@/data/api-key-tools";
import ApiKeyTester from "@/components/tools/developer/ApiKeyTester/ApiKeyTester";
import { BreadcrumbsEnhanced, RelatedTools } from "@/components/seo";
import { Badge } from "@/components/ui/badge";


export async function generateStaticParams() {
  return API_KEY_TOOLS.map((tool) => ({
    slug: tool.id,
  }));
}

export async function generateMetadata({ params }) {
  const tool = API_KEY_TOOLS.find((t) => t.id === params.slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: `Test ${tool.name} API Key | API Key Tester`,
    description: `Securely test your ${tool.name} API key online. ${tool.description}. Free developer tool to validate ${tool.name} credentials.`,
    keywords: `${tool.name} api key tester, test ${tool.name} key, validate ${tool.name} api key, ${tool.name} credentials check`,
  };
}

export default function ApiKeyToolPage({ params }) {
  const tool = API_KEY_TOOLS.find((t) => t.id === params.slug);

  if (!tool) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Developer Tools", url: "/developer-tools" },
    { name: "API Key Tester", url: "/api-key-tester" },
    { name: tool.name, url: `/api-key-tester/${tool.id}` },
  ];

  // Get related tools (same category, excluding current)
  const relatedTools = API_KEY_TOOLS.filter(
    (t) => t.category === tool.category && t.id !== tool.id
  )
    .slice(0, 3)
    .map((t) => ({
      id: t.id,
      name: t.name,
      description: t.description,
      route: `/api-key-tester/${t.id}`,
      category: t.category,
    }));

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8 text-center">
            <Badge variant="outline" className="mb-4">{tool.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Test Your {tool.name} API Key
            </h1>
            <p className="text-xl text-muted-foreground">
                {tool.description}. Securely validate your credentials.
            </p>
        </div>

        <ApiKeyTester tool={tool} />

        {relatedTools.length > 0 && (
          <div className="mt-16 max-w-4xl mx-auto">
             <RelatedTools
                currentTool={tool.id}
                category="developer-tools" // Generic category for the component logic
                tools={relatedTools}
                title={`More ${tool.category} Tools`}
             />
          </div>
        )}
      </main>
    </div>
  );
}
