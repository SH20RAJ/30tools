import { ToolDirectory } from "@/components/landing/ToolDirectory";
import toolsData from "@/constants/tools.json";

export const metadata = {
	title: "Fun Generators - 30tools",
	description: "Create viral content with AI-powered fun generators",
};

export default function CategoryPage() {
	const categoryKey = "generators";
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
