
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 30Tools",
  description: "Learn how we collect, use, and protect your data at 30Tools.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl prose dark:prose-invert">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="lead text-xl text-muted-foreground text-center mb-12">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="space-y-6">
        <h2>1. Information We Collect</h2>
        <p>
          We prioritize your privacy. Most of our tools process data client-side (in your browser), meaning your files and data are not uploaded to our servers unless explicitly stated otherwise for specific tool functionality.
        </p>

        <h2>2. Log Data</h2>
        <p>
          Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").
        </p>

        <h2>3. Cookies</h2>
        <p>
          Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
        </p>
        
        <h2>4. Service Providers</h2>
        <p>
           We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
        </p>

        <h2>5. Security</h2>
        <p>
          The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure.
        </p>
      </section>
    </div>
  );
}
