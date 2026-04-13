"use client";

import React from "react";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function LanguageSelector({ languages = [] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full h-8 px-3 text-[12px] font-medium border-border text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors gap-2"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Change Language</span>
          <ChevronDown className="w-3.5 h-3.5 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[260px] p-1 grid grid-cols-2 gap-1 rounded-xl shadow-xl border-border">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            asChild
            className="flex items-center justify-between px-3 py-2 text-[12px] cursor-pointer rounded-lg focus:bg-primary/10 focus:text-primary transition-colors"
          >
            <Link href={`?lang=${lang.code}`} className="no-underline w-full">
              <span className="font-medium">{lang.name}</span>
              <span className="text-[9px] font-black uppercase text-muted-foreground/50 tracking-wider">
                {lang.code}
              </span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
