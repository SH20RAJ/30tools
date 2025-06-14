import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeftIcon, MailIcon, MessageCircleIcon, BugIcon } from 'lucide-react';

export const metadata = {
  title: "Contact Us - 30tools.com",
  description: "Get in touch with the 30tools.com team. Contact us for support, feedback, business inquiries, or technical issues.",
  robots: { index: true, follow: true }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            We would love to hear from you! Get in touch with our team for any questions, suggestions, or support needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-primary" />
                General Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For general questions, tool support, or user guidance
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> support@30tools.com</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
                <Badge variant="secondary">Most Popular</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BugIcon className="h-5 w-5 text-primary" />
                Technical Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Report bugs, technical problems, or performance issues
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> tech@30tools.com</p>
                <p><strong>Response Time:</strong> Within 12 hours</p>
                <Badge variant="outline">Priority Support</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircleIcon className="h-5 w-5 text-primary" />
                Feature Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Suggest new tools, features, or improvements
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> feedback@30tools.com</p>
                <p><strong>Response Time:</strong> Within 48 hours</p>
                <Badge variant="secondary">Community Driven</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-primary" />
                Business Inquiries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Partnerships, API access, or enterprise solutions
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> business@30tools.com</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
                <Badge variant="outline">Enterprise</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How do I report a bug?</h3>
                <p className="text-muted-foreground">
                  Email us at tech@30tools.com with details about the issue, including your browser, device, and steps to reproduce the problem.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I request a new tool?</h3>
                <p className="text-muted-foreground">
                  Absolutely! Send your suggestions to feedback@30tools.com. We regularly add new tools based on user requests.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Is there an API available?</h3>
                <p className="text-muted-foreground">
                  We&apos;re working on API access for developers. Contact business@30tools.com to join our early access program.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How can I support the project?</h3>
                <p className="text-muted-foreground">
                  Share 30tools.com with others, provide feedback, and consider whitelisting our ads to help keep the service free.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              30tools.com is built and maintained by a passionate team of developers who believe in making powerful tools 
              accessible to everyone. We&apos;re committed to privacy, performance, and user experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold">Fast Response</h3>
                <p className="text-sm text-muted-foreground">Quick replies to all inquiries</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold">Privacy Focused</h3>
                <p className="text-sm text-muted-foreground">Your data stays private</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-semibold">User Driven</h3>
                <p className="text-sm text-muted-foreground">Built based on your needs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
