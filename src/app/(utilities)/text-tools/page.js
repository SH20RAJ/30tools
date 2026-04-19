import { ToolDirectory } from "@/components/landing/ToolDirectory";
import toolsData from "@/constants/tools.json";

export const metadata = {
	title: "Text Tools - 30tools",
	description: "Format, convert, and manipulate text content",
};

export default function CategoryPage() {
	const categoryKey = "text";
	const category = toolsData.categories[categoryKey];

	if (!category) return null;

	const categories = [{
		key: categoryKey,
		name: category.name,
		description: category.description,
		tools: category.tools || [],
	}];

	return (
		<main className="container mx-auto px-4 py-16">
			<div className="mb-12">
				<h1 className="text-4xl font-bold mb-4">{category.name}</h1>
				<p className="text-xl text-muted-foreground">{category.description}</p>
			</div>
			<ToolDirectory categories={categories} />
		</main>
	);
}
