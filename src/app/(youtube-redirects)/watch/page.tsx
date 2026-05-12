import { redirect } from "next/navigation";

interface WatchPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function WatchRedirectPage({ searchParams }: WatchPageProps) {
  const params = await searchParams;
  
  // Reconstruct the YouTube URL
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
    
  const youtubeUrl = `https://www.youtube.com/watch${queryString ? `?${queryString}` : ""}`;
  
  // Redirect to the 30tools youtube downloader with the URL as a query parameter
  redirect(`/youtube-downloader?url=${encodeURIComponent(youtubeUrl)}`);
}
