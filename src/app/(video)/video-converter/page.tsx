import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free Video Converter Online - No Signup | 30tools",
	description: "Convert videos between MP4, AVI, MOV, WEBM, and more formats. Our free Video Converter processes files entirely in your browser for maximum privacy.",
	keywords: "video, converter, free video converter, online video converter, 30tools",
	alternates: { canonical: "https://30tools.com/video-converter" },
	openGraph: { title: "Free Video Converter Online - No Signup | 30tools", description: "Convert videos between MP4, AVI, MOV, WEBM, and more formats. Our free Video Converter processes files entirely in your browser for maximum privacy..", url: "https://30tools.com/video-converter", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Video Converter Online - No Signup | 30tools", description: "Convert videos between MP4, AVI, MOV, WEBM, and more formats. Our free Video Converter processes files entirely in your browser for maximum privacy..", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "video-converter", name: "Video Converter", description: "Convert videos between MP4, AVI, MOV, WEBM, and more formats. Our free Video Converter processes files entirely in your browser for maximum privacy.", route: "/video-converter", category: "video" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/video-converter", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}
