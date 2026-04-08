import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("what-is-my-screen-resolution", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="what-is-my-screen-resolution" />;
}