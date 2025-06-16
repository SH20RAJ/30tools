import PasswordCheckerTool from '@/components/tools/security/PasswordCheckerTool';

export const metadata = {
  title: "Password Strength Checker - Free Online Security Tool | 30tools",
  description: "Check password strength, get security tips, and generate secure passwords. Free online password analyzer with crack time estimation.",
  keywords: "password strength checker, password security, secure password generator, password analyzer, cybersecurity tools",
  openGraph: {
    title: "Password Strength Checker - Free Security Tool",
    description: "Check password strength and generate secure passwords with our free online tool.",
    url: "https://30tools.com/password-strength-checker",
    images: [
      {
        url: "/og-images/password-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Password Strength Checker Tool"
      }
    ],
  },
};

export default function PasswordCheckerPage() {
  return <PasswordCheckerTool />;
}
