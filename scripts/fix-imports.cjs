const fs = require("fs");
const path = require("path");

// Category -> { import pattern, usage pattern, component path }
const UPDATES = {
  calculators: {
    oldImport: /import BuiltInCalculators from "@\/components\/tools\/built-ins\/BuiltInCalculators"/,
    oldUsage: /<BuiltInCalculators\s+kind="([^"]+)"\s*\/>/,
    componentDir: "@\/components\/tools\/calculators",
    routeGroup: "(utilities)",
  },
  converters: {
    oldImport: /import BaseConverter from "@\/components\/tools\/shared\/BaseConverter"/,
    oldUsage: /<BaseConverter\s+converterKind="([^"]+)"\s*\/>/,
    componentDir: "@\/components\/tools\/converters",
    routeGroup: "(developer)",
  },
  units: {
    oldImport: /import UniversalUnitConverter from "@\/components\/tools\/built-ins\/UniversalUnitConverter"/,
    oldUsage: /<UniversalUnitConverter\s+preset="([^"]+)"\s*\/>/,
    componentDir: "@\/components\/tools\/units",
    routeGroup: "(utilities)",
  },
  "data-serial": {
    oldImport: /import BuiltInSerialization from "@\/components\/tools\/built-ins\/BuiltInSerialization"/,
    oldUsage: /<BuiltInSerialization\s+toolId="([^"]+)"\s*\/>/,
    componentDir: "@\/components\/tools\/data-serial",
    routeGroup: "(developer)",
  },
  "code-markup": {
    oldImport: /import BuiltInMarkup from "@\/components\/tools\/built-ins\/BuiltInMarkup"/,
    oldUsage: /<BuiltInMarkup\s+toolId="([^"]+)"\s*\/>/,
    componentDir: "@\/components\/tools\/code-markup",
    routeGroup: "(developer)",
  },
  network: {
    oldImport: /import BuiltInSafeHttp from "@\/components\/tools\/built-ins\/BuiltInSafeHttp"/,
    oldUsage: /<BuiltInSafeHttp\s+toolId="([^"]+)"\s*\/>/,
    componentDir: "@\/components\/tools\/network",
    routeGroup: "(utilities)",
  },
};

function toPascal(slug) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

// Build tool lookup by toolId for all 6 categories
const toolIdsByCategory = {
  calculators: ["adsense-calculator","age-calculator","average-calculator","confidence-interval-calculator","cpm-calculator","currency-converter","discount-calculator","gst-calculator","loan-calculator","margin-calculator","paypal-fee-calculator","percentage-calculator","probability-calculator","sales-tax-calculator"],
  converters: ["ascii-to-binary-converter","ascii-to-text-converter","binary-to-ascii-converter","binary-to-decimal-converter","binary-to-hex-converter","binary-to-octal-converter","binary-to-text-converter","decimal-to-binary-converter","decimal-to-hex-converter","decimal-to-octal-converter","decimal-to-text-converter","hex-to-binary-converter","hex-to-decimal-converter","hex-to-octal-converter","hex-to-text-converter","octal-to-binary-converter","octal-to-decimal-converter","octal-to-hex-converter","octal-to-text-converter","text-to-ascii-converter","text-to-binary-converter","text-to-decimal-converter","text-to-hex-converter","text-to-octal-converter"],
  units: ["angle-converter","apparent-power-converter","area-converter","charge-converter","current-converter","digital-converter","each-converter","energy-converter","frequency-converter","illuminance-converter","length-converter","pace-converter","parts-per-converter","power-converter","pressure-converter","reactive-energy-converter","reactive-power-converter","speed-converter","temperature-converter","time-converter","torque-converter","voltage-converter","volume-converter","volumetric-flow-rate-converter","weight-converter"],
  "data-serial": ["csv-to-json-converter","json-to-csv-converter","json-to-text-converter","json-to-tsv-converter","json-to-xml-converter","tsv-to-json-converter","xml-to-json-converter"],
  "code-markup": ["css-beautifier","css-minifier","html-beautifier","html-decoder","html-encoder","html-minifier","javascript-beautifier","javascript-deobfuscator","javascript-minifier","javascript-obfuscator"],
  network: ["backlink-checker","bulk-keyword-rank-checker","domain-age-checker","facebook-id-finder","get-http-headers","google-cache-checker","google-index-checker","hosting-checker","http-status-code-checker","indexnow","open-graph-checker","page-size-checker","redirect-checker","seo-audit-tool","server-status-checker","sitemap-generator","whois-domain-lookup","wordpress-theme-detector"],
};

// Network tools span (seo) and (utilities)
const networkSeoTools = ["backlink-checker","bulk-keyword-rank-checker","google-cache-checker","google-index-checker","open-graph-checker","seo-audit-tool","sitemap-generator"];

let updated = 0;

for (const [category, tools] of Object.entries(toolIdsByCategory)) {
  const cfg = UPDATES[category];
  // Determine which route group folders to check
  let groups;
  if (category === "network") {
    groups = ["(utilities)", "(seo)"];
  } else {
    groups = [cfg.routeGroup];
  }

  for (const toolId of tools) {
    const compName = toPascal(toolId);
    for (const group of groups) {
      // Check if this tool is actually in this group
      if (category === "network") {
        if (group === "(seo)" && !networkSeoTools.includes(toolId)) continue;
        if (group === "(utilities)" && networkSeoTools.includes(toolId)) continue;
      }

      const p = path.join(__dirname, "..", "src", "app", group, toolId, "page.tsx");
      if (!fs.existsSync(p)) continue;

      let content = fs.readFileSync(p, "utf8");

      // Check if already updated
      if (content.includes(`import ${compName} from`)) {
        console.log(`  SKIP (already updated): ${group}/${toolId}`);
        continue;
      }

      // Replace import
      if (cfg.oldImport.test(content)) {
        content = content.replace(cfg.oldImport, `import ${compName} from "${cfg.componentDir}/${compName}"`);
      } else {
        console.log(`  WARN (import not found): ${group}/${toolId}`);
        continue;
      }

      // Replace usage
      content = content.replace(cfg.oldUsage, `<${compName} />`);

      fs.writeFileSync(p, content, "utf8");
      updated++;
      console.log(`  UPDATED: ${group}/${toolId} -> ${compName}`);
    }
  }
}

console.log(`\n✓ Updated ${updated} pages total`);
