"use client";

import { Video } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function VideoToolsNavbar() {
  const tools = [
    { name: "Video Compressor", href: "/video-compressor", icon: Video },
    { name: "Video to GIF", href: "/video-to-gif", icon: Video },
  ];

  return (
    <ToolCategoryNavbar 
      title="Video" 
      tools={tools} 
      categoryIcon={Video}
    />
  );
}
