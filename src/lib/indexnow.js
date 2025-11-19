/**
 * IndexNow Utility for 30tools
 * Submits URLs to IndexNow API for instant indexing by search engines
 */

const INDEXNOW_API_KEY = "634a2c77198a45429967eb9dc1252278";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const SITE_HOST = "30tools.com";

/**
 * Submit a single URL to IndexNow
 * @param {string} url - The full URL to submit
 * @returns {Promise<boolean>} - Success status
 */
export async function submitUrlToIndexNow(url) {
  try {
    const params = new URLSearchParams({
      url: url,
      key: INDEXNOW_API_KEY,
    });

    const response = await fetch(`${INDEXNOW_ENDPOINT}?${params.toString()}`, {
      method: "GET",
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ IndexNow: Successfully submitted ${url}`);
      return true;
    } else {
      console.error(
        `❌ IndexNow: Failed to submit ${url} - Status: ${response.status}`,
      );
      return false;
    }
  } catch (error) {
    console.error("❌ IndexNow: Error submitting URL:", error);
    return false;
  }
}

/**
 * Submit multiple URLs to IndexNow in a single request
 * @param {string[]} urls - Array of URLs to submit
 * @returns {Promise<boolean>} - Success status
 */
export async function submitMultipleUrlsToIndexNow(urls) {
  try {
    const payload = {
      host: SITE_HOST,
      key: INDEXNOW_API_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_API_KEY}.txt`,
      urlList: urls,
    };

    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ IndexNow: Successfully submitted ${urls.length} URLs`);
      return true;
    } else {
      console.error(
        `❌ IndexNow: Failed to submit URLs - Status: ${response.status}`,
      );
      return false;
    }
  } catch (error) {
    console.error("❌ IndexNow: Error submitting URLs:", error);
    return false;
  }
}

/**
 * Submit all tool pages to IndexNow
 * @param {Object} toolsData - Tools data from tools.json
 * @returns {Promise<boolean>} - Success status
 */
export async function submitAllToolsToIndexNow(toolsData) {
  try {
    const urls = [];

    // Add homepage
    urls.push(`https://${SITE_HOST}/`);

    // Add category pages
    Object.keys(toolsData.categories).forEach((categoryKey) => {
      const category = toolsData.categories[categoryKey];

      // Add each tool in the category
      if (category.tools && Array.isArray(category.tools)) {
        category.tools.forEach((tool) => {
          if (tool.route && !tool.external) {
            urls.push(`https://${SITE_HOST}${tool.route}`);
          }
        });
      }
    });

    // Add other important pages
    urls.push(`https://${SITE_HOST}/about`);
    urls.push(`https://${SITE_HOST}/search`);
    urls.push(`https://${SITE_HOST}/more-tools`);
    urls.push(`https://${SITE_HOST}/contact`);

    console.log(`📤 IndexNow: Submitting ${urls.length} URLs...`);

    // Submit in batches of 10,000 URLs (IndexNow limit)
    const batchSize = 10000;
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      await submitMultipleUrlsToIndexNow(batch);

      // Small delay between batches
      if (i + batchSize < urls.length) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    return true;
  } catch (error) {
    console.error("❌ IndexNow: Error submitting all tools:", error);
    return false;
  }
}

/**
 * Client-side function to submit current page
 * Call this when a page loads or content changes
 */
export function submitCurrentPageToIndexNow() {
  if (typeof window !== "undefined") {
    const currentUrl = window.location.href;
    submitUrlToIndexNow(currentUrl);
  }
}

/**
 * Submit new or updated content
 * @param {string} slug - Tool slug or page path
 */
export async function notifyIndexNowOnUpdate(slug) {
  const url = `https://${SITE_HOST}${slug.startsWith("/") ? slug : "/" + slug}`;
  return await submitUrlToIndexNow(url);
}
