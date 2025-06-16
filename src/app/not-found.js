import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeIcon, SearchIcon, ArrowRightIcon } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center space-y-8">
        {/* 404 Header */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            But don't worry, we have plenty of useful tools to explore!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <HomeIcon className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link href="/search">
              <SearchIcon className="w-4 h-4 mr-2" />
              Search Tools
            </Link>
          </Button>
        </div>

        {/* Popular Tools */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Popular Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/color-picker" className="block">
              <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base group-hover:text-primary transition-colors">Color Picker</CardTitle>
                  <CardDescription className="text-sm group-hover:text-foreground transition-colors">
                    Pick and convert colors
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="w-full flex items-center justify-between p-2 rounded-md bg-transparent group-hover:bg-primary/10 transition-colors">
                    <span className="text-sm">Try it</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/password-generator" className="block">
              <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base group-hover:text-primary transition-colors">Password Generator</CardTitle>
                  <CardDescription className="text-sm group-hover:text-foreground transition-colors">
                    Generate secure passwords
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="w-full flex items-center justify-between p-2 rounded-md bg-transparent group-hover:bg-primary/10 transition-colors">
                    <span className="text-sm">Try it</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/qr-code-generator" className="block">
              <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base group-hover:text-primary transition-colors">QR Code Generator</CardTitle>
                  <CardDescription className="text-sm group-hover:text-foreground transition-colors">
                    Create QR codes instantly
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="w-full flex items-center justify-between p-2 rounded-md bg-transparent group-hover:bg-primary/10 transition-colors">
                    <span className="text-sm">Try it</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/base64-tool" className="block">
              <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base group-hover:text-primary transition-colors">Base64 Encoder</CardTitle>
                  <CardDescription className="text-sm group-hover:text-foreground transition-colors">
                    Encode and decode Base64
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="w-full flex items-center justify-between p-2 rounded-md bg-transparent group-hover:bg-primary/10 transition-colors">
                    <span className="text-sm">Try it</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}