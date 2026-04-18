import { MinimalHero } from "@/components/landing/MinimalHero";
import { SimpleStats } from "@/components/landing/SimpleStats";
import { ToolDirectory } from "@/components/landing/ToolDirectory";
import { TrustSection } from "@/components/landing/TrustSection";
import toolsData from "@/constants/tools.json";
import translateEngine from "@/lib/translate";

const TOOL_COUNT = Object.values(toolsData.categories || {}).reduce(
	(total, category) => total + (category.tools?.length || 0),
	0,
);

export const metadata = {
	title: `Free Online Tools Collection - No Signup | 30tools`,
	description: `Access ${TOOL_COUNT}+ free online tools for image, PDF, video, SEO, and developer workflows. Fast processing, privacy-first design, and no signup required.`,
	keywords: [
		"free online tools",
		"online toolkit",
		"web tools",
		"image tools online",
		"video converters",
		"pdf tools free",
		"developer utilities",
		"seo tools",
		"no registration required",
		"privacy focused tools",
		"30tools",
	].join(", "),
	alternates: {
		canonical: "https://30tools.com/",
		languages: {
			en: "https://30tools.com/?lang=en",
			es: "https://30tools.com/?lang=es",
			fr: "https://30tools.com/?lang=fr",
			de: "https://30tools.com/?lang=de",
			hi: "https://30tools.com/?lang=hi",
			it: "https://30tools.com/?lang=it",
			pt: "https://30tools.com/?lang=pt",
			ja: "https://30tools.com/?lang=ja",
			zh: "https://30tools.com/?lang=zh",
			ko: "https://30tools.com/?lang=ko",
			ru: "https://30tools.com/?lang=ru",
			ar: "https://30tools.com/?lang=ar",
			tr: "https://30tools.com/?lang=tr",
			vi: "https://30tools.com/?lang=vi",
			id: "https://30tools.com/?lang=id",
		},
	},
	openGraph: {
		title: `Free Online Tools Collection - No Signup | 30tools`,
		description: `Access ${TOOL_COUNT}+ free online tools for image, PDF, video, SEO, and developer workflows.`,
		url: "https://30tools.com/",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "https://30tools.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "30tools free online tools directory",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `Free Online Tools Collection - No Signup | 30tools`,
		description: `Access ${TOOL_COUNT}+ free online tools for image, PDF, video, SEO, and developer workflows.`,
		images: ["https://30tools.com/og-image.jpg"],
	},
};

export default async function LandingPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";

	const [heroTitle, heroSubtitle] = await Promise.all([
		translateEngine.translate("30Tools - 100% Free Online Toolkit", lang),
		translateEngine.translate(
			"Efficiently process files with over 200+ free online tools. Image compressors, PDF editors, video converters, SEO utilities, and more. Fast, secure, and always free.",
			lang,
		),
	]);

	const priorityOrder = [
		"image",
		"pdf",
		"video",
		"downloaders",
		"audio",
		"utilities",
		"developer",
		"generators",
		"seo",
	];

	const toolCategories = await Promise.all(
		priorityOrder.map(async (key) => {
			const cat = toolsData.categories[key];
			if (!cat) return null;

			return {
				key,
				iconKey: cat.icon || key,
				name: await translateEngine.translate(cat.name, lang),
				description: await translateEngine.translate(cat.description, lang),
				tools: await Promise.all(
					(cat.tools || []).map(async (tool) => ({
						...tool,
						name: await translateEngine.translate(tool.name, lang),
					})),
				),
			};
		}),
	);

	const filteredCategories = toolCategories.filter(Boolean);

	return (
		<main className="bg-background min-h-screen py-8 md:py-16">
			<div className="container mx-auto px-4 max-w-7xl">
				<MinimalHero title={heroTitle} subtitle={heroSubtitle} />

				<TrustSection />

				<SimpleStats />

				<ToolDirectory categories={filteredCategories} lang={lang} />
			</div>
		</main>
	);
}
