import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { MinimalHero } from "@/components/landing/MinimalHero";
import { SimpleStats } from "@/components/landing/SimpleStats";
import { ToolDirectory } from "@/components/landing/ToolDirectory";
import { TrustSection } from "@/components/landing/TrustSection";
import toolsData from "@/constants/tools.json";
import translateEngine from "@/lib/translate";

const _TOOL_COUNT = Object.values(toolsData.categories || {}).reduce(
	(total, category) => total + (category.tools?.length || 0),
	0,
);

export const metadata = {
	title: "30tools - 100% Free Online Toolkit | Image, PDF, Video & SEO Tools",
	description:
		"Efficiently process files with over 600+ free online tools. Image compressors, PDF editors, video converters, SEO utilities, and more. Fast, secure, and always free.",
	robots: { index: true, follow: true },
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
		<Box
			sx={{
				bgcolor: "background.default",
			}}
		>
			<Box component="main" sx={{ py: { xs: 4, md: 8 } }}>
				<Container maxWidth="xl">
					<MinimalHero title={heroTitle} subtitle={heroSubtitle} />

					<TrustSection />

					<SimpleStats />

					<ToolDirectory categories={filteredCategories} lang={lang} />
				</Container>
			</Box>
		</Box>
	);
}
