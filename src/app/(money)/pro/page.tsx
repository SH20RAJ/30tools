import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "30tools Pro - Batch Tools, No Ads and API Access",
	description: "30tools Pro is a planned upgrade for batch image compression, batch PDF tools, no ads, larger files, saved history, team features, and API access.",
	alternates: { canonical: "https://30tools.com/pro" },
};

const plans = [
	["Free", "$0", "Single-file tools, ads on safe pages, no signup required."],
	["Pro India", "Rs 99/month", "No ads, batch image tools, larger file support, and saved presets."],
	["Yearly", "Rs 499/year or $39/year", "Best for students, creators, and repeat utility users."],
	["Agency/API", "$29/month+", "API access, higher limits, and team workflows for businesses."],
];

export default function ProPage() {
	return (
		<main className="container mx-auto max-w-6xl px-4 py-16 space-y-12">
			<section className="max-w-3xl space-y-5">
				<p className="text-sm font-semibold uppercase tracking-wide text-primary">Coming Soon</p>
				<h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">30tools Pro</h1>
				<p className="text-lg leading-relaxed text-muted-foreground">
					Batch tools, no ads, larger file support, saved history, API access, and team features for people who use 30tools every week.
				</p>
				<div className="flex flex-wrap gap-3">
					<Button asChild><Link href="/contact">Join Waitlist</Link></Button>
					<Button asChild variant="outline"><Link href="/api">Explore API</Link></Button>
				</div>
			</section>

			<section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{plans.map(([name, price, description]) => (
					<div key={name} className="rounded-md border border-border/60 bg-card/40 p-5">
						<h2 className="text-xl font-bold">{name}</h2>
						<p className="mt-2 text-2xl font-extrabold">{price}</p>
						<p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
					</div>
				))}
			</section>

			<section className="grid gap-4 md:grid-cols-2">
				{[
					"No ads on Pro sessions",
					"Batch image compression",
					"Batch PDF workflows",
					"Larger file support",
					"Saved presets and history",
					"API access for teams",
				].map((item) => (
					<div key={item} className="flex gap-3 rounded-md border border-border/60 p-4">
						<CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
						<span>{item}</span>
					</div>
				))}
			</section>
		</main>
	);
}
