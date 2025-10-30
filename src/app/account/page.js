// Stack Auth removed to reduce bundle size
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ZapIcon, ArrowLeftIcon } from 'lucide-react';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <ZapIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">30tools</h1>
                  <p className="text-sm text-muted-foreground">Account</p>
                </div>
              </Link>
            </div>

            <Link href="/">
              <Button variant="outline">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to Tools
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Account Features Simplified</CardTitle>
            <CardDescription>
              Authentication features have been removed to optimize performance and reduce bundle size.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              All tools are now available without registration. Enjoy faster loading times and better performance!
            </p>
            <Link href="/">
              <Button>Explore Tools</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}