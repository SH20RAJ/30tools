import { getAllTools } from "@/constants/tools-utils";

function RSSFeed() {
  const baseUrl = "https://30tools.com";
  const currentDate = new Date().toISOString();
  const allTools = getAllTools();

  // Get latest tools (last 20 added/updated)
  const latestTools = allTools.slice(0, 20);

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
      <enclosure url="${baseUrl}/screenshots/${tool.id || "default"}.png" type="image/png" />
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
      <url>${baseUrl}/icons/icon-512x512.png</url>
      <title>30tools</title>
      <link>${baseUrl}</link>
      <width>512</width>
      <height>512</height>
    </image>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
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
    },
  });
}

export async function GET() {
  return RSSFeed();
}
