import ToolLayout from "@/components/tools/shared/ToolLayout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

export const metadata = {
	title: "Free Contact Online - No Signup | 30tools",
	description:
		"Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"contact, free online tool, no signup, others, contact online, 30tools",
	alternates: {
		canonical: "https://30tools.com/contact",
	},
	openGraph: {
		title: "Free Contact Online - No Signup | 30tools",
		description:
			"Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/contact",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Contact Online - No Signup | 30tools",
		description:
			"Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "contact",
		name: "Contact",
		description:
			"Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/contact",
		extraSlugs: ["contact"],
		category: "others",
	};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Contact",
			url: "/contact",
		},
	];
	const relatedTools = [
		{
			id: "ai-video-summarizer",
			name: "Ai Video Summarizer",
			description: "Ai Video Summarizer - Coming Soon",
			route: "/ai-video-summarizer",
			extraSlugs: [],
			popular: false,
			category: "others",
		},
		{
			id: "all-downloaders",
			name: "All Downloaders",
			description: "All Downloaders - Coming Soon",
			route: "/all-downloaders",
			extraSlugs: [],
			popular: false,
			category: "others",
		},
		{
			id: "audio-equalizer",
			name: "Audio Equalizer",
			description: "Audio Equalizer - Coming Soon",
			route: "/audio-equalizer",
			extraSlugs: [
				"audio-tools",
				"audio-trimmer",
				"change-audio-format",
				"mp4-audio-ripper",
				"optimize-audio-files",
				"shorten-audio-clip",
				"split-audio-file",
			],
			popular: false,
			category: "others",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "Contact",
						description:
							"Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/contact",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<div className="max-w-3xl mx-auto space-y-12 py-12">
					<div className="grid md:grid-cols-2 gap-8">
						<div className="p-8 rounded-3xl bg-card border border-border shadow-xl space-y-4">
							<h2 className="text-2xl font-bold">Email Support</h2>
							<p className="text-muted-foreground">
								Have a question, feedback, or a tool request? Reach out to us directly.
							</p>
							<a 
								href="mailto:mail@30tools.com" 
								className="inline-block text-xl font-bold text-primary hover:underline underline-offset-8 transition-all"
							>
								mail@30tools.com
							</a>
						</div>

						<div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 shadow-xl space-y-4">
							<h2 className="text-2xl font-bold text-primary">Open Source</h2>
							<p className="text-muted-foreground">
								30tools is 100% open source. Help us build the best free toolkit on the web.
							</p>
							<div className="flex flex-col gap-3">
								<a 
									href="https://github.com/sh20raj/30tools" 
									target="_blank" 
									rel="noreferrer"
									className="flex items-center gap-2 font-bold hover:text-primary transition-colors"
								>
									GitHub Repository <ArrowUpRight className="h-4 w-4" />
								</a>
								<a 
									href="https://github.com/sh20raj/30tools/blob/main/CONTRIBUTING.md" 
									target="_blank" 
									rel="noreferrer"
									className="flex items-center gap-2 font-bold hover:text-primary transition-colors"
								>
									Contribute & Build <ArrowUpRight className="h-4 w-4" />
								</a>
							</div>
						</div>
					</div>

					<div className="p-8 rounded-3xl bg-muted/30 border border-border text-center space-y-6">
						<h3 className="text-xl font-bold">Report an Issue</h3>
						<p className="text-muted-foreground max-w-lg mx-auto">
							Found a tool that isn&apos;t working or a bug in the UI? 
							Creating an issue on GitHub is the fastest way to get it fixed.
						</p>
						<Button asChild size="lg" className="rounded-full px-8">
							<a href="https://github.com/sh20raj/30tools/issues" target="_blank" rel="noreferrer">
								Create GitHub Issue
							</a>
						</Button>
					</div>
				</div>
			</ToolLayout>
		</>
	);
}
