import CuratedContentPage from "@/components/content/CuratedContentPage";
import { getUseCasePageBySlug } from "@/constants/content-pages";
import { notFound } from "next/navigation";

const slug = "ai-tools-alternatives-free";
const page = getUseCasePageBySlug(slug);

export const metadata = {
	title: "AI Tools Alternatives Free - Practical Picks | 30tools",
	description:
		"Explore free AI tool alternatives for writing, image creation, voice generation, and content ideation.",
	keywords:
		"ai tools alternatives free, free ai tools, chatgpt alternatives free, ai image generator free, 30tools",
	alternates: {
		canonical: "https://30tools.com/ai-tools-alternatives-free",
	},
	openGraph: {
		title: "AI Tools Alternatives Free - Practical Picks | 30tools",
		description:
			"Build a practical free AI stack using focused tools for writing, media, and content workflows.",
		url: "https://30tools.com/ai-tools-alternatives-free",
		type: "article",
		images: [{ url: "/og-image.jpg" }],
	},
	robots: { index: true, follow: true },
};

export default function AiToolsAlternativesFreePage() {
	if (!page) return notFound();

	return <CuratedContentPage page={page} baseUrl="https://30tools.com" />;
}
