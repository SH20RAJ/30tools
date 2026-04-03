import toolsData from "@/constants/tools.json";
import ToolLayout from "@/components/shared/ToolLayout";
import ToolWorkbench from "@/components/tools/ToolWorkbench";

interface ToolPlaceholderPageProps {
  toolId: string;
  title: string;
  description: string;
  categoryName: string;
  categorySlug: string;
}

function getKeywords(toolId: string, title: string) {
  const allTools = Object.values(toolsData.categories).flatMap((category) =>
    (category.tools || []).map((tool) => tool),
  );

  const tool = allTools.find((item) => item.id === toolId);

  if (tool?.keywords?.length) {
    return tool.keywords;
  }

  return [
    `${title.toLowerCase()} free`,
    `${title.toLowerCase()} online`,
    `${title.toLowerCase()} tool`,
  ];
}

export default function ToolPlaceholderPage({
  toolId,
  title,
  description,
  categoryName,
  categorySlug,
}: ToolPlaceholderPageProps) {
  const keywords = getKeywords(toolId, title);

  return (
    <ToolLayout
      toolId={toolId}
      title={title}
      description={description}
      category={{ name: categoryName, slug: categorySlug }}
    >
      <ToolWorkbench
        toolId={toolId}
        title={title}
        description={description}
        keywords={keywords}
      />
    </ToolLayout>
  );
}
