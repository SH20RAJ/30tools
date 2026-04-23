import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JSON Viewer Online – Fast & No Signup | 30tools",
	description: "Free json viewer tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "json viewer, free json viewer, online json viewer, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-viewer",
	},
	openGraph: {
		title: "Free JSON Viewer Online – Fast & No Signup | 30tools",
		description: "Free json viewer tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-viewer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Viewer Online – Fast & No Signup | 30tools",
		description: "Free json viewer tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "json-viewer",
        "name": "JSON Viewer",
        "description": "Free json viewer tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/json-viewer",
        "extraSlugs": [
                "anonymous-ig-viewer",
                "camera-metadata-viewer",
                "facebook-story-viewer-download",
                "free-json-viewer-online",
                "ig-dp-viewer",
                "ig-profile-picture-viewer",
                "insta-dp-viewer",
                "insta-story-viewer",
                "insta-viewer",
                "instagram-profile-picture-viewer",
                "json-viewer-online",
                "json-viewer-tool",
                "profile-pic-viewer-instagram",
                "story-viewer-without-account"
        ],
        "popular": false,
        "category": "developer"
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
						url: "https://30tools.com/json-viewer",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "developer" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
