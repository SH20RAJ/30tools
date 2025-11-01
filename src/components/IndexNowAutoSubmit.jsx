'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function IndexNowAutoSubmit() {
  const pathname = usePathname();
  const lastSubmittedRef = useRef(new Set());
  const submitTimeoutRef = useRef(null);
  const lastSubmitTimeRef = useRef(0);

  useEffect(() => {
    // Don't submit in development
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const submitToIndexNow = async () => {
      // Construct full URL
      const fullUrl = `https://30tools.com${pathname}`;

      // Check if already submitted in this session
      if (lastSubmittedRef.current.has(fullUrl)) {
        return;
      }

      // Rate limiting: Don't submit more than once every 5 seconds
      const now = Date.now();
      const timeSinceLastSubmit = now - lastSubmitTimeRef.current;
      if (timeSinceLastSubmit < 5000) {
        return;
      }

      // Check localStorage for recent submissions (last 24 hours)
      try {
        const storageKey = 'indexnow_submitted';
        const stored = localStorage.getItem(storageKey);
        const submittedUrls = stored ? JSON.parse(stored) : {};
        
        // Clean up old entries (older than 24 hours)
        const oneDayAgo = now - 24 * 60 * 60 * 1000;
        Object.keys(submittedUrls).forEach(url => {
          if (submittedUrls[url] < oneDayAgo) {
            delete submittedUrls[url];
          }
        });

        // Check if this URL was submitted in the last 24 hours
        if (submittedUrls[fullUrl] && (now - submittedUrls[fullUrl] < 24 * 60 * 60 * 1000)) {
          lastSubmittedRef.current.add(fullUrl);
          return;
        }

        // Submit to IndexNow API
        try {
          const response = await fetch('https://30tools.com/api/indexnow', {
            method: 'POST',
            headers: {
              'accept': '*/*',
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              urls: [fullUrl]
            })
          });

          if (response.ok) {
            // Mark as submitted
            lastSubmittedRef.current.add(fullUrl);
            lastSubmitTimeRef.current = now;
            
            // Store in localStorage
            submittedUrls[fullUrl] = now;
            localStorage.setItem(storageKey, JSON.stringify(submittedUrls));
            
            console.log(`✅ IndexNow: Submitted ${fullUrl}`);
          } else {
            console.warn(`⚠️ IndexNow: Failed to submit ${fullUrl} (${response.status})`);
          }
        } catch (error) {
          console.error('❌ IndexNow: Submission error', error);
        }
      } catch (error) {
        console.error('❌ IndexNow: Storage error', error);
      }
    };

    // Debounce submissions (wait 2 seconds after navigation)
    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current);
    }

    submitTimeoutRef.current = setTimeout(() => {
      submitToIndexNow();
    }, 2000);

    // Cleanup
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
    };
  }, [pathname]);

  // This component doesn't render anything
  return null;
}
