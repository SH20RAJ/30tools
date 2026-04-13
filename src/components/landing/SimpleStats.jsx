export function SimpleStats() {
	const stats = [
		{ title: "200+", label: "Free Online Tools" },
		{ title: "10M+", label: "Times Tools Used" },
		{ title: "20K+", label: "Daily Users" },
		{ title: "1.5M+", label: "Page Views/Month" },
		{ title: "600K+", label: "Search Clicks/Month" },
	];

	return (
		<section className="py-12 bg-card border border-border rounded-[2rem] my-12 shadow-sm">
			<div className="container mx-auto px-6">
				<h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
					We are growing together:
				</h2>
				<div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 md:gap-12">
					{stats.map((stat) => (
						<div key={stat.label} className="text-center min-w-[200px]">
							<h3 className="text-4xl md:text-5xl font-black text-foreground mb-2">
								{stat.title}
							</h3>
							<p className="text-lg font-medium text-muted-foreground">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
