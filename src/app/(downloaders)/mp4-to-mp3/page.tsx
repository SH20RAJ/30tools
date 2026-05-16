import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Mp4 To Mp3 Online – Fast & No Signup | 30tools",
	description: "Convert MP4 videos to high-quality MP3 audio instantly. Our free online converter is perfect for extracting audio from social media clips and videos without any loss in sound quality. 100% free, fast, and no signup required.",
	keywords: "mp4 to mp3, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/mp4-to-mp3",
	},
	openGraph: {
		title: "Free Mp4 To Mp3 Online – Fast & No Signup | 30tools",
		description: "Convert MP4 videos to high-quality MP3 audio instantly. Our free online converter is perfect for extracting audio from social media clips and videos without any loss in sound quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/mp4-to-mp3",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mp4 To Mp3 Online – Fast & No Signup | 30tools",
		description: "Convert MP4 videos to high-quality MP3 audio instantly. Our free online converter is perfect for extracting audio from social media clips and videos without any loss in sound quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/mp4-to-mp3");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
