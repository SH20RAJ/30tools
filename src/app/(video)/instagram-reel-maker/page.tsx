import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Instagram Reel Maker - Free Online Tool | 30Tools" },
  description: "Free online Instagram Reel Maker. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Instagram Reel Maker" />;
}
