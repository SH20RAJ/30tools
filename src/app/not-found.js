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
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Color Picker</CardTitle>
                <CardDescription className="text-sm">
                  Pick and convert colors
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link href="/color-picker">
                    Try it
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Password Generator</CardTitle>
                <CardDescription className="text-sm">
                  Generate secure passwords
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link href="/password-generator">
                    Try it
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">QR Code Generator</CardTitle>
                <CardDescription className="text-sm">
                  Create QR codes instantly
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link href="/qr-code-generator">
                    Try it
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Base64 Encoder</CardTitle>
                <CardDescription className="text-sm">
                  Encode and decode Base64
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link href="/base64-tool">
                    Try it
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}