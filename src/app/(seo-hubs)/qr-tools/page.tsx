import type { Metadata } from "next";
import SeoHubPage from "@/components/seo/SeoHubPage";

export const metadata: Metadata = {
	title: "QR Tools - Restaurant Menu, Google Form, WiFi and UPI QR | 30tools",
	description: "Create QR codes for restaurant menus, Google Forms, WiFi passwords, UPI payments, business cards, and small business workflows.",
	alternates: { canonical: "https://30tools.com/qr-tools" },
};

export default function QrToolsHub() {
	return (
		<SeoHubPage
			title="QR Tools"
			description="QR pages grouped by actual use case: menus, forms, WiFi, UPI payments, and business cards. Clean tools for small businesses and everyday sharing."
			route="/qr-tools"
			categoryNames={["Small Business QR Tools"]}
			guideTitle="QR Code Quality Checklist"
			guidePoints={[
				"Use a mobile-friendly destination page before printing any QR code.",
				"Keep high contrast between foreground and background colors.",
				"Print large enough for the scan distance and test from multiple phones.",
				"Use a guest network or public landing page for sensitive QR placements.",
			]}
			faqs={[
				{ question: "Can I use QR tools for a restaurant?", answer: "Yes. The restaurant menu page is built for menu URLs, table tents, and cafe counter displays." },
				{ question: "Do QR codes expire?", answer: "The code itself does not expire, but the destination URL can change or stop working." },
				{ question: "Can I get a branded QR menu site?", answer: "Yes. The services page covers restaurant QR menu websites and small business landing pages." },
			]}
		/>
	);
}
