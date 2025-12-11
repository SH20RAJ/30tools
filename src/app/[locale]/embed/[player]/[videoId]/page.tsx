import EmbedPlayer from "@/components/embed/EmbedPlayer";
import { notFound } from "next/navigation";

export default async function Embed({ params }) {
  const { player, videoId } = await params;
  if (!videoId) return notFound();

  // allowed player engines
  const allowed = new Set(["plyr", "videojs", "fluid", "mediaelement"]);
  const engine = allowed.has(player) ? player : "plyr";

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <EmbedPlayer player={engine} videoId={videoId} />
    </div>
  );
}
