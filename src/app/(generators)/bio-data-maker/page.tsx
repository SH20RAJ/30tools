import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import BioDataMaker from "@/components/tools/generators/BioDataMaker";

export const metadata = {
	title: "Free Bio Data Maker Online - No Signup | 30tools",
	description: "Create beautiful marriage biodata sheets or professional resumes. Upload photos, input family or job details, and print a custom layout.",
	keywords: "bio-data-maker, Bio Data Maker",
	alternates: {
		canonical: "https://30tools.com/bio-data-maker",
	},
	openGraph: {
		title: "Free Bio Data Maker Online - No Signup | 30tools",
		description: "Create beautiful marriage biodata sheets or professional resumes. Upload photos, input family or job details, and print a custom layout.",
		url: "https://30tools.com/bio-data-maker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Bio Data Maker Online - No Signup | 30tools",
		description: "Create beautiful marriage biodata sheets or professional resumes. Upload photos, input family or job details, and print a custom layout.",
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
