const fs = require('fs');

// Read the actual source files to extract sets and keys

// 1. Extract TOOL_COMPONENTS keys from tool-registry.tsx
const toolRegistryContent = fs.readFileSync('src/lib/tool-registry.tsx', 'utf8');
const toolComponentsMatch = toolRegistryContent.match(/export const TOOL_COMPONENTS: Record<string, ComponentType<any>> = \{([\s\S]*?)\};/);
const TOOL_COMPONENTS = new Set();
if (toolComponentsMatch) {
  const objBody = toolComponentsMatch[1];
  const keyRegex = /['"]([^'"]+)['"]\s*:\s*dynamic/g;
  let match;
  while ((match = keyRegex.exec(objBody)) !== null) {
    TOOL_COMPONENTS.add(match[1]);
  }
}

// 2. Extract DOWNLOADER_ALIAS_IDS
const downloaderAliasMatch = toolRegistryContent.match(/const DOWNLOADER_ALIAS_IDS = new Set\(\[([\s\S]*?)\]\);/);
const DOWNLOADER_ALIAS_IDS = new Set();
if (downloaderAliasMatch) {
  const ids = downloaderAliasMatch[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean);
  ids.forEach(id => DOWNLOADER_ALIAS_IDS.add(id));
}

// 3. Extract TEXT_GENERATOR_IDS
const textGeneratorMatch = toolRegistryContent.match(/const TEXT_GENERATOR_IDS = new Set\(\[([\s\S]*?)\]\);/);
const TEXT_GENERATOR_IDS = new Set();
if (textGeneratorMatch) {
  const ids = textGeneratorMatch[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean);
  ids.forEach(id => TEXT_GENERATOR_IDS.add(id));
}

// 4. Extract from tool-id-registry.ts
const toolIdRegistryContent = fs.readFileSync('src/components/tools/shared/tool-id-registry.ts', 'utf8');

// UNIT_TOOL_MAP
const unitToolMapMatch = toolIdRegistryContent.match(/export const UNIT_TOOL_MAP: Record<string, UnitPreset> = \{([\s\S]*?)\};/);
const UNIT_TOOL_MAP_KEYS = new Set();
if (unitToolMapMatch) {
  const body = unitToolMapMatch[1];
  const keyRegex = /['"]([^'"]+)['"]\s*:/g;
  let match;
  while ((match = keyRegex.exec(body)) !== null) {
    UNIT_TOOL_MAP_KEYS.add(match[1]);
  }
}

// BASE_CONVERTER_MAP
const baseConverterMapMatch = toolIdRegistryContent.match(/export const BASE_CONVERTER_MAP: Record<string, BaseConverterKind> = \{([\s\S]*?)\};/);
const BASE_CONVERTER_MAP_KEYS = new Set();
if (baseConverterMapMatch) {
  const body = baseConverterMapMatch[1];
  const keyRegex = /['"]([^'"]+)['"]\s*:/g;
  let match;
  while ((match = keyRegex.exec(body)) !== null) {
    BASE_CONVERTER_MAP_KEYS.add(match[1]);
  }
}

// IMAGE_FORMAT_TOOL_MAP
const imageFormatMapMatch = toolIdRegistryContent.match(/export const IMAGE_FORMAT_TOOL_MAP: Record<string, string> = \{([\s\S]*?)\};/);
const IMAGE_FORMAT_TOOL_MAP_KEYS = new Set();
if (imageFormatMapMatch) {
  const body = imageFormatMapMatch[1];
  const keyRegex = /['"]([^'"]+)['"]\s*:/g;
  let match;
  while ((match = keyRegex.exec(body)) !== null) {
    IMAGE_FORMAT_TOOL_MAP_KEYS.add(match[1]);
  }
}

// 5. Extract from RegisteredToolMount.tsx
const registeredMountContent = fs.readFileSync('src/components/tools/shared/RegisteredToolMount.tsx', 'utf8');

// CALC_IDS
const calcMatch = registeredMountContent.match(/const CALC_IDS = new Set\(\[([\s\S]*?)\]\);/);
const CALC_IDS = new Set();
if (calcMatch) {
  const ids = calcMatch[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean);
  ids.forEach(id => CALC_IDS.add(id));
}

// MARKUP_IDS
const markupMatch = registeredMountContent.match(/const MARKUP_IDS = new Set\(\[([\s\S]*?)\]\);/);
const MARKUP_IDS = new Set();
if (markupMatch) {
  const ids = markupMatch[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean);
  ids.forEach(id => MARKUP_IDS.add(id));
}

// SERIAL_IDS
const serialMatch = registeredMountContent.match(/const SERIAL_IDS = new Set\(\[([\s\S]*?)\]\);/);
const SERIAL_IDS = new Set();
if (serialMatch) {
  const ids = serialMatch[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean);
  ids.forEach(id => SERIAL_IDS.add(id));
}

// SAFE_HTTP_IDS
const safeHttpMatch = registeredMountContent.match(/const SAFE_HTTP_IDS = new Set\(\[([\s\S]*?)\]\);/);
const SAFE_HTTP_IDS = new Set();
if (safeHttpMatch) {
  const ids = safeHttpMatch[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean);
  ids.forEach(id => SAFE_HTTP_IDS.add(id));
}

// Inline utility IDs and mini component IDs (hardcoded as per file)
const inlineUtilityIds = new Set([
  'number-to-roman-numerals','roman-numerals-to-number',
  'rgb-to-hex-converter','color-converter','hex-to-rgb-converter',
  'random-uuid-generator','credit-card-generator','credit-card-validator',
  'url-encode','url-decode',
  'url-parser','url-opener','url-rewriting-tool',
  'what-is-my-screen-resolution','screen-resolution-simulator',
  'what-is-my-user-agent',
  'what-is-my-browser',
  'what-is-my-ip-address',
  'domain-to-ip-converter',
  'dns-records-checker',
  'meta-tag-generator','open-graph-generator','twitter-card-generator','faq-schema-generator','htaccess-redirect-generator',
  'privacy-policy-generator','terms-and-condition-generator','disclaimer-generator',
  'convert-srt-to-vtt','convert-vtt-to-srt',
  'number-to-word-converter','word-to-number-converter',
  'json-editor','json-viewer','json-validator',
  'bulk-keyword-rank-checker'
]);

const miniComponentIds = new Set([
  'word-counter',
  'text-compare',
  'text-repeater',
  'remove-line-breaks',
  'comma-separator',
  'text-to-slug-converter',
  'text-to-hashtags-converter',
  'text-to-tags-converter'
]);

// Compile covered set
const covered = new Set();

function addAll(set) { for (const id of set) covered.add(id); }

addAll(TOOL_COMPONENTS);
addAll(DOWNLOADER_ALIAS_IDS);
addAll(TEXT_GENERATOR_IDS);
addAll(UNIT_TOOL_MAP_KEYS);
addAll(BASE_CONVERTER_MAP_KEYS);
addAll(IMAGE_FORMAT_TOOL_MAP_KEYS);
addAll(CALC_IDS);
addAll(MARKUP_IDS);
addAll(SERIAL_IDS);
addAll(SAFE_HTTP_IDS);
addAll(inlineUtilityIds);
addAll(miniComponentIds);

// Process actual tools from JSON
const toolsData = JSON.parse(fs.readFileSync('all-tools.json', 'utf8'));

// Filter actual tools
const nonToolCategories = new Set(['others', 'company', 'content']);
const landingPageIds = new Set([
  'downloaders','image-tools','video-tools','audio-tools','pdf-tools',
  'text-tools','other-tools','all-downloaders'
]);

const actualTools = toolsData.filter(t => 
  !nonToolCategories.has(t.category) && !landingPageIds.has(t.id)
);

// Apply fallback patterns for generic tools
for (const tool of actualTools) {
  const id = tool.id;
  if (id.startsWith('youtube-') && !covered.has(id)) {
    covered.add(id);
  }
  if ((id.includes('downloader') || id.includes('extractor')) && !covered.has(id)) {
    covered.add(id);
  }
  if (id.includes('api-key-tester') && !covered.has(id)) {
    covered.add(id);
  }
}

// Compute placeholders
const placeholderTools = actualTools.filter(t => !covered.has(t.id));

const result = {
  placeholderTools: placeholderTools,
  totalPlaceholderCount: placeholderTools.length,
  analysis: {
    totalToolsInJson: actualTools.length,
    coveredToolsCount: actualTools.length - placeholderTools.length,
    placeholderPercentage: ((placeholderTools.length / actualTools.length) * 100).toFixed(2) + '%'
  }
};

fs.writeFileSync('coverage-analysis.json', JSON.stringify(result, null, 2));
console.log('Analysis complete. Total tools:', actualTools.length, 'Covered:', actualTools.length - placeholderTools.length, 'Placeholders:', placeholderTools.length);
