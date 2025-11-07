import { NextResponse } from 'next/server';
import toolsData from '@/constants/tools.json';

const INDEXNOW_API_KEY = '634a2c77198a45429967eb9dc1252278';
const SITE_HOST = '30tools.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { urls, action } = body;

    if (action === 'submit-all') {
      // Submit all tool pages
      const allUrls = [];

      // Add homepage
      allUrls.push(`https://${SITE_HOST}/`);

      // Add all tools
      Object.keys(toolsData.categories).forEach(categoryKey => {
        const category = toolsData.categories[categoryKey];

        if (category.tools && Array.isArray(category.tools)) {
          category.tools.forEach(tool => {
            if (tool.route && !tool.external) {
              allUrls.push(`https://${SITE_HOST}${tool.route}`);
            }
          });
        }
      });

      // Add important pages
      allUrls.push(`https://${SITE_HOST}/about`);
      allUrls.push(`https://${SITE_HOST}/search`);
      allUrls.push(`https://${SITE_HOST}/more-tools`);
      allUrls.push(`https://${SITE_HOST}/contact`);

      // Submit to IndexNow
      const payload = {
        host: SITE_HOST,
        key: INDEXNOW_API_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_API_KEY}.txt`,
        urlList: allUrls
      };

      const response = await fetch('https://api.indexnow.org/IndexNow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 202) {
        return NextResponse.json({
          success: true,
          message: `Successfully submitted ${allUrls.length} URLs to IndexNow`,
          count: allUrls.length
        });
      } else {
        return NextResponse.json({
          success: false,
          message: 'Failed to submit to IndexNow',
          status: response.status
        }, { status: response.status });
      }
    } else if (urls && Array.isArray(urls)) {
      // Submit specific URLs
      const payload = {
        host: SITE_HOST,
        key: INDEXNOW_API_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_API_KEY}.txt`,
        urlList: urls
      };

      const response = await fetch('https://api.indexnow.org/IndexNow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 202) {
        return NextResponse.json({
          success: true,
          message: `Successfully submitted ${urls.length} URLs to IndexNow`,
          count: urls.length
        });
      } else {
        return NextResponse.json({
          success: false,
          message: 'Failed to submit to IndexNow',
          status: response.status
        }, { status: response.status });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: 'Invalid request. Provide urls array or action: "submit-all"'
      }, { status: 400 });
    }
  } catch (error) {
    console.error('IndexNow API Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      error: error.message
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'IndexNow API endpoint for 30tools',
    usage: {
      method: 'POST',
      examples: [
        {
          description: 'Submit specific URLs',
          body: {
            urls: [
              'https://30tools.com/image-compressor',
              'https://30tools.com/video-converter'
            ]
          },
        },
        {
          description: 'Submit all tool pages',
          body: {
            action: 'submit-all'
          },
        },
      ]
    },
    key: INDEXNOW_API_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_API_KEY}.txt`
  });
}
