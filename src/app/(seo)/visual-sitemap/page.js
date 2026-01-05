import VisualSitemapTool from "@/components/tools/seo/VisualSitemapTool";
import toolsData from "@/constants/tools.json";

export const metadata = {
    title: "Visual Sitemap Generator | Visualize XML Sitemaps",
    description: "Generate a visual tree map of your website from your XML sitemap. Analyze your site structure, hierarchy, and navigation flow instantly.",
};

export default function VisualSitemapPage() {
    const tool = toolsData.categories.seo.tools.find(
        (t) => t.id === "visual-sitemap"
    );

    return (
        <div className="container mx-auto px-4 py-12">
            <VisualSitemapTool />

            <div className="mt-16 max-w-4xl mx-auto prose dark:prose-invert">
                <h2>About Visual Sitemap Generator</h2>
                <p>
                    The Visual Sitemap Generator helps SEO professionals, web developers, and site owners visualize the structure of their website. By parsing your standard XML sitemap, we create an interactive, collapsible tree diagram that reveals your sites hierarchy.
                </p>

                <h3>Why Visualize Your Sitemap?</h3>
                <ul>
                    <li><strong>Identify Structure Issues:</strong> Quickly spot deep nesting or orphaned sections.</li>
                    <li><strong>Audit Site Architecture:</strong> Ensure your content acts as a logical silo structure.</li>
                    <li><strong>Client Presentations:</strong> Show clients a clear "birds-eye view" of their website.</li>
                </ul>

                <h3>How to Use</h3>
                <ol>
                    <li>Enter your sitemap URL (e.g., <code>https://example.com/sitemap.xml</code>).</li>
                    <li>Click <strong>Visualize</strong>.</li>
                    <li>Explore the directory tree by expanding/collapsing folders.</li>
                </ol>
            </div>
        </div>
    );
}
