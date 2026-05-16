import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BackgroundRemoverTool from "@/components/tools/image/BackgroundRemoverTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Background Remover – Remove Solid Backgrounds from Images Online Free",
	description: "Remove solid and white backgrounds from images automatically. Create transparent PNGs for product photos, headshots, and graphics. 100% free, browser-based processing, no signup needed.",
	alternates: {
		canonical: "https://30tools.com/background-remover",
	},
	openGraph: {
		title: "Background Remover – Remove Solid Backgrounds Online Free",
		description: "Remove white and solid color backgrounds from photos instantly. Export transparent PNGs for e-commerce, social media, or design projects. No signup required.",
		url: "https://30tools.com/background-remover",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Background Remover – Remove Solid Backgrounds Online Free",
		description: "Instantly remove white and solid color backgrounds from photos. Export transparent PNGs for e-commerce, social media, or design.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/background-remover");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BackgroundRemoverTool />
		</ToolLayout>
	);
}
