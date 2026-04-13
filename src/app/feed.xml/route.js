
import { getAllTools } from "@/lib/tools";

export async function GET() {
  const baseUrl = "https://30tools.com";
  const currentDate = new Date().toUTCString();
  const currentYear = new Date().getFullYear();
  const allTools = getAllTools();
  const toolCount = allTools.length;

  const rssItems = allTools
    .slice(0, 100) // Top 100 for performance
    .map(
      (tool) => `
    <item>
      <title><![CDATA[${tool.name} - Free Online Tool]]></title>
      <description><![CDATA[${tool.description}. Use our free ${tool.name} tool online. No registration required, fast and secure processing.]]></description>
      <link>${baseUrl}${tool.route}</link>
      <guid isPermaLink="true">${baseUrl}${tool.route}</guid>
      <pubDate>${currentDate}</pubDate>
      <category><![CDATA[${tool.category}]]></category>
    </item>
  `,
    )
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title><![CDATA[30tools - Free Online Toolkit | Latest Tools & Updates]]></title>
        <description><![CDATA[Stay updated with the latest free online tools from 30tools. Professional tools for image processing, PDF manipulation, video conversion, and more. No registration required.]]></description>
        <link>${baseUrl}</link>
        <lastBuildDate>${currentDate}</lastBuildDate>
        <language>en-US</language>
        <generator>30tools RSS Generator</generator>
        <copyright>Copyright © ${currentYear} 30tools. All rights reserved.</copyright>
        ${rssItems}
      </channel>
    </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
