import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BlutvDownloader from "@/components/tools/downloaders/BlutvDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free BluTV Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download publicly accessible BluTV content—trailers, previews, and clips from Turkish original series and movies. Free, no signup, MP4 downloads.",
	keywords: "blutv video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/blutv-video-downloader",
	},
	openGraph: {
		title: "Free BluTV Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download publicly accessible BluTV content—trailers, previews, and clips from Turkish original series and movies. Free, no signup, MP4 downloads.",
		url: "https://30tools.com/blutv-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free BluTV Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download publicly accessible BluTV content—trailers, previews, and clips from Turkish original series and movies. Free, no signup, MP4 downloads.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/blutv-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BlutvDownloader />
		</ToolLayout>
	);
}
