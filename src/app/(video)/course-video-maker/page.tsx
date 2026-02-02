import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Course Video Maker - Free Online Tool | 30Tools" },
  description: "Free online Course Video Maker. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Course Video Maker" />;
}
