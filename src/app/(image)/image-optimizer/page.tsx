import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Image Optimizer - Free Online Tool | 30Tools" },
  description: "Free online Image Optimizer. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Image Optimizer" />;
}
