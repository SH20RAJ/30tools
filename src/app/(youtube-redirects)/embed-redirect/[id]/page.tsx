import { redirect } from "next/navigation";

interface RedirectPageProps {
  params: Promise<{ id: string }>;
}

export default async function EmbedRedirectPage({ params }: RedirectPageProps) {
  const { id } = await params;
  const youtubeUrl = `https://www.youtube.com/embed/${id}`;
  redirect(`/youtube-downloader?url=${encodeURIComponent(youtubeUrl)}`);
}
