import { redirect } from 'next/navigation';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Free Online Tools';
  
  const externalApiUrl = `https://dynamic-og-image-generator.vercel.app/api/generate?title=${encodeURIComponent(title)}&author=30tools&websiteUrl=30tools.com&theme=dark`;
  
  redirect(externalApiUrl);
}
