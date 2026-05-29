import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Average Calculator Online - No Signup | 30tools",
	description: "Calculate the mean, median, mode, and range of any dataset instantly. Our free online Average Calculator helps you analyze statistics and numeric data in...",
	keywords: "average calculator, free online tool, no signup, average-calculator, free average-calculator, Average Calculator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/average-calculator",
	},
	openGraph: {
		title: "Free Average Calculator Online - No Signup | 30tools",
		description: "Calculate the mean, median, mode, and range of any dataset instantly. Our free online Average Calculator helps you analyze statistics and numeric data in...",
		url: "https://30tools.com/average-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Average Calculator Online - No Signup | 30tools",
		description: "Calculate the mean, median, mode, and range of any dataset instantly. Our free online Average Calculator helps you analyze statistics and numeric data in...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/average-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="average-calculator" />
		</ToolLayout>
	);
}
