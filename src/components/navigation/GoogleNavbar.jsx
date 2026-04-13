"use client";

import { Github, HelpCircle, LayoutGrid, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoogleLogo } from "@/components/shared/GoogleLogo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function GoogleNavbar() {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const handleKeyDown = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				router.push("/search");
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [router]);

	return (
		<TooltipProvider>
			<header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
				<div className="flex h-16 items-center px-4 sm:px-6 gap-4">
					{/* Logo */}
					<div className="flex items-center mr-2">
						<GoogleLogo />
					</div>

					{/* Search Bar – desktop only */}
					<Link
						href="/search"
						className="hidden md:flex flex-1 max-w-[560px] items-center px-4 py-1.5 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-muted-foreground/30 transition-all duration-200 group no-underline"
					>
						<Search className="text-muted-foreground mr-3 w-5 h-5" />
						<span className="flex-1 text-sm text-muted-foreground">
							Search tools…
						</span>
						<div className="flex items-center gap-0.5 px-2 py-0.5 border border-border rounded bg-background text-[10px] font-bold text-muted-foreground">
							<span>⌘</span>
							<span>K</span>
						</div>
					</Link>

					{/* Spacer */}
					<div className="flex-1 md:hidden" />

					{/* Desktop/Mobile actions */}
					<div className="flex items-center gap-1">
						{/* Mobile search button */}
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									asChild
									variant="ghost"
									size="icon"
									className="md:hidden rounded-full text-muted-foreground"
								>
									<Link href="/search">
										<Search className="h-4 w-4" />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Search</TooltipContent>
						</Tooltip>

						<ThemeToggle />

						{/* Help */}
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="hidden sm:inline-flex rounded-full text-muted-foreground"
								>
									<HelpCircle className="h-4 w-4" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>Help</TooltipContent>
						</Tooltip>

						{/* GitHub */}
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									asChild
									variant="ghost"
									size="icon"
									className="rounded-full text-muted-foreground"
								>
									<a
										href="https://github.com/sh20raj/30tools"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="h-4 w-4" />
									</a>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Open Source - GitHub</TooltipContent>
						</Tooltip>

						{/* Apps */}
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									asChild
									variant="ghost"
									size="icon"
									className="rounded-full text-muted-foreground"
								>
									<Link href="/search">
										<LayoutGrid className="h-4 w-4" />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Browse Tools</TooltipContent>
						</Tooltip>

						{/* Divider */}
						<div className="hidden sm:block w-px h-6 bg-border mx-1" />

						{/* Avatar badge */}
						{mounted && (
							<Avatar className="w-8 h-8 ml-1 border-2 border-primary/20">
								<AvatarFallback className="bg-primary text-primary-foreground text-[11px] font-bold">
									30
								</AvatarFallback>
							</Avatar>
						)}
					</div>
				</div>
			</header>
		</TooltipProvider>
	);
}
