import { redirect } from "next/navigation";

// Redirect character-counter to word-counter for SEO consolidation
export default function CharacterCounterPage() {
  redirect("/word-counter");
}
