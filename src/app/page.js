import { redirect } from 'next/navigation';

export const metadata = {
  title: "30tools - 135+ Free Online Tools | Image, PDF, Video, SEO & Developer Tools",
  description: "Professional online toolkit with 135+ free tools for image compression, PDF editing, video conversion, SEO analysis, developer utilities & more. No registration required.",
  alternates: {
    canonical: "https://30tools.com"
  }
};

export default function HomePage() {
  // Redirect to landing page for now, but this ensures proper metadata and canonical tag
  redirect('/landing');
}