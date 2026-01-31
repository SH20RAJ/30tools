"use client";

import { Braces } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function CodeToolsNavbar() {
  const tools = []; 

  return (
    <ToolCategoryNavbar 
      title="Code" 
      tools={tools} 
      categoryIcon={Braces}
    />
  );
}
