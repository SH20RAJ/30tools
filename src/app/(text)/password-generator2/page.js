import PasswordGeneratorTool from '@/components/tools/security/PasswordGeneratorTool';

export const metadata = {
  title: "Password Generator - Generate Secure Random Passwords",
  description: "Generate strong, secure passwords with customizable length and character sets. Includes password strength analysis and security tips. Free online password generator.",
  keywords: "password generator, secure password generator, random password generator, strong password creator, password strength checker",
  openGraph: {
    title: "Password Generator - Generate Secure Random Passwords",
    description: "Generate strong, secure passwords with customizable options and strength analysis.",
    url: "https://30tools.com/password-generator",
    images: [
      {
        url: "/og-images/password-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Password Generator Tool"
      }
    ],
  },
};

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorTool />;
}
