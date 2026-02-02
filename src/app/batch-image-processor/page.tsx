import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Batch Image Processor - Free Online Tool | 30Tools" },
  description: "Free online Batch Image Processor. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Batch Image Processor" />;
}
