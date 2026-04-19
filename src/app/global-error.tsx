"use client";

import Link from "next/link";

export default function GlobalError() {
	return (
		<html lang="en">
			<body>
				<main className="min-h-screen flex items-center justify-center px-4 py-20 bg-background text-foreground">
					<section className="max-w-xl w-full text-center border border-border bg-card p-8 shadow-sm">
						<h1 className="text-2xl font-bold mb-3">Application error</h1>
						<p className="text-muted-foreground mb-6">
							A client-side exception occurred while loading 30tools. Please
							refresh the page or return to the homepage.
						</p>
						<div className="flex items-center justify-center">
							<Link
								href="/"
								className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
							>
								Return home
							</Link>
						</div>
					</section>
				</main>
			</body>
		</html>
	);
}
