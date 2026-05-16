import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Ig Highlights Saver Online – Fast & No Signup | 30tools",
	description: "Download Instagram story highlights to your device easily. Our free online tool helps you archive your favorite moments and creators' content in high quality. 100% free, fast, and no signup required.",
	keywords: "ig highlights saver, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/ig-highlights-saver",
	},
	openGraph: {
		title: "Free Ig Highlights Saver Online – Fast & No Signup | 30tools",
		description: "Download Instagram story highlights to your device easily. Our free online tool helps you archive your favorite moments and creators' content in high quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ig-highlights-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ig Highlights Saver Online – Fast & No Signup | 30tools",
		description: "Download Instagram story highlights to your device easily. Our free online tool helps you archive your favorite moments and creators' content in high quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ig-highlights-saver");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
