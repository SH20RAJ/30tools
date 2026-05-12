import { redirect } from "next/navigation";

interface RedirectPageProps {
  params: Promise<{ id: string }>;
}

export default async function VRedirectPage({ params }: RedirectPageProps) {
  const { id } = await params;
  const youtubeUrl = `https://www.youtube.com/v/${id}`;
  redirect(`/youtube-downloader?url=${encodeURIComponent(youtubeUrl)}`);
}
