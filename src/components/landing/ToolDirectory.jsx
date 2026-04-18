import Link from "next/link";
export function ToolDirectory({ categories = [], lang = "en" }) {
	return (
		<div className="space-y-24">
			{categories.map((category) => (
				<section key={category.key} className="animate-in">
					<div className="mb-12">
						<h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
							{category.name}
						</h2>
						<p className="text-lg text-foreground/60 font-normal">
							{category.description}
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
						{category.tools.map((tool) => (
							<Link
								key={tool.id}
								href={tool.route}
								className="group flex flex-col justify-between p-6 md:p-8 bg-card border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-500 no-underline h-full"
							>
								<div>
									<h3 className="text-xl md:text-2xl font-semibold text-card-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
										{tool.name}
									</h3>
									{tool.description && (
										<p className="text-sm text-card-foreground/60 line-clamp-2">
											{tool.description}
										</p>
									)}
								</div>
								<div className="mt-6 text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
									Open Tool <span>&gt;</span>
								</div>
							</Link>
						))}
					</div>
				</section>
			))}
		</div>
	);
}
