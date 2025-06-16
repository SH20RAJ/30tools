import YouTubeTagGeneratorClient from './YouTubeTagGeneratorClient';

export const metadata = {
  title: "YouTube Tag Generator - Generate SEO Tags for YouTube Videos | 30tools",
  description: "Generate optimized YouTube tags to improve your video's discoverability. Get relevant, trending tags to boost your YouTube SEO and increase views.",
  keywords: "youtube tags, youtube tag generator, youtube seo, video tags, youtube optimization, video seo tags, youtube keywords",
  openGraph: {
    title: "YouTube Tag Generator - Generate SEO Tags for YouTube Videos",
    description: "Generate optimized YouTube tags to improve your video's discoverability. Get relevant, trending tags to boost your YouTube SEO.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Tag Generator - Generate SEO Tags for YouTube Videos",
    description: "Generate optimized YouTube tags to improve your video's discoverability. Get relevant, trending tags to boost your YouTube SEO.",
  }
};

export default function YouTubeTagGeneratorPage() {
  return <YouTubeTagGeneratorClient />;
}
