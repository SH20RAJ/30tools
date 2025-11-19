import UtilityToolsNavbar from "@/components/navigation/UtilityToolsNavbar";
import UtilityToolsFooter from "@/components/footers/UtilityToolsFooter";

export const metadata = {
  title: "Utility Tools - Free Online Utilities | 30tools",
  description:
    "Essential utility tools for unit conversion, file compression, and URL shortening. Free online productivity utilities.",
  keywords:
    "utility tools, unit converter, zip creator, url shortener, free utility tools online",
  openGraph: {
    title: "Utility Tools - Free Online Utilities",
    description:
      "Essential utility tools for unit conversion, file compression, and URL shortening.",
    url: "https://30tools.com/utility-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/utility-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Utility Tools",
      },
    ],
    type: "website",
  },
};

export default function UtilityToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <UtilityToolsNavbar />
      <main className="flex-1">{children}</main>
      <UtilityToolsFooter />
    </div>
  );
}
