import CuratedContentPage from "@/components/content/CuratedContentPage";
import { getUseCasePageBySlug } from "@/constants/content-pages";
import { notFound } from "next/navigation";

const slug = "tools-for-developers";
const page = getUseCasePageBySlug(slug);

export const metadata = {
	title: "Tools for Developers - Free Online Stack | 30tools",
	description:
		"A practical collection of free tools for developers: JSON utilities, encoding, validators, and conversion helpers.",
	keywords:
		"tools for developers, free developer tools online, json formatter, json validator, base64 tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/tools-for-developers",
	},
	openGraph: {
		title: "Tools for Developers - Free Online Stack | 30tools",
		description:
			"Use this curated developer stack for JSON work, data conversion, and utility workflows.",
		url: "https://30tools.com/tools-for-developers",
		type: "article",
		images: [{ url: "/og-image.jpg" }],
	},
	robots: { index: true, follow: true },
};

export default function ToolsForDevelopersPage() {
	if (!page) return notFound();

	return <CuratedContentPage page={page} baseUrl="https://30tools.com" />;
}
