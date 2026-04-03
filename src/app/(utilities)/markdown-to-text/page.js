import MarkdownToText from "@/components/tools/text/MarkdownToText";
import { getAllTools } from "@/constants/tools-utils";
import Link from "next/link";
import { ChevronRight, TypeIcon } from "lucide-react";

const TOOL_ID = "markdown-to-text";
const tool = getAllTools().find((t) => t.id === TOOL_ID);

export const metadata = {
	title: `${tool.name} - Free Online Markdown Converter | 30tools`,
	description: tool.description,
	keywords:
		"markdown to text, convert markdown to plain text, strip markdown formatting, clean ai text, markdown converter online, github flavored markdown to text",
	alternates: {
		canonical: `https://30tools.com${tool.route}`,
	},
	openGraph: {
		title: `${tool.name} - 30tools`,
		description: tool.description,
		url: `https://30tools.com${tool.route}`,
		type: "website",
	},
};

export default async function MarkdownToTextPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: tool.name,
		description: tool.description,
		applicationCategory: "TextManipulation",
		operatingSystem: "All",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="min-h-screen bg-background pb-20">
				{/* Breadcrumbs */}
				<div className="bg-muted/30 border-b">
					<div className="container mx-auto px-4 py-4">
						<nav className="flex items-center text-sm font-medium text-muted-foreground">
							<Link href="/" className="hover:text-primary transition-colors">
								Home
							</Link>
							<ChevronRight className="w-4 h-4 mx-2 opacity-50" />
							<Link
								href="/search?category=text"
								className="hover:text-primary transition-colors"
							>
								Text Tools
							</Link>
							<ChevronRight className="w-4 h-4 mx-2 opacity-50" />
							<span className="text-foreground">{tool.name}</span>
						</nav>
					</div>
				</div>

				{/* Header Section */}
				<header className="container mx-auto px-4 py-12 text-center max-w-4xl">
					<div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-6 animate-in zoom-in duration-500">
						<TypeIcon className="w-10 h-10" />
					</div>
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent italic">
						AI-to-Text Converter
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
						Wanna share things copied from{" "}
						<span className="text-foreground font-semibold">
							ChatGPT, Grok, Claude
						</span>{" "}
						or any AI tool? Convert Markdown into a clean, readable text format
						instantly. <br />
						<span className="text-primary font-medium">
							Perfect for cleaning up AI-generated content.
						</span>
					</p>
				</header>

				<main className="container mx-auto px-4">
					<MarkdownToText />

					{/* Features Grid */}
					<div className="mt-24 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto border-t pt-16">
						{tool.features.map((feature, i) => (
							<div key={i} className="flex gap-4">
								<div className="flex-none w-6 h-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center text-xs font-bold">
									✓
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{feature}
								</p>
							</div>
						))}
					</div>
				</main>
			</div>
		</>
	);
}
