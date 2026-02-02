import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Zoom Recorder - Free Online Tool | 30Tools" },
  description: "Free online Zoom Recorder. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Zoom Recorder" />;
}
