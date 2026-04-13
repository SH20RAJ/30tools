import React from "react";

export function MinimalHero({ title, subtitle }) {
  return (
    <section className="pt-20 md:pt-24 pb-10 md:pb-16 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
        {subtitle}
      </p>
    </section>
  );
}
