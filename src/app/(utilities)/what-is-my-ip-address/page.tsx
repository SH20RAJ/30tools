import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free What Is My IP Address Online – Fast & No Signup | 30tools",
	description: "Free what is my ip address tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "what is my ip address, free what is my ip address, online what is my ip address, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/what-is-my-ip-address",
	},
	openGraph: {
		title: "Free What Is My IP Address Online – Fast & No Signup | 30tools",
		description: "Free what is my ip address tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/what-is-my-ip-address",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free What Is My IP Address Online – Fast & No Signup | 30tools",
		description: "Free what is my ip address tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "what-is-my-ip-address",
        "name": "What Is My IP Address",
        "description": "Free what is my ip address tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/what-is-my-ip-address",
        "extraSlugs": [
                "free-what-is-my-ip-address-online",
                "what-is-my-ip-address-tool"
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
						url: "https://30tools.com/what-is-my-ip-address",
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
