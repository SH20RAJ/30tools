
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact Us | 30Tools" },
  description: "Contact the 30Tools team for support, feedback, or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Have questions or suggestions? We'd love to hear from you.
        <br />
        Email us at: support@30tools.com
      </p>
    </div>
  );
}
