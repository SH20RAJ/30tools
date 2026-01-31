"use client";

import { Sparkles } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function PDFToolsNavbar() {
  const tools = [
    { name: "PDF Merger", href: "/pdf-merger", icon: Sparkles },
    { name: "PDF Splitter", href: "/pdf-splitter", icon: Sparkles },
    { name: "PDF Compressor", href: "/pdf-compressor", icon: Sparkles },
    { name: "JPG to PDF", href: "/jpg-to-pdf", icon: Sparkles },
    { name: "PNG to PDF", href: "/png-to-pdf", icon: Sparkles },
  ];

  return (
    <ToolCategoryNavbar 
      title="PDF" 
      tools={tools} 
      categoryIcon={Sparkles}
    />
  );
}
