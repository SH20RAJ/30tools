import CuratedContentPage from "@/components/content/CuratedContentPage";
import { getComparisonPageBySlug } from "@/constants/content-pages";
import { notFound } from "next/navigation";

const slug = "top-10-free-online-tools-for-seo";
const page = getComparisonPageBySlug(slug);

export const metadata = {
	title: "Top 10 Free Online Tools for SEO (2026) | 30tools",
	description:
		"A ranked list of the top 10 free online SEO tools for keyword research, audits, metadata, and sitemap workflows.",
	keywords:
		"top 10 free online tools for seo, free seo tools list, best seo tools online free, seo audit tools, 30tools",
	alternates: {
		canonical: "https://30tools.com/top-10-free-online-tools-for-seo",
	},
	openGraph: {
		title: "Top 10 Free Online Tools for SEO (2026) | 30tools",
		description:
			"Ranked free SEO tools for technical checks, keyword planning, metadata, and crawl management.",
		url: "https://30tools.com/top-10-free-online-tools-for-seo",
		type: "article",
		images: [{ url: "/og-image.jpg" }],
	},
	robots: { index: true, follow: true },
};

export default function Top10FreeOnlineToolsForSeoPage() {
	if (!page) return notFound();

	return <CuratedContentPage page={page} baseUrl="https://30tools.com" />;
}
