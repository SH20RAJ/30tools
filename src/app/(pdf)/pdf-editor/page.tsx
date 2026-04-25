import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free PDF Editor Online – Fast & No Signup | 30tools",
	description: "Professional PDF editing - add text, annotations, and modify content 100% free, fast, and no signup required.",
	keywords: "pdf editor, free pdf editor, online pdf editor, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-editor",
	},
	openGraph: {
		title: "Free PDF Editor Online – Fast & No Signup | 30tools",
		description: "Professional PDF editing - add text, annotations, and modify content 100% free, fast, and no signup required.",
		url: "https://30tools.com/pdf-editor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Editor Online – Fast & No Signup | 30tools",
		description: "Professional PDF editing - add text, annotations, and modify content 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pdf-editor",
        "name": "PDF Editor",
        "description": "Professional PDF editing - add text, annotations, and modify content",
        "route": "/pdf-editor",
        "extraSlugs": [
                "annotate-pdf-online-free",
                "audio-editor",
                "crop-and-edit-photos",
                "edit-audio-online",
                "edit-pdf-online-free",
                "edit-pictures-free",
                "edit-video-online",
                "fix-blurry-photos",
                "fix-text-spacing",
                "free-audio-editor",
                "free-pdf-text-editor",
                "free-video-editor",
                "instagram-story-dimensions-fix",
                "online-photo-editor",
                "pdf-text-editor",
                "photo-filter-editor",
                "sound-editor-online",
                "video-editor"
        ],
        "popular": true,
        "category": "pdf"
};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/pdf-editor",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "pdf" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
