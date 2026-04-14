import { Button } from "@/components/ui/button";

export function MinimalHero({ title, subtitle }) {
	return (
		<div className="text-center animate-in">
			<h1 className="text-apple-hero text-white mb-6">
				{title}
			</h1>
			<p className="text-2xl md:text-3xl font-normal text-white/80 max-w-2xl mx-auto mb-10 tracking-tight leading-tight">
				{subtitle}
			</p>
			<div className="flex items-center justify-center gap-4">
				<Button variant="pill" size="lg">
					Get Started
				</Button>
				<Button variant="link" className="text-[#2997ff] text-lg font-normal">
					Browse all tools &gt;
				</Button>
			</div>
		</div>
	);
}
