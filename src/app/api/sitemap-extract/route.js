import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sitemapUrl = searchParams.get('url');

  if (!sitemapUrl) {
    return NextResponse.json({ error: 'Sitemap URL is required' }, { status: 400 });
  }

  try {
    // Validate URL format
    new URL(sitemapUrl);

    // Fetch the sitemap XML
    const response = await fetch(sitemapUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; 30tools Sitemap Extractor)',
        'Accept': 'application/xml, text/xml, */*',
      },
      // Add timeout
      signal: AbortSignal.timeout(30000), // 30 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
    }

    const xmlText = await response.text();

    // Parse the XML
    const urls = parseSitemapXML(xmlText);

    // Calculate stats
    const stats = calculateStats(urls);

    return NextResponse.json({
      urls,
      stats,
      success: true
    });

  } catch (error) {
    console.error('Sitemap extraction error:', error);
    return NextResponse.json({
      error: error.message || 'Failed to extract sitemap',
      success: false
    }, { status: 500 });
  }
}

function parseSitemapXML(xmlText) {
  const urls = [];

  try {
    // Simple XML parsing - extract url elements
    const urlMatches = xmlText.match(/<url>(.*?)<\/url>/gs);

    if (!urlMatches) {
      // Try to parse as sitemap index
      const sitemapMatches = xmlText.match(/<sitemap>(.*?)<\/sitemap>/gs);
      if (sitemapMatches) {
        // This is a sitemap index, extract sitemap URLs
        for (const sitemapMatch of sitemapMatches) {
          const locMatch = sitemapMatch.match(/<loc>(.*?)<\/loc>/);
          if (locMatch) {
            urls.push({
              url: locMatch[1].trim(),
              isSitemapIndex: true,
              lastModified: null,
              changeFreq: null,
              priority: null,
              images: 0,
              videos: 0
            });
          }
        }
        return urls;
      }
      throw new Error('No URLs found in sitemap');
    }

    for (const urlMatch of urlMatches) {
      const urlData = {
        url: '',
        lastModified: null,
        changeFreq: null,
        priority: null,
        images: 0,
        videos: 0
      };

      // Extract URL
      const locMatch = urlMatch.match(/<loc>(.*?)<\/loc>/);
      if (locMatch) {
        urlData.url = locMatch[1].trim();
      }

      // Extract lastmod
      const lastmodMatch = urlMatch.match(/<lastmod>(.*?)<\/lastmod>/);
      if (lastmodMatch) {
        try {
          urlData.lastModified = new Date(lastmodMatch[1].trim());
        } catch {
          urlData.lastModified = null;
        }
      }

      // Extract changefreq
      const changefreqMatch = urlMatch.match(/<changefreq>(.*?)<\/changefreq>/);
      if (changefreqMatch) {
        urlData.changeFreq = changefreqMatch[1].trim();
      }

      // Extract priority
      const priorityMatch = urlMatch.match(/<priority>(.*?)<\/priority>/);
      if (priorityMatch) {
        urlData.priority = parseFloat(priorityMatch[1].trim());
      }

      // Count images (basic check for image sitemaps)
      const imageMatches = urlMatch.match(/<image:image>/g);
      if (imageMatches) {
        urlData.images = imageMatches.length;
      }

      // Count videos (basic check for video sitemaps)
      const videoMatches = urlMatch.match(/<video:video>/g);
      if (videoMatches) {
        urlData.videos = videoMatches.length;
      }

      if (urlData.url) {
        urls.push(urlData);
      }
    }

    return urls;

  } catch (error) {
    throw new Error(`Failed to parse XML: ${error.message}`);
  }
}

function calculateStats(urls) {
  if (urls.length === 0) {
    return {
      totalUrls: 0,
      lastModified: null,
      avgPriority: 0,
      changeFreqDistribution: { daily: 0, weekly: 0, monthly: 0, yearly: 0 },
      totalImages: 0,
      totalVideos: 0
    };
  }

  const validPriorities = urls.filter(u => u.priority !== null && !isNaN(u.priority));
  const avgPriority = validPriorities.length > 0
    ? (validPriorities.reduce((sum, u) => sum + u.priority, 0) / validPriorities.length).toFixed(2)
    : 0;

  const changeFreqDistribution = {
    daily: urls.filter(u => u.changeFreq === 'daily').length,
    weekly: urls.filter(u => u.changeFreq === 'weekly').length,
    monthly: urls.filter(u => u.changeFreq === 'monthly').length,
    yearly: urls.filter(u => u.changeFreq === 'yearly').length
  };

  // Find the most recent lastModified date
  const validDates = urls.filter(u => u.lastModified instanceof Date && !isNaN(u.lastModified));
  const lastModified = validDates.length > 0
    ? new Date(Math.max(...validDates.map(u => u.lastModified.getTime())))
    : null;

  return {
    totalUrls: urls.length,
    lastModified,
    avgPriority: parseFloat(avgPriority),
    changeFreqDistribution,
    totalImages: urls.reduce((sum, u) => sum + (u.images || 0), 0),
    totalVideos: urls.reduce((sum, u) => sum + (u.videos || 0), 0)
  };
}