import { Check, Download, Shield, Zap } from "lucide-react";

export const ToolTrust = () => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-12 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border border-primary/10 rounded-[3rem]">
			<div className="text-center space-y-4 group">
				<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
					<Zap className="w-8 h-8" />
				</div>
				<h3 className="font-bold text-xl tracking-tight">Instant Results</h3>
				<p className="text-sm text-muted-foreground leading-relaxed">
					Real-time processing with zero latency. No waiting, just instant
					professional output.
				</p>
			</div>
			<div className="text-center space-y-4 group">
				<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
					<Shield className="w-8 h-8" />
				</div>
				<h3 className="font-bold text-xl tracking-tight">Maximum Privacy</h3>
				<p className="text-sm text-muted-foreground leading-relaxed">
					All processing is done locally in your browser. We never store or see
					your sensitive data.
				</p>
			</div>
			<div className="text-center space-y-4 group">
				<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
					<Download className="w-8 h-8" />
				</div>
				<h3 className="font-bold text-xl tracking-tight">Free Forever</h3>
				<p className="text-sm text-muted-foreground leading-relaxed">
					No signups, no hidden costs, and no limits. Use our professional tools
					as much as you need.
				</p>
			</div>
		</section>
	);
};

export const ToolFeatures = ({ features }) => {
	if (!features || features.length === 0) return null;
	return (
		<section className="scroll-mt-24">
			<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12">
				Key Features & Benefits
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{features.map((feature, idx) => (
					<div
						key={idx}
						className="flex items-start gap-5 p-6 bg-card border border-border/60 rounded-3xl hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
					>
						<div className="mt-1 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
							<Check className="w-5 h-4" />
						</div>
						<span className="text-lg font-semibold tracking-tight">
							{feature}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

export const ToolSteps = ({ steps, toolName }) => {
	if (!steps || steps.length === 0) return null;
	return (
		<section className="scroll-mt-24">
			<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12">
				How to Use {toolName}
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{steps.map((step, idx) => (
					<div
						key={idx}
						className="relative p-8 bg-muted/30 rounded-[2rem] border border-border/40 group hover:border-primary/30 hover:bg-card hover:shadow-lg transition-all duration-300"
					>
						<div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-black text-xl shadow-xl shadow-primary/20 transform -rotate-12 group-hover:rotate-0 transition-transform">
							{idx + 1}
						</div>
						<h3 className="text-2xl font-bold mb-4 mt-2 tracking-tight">
							{step.name}
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							{step.text}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export const ToolFAQ = ({ faqs, toolName }) => {
	if (!faqs || faqs.length === 0) return null;
	return (
		<section className="scroll-mt-24">
			<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 flex items-center gap-4">
				<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
					<Check className="w-6 h-6 text-primary" />
				</div>
				Frequently Asked Questions
			</h2>
			<div className="space-y-6">
				{faqs.map((faq, idx) => (
					<div
						key={idx}
						className="p-10 bg-card border border-border/60 rounded-[2.5rem] hover:border-primary/20 hover:shadow-md transition-all duration-300"
					>
						<h3 className="text-2xl font-bold mb-6 tracking-tight">
							{faq.question}
						</h3>
						<p className="text-muted-foreground leading-relaxed text-lg">
							{faq.answer}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};
