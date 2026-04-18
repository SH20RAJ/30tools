import { Button } from "@/components/ui/button";

export function MinimalHero({ title, subtitle }) {
	return (
		<div className="text-center animate-in">
			<h1 className="text-5xl md:text-7xl text-foreground mb-6">{title}</h1>
			<p className="text-2xl md:text-3xl font-normal text-foreground/80 max-w-2xl mx-auto mb-10 tracking-tight leading-tight">
				{subtitle}
			</p>
			<div className="flex items-center justify-center gap-4">
				<Button asChild>
					<a
						href="#"
						className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 sm font-medium transition-colors"
					>
						Get Started
					</a>
				</Button>
				<Button variant="link" asChild>
					<a href="#" className="text-primary text-lg font-normal">
						Browse all tools &gt;
					</a>
				</Button>
			</div>
		</div>
	);
}
