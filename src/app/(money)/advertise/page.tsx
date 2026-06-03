import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Advertise on 30tools - Sponsor Tools and Categories",
	description: "Sponsor a 30tools category, tool page, newsletter placement, or contextual sponsored slot for software, education, design, and developer audiences.",
	alternates: { canonical: "https://30tools.com/advertise" },
};

const placements = [
	["Small Placement", "Rs 999/month", "Contextual placement on a safe utility page."],
	["Category Sponsorship", "Rs 2,999/month", "Sponsor a cluster such as student calculators, QR tools, or API key testers."],
	["Exclusive Placement", "Rs 9,999/month", "Limited category exclusivity for relevant, non-spammy offers."],
];

export default function AdvertisePage() {
	return (
		<main className="container mx-auto max-w-5xl px-4 py-16 space-y-12">
			<section className="max-w-3xl space-y-5">
				<h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Advertise on 30tools</h1>
				<p className="text-lg leading-relaxed text-muted-foreground">
					Sponsor a category, tool, or newsletter placement without popups, deceptive buttons, or interruptive ads.
				</p>
				<Button asChild><Link href="/contact">Ask About Sponsorship</Link></Button>
			</section>

			<section className="grid gap-4 md:grid-cols-3">
				{placements.map(([name, price, description]) => (
					<div key={name} className="rounded-md border border-border/60 bg-card/40 p-5">
						<h2 className="text-xl font-bold">{name}</h2>
						<p className="mt-2 text-2xl font-extrabold">{price}</p>
						<p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
					</div>
				))}
			</section>
		</main>
	);
}
