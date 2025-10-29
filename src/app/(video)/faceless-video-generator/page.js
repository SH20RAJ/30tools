import FacelessVideoGeneratorTool from '@/components/tools/video/FacelessVideoGeneratorTool'

export const metadata = {
  title: 'Faceless Video Generator - Create Viral YouTube Videos',
  description: 'Generate faceless YouTube videos for monetization. AI-powered content creation for motivation, education, and lifestyle videos. No camera required.',
  keywords: 'faceless video generator, youtube automation, faceless youtube channel, ai video creator, youtube monetization, viral video maker',
  openGraph: {
    title: 'Faceless Video Generator - AI-Powered YouTube Content',
    description: 'Create viral faceless YouTube videos with AI. Perfect for monetization, motivation, and educational content. No camera or editing skills required.',
    type: 'website',
    url: 'https://30tools.com/faceless-video-generator',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faceless Video Generator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faceless Video Generator - AI-Powered YouTube Content',
    description: 'Create viral faceless YouTube videos with AI. Perfect for monetization and viral content.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/faceless-video-generator'
  }
}

export default function FacelessVideoGeneratorPage() {
  return <FacelessVideoGeneratorTool />
}
