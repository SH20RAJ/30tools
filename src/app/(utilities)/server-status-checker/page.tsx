import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";


export const metadata = {
	title: "Free Server Status Checker Online – Fast & No Signup | 30tools",
	description: "Free server status checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "server status checker, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/server-status-checker",
	},
	openGraph: {
		title: "Free Server Status Checker Online – Fast & No Signup | 30tools",
		description: "Free server status checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/server-status-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Server Status Checker Online – Fast & No Signup | 30tools",
		description: "Free server status checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "server-status-checker",
        "name": "Server Status Checker",
        "description": "Free server status checker tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/server-status-checker",
        "extraSlugs": [
                "free-server-status-checker-online",
                "server-status-checker-tool"
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
						url: "https://30tools.com/server-status-checker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<BuiltInSafeHttp toolId="server-status-checker" />
			</ToolLayout>
		</>
	);
}
