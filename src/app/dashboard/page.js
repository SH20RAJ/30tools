import { stackServerApp } from "../../stack";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  UserIcon, 
  CrownIcon, 
  HistoryIcon, 
  HeartIcon, 
  SettingsIcon,
  TrendingUpIcon,
  ZapIcon
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dashboard - Free Online Tool | Professional Results",
  description: "Professional dashboard with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords: [
    "dashboard",
    "dashboard online",
    "free dashboard",
    "dashboard tool",
    "online dashboard free",
    "professional dashboard",
    "dashboard online tool",
    "best dashboard free",
    "dashboard web app",
    "dashboard utility",
    "online tool",
    "free utility",
    "web application"
  ].join(", "),
,
  openGraph: {
    title: "Dashboard - Free Online Tool | Professional Results",
    description: "Professional dashboard tool. Free online processing with high-quality results. No registration required, instant results.",
    url: "https://30tools.com/dashboard",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Dashboard - Free Online Tool | Professional Results"
      }
    ],
    type: "website"
  }
,
  twitter: {
    card: "summary_large_image",
    title: "Dashboard - Free Online Tool | Professional Results",
    description: "Professional dashboard tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/dashboard.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/dashboard"
  }
};

export default async function DashboardPage() {
  const user = await stackServerApp.getUser();
  
  if (!user) {
    redirect("/");
  }

  const displayName = user.displayName || user.primaryEmail || "User";
  const joinDate = new Date(user.createdAtMillis).toLocaleDateString();

  return (
        <>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
                  <p className="text-sm text-muted-foreground">Dashboard</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost">Back to Tools</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {displayName}!</h1>
          <p className="text-muted-foreground">
            Member since {joinDate} • Manage your tools and preferences
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tools Used</CardTitle>
              <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +3 from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Favorites</CardTitle>
              <HeartIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Bookmarked tools
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Premium Status</CardTitle>
              <CrownIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Free</div>
              <p className="text-xs text-muted-foreground">
                <Link href="#upgrade" className="text-primary hover:underline">
                  Upgrade to Pro
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HistoryIcon className="h-5 w-5 mr-2" />
                Recently Used Tools
              </CardTitle>
              <CardDescription>
                Quick access to your most used tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    📷
                  </div>
                  <div>
                    <p className="font-medium">Image Compressor</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <Link href="/image-compressor">
                  <Button variant="ghost" size="sm">Use</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    📄
                  </div>
                  <div>
                    <p className="font-medium">PDF Merger</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <Link href="/pdf-merger">
                  <Button variant="ghost" size="sm">Use</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    🎨
                  </div>
                  <div>
                    <p className="font-medium">Color Picker</p>
                    <p className="text-sm text-muted-foreground">2 days ago</p>
                  </div>
                </div>
                <Link href="/color-picker">
                  <Button variant="ghost" size="sm">Use</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <SettingsIcon className="h-5 w-5 mr-2" />
                Account Settings
              </CardTitle>
              <CardDescription>
                Manage your account and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/account">
                <Button variant="outline" className="w-full justify-start">
                  <UserIcon className="h-4 w-4 mr-2" />
                  Profile Settings
                </Button>
              </Link>

              <Link href="/account/preferences">
                <Button variant="outline" className="w-full justify-start">
                  <SettingsIcon className="h-4 w-4 mr-2" />
                  Preferences
                </Button>
              </Link>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Premium Features</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Unlimited usage</span>
                    <Badge variant="outline">Pro</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Priority support</span>
                    <Badge variant="outline">Pro</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Advanced features</span>
                    <Badge variant="outline">Pro</Badge>
                  </div>
                </div>
                <Button className="w-full mt-4" id="upgrade">
                  <CrownIcon className="h-4 w-4 mr-2" />
                  Upgrade to Pro
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
