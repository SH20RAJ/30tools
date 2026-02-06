import { Metadata } from 'next';
import toolsData from '@/constants/tools.json';

type ToolCategory = keyof typeof toolsData.categories;

interface Tool {
  id: string;
  name: string;
  description: string;
  route: string;
  category: string;
  faqs?: { question: string; answer: string }[];
}

export function generateToolMetadata(toolId: string, category: ToolCategory): Metadata {
  const categoryData = toolsData.categories[category];
  const tool = categoryData?.tools.find((t: Tool) => t.id === toolId);

  if (!tool) {
    return {
      title: 'Tool Not Found | 30Tools',
      description: 'The requested tool could not be found.',
    };
  }

  const title = `${tool.name} - Free Online Tool | 30Tools`;
  const description = tool.description;
  const url = `https://30tools.com${tool.route}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: '30Tools',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@30tools',
    },
  };
}

export function getToolData(toolId: string, category: ToolCategory) {
    const categoryData = toolsData.categories[category];
    return categoryData?.tools.find((t: Tool) => t.id === toolId);
}
