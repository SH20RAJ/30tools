import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Video Watermark Remover - Free Online Tool | 30Tools" },
  description: "Free online Video Watermark Remover. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Video Watermark Remover" />;
}
