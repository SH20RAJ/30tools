"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function BlogContent({ html }) {
    const contentRef = useRef(null);

    useEffect(() => {
        // Apply syntax highlighting after content is rendered
        if (typeof window !== "undefined" && window.hljs && contentRef.current) {
            contentRef.current.querySelectorAll("pre code").forEach((block) => {
                window.hljs.highlightElement(block);
            });
        }
    }, [html]);

    const handleHighlightLoad = () => {
        if (contentRef.current) {
            contentRef.current.querySelectorAll("pre code").forEach((block) => {
                window.hljs.highlightElement(block);
            });
        }
    };

    return (
        <>
            {/* Highlight.js CSS - GitHub Dark theme */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/github-dark.min.css"
            />
            {/* Highlight.js Script */}
            <Script
                src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js"
                strategy="afterInteractive"
                onLoad={handleHighlightLoad}
            />
            <div
                ref={contentRef}
                className={`prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                    prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:shadow-lg
                    prose-pre:overflow-x-auto prose-pre:p-0
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/30 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:italic
                    prose-ul:list-disc prose-ol:list-decimal
                    prose-li:text-muted-foreground prose-li:marker:text-primary
                    prose-img:rounded-xl prose-img:shadow-md
                    prose-hr:border-border
                    prose-table:overflow-x-auto prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 prose-td:border-border`}
                dangerouslySetInnerHTML={{ __html: html }}
            />
            {/* Using standard style tag for client-side styling */}
            <style jsx>{`
                .prose pre code {
                    background: transparent !important;
                    padding: 1rem !important;
                    display: block;
                    font-size: 0.875rem;
                    line-height: 1.7;
                }
                .prose pre code.hljs {
                    background: transparent !important;
                }
                .prose pre {
                    background: #0d1117 !important;
                }
                .hljs {
                    background: transparent !important;
                }
            `}</style>
        </>
    );
}
