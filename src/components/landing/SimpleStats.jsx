export function SimpleStats() {
	const stats = [
		{ title: "200+", label: "Free Tools" },
		{ title: "10M+", label: "Uses" },
		{ title: "20K+", label: "Daily Users" },
		{ title: "1.5M+", label: "Monthly Views" },
	];

	return (
		<section className="py-20 text-center">
			<h2 className="text-apple-section-heading text-foreground mb-16">
				Growing together.
			</h2>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
				{stats.map((stat) => (
					<div key={stat.label} className="text-center">
						<h3 className="text-5xl md:text-6xl font-semibold text-foreground mb-4 tracking-tighter">
							{stat.title}
						</h3>
						<p className="text-lg md:text-xl font-normal text-foreground/60 tracking-tight">
							{stat.label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
