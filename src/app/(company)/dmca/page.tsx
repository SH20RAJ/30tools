import ToolLayout from "@/components/tools/shared/ToolLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "@/constants/config";

export const metadata = {
	title: "DMCA Copyright Policy - 30tools",
	description: "30tools DMCA copyright infringement notification policy. Learn how to report copyright violations and our takedown procedures.",
	keywords: "dmca, copyright policy, takedown notice, copyright infringement, 30tools dmca, intellectual property, free dmca, dmca online, 30tools, free online tools, browser tools, no signup tools",
	alternates: { canonical: "https://30tools.com/dmca" },
	openGraph: { title: "DMCA Copyright Policy - 30tools", description: "30tools DMCA copyright infringement notification policy. Learn how to report copyright violations and our takedown procedures.", url: "https://30tools.com/dmca", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "DMCA Copyright Policy - 30tools", description: "30tools DMCA copyright infringement notification policy.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function DMCAPage() {
	const tool = {
		id: "dmca",
		name: "DMCA Copyright Policy",
		description: "30tools DMCA copyright infringement notification policy and takedown procedures.",
		route: "/dmca",
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
						name: "DMCA Copyright Policy",
						description: tool.description,
						url: "https://30tools.com/dmca",
						publisher: { "@type": "Organization", name: "30tools" },
					}),
				}}
			/>
			<ToolLayout tool={tool} relatedTools={[]}>
				<div className="space-y-6">
					<Card>
						<CardContent className="pt-6 space-y-6">
							<div className="flex items-center gap-3 mb-6">
								<ShieldAlert className="h-8 w-8 text-primary" />
							</div>

							<p className="text-sm text-muted-foreground">Last updated: {SITE_CONFIG.lastUpdatedDate}</p>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">1. Digital Millennium Copyright Act (DMCA) Notice</h2>
								<p className="text-sm leading-relaxed">
									30tools.com (&quot;30tools&quot;) respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (&quot;DMCA&quot;), we will respond expeditiously to claims of copyright infringement committed using our service.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">2. Safe Harbor Statement</h2>
								<p className="text-sm leading-relaxed">
									30tools operates as a provider of online tools and does not host, store, or distribute copyrighted media files. Our downloader tools act as intermediaries that process publicly available URLs at the direction of users. We do not maintain a library of copyrighted content and do not encourage or facilitate copyright infringement.
								</p>
								<p className="text-sm leading-relaxed">
									Many of our tools process files entirely in the user&apos;s browser, meaning 30tools never has access to or stores the processed content. For tools that use server-side processing, content is processed ephemerally and is not retained after the operation completes.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">3. Filing a DMCA Takedown Notice</h2>
								<p className="text-sm leading-relaxed">
									If you believe that content accessible through 30tools infringes your copyright, you may submit a DMCA takedown notice to our designated copyright agent. Your notice must include:
								</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li>A physical or electronic signature of the copyright owner or authorized agent</li>
									<li>Identification of the copyrighted work claimed to be infringed</li>
									<li>Identification of the material claimed to be infringing, including the URL(s)</li>
									<li>Your contact information (name, address, telephone number, email)</li>
									<li>A statement that you have a good faith belief that the use is not authorized</li>
									<li>A statement, under penalty of perjury, that the information is accurate and you are authorized to act on behalf of the copyright owner</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">4. Designated Copyright Agent</h2>
								<p className="text-sm leading-relaxed">
									Send DMCA notices to:
								</p>
								<ul className="text-sm space-y-1 ml-4">
									<li>Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-primary underline">{SITE_CONFIG.contactEmail}</a></li>
									<li>Subject line: &quot;DMCA Takedown Notice&quot;</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">5. Counter-Notification</h2>
								<p className="text-sm leading-relaxed">
									If you believe your content was removed in error, you may file a counter-notification. Your counter-notice must include:
								</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li>Your physical or electronic signature</li>
									<li>Identification of the material that was removed and its original location</li>
									<li>A statement under penalty of perjury that the material was removed by mistake</li>
									<li>Your name, address, and telephone number</li>
									<li>A statement consenting to the jurisdiction of the federal court in your district</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">6. Repeat Infringer Policy</h2>
								<p className="text-sm leading-relaxed">
									In accordance with the DMCA and other applicable law, 30tools has adopted a policy of terminating, in appropriate circumstances, users who are deemed to be repeat infringers. 30tools may also, at its sole discretion, limit access to the service and/or terminate the accounts of any users who infringe any intellectual property rights of others.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">7. User Responsibility for Downloader Tools</h2>
								<p className="text-sm leading-relaxed">
									30tools provides downloader and extraction tools for legitimate purposes only. Users are solely responsible for ensuring they have the legal right to download, save, or extract any content. You may only use our downloader tools to:
								</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li>Download content you own or created</li>
									<li>Download content that is openly licensed (Creative Commons, public domain)</li>
									<li>Download content with explicit permission from the copyright holder</li>
									<li>Download content for personal, non-commercial, fair-use purposes as permitted by applicable law</li>
								</ul>
								<p className="text-sm leading-relaxed">
									30tools does not host copyrighted media and is not responsible for how users utilize downloader tools. Copyright holders may contact us to request URL blocking for specific content.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">8. Changes to This Policy</h2>
								<p className="text-sm leading-relaxed">
									We reserve the right to modify this DMCA policy at any time. Changes will be posted on this page with an updated revision date.
								</p>
							</section>
						</CardContent>
					</Card>
				</div>
			</ToolLayout>
		</>
	);
}
