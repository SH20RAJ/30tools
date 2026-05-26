import ToolLayout from "@/components/tools/shared/ToolLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { SITE_CONFIG } from "@/constants/config";

export const metadata = {
	title: "Free Privacy Policy Online - 30tools",
	description: "Read the 30tools Privacy Policy. We explain how we handle data across our browser-based and server-side tools, and your privacy protections.",
	keywords: "privacy policy, 30tools privacy, data protection, privacy policy 30tools, privacy, free privacy, privacy online, 30tools, free online tools, browser tools, no signup tools, privacy tools",
	alternates: {
		canonical: "https://30tools.com/privacy",
	},
	openGraph: {
		title: "Free Privacy Policy Online - 30tools",
		description: "Read the 30tools Privacy Policy. We explain how we handle data across our browser-based and server-side tools, and your privacy protections.",
		url: "https://30tools.com/privacy",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Privacy Policy Online - 30tools",
		description: "Read the 30tools Privacy Policy. We explain how we handle data across our browser-based and server-side tools, and your privacy protections.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function PrivacyPage() {
	const tool = {
		id: "privacy",
		name: "Privacy Policy",
		description: "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work.",
		route: "/privacy",
		category: "company",
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebPage",
						name: "Privacy Policy",
						description: tool.description,
						url: "https://30tools.com/privacy",
						publisher: { "@type": "Organization", name: "30tools" },
					}),
				}}
			/>
			<ToolLayout tool={tool} relatedTools={[]}>
				<div className="space-y-6">
					<Card>
						<CardContent className="pt-6 space-y-6">
							<div className="flex items-center gap-3 mb-6">
								<Shield className="h-8 w-8 text-primary" />
							</div>

							<p className="text-sm text-muted-foreground">Last updated: {SITE_CONFIG.lastUpdatedDate}</p>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">1. Overview</h2>
								<p className="text-sm leading-relaxed">
									30tools (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates <a href="https://30tools.com" className="text-primary underline">30tools.com</a>, a free online toolkit. This Privacy Policy explains how we handle information when you use our service.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">2. Data Processing & Storage</h2>
								<p className="text-sm leading-relaxed">
									We are committed to absolute transparency regarding how your data is processed. Below is a breakdown of our tools:
								</p>
								<div className="overflow-x-auto my-4">
									<table className="w-full text-sm border-collapse border border-border">
										<thead>
											<tr className="bg-muted/50">
												<th className="border border-border p-2 text-left">Tool Category</th>
												<th className="border border-border p-2 text-left">Processing Method</th>
												<th className="border border-border p-2 text-left">Data Retention</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="border border-border p-2 font-medium">Client-Side Tools (Image Compressors, Text Tools, Generators)</td>
												<td className="border border-border p-2">Executed locally in your browser using JavaScript/WebAssembly.</td>
												<td className="border border-border p-2">Processed locally in browser for many tools; no server-side file storage for these workflows.</td>
											</tr>
											<tr>
												<td className="border border-border p-2 font-medium">Server/Proxy Tools (Downloaders, Meta Tag Extractors, Site Audits)</td>
												<td className="border border-border p-2">Requests are proxied through our edge servers (Cloudflare/Vercel) to fetch external data.</td>
												<td className="border border-border p-2">Processed via edge services for request handling. We minimize retention and avoid persistent content storage for tool payloads.</td>
											</tr>
											<tr>
												<td className="border border-border p-2 font-medium">API Tools (Tester, DNS Checkers)</td>
												<td className="border border-border p-2">Requests made via our servers to specific APIs or DNS providers.</td>
												<td className="border border-border p-2">API credentials are handled only for request execution and should be treated as sensitive by users. Use restricted keys and rotate when needed.</td>
											</tr>
										</tbody>
									</table>
								</div>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">3. Information We Collect</h2>
								<p className="text-sm leading-relaxed">We collect minimal information:</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li><strong>Usage Analytics:</strong> We use privacy-respecting analytics to understand which tools are popular. We do not track individual users across sessions.</li>
									<li><strong>Device Information:</strong> Browser type, screen resolution, and operating system — collected automatically to optimize the user experience.</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">4. What We Do NOT Collect</h2>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li>Files you upload or process</li>
									<li>Text you enter into tools</li>
									<li>Personal identification information (unless you voluntarily contact us)</li>
									<li>Payment information</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">5. Third-Party Services</h2>
								<p className="text-sm leading-relaxed">
									We may use third-party services for:
								</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li><strong>Analytics:</strong> To understand site usage patterns</li>
									<li><strong>CDN:</strong> To deliver content quickly worldwide</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">6. Data Security</h2>
								<p className="text-sm leading-relaxed">
									We implement industry-standard security measures to protect our website. Since we do not store user files or personal data, the attack surface for data breaches is minimal. All connections to our site are encrypted via HTTPS.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">7. Contact Us</h2>
								<p className="text-sm leading-relaxed">
									If you have questions about this Privacy Policy, contact us at:
								</p>
								<ul className="text-sm space-y-1 ml-4">
									<li>Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-primary underline">{SITE_CONFIG.contactEmail}</a></li>
								</ul>
							</section>
						</CardContent>
					</Card>
				</div>
			</ToolLayout>
		</>
	);
}
