
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us | 30Tools",
  description: "Get in touch with the 30Tools team. We'd love to hear your feedback, suggestions, or questions.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-xl text-muted-foreground text-center mb-12">
        Have questions, suggestions, or found a bug? We'd love to hear from you.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-muted-foreground">
            We are constantly working to improve 30Tools. If you have any feedback or feature requests, please drop us a message.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Email</h3>
              <a href="mailto:support@30tools.com" className="text-primary hover:underline">support@30tools.com</a>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
           <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <Textarea id="message" placeholder="How can we help?" rows={5} />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
