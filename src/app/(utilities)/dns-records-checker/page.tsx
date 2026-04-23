import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free DNS Records Checker Online – Fast & No Signup | 30tools",
	description: "Retrieve all DNS records (A, MX, TXT, CNAME) for any domain instantly. Our free online tool helps you troubleshoot website hosting and email configuration issues. 100% free, fast, and no signup required.",
	keywords: "dns records checker, free dns records checker, online dns records checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/dns-records-checker",
	},
	openGraph: {
		title: "Free DNS Records Checker Online – Fast & No Signup | 30tools",
		description: "Retrieve all DNS records (A, MX, TXT, CNAME) for any domain instantly. Our free online tool helps you troubleshoot website hosting and email configuration issues. 100% free, fast, and no signup required.",
		url: "https://30tools.com/dns-records-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free DNS Records Checker Online – Fast & No Signup | 30tools",
		description: "Retrieve all DNS records (A, MX, TXT, CNAME) for any domain instantly. Our free online tool helps you troubleshoot website hosting and email configuration issues. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "dns-records-checker",
        "name": "DNS Records Checker",
        "description": "Retrieve all DNS records (A, MX, TXT, CNAME) for any domain instantly. Our free online tool helps you troubleshoot website hosting and email configuration issues.",
        "route": "/dns-records-checker",
        "extraSlugs": [
                "free-dns-records-checker-online",
                "dns-records-checker-tool",
                "lookup-domain-dns-records"
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
						url: "https://30tools.com/dns-records-checker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
