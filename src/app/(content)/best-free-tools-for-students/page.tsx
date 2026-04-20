import CuratedContentPage from "@/components/content/CuratedContentPage";
import { getUseCasePageBySlug } from "@/constants/content-pages";
import { notFound } from "next/navigation";

const slug = "best-free-tools-for-students";
const page = getUseCasePageBySlug(slug);

export const metadata = {
	title: "Best Free Tools for Students (2026) | 30tools",
	description:
		"Discover the best free tools for students in 2026. Improve writing, formatting, assignments, and study productivity with no-signup online tools.",
	keywords:
		"best free tools for students, student tools online free, assignment tools no signup, free study tools, 30tools",
	alternates: {
		canonical: "https://30tools.com/best-free-tools-for-students",
	},
	openGraph: {
		title: "Best Free Tools for Students (2026) | 30tools",
		description:
			"A curated stack of free student tools for writing, conversion, and assignment workflows.",
		url: "https://30tools.com/best-free-tools-for-students",
		type: "article",
		images: [{ url: "/og-image.jpg" }],
	},
	robots: { index: true, follow: true },
};

export default function BestFreeToolsForStudentsPage() {
	if (!page) return notFound();

	return <CuratedContentPage page={page} baseUrl="https://30tools.com" />;
}
