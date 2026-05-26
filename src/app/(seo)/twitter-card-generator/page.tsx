import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TwitterCardGenerator from "@/components/tools/built-ins/TwitterCardGenerator";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Twitter Card Generator Online - No Signup | 30tools",
	description: "Audit websites, analyze search rankings, and generate schemas with our free Twitter Card Generator online. Optimize search presence with no signup. Easy to use.",
	keywords: "twitter card generator, free online tool, no signup, twitter-card-generator, free twitter-card-generator, Twitter Card Generator online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/twitter-card-generator",
	},
	openGraph: {
		title: "Free Twitter Card Generator Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Twitter Card Generator online. Optimize search presence with no signup. Easy to use.",
		url: "https://30tools.com/twitter-card-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Twitter Card Generator Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Twitter Card Generator online. Optimize search presence with no signup. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/twitter-card-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TwitterCardGenerator />
		</ToolLayout>
	);
}
