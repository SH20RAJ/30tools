import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCategories, getCategoryBySlug } from "@/lib/tools";
import ToolCategoryGuidePage from "@/components/content/ToolCategoryGuidePage";

interface ToolCategoryPageProps {
	params: { slug: string };
}

export async function generateStaticParams() {
	return getAllCategories().map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: ToolCategoryPageProps): Metadata {
	const category = getCategoryBySlug(params.slug);
	if (!category) {
		return {
			title: "Category Not Found | 30tools",
			description: "The requested tool category does not exist.",
		};
	}

	return {
		title: `Best Free ${category.name} Tools Online | 30tools`,
		description: category.description,
		keywords: [`${category.name} tools`, "free online tools", "30tools"].join(", "),
		alternates: {
			canonical: `https://30tools.com/tool-guides/${category.slug}`,
		},
		openGraph: {
			title: `Best Free ${category.name} Tools Online | 30tools`,
			description: category.description,
			url: `https://30tools.com/tool-guides/${category.slug}`,
			type: "website",
			images: [{ url: "/og-image.jpg" }],
		},
		robots: { index: true, follow: true },
	};
}

export default function ToolCategoryPage({ params }: ToolCategoryPageProps) {
	const category = getCategoryBySlug(params.slug);
	if (!category) return notFound();

	const relatedCategories = getAllCategories().filter((cat) => cat.slug !== category.slug);

	return <ToolCategoryGuidePage category={category} relatedCategories={relatedCategories} />;
}
