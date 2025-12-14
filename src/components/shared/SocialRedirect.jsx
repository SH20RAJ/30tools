"use client";

import { useEffect, useRef } from "react";

export default function SocialRedirect() {
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Check if we've already redirected in this session
    const hasRedirected = sessionStorage.getItem("social_redirect_triggered");
    
    if (!hasRedirected) {
      timeoutRef.current = setTimeout(() => {
        // Double check to be safe
        if (!sessionStorage.getItem("social_redirect_triggered")) {
            // Open the specific Instagram URL
            window.open("https://www.instagram.com/human.bychance/reel/DSPE30NgTGM/", "_blank");
            // Mark as triggered for this session
            sessionStorage.setItem("social_redirect_triggered", "true");
        }
      }, 10000); // 10 seconds
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return null;
}
