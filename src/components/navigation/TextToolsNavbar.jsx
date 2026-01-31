"use client";

import { Type } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function TextToolsNavbar() {
  const tools = []; 

  return (
    <ToolCategoryNavbar 
      title="Text" 
      tools={tools} 
      categoryIcon={Type}
    />
  );
}
