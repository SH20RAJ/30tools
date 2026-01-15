"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function SEOEnhancer({
  tool,
  category,
  schemaData,
  breadcrumbs,
  faqs,
  relatedContent,
}) {
  // Generate comprehensive schema markup
  const schemas = [];

  if (schemaData?.organization) {
    schemas.push(schemaData.organization);
  }

  if (schemaData?.tool) {
    schemas.push(schemaData.tool);
  }

  if (breadcrumbs) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `https://30tools.com${crumb.url}`,
      })),
    });
  }

  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  // Enhanced performance monitoring
  useEffect(() => {
    // Core Web Vitals tracking
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Track Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            // Send LCP data to analytics
            if (window.gtag) {
              window.gtag("event", "web_vitals", {
                name: "LCP",
                value: Math.round(entry.startTime),
                event_category: "Core Web Vitals",
              });
            }
          }
        }
      });

      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // Track First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "first-input") {
            const fid = entry.processingStart - entry.startTime;
            if (window.gtag) {
              window.gtag("event", "web_vitals", {
                name: "FID",
                value: Math.round(fid),
                event_category: "Core Web Vitals",
              });
            }
          }
        }
      });

      fidObserver.observe({ entryTypes: ["first-input"] });

      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }

        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            name: "CLS",
            value: Math.round(clsValue * 1000),
            event_category: "Core Web Vitals",
          });
        }
      });

      clsObserver.observe({ entryTypes: ["layout-shift"] });

      // Cleanup observers
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // User engagement tracking for SEO signals
  useEffect(() => {
    let startTime = Date.now();
    let scrollDepth = 0;
    let maxScrollDepth = 0;

    const trackScrollDepth = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      scrollDepth = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100,
      );
      maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
    };

    const trackEngagement = () => {
      const timeOnPage = Date.now() - startTime;

      if (window.gtag) {
        window.gtag("event", "user_engagement", {
          engagement_time_msec: timeOnPage,
          scroll_depth: maxScrollDepth,
          page_title: document.title,
          tool_name: tool?.name || "unknown",
        });
      }
    };

    window.addEventListener("scroll", trackScrollDepth);
    window.addEventListener("beforeunload", trackEngagement);

    return () => {
      window.removeEventListener("scroll", trackScrollDepth);
      window.removeEventListener("beforeunload", trackEngagement);
    };
  }, [tool]);

  return (
    <>
      {/* Enhanced Schema Markup */}
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* Preconnect to critical domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />

      {/* DNS prefetch for analytics */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//googletagmanager.com" />

      {/* Critical CSS inlining hint */}
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Enhanced Open Graph for better social sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="30tools" />
      <meta property="article:publisher" content="https://30tools.com" />
      <meta property="article:author" content="30tools" />

      {/* Twitter Card enhancements */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@30tools" />
      <meta name="twitter:creator" content="@30tools" />

      {/* Advanced robots directives */}
      <meta
        name="robots"
        content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      />

      {/* Hreflang for international SEO (future expansion) */}
      <link rel="alternate" hrefLang="en" href="https://30tools.com" />
      <link rel="alternate" hrefLang="x-default" href="https://30tools.com" />

      {/* Advanced Google Analytics with enhanced ecommerce tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
            content_group1: '${category || "general"}',
            content_group2: '${tool?.name || "homepage"}',
            custom_map: {
              'custom_parameter_1': 'tool_usage',
              'custom_parameter_2': 'user_engagement'
            }
          });
          
          // Enhanced ecommerce for tool usage tracking
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            tool_category: '${category || "general"}',
            tool_name: '${tool?.name || "homepage"}'
          });
        `}
      </Script>

      {/* Microsoft Clarity for user behavior analysis */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
        `}
      </Script>

      {/* Hotjar for user experience optimization */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  );
}
