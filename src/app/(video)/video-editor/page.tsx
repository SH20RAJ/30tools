import ToolLayout from "@/components/tools/shared/ToolLayout";
import VideoEditorTool from "@/components/tools/video/VideoEditorTool";

export const metadata = {
	title: "Free Video Editor Online - No Signup | 30tools",
	description: "Download, convert, and edit video files instantly with our free Video Editor online. Fast, secure, and private processing with no signup. 100% free and secure.",
	keywords: "video, editor, free video editor, online video editor, 30tools, video-editor, video editor, free video-editor, video editor online, video converter, browser video tool, free video utility",
	alternates: {
		canonical: "https://30tools.com/video-editor",
	},
	openGraph: {
		title: "Free Video Editor Online - No Signup | 30tools",
		description: "Download, convert, and edit video files instantly with our free Video Editor online. Fast, secure, and private processing with no signup. 100% free and secure.",
		url: "https://30tools.com/video-editor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Video Editor Online - No Signup | 30tools",
		description: "Download, convert, and edit video files instantly with our free Video Editor online. Fast, secure, and private processing with no signup. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "video-editor", name: "Video Editor", description: "Trim, cut, and edit video clips directly in your browser. Our free Video Editor requires no software installation and supports all major formats.", route: "/video-editor", category: "video" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/video-editor", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><VideoEditorTool /></ToolLayout>
		</>
	);
}
