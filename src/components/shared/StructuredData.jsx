import { getAllCategories, getAllTools } from "@/lib/tools";

const BASE_URL = "https://30tools.com";
const allCategories = getAllCategories();
const allTools = getAllTools();
const TOOL_COUNT = allTools.length;
const CATEGORY_COUNT = allCategories.length;
const categoryLookup = Object.fromEntries(
	allCategories.map((category) => [
		category.key,
		{ name: category.name, slug: category.slug },
	]),
);

export default function StructuredData({ tool, includeFAQ = true }) {
	if (tool) {
		const categoryDetails =
			categoryLookup[tool.category] || categoryLookup[tool.categoryKey] || null;
		const toolUrl = `${BASE_URL}${tool.route}`;
		const toolCategoryName =
			categoryDetails?.name || tool.categoryName || "Utilities";
		const toolCategoryUrl = `${BASE_URL}/${categoryDetails?.slug || tool.category || "utilities"}`;

		const toolStructuredData = {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: tool.name,
			description: tool.description,
			applicationCategory: toolCategoryName,
			operatingSystem: "Web Browser",
			url: toolUrl,
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
			featureList: tool.features
				? tool.features.join(", ")
				: "Free online tool",
		};

		const faqData = tool.faqs
			? {
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: tool.faqs.map((faq) => ({
						"@type": "Question",
						name: faq.question || faq.name,
						acceptedAnswer: {
							"@type": "Answer",
							text: faq.answer || faq.acceptedAnswer?.text,
						},
					})),
				}
			: null;

		const howToData = tool.howTo
			? {
					"@context": "https://schema.org",
					"@type": "HowTo",
					name: tool.howTo.name || `How to use ${tool.name}`,
					step: tool.howTo.steps
						? tool.howTo.steps.map((step, index) => ({
								"@type": "HowToStep",
								position: index + 1,
								name: step.name || step.title,
								text: step.text || step.desc,
								url: step.url,
							}))
						: [],
				}
			: null;

		const breadcrumbStructuredData = {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: BASE_URL,
				},
				{
					"@type": "ListItem",
					position: 2,
					name: toolCategoryName,
					item: toolCategoryUrl,
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
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(toolStructuredData),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(breadcrumbStructuredData),
					}}
				/>
				{faqData && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(faqData),
						}}
					/>
				)}
				{howToData && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(howToData),
						}}
					/>
				)}
			</>
		);
	}

	const websiteStructuredData = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "30tools",
		alternateName: "30tools - Free Online Toolkit",
		url: BASE_URL,
		description: `Fast, free, and privacy-focused tools for image, video, audio, PDF, SEO, and developer workflows. Explore ${TOOL_COUNT}+ tools with no sign-up required.`,
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
		publisher: {
			"@type": "Organization",
			name: "30tools",
			url: BASE_URL,
			logo: {
				"@type": "ImageObject",
				url: `${BASE_URL}/icons/icon-512x512.png`,
				width: 512,
				height: 512,
			},
		},
	};

	const organizationStructuredData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "30tools",
		url: BASE_URL,
		logo: `${BASE_URL}/icons/icon-512x512.png`,
		description: `Free online toolkit with ${TOOL_COUNT}+ tools for image, video, audio, PDF, SEO, and developer workflows.`,
		foundingDate: "2024",
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "customer support",
			url: `${BASE_URL}/contact`,
		},
	};

	const breadcrumbStructuredData = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: BASE_URL,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Tools",
				item: `${BASE_URL}/search`,
			},
		],
	};

	const toolsCollectionStructuredData = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: `Free Online Tools Collection - ${TOOL_COUNT}+ Professional Tools`,
		description: `Comprehensive collection of ${TOOL_COUNT}+ free online tools for image processing, PDF editing, video conversion, text manipulation, SEO, and developer utilities.`,
		url: BASE_URL,
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: CATEGORY_COUNT,
			itemListElement: allCategories.map((category, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "CollectionPage",
					name: category.name,
					url: `${BASE_URL}/${category.slug}`,
					description: category.description,
				},
			})),
		},
	};

	const faqStructuredData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Are the tools on 30tools really free?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, all tools on 30tools are free to use. Most tools run directly in the browser and do not require registration.",
				},
			},
			{
				"@type": "Question",
				name: "Do I need to create an account to use the tools?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "No account creation is required for the core tool experience. You can open a tool page and start using it immediately.",
				},
			},
			{
				"@type": "Question",
				name: "Are my files safe when using 30tools?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Privacy is a core focus. Many tools process files directly in the browser, which reduces the need to upload personal files to a server.",
				},
			},
			{
				"@type": "Question",
				name: "What types of tools are available on 30tools?",
				acceptedAnswer: {
					"@type": "Answer",
					text: `30tools offers ${TOOL_COUNT}+ tools across ${CATEGORY_COUNT} categories, including image processing, PDF workflows, video tools, text tools, audio tools, SEO utilities, and developer tools.`,
				},
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(websiteStructuredData),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(organizationStructuredData),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbStructuredData),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(toolsCollectionStructuredData),
				}}
			/>
			{includeFAQ && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(faqStructuredData),
					}}
				/>
			)}
		</>
	);
}
