import ToolLayout from "@/components/tools/shared/ToolLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Lock, Zap, Users, Star } from "lucide-react";

export const metadata = {
	title: "About 30tools - Free Online Tools | 30tools",
	description: "Learn about 30tools — 660+ free browser-based tools for PDF, image, video, text, SEO, and more. No signup, no uploads, 100% private.",
	keywords: "about 30tools, free online tools, browser-based tools, privacy-first tools",
	alternates: { canonical: "https://30tools.com/about" },
	openGraph: { title: "About 30tools - Free Online Tools | 30tools", description: "Learn about 30tools — 660+ free browser-based tools for PDF, image, video, text, SEO, and more. No signup, no uploads, 100% private.", url: "https://30tools.com/about", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "About 30tools - Free Online Tools | 30tools", description: "Learn about 30tools — 660+ free browser-based tools for PDF, image, video, text, SEO, and more. No signup, no uploads, 100% private.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function AboutPage() {
	const tool = {
		id: "about",
		name: "About 30tools",
		description: "Learn about 30tools — 660+ free browser-based tools for PDF, image, video, text, SEO, and more. No signup, no uploads, 100% private.",
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
								<h1 className="text-3xl font-bold">About 30tools</h1>
								<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
									The world&apos;s largest free browser-based tool collection. 660+ tools, zero data uploads, 100% private.
								</p>
							</div>

							<div className="grid md:grid-cols-3 gap-4 text-center">
								<div className="p-6 bg-muted/30 rounded-xl">
									<Zap className="h-8 w-8 text-primary mx-auto mb-2" />
									<div className="text-3xl font-bold">660+</div>
									<div className="text-sm text-muted-foreground">Free Tools</div>
								</div>
								<div className="p-6 bg-muted/30 rounded-xl">
									<Lock className="h-8 w-8 text-primary mx-auto mb-2" />
									<div className="text-3xl font-bold">100%</div>
									<div className="text-sm text-muted-foreground">Browser-Side</div>
								</div>
								<div className="p-6 bg-muted/30 rounded-xl">
									<Globe className="h-8 w-8 text-primary mx-auto mb-2" />
									<div className="text-3xl font-bold">1,666</div>
									<div className="text-sm text-muted-foreground">SEO Variant Slugs</div>
								</div>
							</div>

							<section className="space-y-3">
								<h2 className="text-xl font-semibold">Our Mission</h2>
								<p className="text-sm leading-relaxed">
									30tools was built with a simple mission: make every useful utility tool available for free, directly in your browser, with zero data leaving your device. No signups, no paywalls, no hidden tracking — just tools that work.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-xl font-semibold">Why 30tools?</h2>
								<div className="grid md:grid-cols-2 gap-4">
									<div className="flex gap-3 p-4 bg-muted/20 rounded-lg">
										<Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
										<div>
											<h3 className="font-medium text-sm">Privacy-First</h3>
											<p className="text-xs text-muted-foreground">All processing happens locally in your browser. Your files never touch our servers.</p>
										</div>
									</div>
									<div className="flex gap-3 p-4 bg-muted/20 rounded-lg">
										<Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
										<div>
											<h3 className="font-medium text-sm">Instant & Free</h3>
											<p className="text-xs text-muted-foreground">No signup, no wait times, no watermarks. Every tool is completely free.</p>
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
											<p className="text-xs text-muted-foreground">Built by contributors worldwide. PRs reviewed within 24 hours.</p>
										</div>
									</div>
								</div>
							</section>

							<section className="space-y-3">
								<h2 className="text-xl font-semibold">Tech Stack</h2>
								<div className="flex flex-wrap gap-2">
									<Badge variant="secondary">Next.js 15</Badge>
									<Badge variant="secondary">TypeScript</Badge>
									<Badge variant="secondary">Tailwind CSS</Badge>
									<Badge variant="secondary">React</Badge>
									<Badge variant="secondary">App Router</Badge>
									<Badge variant="secondary">Client-Side Only</Badge>
									<Badge variant="secondary">Vercel</Badge>
								</div>
							</section>

							<section className="space-y-3">
								<h2 className="text-xl font-semibold">Categories</h2>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
									{[
										{ name: "PDF Tools", count: "10+" },
										{ name: "Image Tools", count: "32+" },
										{ name: "Video Tools", count: "5+" },
										{ name: "Audio Tools", count: "3+" },
										{ name: "Text Tools", count: "16+" },
										{ name: "Developer Tools", count: "91+" },
										{ name: "SEO Tools", count: "17+" },
										{ name: "Downloaders", count: "82+" },
										{ name: "Generators", count: "11+" },
										{ name: "YouTube Tools", count: "29+" },
										{ name: "Utilities", count: "90+" },
										{ name: "Security Tools", count: "5+" },
									].map((cat) => (
										<div key={cat.name} className="flex justify-between p-2 bg-muted/20 rounded">
											<span>{cat.name}</span>
											<span className="text-muted-foreground">{cat.count}</span>
										</div>
									))}
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
										href="mailto:mail@30tools.com"
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
