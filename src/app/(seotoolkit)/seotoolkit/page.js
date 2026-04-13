import SeoToolkit from "@/components/tools/seo/SeoToolkit";

export const metadata = {
	title: "Free SEO Toolkit Online - No Signup | 30tools",
	description: "All-in-one SEO audit and analysis tool. 27+ checks.",
	robots: { index: true, follow: true },
};

const _jsonLd = generateToolJsonLd("seotoolkit", "seo", {
	name: "SEO Toolkit",
	description:
		"Run multiple SEO checks in one place, including audits, keyword research, backlinks, metadata, and performance analysis.",
});

export default async function SeoToolkitPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	return <SeoToolkit />;
}
