import ToolLayout from "@/components/tools/shared/ToolLayout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { SITE_CONFIG } from "@/constants/config";

export const metadata = {
	title: "Free Terms of Use Online - 30tools",
	description: "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.",
	keywords: "terms of use, 30tools terms, terms of service, free online tools terms, terms, free terms, terms online, 30tools, free online tools, browser tools, no signup tools, privacy tools",
	alternates: {
		canonical: "https://30tools.com/terms",
	},
	openGraph: {
		title: "Free Terms of Use Online - 30tools",
		description: "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.",
		url: "https://30tools.com/terms",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Terms of Use Online - 30tools",
		description: "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function TermsPage() {
	const tool = {
		id: "terms",
		name: "Terms of Use",
		description: "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.",
		route: "/terms",
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
						name: "Terms of Use",
						description: tool.description,
						url: "https://30tools.com/terms",
						publisher: { "@type": "Organization", name: "30tools" },
					}),
				}}
			/>
			<ToolLayout tool={tool} relatedTools={[]}>
				<div className="space-y-6">
					<Card>
						<CardContent className="pt-6 space-y-6">
							<div className="flex items-center gap-3 mb-6">
								<FileText className="h-8 w-8 text-primary" />
							</div>

							<p className="text-sm text-muted-foreground">Last updated: {SITE_CONFIG.lastUpdatedDate}</p>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
								<p className="text-sm leading-relaxed">
									By accessing and using 30tools.com (&quot;the Service&quot;), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">2. Description of Service</h2>
								<p className="text-sm leading-relaxed">
									30tools provides free, browser-based utility tools for file conversion, image processing, text manipulation, SEO analysis, media downloading, and more. Processing primarily happens locally in your browser, though some features (such as downloaders or API tests) utilize our edge network for proxying.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">3. Use of the Service and Lawful Use</h2>
								<p className="text-sm leading-relaxed">You agree to use the Service only for lawful purposes. You must adhere to the following rules:</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li><strong>Downloaders & Extractors:</strong> You may only download, unlock, or extract content/documents that you own or have explicit permission to modify. Do not use the Service to infringe on copyright or intellectual property rights.</li>
									<li><strong>API & Network Tools:</strong> Do not use API testers to distribute malicious payloads, launch denial-of-service attacks, or scan networks you do not own. Do not paste production root credentials into testing interfaces.</li>
									<li><strong>AI & Generated Content:</strong> Do not use our generators to produce harmful, defamatory, or explicit content.</li>
									<li>Do not attempt to gain unauthorized access to any part of the Service or abuse the Service with automated scripts.</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">4. Service Limitations</h2>
								<p className="text-sm leading-relaxed">
									While we strive to provide the best possible experience, the Service is provided with the following practical limitations:
								</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li><strong>File Size:</strong> Supported file processing is generally limited to {SITE_CONFIG.supportedFileLimits}. Files larger than {SITE_CONFIG.maxFileSize} may cause browser instability.</li>
									<li><strong>Availability:</strong> We do not guarantee 100% uptime. Services may be rate-limited or temporarily disabled for maintenance without prior notice.</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">5. Intellectual Property</h2>
								<p className="text-sm leading-relaxed">
									The Service, including its design, code, and content, is owned by 30tools and protected by applicable intellectual property laws. Our source code is available under the license specified in our <a href="https://github.com/SH20RAJ/30tools" target="_blank" rel="noreferrer" className="text-primary underline">GitHub repository</a>.
								</p>
								<p className="text-sm leading-relaxed">
									You retain all rights to files and content you process using our tools. We do not claim any ownership over your data.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">6. Disclaimer of Warranties</h2>
								<p className="text-sm leading-relaxed">
									The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">7. Limitation of Liability</h2>
								<p className="text-sm leading-relaxed">
									In no event shall 30tools be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. We have no access to your files and cannot be responsible for data loss, corruption, or legal repercussions of your downloaded media.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">8. Modifications to Terms</h2>
								<p className="text-sm leading-relaxed">
									We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this page. Your continued use of the Service after modifications constitutes acceptance of the updated terms.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">9. Contact</h2>
								<p className="text-sm leading-relaxed">
									For questions about these Terms of Use, contact us at: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-primary underline">{SITE_CONFIG.contactEmail}</a>
								</p>
							</section>
						</CardContent>
					</Card>
				</div>
			</ToolLayout>
		</>
	);
}
