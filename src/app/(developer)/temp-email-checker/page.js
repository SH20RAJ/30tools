import TempEmailCheckerTool from '@/components/tools/developer/TempEmailCheckerTool';

export const metadata = {
  title: "Temporary Email Checker - Detect Disposable Email Addresses | 30tools",
  description: "Free temporary email checker to detect disposable and temporary email addresses. Validate emails against comprehensive blocklist and allowlist databases.",
  keywords: "temporary email checker, disposable email detector, temp mail checker, email validation, fake email detector, throwaway email checker",
  longTailKeywords: [
    "temporary email address checker online",
    "disposable email domain detector",
    "temp mail validation tool free",
    "fake email address checker",
    "throwaway email detector online",
    "email domain validation tool"
  ],
  primaryKeyword: "temporary email checker",
  openGraph: {
    title: "Temporary Email Checker - Detect Disposable Email Addresses",
    description: "Free temporary email checker to detect disposable and temporary email addresses. Validate emails against comprehensive databases.",
    url: "https://30tools.com/temp-email-checker",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/temp-email-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Free Temporary Email Checker Tool"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Temporary Email Checker - Detect Disposable Email Addresses",
    description: "Free temporary email checker to detect disposable and temporary email addresses.",
    images: ["/og-images/temp-email-checker.jpg"]
  }
};

export default function TempEmailCheckerPage() {
  return <TempEmailCheckerTool />;
}