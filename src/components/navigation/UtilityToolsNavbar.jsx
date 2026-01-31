"use client";

import { Settings } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function UtilityToolsNavbar() {
  const tools = []; 

  return (
    <ToolCategoryNavbar 
      title="Utilities" 
      tools={tools} 
      categoryIcon={Settings}
    />
  );
}
