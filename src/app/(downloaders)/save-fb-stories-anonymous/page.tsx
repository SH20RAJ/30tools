import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Fb Stories Anonymous Online – Fast & No Signup | 30tools",
	description: "Download and view Facebook stories anonymously. Our free online tool helps you save story content without notifying the creator. 100% private and secure. 100% free, fast, and no signup required.",
	keywords: "save fb stories anonymous, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/save-fb-stories-anonymous",
	},
	openGraph: {
		title: "Free Save Fb Stories Anonymous Online – Fast & No Signup | 30tools",
		description: "Download and view Facebook stories anonymously. Our free online tool helps you save story content without notifying the creator. 100% private and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-fb-stories-anonymous",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Fb Stories Anonymous Online – Fast & No Signup | 30tools",
		description: "Download and view Facebook stories anonymously. Our free online tool helps you save story content without notifying the creator. 100% private and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-fb-stories-anonymous");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
