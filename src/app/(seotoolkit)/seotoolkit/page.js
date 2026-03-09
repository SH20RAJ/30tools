import SeoToolkit from "@/components/tools/seo/SeoToolkit";
import { generateToolJsonLd, generateToolMetadata } from "@/lib/seo-helper";

export const metadata = generateToolMetadata("seotoolkit", "seo", {
	title: "SEO Toolkit | Free All-in-One SEO Analysis Tool | 30Tools",
	description:
		"Run multiple SEO checks in one place, including audits, keyword research, backlinks, metadata, and performance analysis.",
	image: "/og-images/seotoolkit.jpg",
});

const jsonLd = generateToolJsonLd("seotoolkit", "seo", {
	name: "SEO Toolkit",
	description:
		"Run multiple SEO checks in one place, including audits, keyword research, backlinks, metadata, and performance analysis.",
});

export default function SeoToolkitPage() {
	return <SeoToolkit />;
}
