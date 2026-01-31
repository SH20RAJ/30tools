"use client";

import { Headphones } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function AudioToolsNavbar() {
  const tools = []; // No specific tools listed in original

  return (
    <ToolCategoryNavbar 
      title="Audio" 
      tools={tools} 
      categoryIcon={Headphones}
    />
  );
}
