
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | 30Tools",
  description: "Read our Terms of Service to understand the rules and regulations for using 30Tools.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl prose dark:prose-invert">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
      <p className="lead text-xl text-muted-foreground text-center mb-12">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="space-y-6">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using 30Tools, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on 30Tools' website for personal, non-commercial transitory viewing only.
        </p>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on 30Tools' website are provided on an 'as is' basis. 30Tools makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        
        <h2>4. Limitations</h2>
        <p>
           In no event shall 30Tools or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 30Tools' website.
        </p>

        <h2>5. Revisions and Errata</h2>
        <p>
          The materials appearing on 30Tools' website could include technical, typographical, or photographic errors. 30Tools does not warrant that any of the materials on its website are accurate, complete, or current.
        </p>
      </section>
    </div>
  );
}
