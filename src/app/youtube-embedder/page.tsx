import YouTubeEmbedGenerator from "@/components/tools/youtube/YouTubeEmbedGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Custom Player Embedder — 30tools",
  description:
    "Generate custom embed players for YouTube videos using Plyr, Video.js, FluidPlayer and MediaElement.js.",
};

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <YouTubeEmbedGenerator />
      </div>
    </main>
  );
}
