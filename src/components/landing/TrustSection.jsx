export function TrustSection() {
	const logos = [
		{ name: "Product Hunt", color: "text-[#DA552F]" },
		{ name: "reddit", color: "text-[#FF4500]" },
		{ name: "brave", color: "text-[#FB542B]" },
	];

	return (
		<section className="py-8 text-center border-y border-border/50 bg-secondary/20 rounded-3xl mb-12">
			<div className="flex flex-row space-x-8 items-center justify-center flex-wrap gap-y-4 px-4">
				<span className="text-sm font-black text-muted-foreground uppercase tracking-[0.2em]">
					AS SEEN IN:
				</span>
				{logos.map((logo) => (
					<div
						key={logo.name}
						className={`text-xl font-black ${logo.color} px-4 py-2 rounded-xl border border-border bg-card shadow-sm flex items-center gap-2`}
					>
						{logo.name}
					</div>
				))}
			</div>
		</section>
	);
}
