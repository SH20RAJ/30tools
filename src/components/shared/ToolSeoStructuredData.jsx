"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getAllCategories, getAllTools } from "@/constants/tools-utils";

const BASE_URL = "https://30tools.com";

const categories = getAllCategories();
const tools = getAllTools();
const categoryMap = Object.fromEntries(
	categories.map((category) => [category.key, category]),
);

export default function ToolSeoStructuredData() {
	const pathname = usePathname();

	const tool = useMemo(
		() => tools.find((item) => item.route === pathname),
		[pathname],
	);

	if (!tool) return null;

	const category = categoryMap[tool.categoryKey] || null;
	const toolUrl = `${BASE_URL}${tool.route}`;
	const categoryName = category?.name || "Tools";
	const categoryUrl = `${BASE_URL}/${category?.slug || "search"}`;

	const softwareAppSchema = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: tool.name,
		description: tool.description,
		url: toolUrl,
		applicationCategory: categoryName,
		operatingSystem: "Web Browser",
		isAccessibleForFree: true,
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		provider: {
			"@type": "Organization",
			name: "30tools",
			url: BASE_URL,
		},
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
			{
				"@type": "ListItem",
				position: 2,
				name: categoryName,
				item: categoryUrl,
			},
			{
				"@type": "ListItem",
				position: 3,
				name: tool.name,
				item: toolUrl,
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
		</>
	);
}
