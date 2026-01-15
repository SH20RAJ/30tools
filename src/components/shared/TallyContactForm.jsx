"use client";

import { useEffect } from "react";

export default function TallyContactForm() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src="https://tally.so/widgets/embed.js"]',
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        data-tally-src="https://tally.so/embed/nrbXO2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Contact 30tools.com"
        className="rounded-lg border"
      />
    </div>
  );
}
