import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "AI Video Summarizer - Free Online Tool | 30Tools" },
  description: "Free online AI Video Summarizer. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="AI Video Summarizer" />;
}
