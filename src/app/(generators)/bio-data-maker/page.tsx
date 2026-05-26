import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import BioDataMaker from "@/components/tools/generators/BioDataMaker";

export const metadata = {
	title: "Free Bio Data Maker Online - No Signup | 30tools",
	description: "Create custom content with our free Bio Data Maker online. Generate high-quality outputs instantly with no registration required. 100% free and easy to use.",
	keywords: "bio-data-maker, Bio Data Maker",
	alternates: {
		canonical: "https://30tools.com/bio-data-maker",
	},
	openGraph: {
		title: "Free Bio Data Maker Online - No Signup | 30tools",
		description: "Create custom content with our free Bio Data Maker online. Generate high-quality outputs instantly with no registration required. 100% free and easy to use.",
		url: "https://30tools.com/bio-data-maker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Bio Data Maker Online - No Signup | 30tools",
		description: "Create custom content with our free Bio Data Maker online. Generate high-quality outputs instantly with no registration required. 100% free and easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/bio-data-maker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BioDataMaker />
		</ToolLayout>
	);
}
