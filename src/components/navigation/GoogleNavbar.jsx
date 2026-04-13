"use client";

import AppsIcon from "@mui/icons-material/Apps";
import GitHubIcon from "@mui/icons-material/GitHub";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoogleLogo } from "@/components/shared/GoogleLogo";
import { ThemeToggle } from "@/components/shared/theme-toggle";

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
		<AppBar
			position="sticky"
			elevation={0}
			className="bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300"
		>
			<Toolbar sx={{ gap: 1, px: { xs: 2, md: 3 } }}>
				{/* Logo */}
				<Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
					<GoogleLogo />
				</Box>

				{/* Search Bar – desktop only */}
				<Box
					component={Link}
					href="/search"
					className="hidden md:flex flex-1 max-w-[560px] items-center px-4 py-1.5 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-muted-foreground/30 transition-all duration-200"
					sx={{
						textDecoration: "none",
					}}
				>
					<SearchIcon className="text-muted-foreground mr-3 w-5 h-5" />
					<span className="flex-1 text-sm text-muted-foreground">
						Search tools…
					</span>
					<Box className="flex items-center gap-0.5 px-2 py-0.5 border border-border rounded bg-background text-[10px] font-bold text-muted-foreground">
						<span>⌘</span>
						<span>K</span>
					</Box>
				</Box>

				{/* Spacer */}
				<Box sx={{ flex: 1, display: { md: "none" } }} />

				{/* Mobile search button */}
				<Tooltip title="Search">
					<IconButton
						component={Link}
						href="/search"
						size="small"
						className="md:hidden rounded-full text-muted-foreground hover:bg-secondary"
					>
						<SearchIcon fontSize="small" />
					</IconButton>
				</Tooltip>

				<ThemeToggle />

				{/* Help */}
				<Tooltip title="Help">
					<IconButton
						size="small"
						className="hidden sm:inline-flex rounded-full text-muted-foreground hover:bg-secondary"
					>
						<HelpOutlineIcon fontSize="small" />
					</IconButton>
				</Tooltip>

				{/* GitHub */}
				<Tooltip title="Open Source - GitHub">
					<IconButton
						component="a"
						href="https://github.com/sh20raj/30tools"
						target="_blank"
						rel="noopener noreferrer"
						size="small"
						className="rounded-full text-muted-foreground hover:bg-secondary"
					>
						<GitHubIcon fontSize="small" />
					</IconButton>
				</Tooltip>

				{/* Apps */}
				<Tooltip title="Browse Tools">
					<IconButton
						component={Link}
						href="/search"
						size="small"
						className="rounded-full text-muted-foreground hover:bg-secondary"
					>
						<AppsIcon fontSize="small" />
					</IconButton>
				</Tooltip>

				{/* Divider */}
				<Box className="w-px h-6 bg-border hidden sm:block mx-1" />

				{/* Avatar badge */}
				{mounted && (
					<Avatar className="w-8 h-8 bg-primary text-[11px] font-bold ml-1 border-2 border-primary/20">
						30
					</Avatar>
				)}
			</Toolbar>
		</AppBar>
	);
}
