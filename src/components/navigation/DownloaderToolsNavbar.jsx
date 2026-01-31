"use client";

import { Download } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function DownloaderToolsNavbar() {
  const tools = []; 

  return (
    <ToolCategoryNavbar 
      title="Downloaders" 
      tools={tools} 
      categoryIcon={Download}
    />
  );
}
