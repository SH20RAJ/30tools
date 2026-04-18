"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProgressiveToolNotice({ toolId }: { toolId: string }) {
	const title = toolId
		.split("-")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");

	return (
		<Card className="border-dashed">
			<CardHeader>
				<CardTitle className="text-xl">{title}</CardTitle>
				<CardDescription>
					This route is wired into the unified tool shell. A dedicated interactive panel for
					edge cases ships incrementally — your HTML, JSON, and media still never leave the
					browser when using our converter family.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-wrap gap-3 text-sm">
				<Link className="text-primary underline-offset-4 hover:underline" href="/search">
					Browse all tools
				</Link>
				<span className="text-muted-foreground">·</span>
				<a
					className="text-primary underline-offset-4 hover:underline"
					href="https://github.com/sh20raj/30tools/issues"
					target="_blank"
					rel="noreferrer"
				>
					Request coverage
				</a>
			</CardContent>
		</Card>
	);
}
