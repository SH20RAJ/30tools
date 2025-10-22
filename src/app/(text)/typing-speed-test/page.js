import TypingSpeedTestTool from '@/components/tools/text/TypingSpeedTestTool';

export const metadata = {
  title: "Free Typing Speed Test Online - Check Your WPM & Accuracy | 30tools",
  description: "Test your typing speed with our free online WPM test. Get instant results, track accuracy, and improve your keyboard skills. No registration required - start typing test now!",
  keywords: "typing speed test, typing test online free, wpm test, typing speed checker, keyboard typing speed test, typing test 1 minute free, words per minute test, typing accuracy test, free typing test no registration, online typing speed test",
  openGraph: {
    title: "Free Typing Speed Test Online - Check Your WPM & Accuracy | 30tools",
    description: "Test your typing speed with our free online WPM test. Get instant results, track accuracy, and improve your keyboard skills. No registration required!",
    url: "https://30tools.com/typing-speed-test",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/typing-speed-test.jpg",
        width: 1200,
        height: 630,
        alt: "Free Typing Speed Test Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Typing Speed Test Online - Check Your WPM & Accuracy | 30tools",
    description: "Test your typing speed with our free online WPM test. Get instant results, track accuracy, and improve your keyboard skills.",
    images: ["/og-images/typing-speed-test.jpg"],
    creator: '@30tools'
  },
  alternates: {
    canonical: "https://30tools.com/typing-speed-test"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function TypingSpeedTestPage() {
  return <TypingSpeedTestTool />;
}
