"use client";

import { RefreshCw } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function ConverterToolsNavbar() {
  const tools = []; 

  return (
    <ToolCategoryNavbar 
      title="Converters" 
      tools={tools} 
      categoryIcon={RefreshCw}
    />
  );
}
