import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokMP3Converter from "@/components/tools/downloaders/TikTokMP3Converter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Shrink Mp3 Size Online – Fast & No Signup | 30tools",
	description: "Reduce the file size of your MP3 audio while maintaining great sound quality. Our free online compressor is perfect for optimizing audio for web use and mobile devices. 100% free, fast, and no signup required.",
	keywords: "shrink mp3 size, free online tool, no signup, shrink-mp3-size, free shrink-mp3-size, Shrink Mp3 Size online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/shrink-mp3-size",
	},
	openGraph: {
		title: "Free Shrink Mp3 Size Online – Fast & No Signup | 30tools",
		description: "Reduce the file size of your MP3 audio while maintaining great sound quality. Our free online compressor is perfect for optimizing audio for web use and mobile devices. 100% free, fast, and no signup required.",
		url: "https://30tools.com/shrink-mp3-size",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Shrink Mp3 Size Online – Fast & No Signup | 30tools",
		description: "Reduce the file size of your MP3 audio while maintaining great sound quality. Our free online compressor is perfect for optimizing audio for web use and mobile devices. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/shrink-mp3-size");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokMP3Converter />
		</ToolLayout>
	);
}
