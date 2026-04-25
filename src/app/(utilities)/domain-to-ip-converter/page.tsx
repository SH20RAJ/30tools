import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Domain to IP Converter Online – Fast & No Signup | 30tools",
	description: "Find the IP address of any website instantly. Our free online tool helps you identify server locations and troubleshoot network connectivity issues. 100% free, fast, and no signup required.",
	keywords: "domain to ip converter, free domain to ip converter, online domain to ip converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/domain-to-ip-converter",
	},
	openGraph: {
		title: "Free Domain to IP Converter Online – Fast & No Signup | 30tools",
		description: "Find the IP address of any website instantly. Our free online tool helps you identify server locations and troubleshoot network connectivity issues. 100% free, fast, and no signup required.",
		url: "https://30tools.com/domain-to-ip-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Domain to IP Converter Online – Fast & No Signup | 30tools",
		description: "Find the IP address of any website instantly. Our free online tool helps you identify server locations and troubleshoot network connectivity issues. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "domain-to-ip-converter",
        "name": "Domain to IP Converter",
        "description": "Find the IP address of any website instantly. Our free online tool helps you identify server locations and troubleshoot network connectivity issues.",
        "route": "/domain-to-ip-converter",
        "extraSlugs": [
                "free-domain-to-ip-converter-online",
                "domain-to-ip-converter-tool",
                "find-website-ip-address"
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
						url: "https://30tools.com/domain-to-ip-converter",
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
