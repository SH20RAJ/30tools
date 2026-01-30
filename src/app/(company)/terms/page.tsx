
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | 30Tools" },
  description: "Terms of service and usage guidelines for 30Tools.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: January 2026</p>
        <p>Welcome to 30Tools. By using our website, you agree to these terms.</p>
        <h2>1. Usage</h2>
        <p>Our tools are free to use. Please do not abuse the API or service.</p>
        <h2>2. Disclaimer</h2>
        <p>The tools are provided "as is" without warranty of any kind.</p>
      </div>
    </div>
  );
}
