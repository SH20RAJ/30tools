import CuratedContentPage from "@/components/content/CuratedContentPage";
import { getComparisonPageBySlug } from "@/constants/content-pages";
import { notFound } from "next/navigation";

const slug = "best-free-alternative-to-chatgpt";
const page = getComparisonPageBySlug(slug);

export const metadata = {
	title: "Best Free Alternative to ChatGPT for Daily Tasks | 30tools",
	description:
		"Build a free ChatGPT alternative stack for writing, metadata generation, and media workflows.",
	keywords:
		"best free alternative to chatgpt, chatgpt alternative free, ai writing alternatives, free ai tools stack, 30tools",
	alternates: {
		canonical: "https://30tools.com/best-free-alternative-to-chatgpt",
	},
	openGraph: {
		title: "Best Free Alternative to ChatGPT for Daily Tasks | 30tools",
		description:
			"Use a focused stack of free tools as a practical alternative to single-suite AI workflows.",
		url: "https://30tools.com/best-free-alternative-to-chatgpt",
		type: "article",
		images: [{ url: "/og-image.jpg" }],
	},
	robots: { index: true, follow: true },
};

export default function BestFreeAlternativeToChatgptPage() {
	if (!page) return notFound();

	return <CuratedContentPage page={page} baseUrl="https://30tools.com" />;
}
