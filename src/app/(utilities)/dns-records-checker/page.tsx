import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


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
        "category": "utilities",
		"features": [
			"Lookup A, AAAA, CNAME, MX, TXT, and NS Records",
			"Query Multiple Global DNS Servers (Google, Cloudflare, OpenDNS)",
			"Verify Email Deliverability Records (SPF, DKIM, DMARC)",
			"Detect Misconfigured DNS Propagation",
			"Fast Server-Side Proxying to Avoid Local Cache Issues"
		],
		"article": `
## Instantly Verify DNS Propagation and Configuration
When you launch a new website, change hosting providers, or set up a professional email address, DNS configuration is the most critical step. The DNS Records Checker allows you to query live nameservers to confirm that your domain's records have updated correctly across the globe.

### Comprehensive Record Lookup
Unlike basic terminal commands, our tool provides a clean, parsed breakdown of every major DNS record type. You can easily verify if your A records point to the correct IP, if your MX records are routing mail to Google Workspace, or if your TXT records contain valid SPF policies.

### No Local Cache Interference
If you recently changed your DNS records, your computer's local cache might still show the old IP address. By using our web-based checker, the query is executed from our edge servers, bypassing your local ISP cache and giving you the true global status of your domain.
		`,
		"howTo": {
			"name": "How to Check DNS Records",
			"steps": [
				{
					"name": "Enter the Domain Name",
					"text": "Type the raw domain name (e.g., 'example.com') without 'https://' or 'www' into the search bar."
				},
				{
					"name": "Select Record Type (Optional)",
					"text": "Choose a specific record type like 'MX' if you are troubleshooting email, or leave it as 'ALL' for a complete report."
				},
				{
					"name": "Run the Query",
					"text": "Click the check button. The tool queries authoritative servers and returns the live records in seconds."
				},
				{
					"name": "Analyze the Output",
					"text": "Review the IPs, TTL (Time to Live) values, and target strings to ensure they match your hosting provider's instructions."
				}
			]
		},
		"faqs": [
			{
				"question": "How long does DNS propagation take?",
				"answer": "While modern DNS updates often propagate within 15 to 30 minutes, it can take up to 48 hours for changes to reflect across all ISPs globally."
			},
			{
				"question": "Why can't I see my new TXT record?",
				"answer": "TXT records can be cached aggressively. Ensure you are querying the specific subdomain if the record was added there, and check the TTL of the previous record."
			},
			{
				"question": "Are my domain searches logged?",
				"answer": "No. The DNS queries are executed in real-time and the results are not stored in any database. Your search history remains private."
			}
		]
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
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
