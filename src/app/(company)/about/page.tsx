import ToolLayout from "@/components/tools/shared/ToolLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Lock, Zap, Users, Star } from "lucide-react";
import { SITE_CONFIG } from "@/constants/config";

export const metadata = {
	title: "Free About Online - No Signup | 30tools",
	description: "Free About online. About allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "about 30tools, free online tools, browser-based tools, privacy-conscious tools, about, free about, about online, 30tools, browser tools, no signup tools, privacy tools",
	alternates: {
		canonical: "https://30tools.com/about",
	},
	openGraph: {
		title: "Free About Online - No Signup | 30tools",
		description: "Free About online. About allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/about",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free About Online - No Signup | 30tools",
		description: "Free About online. About allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function AboutPage() {
	const tool = {
		id: "about",
		name: "About 30tools",
		description: `Learn about 30tools — ${SITE_CONFIG.toolCountString} free browser-based tools for PDF, image, video, text, SEO, and more. No signup, no uploads, 100% private.`,
		route: "/about",
		category: "company",
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "30tools",
						url: "https://30tools.com",
						description: tool.description,
						sameAs: ["https://github.com/SH20RAJ/30tools"],
					}),
				}}
			/>
			<ToolLayout tool={tool}>
				<div className="space-y-6">
					<Card>
						<CardContent className="pt-6 space-y-6">
							<div className="text-center space-y-3 mb-8">
								<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
									A large free tool collection with {SITE_CONFIG.toolCountString} tools. Many tools run in-browser, while some use secure server-side requests.
								</p>
							</div>

							<div className="grid md:grid-cols-2 gap-4 text-center">
								<div className="p-6 bg-muted/30 rounded-xl">
									<Zap className="h-8 w-8 text-primary mx-auto mb-2" />
									<div className="text-3xl font-bold">{SITE_CONFIG.toolCountString}</div>
									<div className="text-sm text-muted-foreground">Free Tools</div>
								</div>
								<div className="p-6 bg-muted/30 rounded-xl">
									<Lock className="h-8 w-8 text-primary mx-auto mb-2" />
								<div className="text-3xl font-bold">Mixed</div>
								<div className="text-sm text-muted-foreground">Browser + Server Tools</div>
								</div>
							</div>

							<section className="space-y-3">
								<h2 className="text-xl font-semibold">Our Mission</h2>
								<p className="text-sm leading-relaxed">
									30tools was built with a simple mission: make every useful utility tool available for free and accessible. Most tools run directly in your browser for privacy; some use secure server-side or third-party API processing when necessary. No signups for core features, no paywalls, and transparent about how each tool processes your data — just tools that work.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-xl font-semibold">Why 30tools?</h2>
								<div className="grid md:grid-cols-2 gap-4">
									<div className="flex gap-3 p-4 bg-muted/20 rounded-lg">
										<Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
										<div>
											<h3 className="font-medium text-sm">Privacy-First</h3>
											<p className="text-xs text-muted-foreground">Many tools process locally in your browser; some tools require server or third-party API calls.</p>
										</div>
									</div>
									<div className="flex gap-3 p-4 bg-muted/20 rounded-lg">
										<Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
										<div>
											<h3 className="font-medium text-sm">Instant & Free</h3>
											<p className="text-xs text-muted-foreground">No signup for core use and fast access to most workflows. Tool-specific limits are documented per page.</p>
										</div>
									</div>
									<div className="flex gap-3 p-4 bg-muted/20 rounded-lg">
										<Code className="h-5 w-5 text-primary shrink-0 mt-0.5" />
										<div>
											<h3 className="font-medium text-sm">Open Source</h3>
											<p className="text-xs text-muted-foreground">Our code is on GitHub. Contribute, report issues, or fork it for your own needs.</p>
										</div>
									</div>
									<div className="flex gap-3 p-4 bg-muted/20 rounded-lg">
										<Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
										<div>
											<h3 className="font-medium text-sm">Community Driven</h3>
											<p className="text-xs text-muted-foreground">Built with open-source contributions and community feedback.</p>
										</div>
									</div>
								</div>
							</section>

							<section className="space-y-3">
								<h2 className="text-xl font-semibold">Tech Stack</h2>
								<div className="flex flex-wrap gap-2">
									<Badge variant="secondary">Next.js</Badge>
									<Badge variant="secondary">TypeScript</Badge>
									<Badge variant="secondary">Tailwind CSS</Badge>
									<Badge variant="secondary">React</Badge>
									<Badge variant="secondary">App Router</Badge>
									<Badge variant="secondary">Cloudflare + Vercel</Badge>
								</div>
							</section>

							<section className="space-y-3">
								<h2 className="text-xl font-semibold">Open Source</h2>
								<p className="text-sm leading-relaxed">
									30tools is open source and welcomes contributions from everyone. Whether you&apos;re participating in Hacktoberfest, GSoC, or just want to build your portfolio — we have issues for every skill level.
								</p>
								<div className="flex gap-3">
									<a
										href="https://github.com/SH20RAJ/30tools"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
									>
										<Star className="h-4 w-4" />
										Star on GitHub
									</a>
									<a
										href="/contact"
										className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-medium hover:bg-muted/50 transition-colors"
									>
										Contact Us
									</a>
								</div>
							</section>
						</CardContent>
					</Card>
				</div>
			</ToolLayout>
		</>
	);
}
