import { generateCollectionPageSchema } from "@/lib/seo";

export const metadata = {
	title: "Free Video Tools Online - No Signup | 30tools",
	description:
		"Free online video tools: play and download Terabox videos, compress video files for web, convert between MP4/AVI/MOV/WEBM/GIF, trim clips, and extract audio. Browser-based processing with no upload to cloud. No signup, no watermarks.",
	keywords:
		"video tools, terabox downloader, terabox player online, video compressor, video converter, free video tools, mp4 converter, video to gif, trim video online, extract audio from video, webm converter, video format converter, compress video for web",
	openGraph: {
		title: "Free Video Tools Online - No Signup | 30tools",
		description:
			"Play Terabox videos, compress, convert, and trim video files for free. Browser-based, no signup, no watermarks.",
		url: "https://30tools.com/video-tools",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1024,
				height: 541,
				alt: "Free Video Tools Collection",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Video Tools Online - No Signup | 30tools",
		description:
			"Play Terabox videos, compress, convert, and trim video files for free. Browser-based, no signup, no watermarks.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

const collectionPageSchema = generateCollectionPageSchema('video', {
	name: 'Online Video Tools',
	description: 'Collection of free video utilities including Terabox downloader and player.'
});

export default function VideoToolsLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(collectionPageSchema),
				}}
			/>
			<main className="flex-1">{children}</main>
		</div>
	);
}
