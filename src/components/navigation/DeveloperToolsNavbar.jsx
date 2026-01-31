"use client";

import { Code } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function DeveloperToolsNavbar() {
  const tools = []; 

  return (
    <ToolCategoryNavbar 
      title="Developer" 
      tools={tools} 
      categoryIcon={Code}
    />
  );
}
