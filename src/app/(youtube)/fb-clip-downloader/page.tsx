import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FacebookDownloader from "@/components/tools/downloaders/FacebookDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Fb Clip Downloader Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Fb Clip Downloader online. Fast, secure browser-based utility with no registration. 100% free and secure.",
	keywords: "fb clip downloader, free online tool, no signup, fb-clip-downloader, free fb-clip-downloader, Fb Clip Downloader online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/fb-clip-downloader",
	},
	openGraph: {
		title: "Free Fb Clip Downloader Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Fb Clip Downloader online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		url: "https://30tools.com/fb-clip-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Fb Clip Downloader Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Fb Clip Downloader online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/fb-clip-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FacebookDownloader />
		</ToolLayout>
	);
}
