import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import VkontakteDownloader from "@/components/tools/downloaders/VkontakteDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Vkontakte Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save Vkontakte videos directly to your device easily. 100% free, fast, and no signup required.",
	keywords: "vkontakte video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/vkontakte-video-downloader",
	},
	openGraph: {
		title: "Free Vkontakte Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Vkontakte videos directly to your device easily. 100% free, fast, and no signup required.",
		url: "https://30tools.com/vkontakte-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Vkontakte Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Vkontakte videos directly to your device easily. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/vkontakte-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<VkontakteDownloader />
		</ToolLayout>
	);
}
