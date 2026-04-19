import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function VariantLinks({ extraSlugs = [], toolName = "this tool" }) {
    if (!extraSlugs || extraSlugs.length === 0) return null;

    // Pick up to 15 random slugs (or top 15) to prevent DOM bloat while passing enough pagerank
    // We deterministically sort them or take a slice so hydration doesn't break if SSR vs CSR mismatch (though this is a Server component)
    const displaySlugs = extraSlugs.slice(0, 15);

    return (
        <section className="py-12 border-t border-border/40 mt-16 bg-card/20 rounded-xl px-6 md:px-12">
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                    Popular searches for {toolName}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Explore related variations and dedicated workflows for this utility:
                </p>
                
                <div className="flex flex-wrap gap-3">
                    {displaySlugs.map((slug) => {
                        const formattedName = slug
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (char) => char.toUpperCase());

                        return (
                            <Link
                                key={slug}
                                href={`/${slug}`}
                                className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full bg-secondary/30 hover:bg-primary hover:text-primary-foreground border border-border/50 hover:border-transparent hover:shadow-md"
                            >
                                {formattedName}
                                <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
