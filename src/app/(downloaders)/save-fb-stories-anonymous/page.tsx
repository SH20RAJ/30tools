import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Save Fb Stories Anonymous Online – Fast & No Signup | 30tools",
	description: "Download and view Facebook stories anonymously. Our free online tool helps you save story content without notifying the creator. 100% private and secure. 100% free, fast, and no signup required.",
	keywords: "save fb stories anonymous, free save fb stories anonymous, online save fb stories anonymous, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-fb-stories-anonymous",
	},
	openGraph: {
		title: "Free Save Fb Stories Anonymous Online – Fast & No Signup | 30tools",
		description: "Download and view Facebook stories anonymously. Our free online tool helps you save story content without notifying the creator. 100% private and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-fb-stories-anonymous",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Fb Stories Anonymous Online – Fast & No Signup | 30tools",
		description: "Download and view Facebook stories anonymously. Our free online tool helps you save story content without notifying the creator. 100% private and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "save-fb-stories-anonymous",
        "name": "Save Fb Stories Anonymous",
        "description": "Download and view Facebook stories anonymously. Our free online tool helps you save story content without notifying the creator. 100% private and secure.",
        "route": "/save-fb-stories-anonymous",
        "extraSlugs": [
                "save-fb-stories-anonymous",
                "view-facebook-stories-privately"
        ],
        "popular": false,
        "category": "downloaders"
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
						url: "https://30tools.com/save-fb-stories-anonymous",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Save Fb Stories Anonymous" />
			</ToolLayout>
		</>
	);
}
