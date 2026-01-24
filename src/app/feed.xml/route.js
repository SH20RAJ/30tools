import { getAllTools } from "@/constants/tools-utils";

function RSSFeed() {
  const baseUrl = "https://30tools.com";
  const currentDate = new Date().toUTCString();
  const allTools = getAllTools();

  // Get all tools
  const latestTools = allTools;

  const rssItems = latestTools
    .map(
      (tool) => `
    <item>
      <title><![CDATA[${tool.name} - Free Online Tool]]></title>
      <description><![CDATA[${tool.description}. Use our free ${tool.name} tool online. No registration required, fast and secure processing.]]></description>
      <link>${baseUrl}${tool.route}</link>
      <guid isPermaLink="true">${baseUrl}${tool.route}</guid>
      <pubDate>${currentDate}</pubDate>
      <category><![CDATA[${tool.category}]]></category>
      <author><![CDATA[30tools Team]]></author>
    </item>
  `,
    )
    .join("");

  // Manually added blog posts for RSS
  const blogPosts = [
    {
      title: "Y2Mate YouTube to MP3 Converter – Features & Top Alternative",
      description:
        "A comprehensive review of Y2Mate and its best alternatives for converting YouTube videos to MP3.",
      link: `${baseUrl}/blog/y2mate-youtube-to-mp3-converter`,
      pubDate: new Date("2025-01-15T12:00:00Z").toUTCString(),
      category: "Review",
    },
    {
      title: "3 Methods to Convert YouTube Videos to High-Quality 320kbps MP3",
      description:
        "Learn how to extract high-fidelity audio from YouTube videos with these simple methods.",
      link: `${baseUrl}/blog/convert-youtube-videos-high-quality-320kbps-mp3`,
      pubDate: new Date("2025-01-14T12:00:00Z").toUTCString(),
      category: "Guide",
    },
    {
      title: "Publer Reviews: A Comprehensive User Guide",
      description:
        "In-depth analysis of Publer social media management tool, its features, and pricing.",
      link: `${baseUrl}/blog/publer-reviews`,
      pubDate: new Date("2025-01-13T12:00:00Z").toUTCString(),
      category: "Review",
    },
    {
      title: "6 Best Free YouTube to MP3 Converters You Should Try in 2025",
      description:
        "Our top picks for the best free YouTube to MP3 converters available this year.",
      link: `${baseUrl}/blog/best-free-youtube-to-mp3-converters-2025`,
      pubDate: new Date("2025-01-12T12:00:00Z").toUTCString(),
      category: "Listicle",
    },
  ]
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.link}</link>
      <guid isPermaLink="true">${post.link}</guid>
      <pubDate>${post.pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <author><![CDATA[30tools Team]]></author>
    </item>
    `,
    )
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0"
      xmlns:content="http://purl.org/rss/1.0/modules/content/"
      xmlns:wfw="http://wellformedweb.org/CommentAPI/"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:atom="http://www.w3.org/2005/Atom"
      xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
      xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
      <channel>
        <title><![CDATA[30tools - Free Online Toolkit | Latest Tools & Updates]]></title>
        <description><![CDATA[Stay updated with the latest free online tools from 30tools. Professional tools for image processing, PDF manipulation, video conversion, and more. No registration required.]]></description>
        <link>${baseUrl}</link>
        <lastBuildDate>${currentDate}</lastBuildDate>
        <language>en-US</language>
        <sy:updatePeriod>daily</sy:updatePeriod>
        <sy:updateFrequency>1</sy:updateFrequency>
        <generator>30tools RSS Generator</generator>
        <webMaster>contact@30tools.com (30tools Team)</webMaster>
        <managingEditor>contact@30tools.com (30tools Team)</managingEditor>
        <copyright>Copyright © 2025 30tools. All rights reserved.</copyright>
        <category><![CDATA[Technology]]></category>
        <category><![CDATA[Online Tools]]></category>
        <category><![CDATA[Web Applications]]></category>
        <image>
          <url>${baseUrl}/icons/icon-192x192.png</url>
          <title>30tools</title>
          <link>${baseUrl}</link>
          <width>144</width>
          <height>144</height>
        </image>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${blogPosts}
        ${rssItems}

        <!-- Featured Content -->
        <item>
          <title><![CDATA[135+ Free Online Tools - Complete Toolkit for Everyone]]></title>
          <description><![CDATA[Discover our comprehensive collection of 135+ free online tools. From image compression to PDF editing, video conversion to SEO analysis - everything you need in one place.]]></description>
          <link>${baseUrl}</link>
          <guid isPermaLink="true">${baseUrl}</guid>
          <pubDate>${currentDate}</pubDate>
          <category><![CDATA[Featured]]></category>
          <author><![CDATA[30tools Team]]></author>
        </item>
      </channel>
    </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export async function GET() {
  return RSSFeed();
}
