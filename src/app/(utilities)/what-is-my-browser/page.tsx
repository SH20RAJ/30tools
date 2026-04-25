import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free What Is My Browser Online – Fast & No Signup | 30tools",
	description: "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "what is my browser, free what is my browser, online what is my browser, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/what-is-my-browser",
	},
	openGraph: {
		title: "Free What Is My Browser Online – Fast & No Signup | 30tools",
		description: "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/what-is-my-browser",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free What Is My Browser Online – Fast & No Signup | 30tools",
		description: "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "what-is-my-browser",
        "name": "What Is My Browser",
        "description": "Free what is my browser tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/what-is-my-browser",
        "extraSlugs": [
                "free-what-is-my-browser-online",
                "how-strong-is-my-password",
                "is-on-whatsapp",
                "record-browser-tab",
                "what-is-my-browser-tool"
        ],
        "popular": false,
        "category": "utilities"
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
						url: "https://30tools.com/what-is-my-browser",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
