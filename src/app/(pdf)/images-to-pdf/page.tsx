import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "Images To Pdf - Free Online Tool | 30Tools" },
  description: "Free online Images To Pdf. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="Images To Pdf" />;
}
