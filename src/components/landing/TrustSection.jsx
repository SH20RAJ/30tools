export function TrustSection() {
	const logos = ["Product Hunt", "Reddit", "Brave"];

	return (
		<section className="py-12 text-center animate-in">
			<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
				<span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#1d1d1f]">
					As featured on:
				</span>
				<div className="flex flex-row items-center justify-center gap-8 md:gap-12 flex-wrap">
					{logos.map((logo) => (
						<div
							key={logo}
							className="text-xl md:text-2xl font-bold text-[#1d1d1f] tracking-tight"
						>
							{logo}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
