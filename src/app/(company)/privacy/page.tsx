import ToolLayout from "@/components/tools/shared/ToolLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const metadata = {
	title: "Privacy Policy - 30tools",
	description: "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work.",
	keywords: "privacy policy, 30tools privacy, data protection, browser-based tools privacy",
	alternates: { canonical: "https://30tools.com/privacy" },
	openGraph: { title: "Privacy Policy - 30tools", description: "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work.", url: "https://30tools.com/privacy", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Privacy Policy - 30tools", description: "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work.", images: ["/og-image.jpg"] },
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
			<ToolLayout tool={tool}>
				<div className="space-y-6">
					<Card>
						<CardContent className="pt-6 space-y-6">
							<div className="flex items-center gap-3 mb-6">
								<Shield className="h-8 w-8 text-primary" />
								<h1 className="text-2xl font-bold">Privacy Policy</h1>
							</div>

							<p className="text-sm text-muted-foreground">Last updated: April 2026</p>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">1. Overview</h2>
								<p className="text-sm leading-relaxed">
									30tools (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates <a href="https://30tools.com" className="text-primary underline">30tools.com</a>, a free online toolkit that processes files and data entirely in your browser. This Privacy Policy explains how we handle information when you use our service.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">2. Browser-Side Processing</h2>
								<p className="text-sm leading-relaxed">
									All file processing (PDF, image, video, audio, text) happens locally in your browser using JavaScript and WebAssembly. Your files <strong>never leave your device</strong>. We do not upload, store, or have access to any files you process with our tools.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">3. Information We Collect</h2>
								<p className="text-sm leading-relaxed">We collect minimal information:</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li><strong>Usage Analytics:</strong> We use privacy-respecting analytics to understand which tools are popular and how users navigate the site. This includes page views, referral sources, and general geographic regions. We do not track individual users across sessions.</li>
									<li><strong>Device Information:</strong> Browser type, screen resolution, and operating system — collected automatically to optimize the user experience.</li>
									<li><strong>Cookies:</strong> We use essential cookies for site functionality and optional analytics cookies that you can disable.</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">4. What We Do NOT Collect</h2>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li>Files you upload or process</li>
									<li>Text you enter into tools</li>
									<li>Personal identification information (unless you voluntarily contact us)</li>
									<li>Payment information (our tools are 100% free)</li>
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
									<li><strong>Public APIs:</strong> Some tools (IP lookup, DNS checker) query public APIs. These queries contain only the data you explicitly enter.</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">6. Data Security</h2>
								<p className="text-sm leading-relaxed">
									We implement industry-standard security measures to protect our website. Since we do not store user files or personal data, the attack surface for data breaches is minimal. All connections to our site are encrypted via HTTPS.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">7. Your Rights</h2>
								<p className="text-sm leading-relaxed">
									Depending on your jurisdiction, you may have the right to:
								</p>
								<ul className="list-disc list-inside text-sm space-y-1 ml-4">
									<li>Access the personal data we hold about you</li>
									<li>Request deletion of your data</li>
									<li>Opt out of analytics tracking</li>
									<li>Lodge a complaint with a supervisory authority</li>
								</ul>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">8. Children&apos;s Privacy</h2>
								<p className="text-sm leading-relaxed">
									Our service is not directed at children under 13. We do not knowingly collect personal information from children.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">9. Changes to This Policy</h2>
								<p className="text-sm leading-relaxed">
									We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-lg font-semibold">10. Contact Us</h2>
								<p className="text-sm leading-relaxed">
									If you have questions about this Privacy Policy, contact us at:
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
