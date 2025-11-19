#!/usr/bin/env node
/**
 * scripts/submit-indexnow.js
 *
 * Read tools from src/constants/tools.json, build a list of site URLs and submit them to IndexNow
 * Usage: node scripts/submit-indexnow.js
 * (Works with Node 18+ or Bun)
 */

import fs from "fs";
import path from "path";
// Use global fetch when available (Node 18+, Bun). Otherwise dynamically import node-fetch.

const INDEXNOW_KEY = "634a2c77198a45429967eb9dc1252278";
const SITE_HOST = "30tools.com";
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

function readToolsJson() {
  const file = path.resolve(process.cwd(), "src/constants/tools.json");
  if (!fs.existsSync(file)) throw new Error("tools.json not found: " + file);
  const raw = fs.readFileSync(file, "utf8");
  return JSON.parse(raw);
}

function buildUrls(toolsData) {
  const urls = new Set();
  urls.add(`https://${SITE_HOST}/`);
  // important pages
  ["about", "search", "more-tools", "contact"].forEach((p) =>
    urls.add(`https://${SITE_HOST}/${p}`),
  );

  // From toolsData.categories
  for (const key of Object.keys(toolsData.categories)) {
    const category = toolsData.categories[key];
    if (category.route && typeof category.route === "string") {
      urls.add(`https://${SITE_HOST}${category.route}`);
    }
    if (Array.isArray(category.tools)) {
      category.tools.forEach((tool) => {
        // include internal routes only
        if (tool.route && !tool.external) {
          urls.add(`https://${SITE_HOST}${tool.route}`);
        }
      });
    }
  }

  return Array.from(urls);
}

async function submitBatch(urlList) {
  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  // ensure we have a fetch implementation
  let fetchFn = globalThis.fetch;
  if (!fetchFn) {
    // dynamic import so this script works without forcing node-fetch install in modern runtimes
    const mod = await import("node-fetch");
    fetchFn = mod.default || mod;
  }

  const res = await fetchFn(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
    // timeout not standard here; rely on environment
  });

  const ok = res.ok || res.status === 202;
  const text = await res.text();
  return { ok, status: res.status, body: text };
}

async function main() {
  try {
    const toolsData = readToolsJson();
    const urls = buildUrls(toolsData);
    const isDry =
      process.argv.includes("--dry-run") || process.argv.includes("-n");
    console.log(`Found ${urls.length} URLs to submit`);

    if (isDry) {
      console.log("Dry run mode: printing URLs (no network requests)");
      urls.forEach((u) => console.log(u));
      console.log("Dry run complete.");
      process.exit(0);
    }

    const batchSize = 10000; // IndexNow accepts up to 10k, we stay safe
    let submitted = 0;
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      console.log(
        `Submitting batch ${Math.floor(i / batchSize) + 1}: ${batch.length} URLs`,
      );
      const result = await submitBatch(batch);
      if (result.ok) {
        console.log(`✅ Batch submitted (status: ${result.status})`);
        submitted += batch.length;
      } else {
        console.error(`❌ Batch failed (status: ${result.status})`);
        console.error(result.body);
        // do not exit - continue to next batch
      }
      // small delay to be polite
      await new Promise((r) => setTimeout(r, 1000));
    }

    console.log(
      `Done. Submitted ${submitted}/${urls.length} URLs (attempted).`,
    );
    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

// Run
main();
