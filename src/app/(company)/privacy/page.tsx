
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | 30Tools" },
  description: "Privacy policy and data handling practices for 30Tools.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: January 2026</p>
        <p>Your privacy is important to us.</p>
        <h2>1. Data Collection</h2>
        <p>We do not store your uploaded files. Processing happens in your browser where possible.</p>
        <h2>2. Cookies</h2>
        <p>We use cookies for analytics and site functionality.</p>
      </div>
    </div>
  );
}
