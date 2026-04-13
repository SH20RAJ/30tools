
export const metadata = {
  title: "Free API Key Tester Online - No Signup | 30tools",
  description: "Developer tools: API Key Tester. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser ",
  keywords: ["api key tester","api key tester free","api key tester online","api key tester tool"],
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
};

const jsonLd = generateToolJsonLd("api-key-tester", "developer", {
	name: "API Key Tester",
	description:
		"Securely test API keys for OpenAI, Stripe, SendGrid, and 30+ other services directly in your browser or terminal.",
	applicationCategory: "DeveloperApplication",
});

export default function ApiKeyTesterHub() {
	const breadcrumbs = [
		{ name: "Developer Tools", url: "/developer-tools" },
		{ name: "API Key Tester", url: "/api-key-tester" },
	];

	// Group tools by category
	const categories = API_KEY_TOOLS.reduce((acc, tool) => {
		if (!acc[tool.category]) acc[tool.category] = [];
		acc[tool.category].push(tool);
		return acc;
	}, {});

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="min-h-screen bg-background">
				<div className="container mx-auto px-4 pt-6">
					<BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
				</div>

				<main className="container mx-auto px-4 py-8 space-y-12">
					{/* Hero */}
					<div className="text-center space-y-4 max-w-3xl mx-auto">
						<Badge className="mb-2" variant="secondary">
							Developer Utilities
						</Badge>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
							Test API Keys Online Safely
						</h1>
						<p className="text-xl text-muted-foreground">
							Instantly verify your API keys for OpenAI, Stripe, and 30+ popular
							services. Secure, 100% client-side validation for developers.
						</p>
					</div>

					{/* Categories */}
					<div className="space-y-10">
						{Object.entries(categories).map(([category, tools]) => (
							<div key={category} className="space-y-4">
								<h2 className="text-2xl font-bold border-b pb-2">{category}</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-foreground">
									{tools.map((tool) => (
										<Link
											key={tool.id}
											href={`/api-key-tester/${tool.id}`}
											className="block h-full group transition-all hover:-translate-y-1"
										>
											<Card className="h-full border hover:border-primary transition-colors hover:shadow-lg">
												<CardHeader>
													<div className="flex justify-between items-start mb-2">
														{tool.type === "browser" ? (
															<Badge
																variant="outline"
																className="bg-green-500/5 text-green-600 border-green-200"
															>
																<Globe className="w-3 h-3 mr-1" /> Browser
															</Badge>
														) : (
															<Badge
																variant="outline"
																className="bg-orange-500/5 text-orange-600 border-orange-200"
															>
																<Terminal className="w-3 h-3 mr-1" /> Terminal
															</Badge>
														)}
														<ShieldCheck className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
													</div>
													<CardTitle className="text-xl">{tool.name}</CardTitle>
													<CardDescription className="line-clamp-2">
														{tool.description}
													</CardDescription>
												</CardHeader>
											</Card>
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</main>
			</div>
		</>
	);
}
