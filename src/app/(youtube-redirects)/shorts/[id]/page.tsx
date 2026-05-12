import { redirect } from "next/navigation";

interface ShortsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ShortsRedirectPage({ params }: ShortsPageProps) {
  const { id } = await params;
  
  const youtubeUrl = `https://www.youtube.com/shorts/${id}`;
  
  // Redirect to the 30tools youtube downloader with the URL as a query parameter
  redirect(`/youtube-downloader?url=${encodeURIComponent(youtubeUrl)}`);
}
