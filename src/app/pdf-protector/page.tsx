
import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: { absolute: "PDF Protector - Free Online Tool | 30Tools" },
  description: "Free online PDF Protector. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return <ComingSoon toolName="PDF Protector" />;
}
