import type { Metadata } from "next";
import SeoHubPage from "@/components/seo/SeoHubPage";

export const metadata: Metadata = {
	title: "Small Business Tools - QR, SEO and Website Utilities | 30tools",
	description: "Free small business tools for QR menus, Google Form QR codes, WiFi QR codes, UPI payment QR codes, Open Graph previews, and meta descriptions.",
	alternates: { canonical: "https://30tools.com/small-business-tools" },
};

export default function SmallBusinessToolsHub() {
	return (
		<SeoHubPage
			title="Small Business Tools"
			description="Low-friction tools for restaurants, shops, service businesses, and local websites: QR codes, SEO previews, metadata checks, and practical website fixes."
			route="/small-business-tools"
			categoryNames={["Small Business QR Tools", "SEO Tools"]}
			guideTitle="Small Business Growth Stack"
			guidePoints={[
				"Use QR pages for offline-to-online actions like menus, payments, forms, and WiFi.",
				"Use SEO preview tools before sharing landing pages or publishing local service pages.",
				"Keep CTAs tasteful: services links belong on SEO and business pages, not every utility.",
				"Build useful pages around specific customer tasks instead of generic doorway pages.",
			]}
			faqs={[
				{ question: "Which tools are best for restaurants?", answer: "Start with QR Code for Restaurant Menu, QR Code for WiFi, and Open Graph Preview Checker for menu page sharing." },
				{ question: "Can these pages make money without spam?", answer: "Yes. Use safe ads, contextual Pro upsells, and service CTAs only where they match the task." },
				{ question: "Can I sponsor a tool or category?", answer: "Yes. The Advertise page describes category sponsorship and sponsored placements." },
			]}
		/>
	);
}
