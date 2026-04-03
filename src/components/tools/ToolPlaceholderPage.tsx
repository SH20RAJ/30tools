import ToolLayout from "@/components/shared/ToolLayout";

interface ToolPlaceholderPageProps {
  toolId: string;
  title: string;
  description: string;
  categoryName: string;
  categorySlug: string;
}

export default function ToolPlaceholderPage({
  toolId,
  title,
  description,
  categoryName,
  categorySlug,
}: ToolPlaceholderPageProps) {
  return (
    <ToolLayout
      toolId={toolId}
      title={title}
      description={description}
      category={{ name: categoryName, slug: categorySlug }}
    >
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
        <p className="text-base text-muted-foreground">
          {description}
        </p>
        <p className="text-sm text-muted-foreground">
          This tool is now listed in our directory with SEO-ready metadata, alternate slugs,
          and sitemap coverage. Core interaction UI will be added in the next implementation pass.
        </p>
      </div>
    </ToolLayout>
  );
}
