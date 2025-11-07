import { stackServerApp } from "../../stack";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  UserIcon,
  MailIcon,
  CalendarIcon,
  ShieldIcon,
  ZapIcon
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Account - Free Online Tool | Professional Results",
  description: "Professional account with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords: [
    "account",
    "account online",
    "free account",
    "account tool",
    "online account free",
    "professional account",
    "account online tool",
    "best account free",
    "account web app",
    "account utility",
    "online tool",
    "free utility",
    "web application"
  ].join(", "),

  openGraph: {
    title: "Account - Free Online Tool | Professional Results",
    description: "Professional account tool. Free online processing with high-quality results. No registration required, instant results.",
    url: "https://30tools.com/account",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/account.jpg",
        width: 1200,
        height: 630,
        alt: "Account - Free Online Tool | Professional Results"
      },
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Account - Free Online Tool | Professional Results",
    description: "Professional account tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/account.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/account"
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Account",
  "description": "Professional account tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/account",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
};

export default async function AccountPage() {
  const user = await stackServerApp.getUser();

  if (!user) {
    redirect("/");
  }

  const displayName = user.displayName || "User";
  const email = user.primaryEmail;
  const avatarUrl = user.profileImageUrl;
  const joinDate = new Date(user.createdAtMillis).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const initials = displayName
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

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
                    <p className="text-sm text-muted-foreground">Account Settings</p>
                  </div>
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline">Back to Tools</Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Profile Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
            <p className="text-muted-foreground">
              Manage your account information and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Your basic account information and profile details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={avatarUrl} alt={displayName} />
                    <AvatarFallback className="text-lg font-medium">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">{displayName}</h3>
                    <p className="text-sm text-muted-foreground">{email}</p>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Display Name</label>
                    <div className="p-3 bg-muted rounded-md">
                      <p className="text-sm">{displayName}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <div className="p-3 bg-muted rounded-md">
                      <p className="text-sm">{email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4 border-t">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Member since {joinDate}
                  </span>
                </div>

                <div className="flex space-x-2">
                  <Button>Edit Profile</Button>
                  <Button variant="outline">Change Password</Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Status */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-sm">
                    <ShieldIcon className="h-4 w-4 mr-2" />
                    Account Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email Verified</span>
                    <div className="w-2 h-2 bg-muted/500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2FA Enabled</span>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Premium</span>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Security Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <MailIcon className="h-4 w-4 mr-2" />
                    Email Preferences
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <ShieldIcon className="h-4 w-4 mr-2" />
                    Privacy Settings
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
