"use client";

import { useEffect } from "react";
import Link from "next/link";
import { STATIC_ROUTES } from "@/lib/tools";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error("Application error boundary caught:", error);
	}, [error]);

	return (
		<div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
			<div className="max-w-xl text-center border border-border bg-card p-8 shadow-sm">
				<h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
				<p className="text-muted-foreground mb-6">
					We ran into an unexpected issue while loading this page. You can retry
					or return to the homepage.
				</p>
				<div className="flex items-center justify-center gap-3">
					<button
						type="button"
						onClick={reset}
						className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
					>
						Try again
					</button>
					<Link
						href={STATIC_ROUTES.HOME}
						className="border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
					>
						Go home
					</Link>
				</div>
			</div>
		</div>
	);
}
