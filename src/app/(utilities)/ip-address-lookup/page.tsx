import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free IP Address Lookup Online – Fast & No Signup | 30tools",
	description: "Free ip address lookup tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "ip address lookup, free ip address lookup, online ip address lookup, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ip-address-lookup",
	},
	openGraph: {
		title: "Free IP Address Lookup Online – Fast & No Signup | 30tools",
		description: "Free ip address lookup tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ip-address-lookup",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free IP Address Lookup Online – Fast & No Signup | 30tools",
		description: "Free ip address lookup tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ip-address-lookup",
        "name": "IP Address Lookup",
        "description": "Free ip address lookup tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/ip-address-lookup",
        "extraSlugs": [
                "free-ip-address-lookup-online",
                "ip-address-lookup-tool"
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
						url: "https://30tools.com/ip-address-lookup",
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
