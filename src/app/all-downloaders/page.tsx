import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "All Downloaders - Free Online Tool | 30Tools" },
  description: "Free online All Downloaders. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="All Downloaders" />;
}
