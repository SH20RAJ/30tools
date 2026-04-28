import ToolLayout from "@/components/tools/shared/ToolLayout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export const metadata = {
	title: "Terms of Use - 30tools",
	description: "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.",
	keywords: "terms of use, 30tools terms, terms of service, free online tools terms",
	alternates: { canonical: "https://30tools.com/terms" },
	openGraph: { title: "Terms of Use - 30tools", description: "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.", url: "https://30tools.com/terms", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Terms of Use - 30tools", description: "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.", images: ["/og-image.jpg"] },
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
			<ToolLayout tool={tool}>
				<div className="space-y-6">
					<Card>
						<CardContent className="pt-6 space-y-6">
							<div className="flex items-center gap-3 mb-6">
								<FileText className="h-8 w-8 text-primary" />
								<h1 className="text-2xl font-bold">Terms of Use</h1>
							</div>

							<p className="text-sm text-muted-foreground">Last updated: April 2026</p>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
								<p className="text-sm leading-relaxed">
									By accessing and using 30tools.com (&quot;the Service&quot;), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">2. Description of Service</h2>
								<p className="text-sm leading-relaxed">
									30tools provides free, browser-based utility tools for file conversion, image processing, text manipulation, SEO analysis, and more. All processing happens locally in your browser. No data is uploaded to our servers unless you explicitly use a feature that requires it (such as downloading from external URLs).
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">3. Use of the Service</h2>
								<p className="text-sm leading-relaxed">You agree to use the Service only for lawful purposes. You must not:</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li>Use the Service for any illegal or unauthorized purpose</li>
									<li>Attempt to gain unauthorized access to any part of the Service</li>
									<li>Use automated scripts to scrape or abuse the Service</li>
									<li>Interfere with or disrupt the Service or servers</li>
									<li>Use the Service to process content you do not have the right to process</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">4. Intellectual Property</h2>
								<p className="text-sm leading-relaxed">
									The Service, including its design, code, and content, is owned by 30tools and protected by applicable intellectual property laws. Our source code is available under the license specified in our <a href="https://github.com/SH20RAJ/30tools" target="_blank" rel="noreferrer" className="text-primary underline">GitHub repository</a>.
								</p>
								<p className="text-sm leading-relaxed">
									You retain all rights to files and content you process using our tools. We do not claim any ownership over your data.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">5. Disclaimer of Warranties</h2>
								<p className="text-sm leading-relaxed">
									The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that:
								</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li>The Service will be uninterrupted or error-free</li>
									<li>The results obtained from using the Service will be accurate or reliable</li>
									<li>Any defects in the Service will be corrected</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">6. Limitation of Liability</h2>
								<p className="text-sm leading-relaxed">
									In no event shall 30tools be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Since all processing occurs in your browser, we have no access to your files and cannot be responsible for data loss or corruption.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">7. External Links</h2>
								<p className="text-sm leading-relaxed">
									The Service may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party websites.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">8. Modifications to Terms</h2>
								<p className="text-sm leading-relaxed">
									We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this page. Your continued use of the Service after modifications constitutes acceptance of the updated terms.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">9. Governing Law</h2>
								<p className="text-sm leading-relaxed">
									These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">10. Contact</h2>
								<p className="text-sm leading-relaxed">
									For questions about these Terms of Use, contact us at:
								</p>
								<ul className="text-sm space-y-1 ml-4">
									<li>Email: <a href="mailto:mail@30tools.com" className="text-primary underline">mail@30tools.com</a></li>
									<li>GitHub: <a href="https://github.com/SH20RAJ/30tools" target="_blank" rel="noreferrer" className="text-primary underline">github.com/SH20RAJ/30tools</a></li>
								</ul>
							</section>
						</CardContent>
					</Card>
				</div>
			</ToolLayout>
		</>
	);
}
