import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Podcast Video Creator - Free Online Tool | 30Tools" },
  description: "Free online Podcast Video Creator. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Podcast Video Creator" />;
}
