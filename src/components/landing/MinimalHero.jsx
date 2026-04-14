export function MinimalHero({ title, subtitle }) {
	return (
		<section className="pt-24 md:pt-32 pb-16 md:pb-24 text-center animate-in">
			<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-10 tracking-tighter leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
				{title}
			</h1>
			<p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed opacity-90">
				{subtitle}
			</p>
		</section>
	);
}
