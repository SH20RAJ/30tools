import { PremiumHero } from "@/components/landing/PremiumHero";
import { ToolDirectory } from "@/components/landing/ToolDirectory";
import { TrustSection } from "@/components/landing/TrustSection";
import { HomeSEOContent } from "@/components/landing/HomeSEOContent";
import { HomeFAQ } from "@/components/landing/HomeFAQ";
import toolsData from "@/constants/tools.json";
import translateEngine from "@/lib/translate";

const TOOL_COUNT = Object.values(toolsData.categories || {}).reduce(
	(total, category) => total + (category.tools?.length || 0),
	0,
);

export const metadata = {
	title: `30tools - The Premium Free Online Toolkit (No Signup)`,
	description: `Access ${TOOL_COUNT}+ pro-grade online tools for Image, PDF, Video, Audio, and SEO. Secure, private, and 100% free with no registration required.`,
	keywords: [
		"free online tools",
		"private web tools",
		"online toolkit no signup",
		"pro image compressor",
		"fast pdf tools",
		"video conversion toolkit",
		"developer utilities online",
		"30tools",
	].join(", "),
	alternates: {
		canonical: "https://30tools.com/",
	},
};

export default async function LandingPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";

	const isEnglish = lang === "en" || lang === "default";

	const [heroTitle, heroSubtitle] = isEnglish 
		? ["The Unlimited Toolkit for Your Digital Life.", "Access 600+ professional tools for image, video, PDF, and developer workflows. No subscriptions. No signups. Just high-performance utilities."]
		: await Promise.all([
			translateEngine.translate("The Unlimited Toolkit for Your Digital Life.", lang),
			translateEngine.translate(
				"Access 600+ professional tools for image, video, PDF, and developer workflows. No subscriptions. No signups. Just high-performance utilities.",
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

	const toolCategories = isEnglish
		? priorityOrder.map((key) => {
				const cat = toolsData.categories[key];
				if (!cat) return null;
				return {
					key,
					iconKey: cat.icon || key,
					name: cat.name,
					description: cat.description,
					tools: cat.tools || [],
				};
			})
		: await Promise.all(
				priorityOrder.map(async (key) => {
					const cat = toolsData.categories[key];
					if (!cat) return null;

					const [translatedName, translatedDesc] = await Promise.all([
						translateEngine.translate(cat.name, lang),
						translateEngine.translate(cat.description, lang),
					]);

					return {
						key,
						iconKey: cat.icon || key,
						name: translatedName,
						description: translatedDesc,
						tools: cat.tools || [],
					};
				}),
			);

	const filteredCategories = toolCategories.filter(Boolean);

	return (
		<main className="bg-background min-h-screen relative overflow-hidden">
			{/* Global Decorative Gradients */}
			<div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-cute opacity-20 -z-10" />
			
			<div className="container mx-auto px-4 max-w-7xl">
				{/* Hero Section */}
				<PremiumHero title={heroTitle} subtitle={heroSubtitle} lang={lang} />

				{/* Social Trust Marks */}
				<TrustSection />

				{/* Core Discovery Directory */}
				<div className="py-24">
					<ToolDirectory categories={filteredCategories} lang={lang} />
				</div>

				{/* High-Value SEO Content Section */}
				<HomeSEOContent />

				{/* Conversational SEO (FAQs) */}
				<HomeFAQ />

				{/* Final CTA */}
				<section className="py-32 text-center">
					<div className="max-w-2xl mx-auto px-4 py-16 rounded-[40px] bg-foreground text-background relative overflow-hidden group">
						<div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">Ready to work faster?</h2>
						<p className="text-xl opacity-80 mb-10 text-background/90">Start using any of our 600+ tools today. No accounts, no hassle.</p>
						<a 
							href="/search" 
							className="inline-flex h-14 items-center justify-center rounded-2xl bg-background text-foreground px-10 text-lg font-bold hover:scale-105 transition-transform"
						>
							Browse All Tools
						</a>
					</div>
				</section>
			</div>
		</main>
	);
}
