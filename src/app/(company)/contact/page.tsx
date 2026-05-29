import ToolLayout from "@/components/tools/shared/ToolLayout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { SITE_CONFIG } from "@/constants/config";

export const metadata = {
	title: "Free Contact Online - No Signup | 30tools",
	description: "Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your...",
	keywords: "contact 30tools, support, feedback, help, contact, free contact, contact online, 30tools, free online tools, browser tools, no signup tools, privacy tools",
	alternates: {
		canonical: "https://30tools.com/contact",
	},
	openGraph: {
		title: "Free Contact Online - No Signup | 30tools",
		description: "Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your...",
		url: "https://30tools.com/contact",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Contact Online - No Signup | 30tools",
		description: "Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "contact",
		name: "Contact Us",
		description: "Have a question, feedback, or a tool request? Reach out to us directly.",
		route: "/contact",
		category: "company",
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ContactPage",
						name: "Contact 30tools",
						description: tool.description,
						url: "https://30tools.com/contact",
						mainEntity: {
							"@type": "ContactPoint",
							email: SITE_CONFIG.contactEmail,
							contactType: "customer support",
							availableLanguage: ["English"]
						}
					}),
				}}
			/>

			<ToolLayout tool={tool} relatedTools={[]}>
				<div className="max-w-3xl mx-auto space-y-12 py-12">
					<div className="text-center space-y-4">
						<h2 className="text-4xl font-bold">How can we help?</h2>
						<p className="text-xl text-muted-foreground">Choose the best way to get in touch with our team.</p>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="p-8 rounded-3xl bg-card border border-border shadow-xl space-y-4">
							<h2 className="text-2xl font-bold">Email Support</h2>
							<p className="text-muted-foreground">
								Ideal for tool requests, feedback, or general inquiries.
							</p>
							<p className="text-sm font-semibold">Expected Response Time: 24-48 Hours</p>
							<a 
								href={`mailto:${SITE_CONFIG.contactEmail}`} 
								className="inline-block text-xl font-bold text-primary hover:underline underline-offset-8 transition-all pt-4"
							>
								{SITE_CONFIG.contactEmail}
							</a>
						</div>

						<div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 shadow-xl space-y-4">
							<h2 className="text-2xl font-bold text-primary">Open Source</h2>
							<p className="text-muted-foreground">
								Ideal for bug reports and code contributions.
							</p>
							<p className="text-sm font-semibold text-primary/80">Expected Response Time: Within 24 Hours</p>
							<div className="flex flex-col gap-3 pt-4">
								<a 
									href="https://github.com/sh20raj/30tools/issues/new/choose" 
									target="_blank" 
									rel="noreferrer"
									className="flex items-center gap-2 font-bold hover:text-primary transition-colors"
								>
									Report an Issue on GitHub <ArrowUpRight className="h-4 w-4" />
								</a>
								<a 
									href="https://github.com/sh20raj/30tools" 
									target="_blank" 
									rel="noreferrer"
									className="flex items-center gap-2 font-bold hover:text-primary transition-colors"
								>
									GitHub Repository <ArrowUpRight className="h-4 w-4" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</ToolLayout>
		</>
	);
}
