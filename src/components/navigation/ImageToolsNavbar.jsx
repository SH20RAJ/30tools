"use client";

import { ImageIcon } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function ImageToolsNavbar() {
  const tools = [
    { name: "Image Compressor", href: "/image-compressor", popular: true, icon: ImageIcon },
    { name: "Free Image Compressor", href: "/free-image-compressor", popular: true, icon: ImageIcon },
    { name: "Image Optimizer", href: "/image-optimizer", icon: ImageIcon },
    { name: "Compress Images Online", href: "/compress-images-online", icon: ImageIcon },
  ];

  return (
    <ToolCategoryNavbar 
      title="Image Tools" 
      tools={tools} 
      categoryIcon={ImageIcon}
    />
  );
}
