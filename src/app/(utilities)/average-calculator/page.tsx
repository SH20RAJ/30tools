import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Average Calculator Online – Fast & No Signup | 30tools",
	description: "Calculate the mean, median, mode, and range of any dataset instantly. Our free online Average Calculator helps you analyze statistics and numeric data in seconds. 100% free, fast, and no signup required.",
	keywords: "average calculator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/average-calculator",
	},
	openGraph: {
		title: "Free Average Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate the mean, median, mode, and range of any dataset instantly. Our free online Average Calculator helps you analyze statistics and numeric data in seconds. 100% free, fast, and no signup required.",
		url: "https://30tools.com/average-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Average Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate the mean, median, mode, and range of any dataset instantly. Our free online Average Calculator helps you analyze statistics and numeric data in seconds. 100% free, fast, and no signup required.",
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
