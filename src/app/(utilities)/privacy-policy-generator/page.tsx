import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy Policy Generator | Free Online Tool",
  description: "Use this free privacy policy generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/privacy-policy-generator",
  },
};

export default function PrivacyPolicyGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="privacy-policy-generator"
      title="Privacy Policy Generator"
      description="Use this free privacy policy generator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
