"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ExternalLink, AlertTriangle } from "lucide-react";

export function TransferBanner() {
	const pathname = usePathname();
	
	// Exclude API, handler, or embed routes
	if (pathname?.startsWith("/api") || pathname?.startsWith("/embed") || pathname?.startsWith("/handler")) {
		return null;
	}

	const newUrl = `https://sopkit.github.io${pathname || ""}`;

	return (
		<div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-b border-orange-500/20 py-3 px-4 text-center">
			<div className="container mx-auto flex items-center justify-center gap-2 flex-wrap text-sm text-amber-800 dark:text-amber-300 font-medium">
				<AlertTriangle className="h-4 w-4 animate-pulse flex-shrink-0 text-orange-500" />
				<span>
					We are transferring to a new home! <strong>30tools.com</strong> is moving to{" "}
					<strong>sopkit.github.io</strong> soon.
				</span>
				<a
					href={newUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1 text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300 transition-colors font-bold"
				>
					Access this tool on Sopkit
					<ExternalLink className="h-3 w-3" />
				</a>
			</div>
		</div>
	);
}
