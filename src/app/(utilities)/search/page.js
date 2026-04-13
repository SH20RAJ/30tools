import { getAllTools } from "@/constants/tools-utils";
import SearchPageServer from "./SearchPageServer";

const TOOL_COUNT = getAllTools().length;


	return {
		title,
		description,
		keywords:
			"search tools, online tools, image compressor, video converter, pdf tools, seo tools, developer tools, search free tools, file converter, online utilities",
		openGraph: {
			title,
			description,
			type: "website",
			url: `https://30tools.com/search${query ? `?q=${query}` : ""}${category !== "all" ? `${query ? "&" : "?"}category=${category}` : ""}`,
		},
		alternates: {
			canonical: "https://30tools.com/search",
		},
	};
}

export default async function SearchPage({ searchParams }) {
	// Await searchParams to fix Next.js 15 async APIs
	const params = await searchParams;

	// Get all tools server-side
	const allTools = getAllTools();

	// Get search parameters
	const query = params?.q || "";
	const category = params?.category || "all";
	const premium = params?.premium === "true";

	// Server-side filtering for initial results
	let filteredTools = allTools;

	if (query) {
		const searchTerm = query.toLowerCase();
		filteredTools = allTools.filter(
			(tool) =>
				tool.name.toLowerCase().includes(searchTerm) ||
				tool.description.toLowerCase().includes(searchTerm) ||
				tool.category.toLowerCase().includes(searchTerm),
		);
	}

	if (category && category !== "all") {
		filteredTools = filteredTools.filter((tool) => tool.category === category);
	}

	if (premium) {
		filteredTools = filteredTools.filter((tool) => tool.premium === true);
	}

	// Create JSON-LD structured data for SEO
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: `Search ${TOOL_COUNT}+ Free Online Tools | 30tools`,
		description:
			`Search ${TOOL_COUNT}+ free online tools. Find image compressors, video converters, PDF tools, SEO tools, developer utilities, and more.`,
		url: "https://30tools.com/search",
		potentialAction: {
			"@type": "SearchAction",
			target: "https://30tools.com/search?q={search_term_string}",
			"query-input": "required name=search_term_string",
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<SearchPageServer
				initialTools={filteredTools}
				initialQuery={query}
				initialCategory={category}
				initialPremium={premium}
				allTools={allTools}
			/>
		</>
	);
}
