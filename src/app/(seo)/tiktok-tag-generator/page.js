import TikTokTagGeneratorClient from './TikTokTagGeneratorClient';

export const metadata = {
  title: "TikTok Tag Generator - Generate Hashtags for TikTok Videos",
  description: "Generate trending TikTok hashtags to boost your video's reach and engagement. Get relevant hashtags to improve your TikTok content discoverability.",
  keywords: "tiktok hashtags, tiktok tag generator, tiktok trends, viral hashtags, tiktok seo, hashtag generator, tiktok keywords",
  openGraph: {
    title: "TikTok Tag Generator - Generate Hashtags for TikTok Videos",
    description: "Generate trending TikTok hashtags to boost your video's reach and engagement. Get relevant hashtags to improve discoverability.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Tag Generator - Generate Hashtags for TikTok Videos",
    description: "Generate trending TikTok hashtags to boost your video's reach and engagement. Get relevant hashtags to improve discoverability.",
  }
};

export default function TikTokTagGeneratorPage() {
  return <TikTokTagGeneratorClient />;
}
