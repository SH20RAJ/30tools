import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Meme Video Generator - Free Online Tool | 30Tools" },
  description: "Free online Meme Video Generator. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Meme Video Generator" />;
}
