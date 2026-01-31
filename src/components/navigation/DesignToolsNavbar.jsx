"use client";

import { Palette } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function DesignToolsNavbar() {
  const tools = []; 

  return (
    <ToolCategoryNavbar 
      title="Design" 
      tools={tools} 
      categoryIcon={Palette}
    />
  );
}
