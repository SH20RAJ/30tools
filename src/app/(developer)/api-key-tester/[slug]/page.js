import { notFound } from "next/navigation";
import { BreadcrumbsEnhanced, RelatedTools } from "@/components/seo";
import ApiKeyTester from "@/components/tools/developer/ApiKeyTester/ApiKeyTester";
import { Badge } from "@/components/ui/badge";
import { API_KEY_TOOLS } from "@/data/api-key-tools";

export async function generateStaticParams() {
	return API_KEY_TOOLS.map((tool) => ({
		slug: tool.id,
	}));
}

export const metadata = {
	title: "API Key Tester - Securely Verify Your API Credentials | 30tools",
	description:
		"Securely test and validate your API keys for various services including OpenAI, Anthropic, Google Gemini, Stripe, and more. Free developer tool by 30tools.",
	robots: { index: true, follow: true },
};

export default async function ApiKeyToolPage({ params }) {
	const resolvedParams = await params;
	const tool = API_KEY_TOOLS.find((t) => t.id === resolvedParams.slug);

	if (!tool) {
		notFound();
	}

	const breadcrumbs = [
		{ name: "Developer Tools", url: "/developer-tools" },
		{ name: "API Key Tester", url: "/api-key-tester" },
		{ name: tool.name, url: `/api-key-tester/${tool.id}` },
	];

	const relatedTools = API_KEY_TOOLS.filter(
		(t) => t.category === tool.category && t.id !== tool.id,
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
					<Badge variant="outline" className="mb-4">
						{tool.category}
					</Badge>
					<h1 className="text-3xl md:text-4xl font-bold mb-4">
						Test Your {tool.name} API Key
					</h1>
					<p className="text-xl text-muted-foreground">
						{tool.description}. Securely validate your credentials.
					</p>
				</div>

				<ApiKeyTester toolId={tool.id} />

				{relatedTools.length > 0 && (
					<div className="mt-16 max-w-4xl mx-auto">
						<RelatedTools
							currentTool={tool.id}
							category="developer-tools"
							tools={relatedTools}
							title={`More ${tool.category} Tools`}
						/>
					</div>
				)}
			</main>
		</div>
	);
}
