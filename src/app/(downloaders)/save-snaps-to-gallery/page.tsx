import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Snaps To Gallery Online – Fast & No Signup | 30tools",
	description: "Save public Snapchat snaps and videos directly to your phone gallery. Our free online tool works in your browser on all mobile devices and desktop computers. 100% free, fast, and no signup required.",
	keywords: "save snaps to gallery, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/save-snaps-to-gallery",
	},
	openGraph: {
		title: "Free Save Snaps To Gallery Online – Fast & No Signup | 30tools",
		description: "Save public Snapchat snaps and videos directly to your phone gallery. Our free online tool works in your browser on all mobile devices and desktop computers. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-snaps-to-gallery",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Snaps To Gallery Online – Fast & No Signup | 30tools",
		description: "Save public Snapchat snaps and videos directly to your phone gallery. Our free online tool works in your browser on all mobile devices and desktop computers. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-snaps-to-gallery");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
