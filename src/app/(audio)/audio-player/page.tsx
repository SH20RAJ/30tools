import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Audio Player - Free Online Tool | 30Tools" },
  description: "Free online Audio Player. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Audio Player" />;
}
