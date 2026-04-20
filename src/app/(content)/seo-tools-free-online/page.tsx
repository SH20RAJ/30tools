import CuratedContentPage from "@/components/content/CuratedContentPage";
import { getUseCasePageBySlug } from "@/constants/content-pages";
import { notFound } from "next/navigation";

const slug = "seo-tools-free-online";
const page = getUseCasePageBySlug(slug);

export const metadata = {
	title: "SEO Tools Free Online - Ranked Picks (2026) | 30tools",
	description:
		"Use free online SEO tools for audits, keyword planning, metadata generation, and indexing checks.",
	keywords:
		"seo tools free online, free seo tools, keyword research tools free, meta tag generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/seo-tools-free-online",
	},
	openGraph: {
		title: "SEO Tools Free Online - Ranked Picks (2026) | 30tools",
		description:
			"A practical free SEO toolkit for technical checks, metadata, and content optimization.",
		url: "https://30tools.com/seo-tools-free-online",
		type: "article",
		images: [{ url: "/og-image.jpg" }],
	},
	robots: { index: true, follow: true },
};

export default function SeoToolsFreeOnlinePage() {
	if (!page) return notFound();

	return <CuratedContentPage page={page} baseUrl="https://30tools.com" />;
}
