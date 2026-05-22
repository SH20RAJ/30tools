import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import AllDownloaders from "@/components/tools/downloaders/AllDownloaders";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Downloaders Online – Fast & No Signup | 30tools",
	description: "Explore our comprehensive collection of social media downloaders. Save videos, photos, and audio from all major platforms in high quality for free. 100% free, fast, and no signup required.",
	keywords: "downloaders, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/downloaders",
	},
	openGraph: {
		title: "Free Downloaders Online – Fast & No Signup | 30tools",
		description: "Explore our comprehensive collection of social media downloaders. Save videos, photos, and audio from all major platforms in high quality for free. 100% free, fast, and no signup required.",
		url: "https://30tools.com/downloaders",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Downloaders Online – Fast & No Signup | 30tools",
		description: "Explore our comprehensive collection of social media downloaders. Save videos, photos, and audio from all major platforms in high quality for free. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/downloaders");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<AllDownloaders />
		</ToolLayout>
	);
}
