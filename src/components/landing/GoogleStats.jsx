import React from "react";

export function GoogleStats({ stats = [] }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mt-20 max-w-4xl mx-auto border-t border-border/40 pt-16">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-1 group text-center"
        >
          <div className="p-2 mb-2 bg-secondary/20 rounded-full group-hover:bg-primary/5 transition-colors">
            <stat.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <div className="text-2xl font-semibold tracking-tight text-[#3c4043] dark:text-foreground">{stat.value}</div>
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
