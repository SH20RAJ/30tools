import { CheckCircle2, Shield, Globe, Zap } from "lucide-react";

export function HomeSEOContent() {
	const features = [
		{
			icon: <Shield className="h-6 w-6 text-primary" />,
			title: "Privacy First Processing",
			description: "Most of our tools process files directly in your browser. Your data never leaves your device, ensuring maximum security and anonymity."
		},
		{
			icon: <Globe className="h-6 w-6 text-primary" />,
			title: "No Sign-up Required",
			description: "Access our entire suite of 600+ tools instantly. No emails, no credit cards, and no complex registration flows. Just pick a tool and start."
		},
		{
			icon: <Zap className="h-6 w-6 text-primary" />,
			title: "Lightning Fast Speeds",
			description: "Optimized for performance, our tools leverage edge computing and modern web technologies to deliver instant results without server lag."
		}
	];

	return (
		<section className="py-24 border-t border-border/40">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<div>
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
						The All-in-One Toolkit for <span className="text-primary">Modern Creators</span>
					</h2>
					<p className="text-lg text-muted-foreground mb-8 leading-relaxed">
						At 30tools, we believe that powerful software should be accessible to everyone. We've built a massive ecosystem of specialized utilities to help you solve everyday digital problems—whether you're a developer, designer, student, or content creator.
					</p>

					<div className="space-y-6">
						{features.map((feature, i) => (
							<div key={i} className="flex gap-4">
								<div className="mt-1 flex-shrink-0">{feature.icon}</div>
								<div>
									<h3 className="font-semibold text-xl mb-1">{feature.title}</h3>
									<p className="text-muted-foreground">{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="bg-card border border-border/60 p-8 md:p-12 rounded-none shadow-3xl bg-apple-glass relative overflow-hidden group">
					<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
						<Zap className="h-32 w-32" />
					</div>
					<h3 className="text-2xl font-bold mb-6">Unmatched Tool Variety</h3>
					<ul className="space-y-4">
						{[
							"Advanced YouTube & Social Downloaders",
							"Lossless Image Compression & Conversion",
							"Comprehensive PDF Management Suite",
							"Developer Utilities (JSON, Base64, SQL)",
							"Advanced SEO & Performance Analyzers",
							"AI-Powered Content & Image Generators"
						].map((item, i) => (
							<li key={i} className="flex items-center gap-3 text-card-foreground/80">
								<CheckCircle2 className="h-5 w-5 text-primary" />
								<span>{item}</span>
							</li>
						))}
					</ul>
					<div className="mt-10 p-6 rounded-none bg-primary/5 border border-primary/10">
						<p className="text-sm font-medium italic">
							"30tools has replaced over a dozen paid subscriptions for my team. The browser-based processing is a game changer for our sensitive client data."
						</p>
						<p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">— Lead Developer, TechFlow</p>
					</div>
				</div>
			</div>
		</section>
	);
}
