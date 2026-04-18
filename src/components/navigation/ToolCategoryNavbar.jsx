"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function ToolCategoryNavbar({
	title,
	tools = [],
	searchPlaceholder = "Search tools...",
	categoryIcon: CategoryIcon = Search,
}) {
	return (
		<div className="space-y-4">
			{/* Main Navigation */}
			<nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border transition-colors duration-300">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<Link href="/" className="flex items-center space-x-2 group">
							<div className="w-8 h-8 s-center justify-center group-hover:bg-primary/20 transition-colors">
								<CategoryIcon className="w-5 h-5 text-primary" />
							</div>
							<span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60">
								30tools
							</span>
							<span className="hidden sm:inline-block text-sm text-muted-foreground font-medium px-2 py-0.5 ">
								{title}
							</span>
						</Link>
						<div className="flex items-center space-x-2">
							<ThemeToggle />
							<Link href="/other-tools">
								<Button
									variant="ghost"
									size="sm"
									className="hidden sm:inline-flex hover:bg-muted/50"
								>
									Other Tools
								</Button>
							</Link>
							<Link href="/search">
								<Button
									variant="outline"
									size="sm"
									className="gap-2 border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50"
								>
									<Search className="w-4 h-4" />
									<span className="hidden sm:inline">Search</span>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</nav>

			{/* Tools Quick Access */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-background ">
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
						{tools.map((tool) => {
							const Icon = tool.icon;
							return (
								<Link key={tool.href} href={tool.href}>
									<Button
										variant="ghost"
										className="w-full justify-start h-auto p-3 hover:bg-primary/5 transition-all duration-200 group border border-transparent hover:border-primary/10"
									>
										<div className="flex items-center space-x-3 w-full">
											<div className="p-2 shadow-sm transition-colors">
												<Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
											</div>
											<div className="flex flex-col items-start min-w-0">
												<span className="text-sm font-medium truncate w-full text-left">
													{tool.name}
												</span>
												{tool.popular && (
													<div className="flex items-center gap-1 mt-0.5">
														<span className="inline-block w-1.5 h-1.5 se" />
														<span className="text-[10px] text-muted-foreground font-normal">
															Popular
														</span>
													</div>
												)}
											</div>
										</div>
									</Button>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
