import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftIcon } from 'lucide-react';

export const metadata = {
  title: "Terms of Service - 30tools.com",
  description: "Terms of Service for using 30tools.com free online tools. Learn about our usage policies, limitations, and user responsibilities.",
  robots: { index: true, follow: true }
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold">Terms of Service</h1>
            <Badge variant="secondary">Updated Dec 2025</Badge>
          </div>
          <p className="text-muted-foreground">Effective Date: December 14, 2025</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using 30tools.com, you accept and agree to be bound by the terms and provision of this agreement.
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="mb-4">
              30tools.com provides free online tools for file processing including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Image compression and optimization</li>
              <li>PDF manipulation and conversion</li>
              <li>Video and audio processing</li>
              <li>Text formatting and analysis tools</li>
              <li>File format conversion utilities</li>
            </ul>
            <p className="mb-4">
              All processing is performed client-side in your browser for maximum privacy and security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Acceptable Use Policy</h2>
            <h3 className="text-xl font-medium mb-2">Permitted Uses</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal and commercial file processing</li>
              <li>Educational and research purposes</li>
              <li>Content creation and optimization</li>
              <li>Web development and design projects</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Prohibited Uses</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Processing illegal, copyrighted, or harmful content</li>
              <li>Attempting to reverse engineer or hack our services</li>
              <li>Using automated tools to abuse our services</li>
              <li>Distributing malware or malicious files</li>
              <li>Violating intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Service Limitations</h2>
            <h3 className="text-xl font-medium mb-2">File Size Limits</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Maximum file size: 50MB per file</li>
              <li>Batch processing: Up to 20 files simultaneously</li>
              <li>Processing time may vary based on file size and complexity</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Usage Limits</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Fair use policy applies to prevent abuse</li>
              <li>No registration required for basic usage</li>
              <li>Rate limiting may apply for excessive usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              The 30tools.com website, including its design, code, and content, is protected by copyright and other intellectual property laws.
              Users retain full ownership of their uploaded files and processed results.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>We do not claim ownership of your files</li>
              <li>You retain all rights to your processed content</li>
              <li>Our tools and website design are our intellectual property</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Privacy and Data Protection</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we handle your data:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Files are processed locally in your browser</li>
              <li>No files are stored on our servers</li>
              <li>Anonymous analytics for service improvement</li>
              <li>Compliance with GDPR and CCPA regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
            <p className="mb-4">
              30tools.com is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property</li>
              <li>Continuous, uninterrupted, or error-free service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall 30tools.com or its suppliers be liable for any damages including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Loss of data or files</li>
              <li>Business interruption</li>
              <li>Loss of profits or revenue</li>
              <li>Indirect, incidental, or consequential damages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Service Availability</h2>
            <p className="mb-4">
              We strive to maintain high service availability but cannot guarantee 100% uptime:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Scheduled maintenance may cause temporary downtime</li>
              <li>Third-party service dependencies may affect availability</li>
              <li>We reserve the right to modify or discontinue services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Modifications to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Material changes will be communicated through:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Website notifications</li>
              <li>Updated effective dates</li>
              <li>Email notifications for significant changes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These terms shall be governed by and construed in accordance with the laws of the United States,
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>Email:</strong> legal@30tools.com</p>
              <p><strong>Website:</strong> https://30tools.com</p>
              <p><strong>Response Time:</strong> Within 48 hours</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
