"use client";

import { Sparkles } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function GeneratorToolsNavbar() {
  const tools = []; 

  return (
    <ToolCategoryNavbar 
      title="Generators" 
      tools={tools} 
      categoryIcon={Sparkles}
    />
  );
}
