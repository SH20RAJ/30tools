import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "send-http-request";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Send Http Request Online - No Signup | 30tools",
	description:
		"Use our free Send Http Request to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try send-http-request now!",
	keywords: ["send-http-request", "send", "http", "request"],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
