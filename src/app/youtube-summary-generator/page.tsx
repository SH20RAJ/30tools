import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Youtube Summary Generator - Free Online Tool | 30Tools" },
  description: "Free online Youtube Summary Generator. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Youtube Summary Generator" />;
}
