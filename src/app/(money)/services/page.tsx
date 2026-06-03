import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Hire 30tools - SEO Fixes, Landing Pages and Custom Tools",
	description: "Hire the team behind 30tools for SEO fixes, landing pages, restaurant QR menu websites, speed optimization, custom tools, and API integrations.",
	alternates: { canonical: "https://30tools.com/services" },
};

const services = [
	"Technical SEO fixes",
	"Programmatic landing pages",
	"Restaurant QR menu websites",
	"Core Web Vitals and image optimization",
	"Custom calculators and internal tools",
	"API integrations and automations",
];

export default function ServicesPage() {
	return (
		<main className="container mx-auto max-w-5xl px-4 py-16 space-y-12">
			<section className="max-w-3xl space-y-5">
				<h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Hire 30tools</h1>
				<p className="text-lg leading-relaxed text-muted-foreground">
					Need a clean SEO tool, small business landing page, speed fix, or API integration? We build practical web utilities and growth pages.
				</p>
				<Button asChild><Link href="/contact">Start a Project</Link></Button>
			</section>

			<section className="grid gap-4 md:grid-cols-2">
				{services.map((service) => (
					<div key={service} className="rounded-md border border-border/60 bg-card/40 p-5">
						<h2 className="text-xl font-bold">{service}</h2>
						<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
							Scoped for fast delivery, measurable outcomes, and clean implementation inside your existing stack.
						</p>
					</div>
				))}
			</section>
		</main>
	);
}
