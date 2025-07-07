import PasswordBreachCheckerTool from '@/components/tools/developer/PasswordBreachCheckerTool';

export const metadata = {
  title: "Password Breach Checker - Check if Your Email/Password is Compromised | 30tools",
  description: "Free password breach checker to see if your email or password has been compromised in data breaches. Check against billions of breached accounts instantly.",
  keywords: "password breach checker, email breach check, data breach checker, password security, compromised password, haveibeenpwned, security check",
  openGraph: {
    title: "Password Breach Checker - Check if Your Email/Password is Compromised",
    description: "Free tool to check if your email or password has been compromised in data breaches. Protect your online security.",
    url: "https://30tools.com/password-breach-checker",
    images: [
      {
        url: "/og-images/password-breach-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Password Breach Checker Tool"
      }
    ],
  },
};

export default function PasswordBreachCheckerPage() {
  return <PasswordBreachCheckerTool />;
}