const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Create a base SVG icon for 30tools
const baseSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0066cc;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#004499;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle -->
  <circle cx="256" cy="256" r="240" fill="url(#gradient)" stroke="#ffffff" stroke-width="8"/>
  
  <!-- "30" text -->
  <text x="180" y="280" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="white" text-anchor="middle">30</text>
  
  <!-- Tools icon -->
  <g transform="translate(300, 200)">
    <!-- Wrench -->
    <rect x="20" y="40" width="8" height="80" fill="white" rx="4"/>
    <circle cx="24" cy="35" r="12" fill="none" stroke="white" stroke-width="4"/>
    <circle cx="24" cy="125" r="8" fill="white"/>
    
    <!-- Screwdriver -->
    <rect x="40" y="50" width="6" height="70" fill="white" rx="3"/>
    <rect x="37" y="45" width="12" height="8" fill="white" rx="2"/>
    
    <!-- Hammer -->
    <rect x="60" y="60" width="5" height="60" fill="white" rx="2"/>
    <rect x="55" y="55" width="15" height="10" fill="white" rx="3"/>
  </g>
</svg>`;

// Icon sizes needed
const iconSizes = [16, 32, 48, 72, 96, 128, 144, 152, 180, 192, 384, 512];

// Special icons
const specialIcons = {
  "apple-touch-icon.png": 180,
  "favicon.ico": 32,
};

async function generateIcons() {
  console.log("🎨 Generating icons for 30tools...");

  // Create base SVG file
  const svgPath = path.join(process.cwd(), "public", "icons", "base-icon.svg");
  fs.writeFileSync(svgPath, baseSvg);

  // Generate PNG icons for all sizes
  for (const size of iconSizes) {
    const filename = `icon-${size}x${size}.png`;
    const outputPath = path.join(process.cwd(), "public", "icons", filename);

    await sharp(Buffer.from(baseSvg))
      .resize(size, size)
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outputPath);

    console.log(`✅ Generated ${filename}`);
  }

  // Generate special icons
  for (const [filename, size] of Object.entries(specialIcons)) {
    const outputPath = path.join(process.cwd(), "public", "icons", filename);

    if (filename.endsWith(".ico")) {
      // Generate ICO file
      await sharp(Buffer.from(baseSvg))
        .resize(size, size)
        .png()
        .toFile(outputPath.replace(".ico", ".png"));

      // Note: For actual ICO conversion, you might want to use a dedicated library
      console.log(
        `✅ Generated ${filename} (as PNG, convert to ICO if needed)`,
      );
    } else {
      await sharp(Buffer.from(baseSvg))
        .resize(size, size)
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputPath);

      console.log(`✅ Generated ${filename}`);
    }
  }

  // Generate Safari pinned tab SVG (monochrome)
  const safariSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <!-- Simplified monochrome version -->
  <circle cx="256" cy="256" r="240" fill="black"/>
  <text x="180" y="280" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="white" text-anchor="middle">30</text>
  <g transform="translate(300, 200)" fill="white">
    <rect x="20" y="40" width="8" height="80" rx="4"/>
    <circle cx="24" cy="35" r="12" fill="none" stroke="white" stroke-width="4"/>
    <circle cx="24" cy="125" r="8"/>
    <rect x="40" y="50" width="6" height="70" rx="3"/>
    <rect x="37" y="45" width="12" height="8" rx="2"/>
    <rect x="60" y="60" width="5" height="60" rx="2"/>
    <rect x="55" y="55" width="15" height="10" rx="3"/>
  </g>
</svg>`;

  const safariSvgPath = path.join(
    process.cwd(),
    "public",
    "icons",
    "safari-pinned-tab.svg",
  );
  fs.writeFileSync(safariSvgPath, safariSvg);
  console.log("✅ Generated safari-pinned-tab.svg");

  // Generate compress icon for shortcuts
  const compressSvg = `
<svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
  <circle cx="48" cy="48" r="44" fill="#0066cc"/>
  <g transform="translate(48, 48)" fill="white">
    <!-- Compress arrows -->
    <polygon points="-15,-10 -5,-10 -10,-20" />
    <polygon points="15,10 5,10 10,20" />
    <polygon points="-10,-5 -10,-15 -20,-10" />
    <polygon points="10,5 10,15 20,10" />
    <!-- Center square -->
    <rect x="-8" y="-8" width="16" height="16" rx="2"/>
  </g>
</svg>`;

  await sharp(Buffer.from(compressSvg))
    .resize(96, 96)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(process.cwd(), "public", "icons", "compress-96x96.png"));

  console.log("✅ Generated compress-96x96.png");

  console.log("🎉 All icons generated successfully!");
}

// Also generate OG image and screenshots
async function generateOGImage() {
  console.log("📸 Generating OG image and screenshots...");

  const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  
  <!-- Main content -->
  <g transform="translate(100, 100)">
    <!-- Logo -->
    <circle cx="80" cy="80" r="60" fill="#0066cc"/>
    <text x="80" y="95" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle">30</text>
    
    <!-- Title -->
    <text x="200" y="70" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#1e293b">30tools</text>
    <text x="200" y="120" font-family="Arial, sans-serif" font-size="24" fill="#64748b">Free Online Toolkit</text>
    
    <!-- Features -->
    <text x="200" y="180" font-family="Arial, sans-serif" font-size="20" fill="#475569">✨ Image, Video, Audio, PDF Tools</text>
    <text x="200" y="220" font-family="Arial, sans-serif" font-size="20" fill="#475569">🔒 Privacy-First Processing</text>
    <text x="200" y="260" font-family="Arial, sans-serif" font-size="20" fill="#475569">⚡ Lightning Fast</text>
    <text x="200" y="300" font-family="Arial, sans-serif" font-size="20" fill="#475569">📱 Mobile Friendly</text>
  </g>
  
  <!-- URL -->
  <text x="600" y="580" font-family="Arial, sans-serif" font-size="18" fill="#94a3b8" text-anchor="middle">30tools.com</text>
</svg>`;

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .jpeg({ quality: 90 })
    .toFile(path.join(process.cwd(), "public", "og-image.jpg"));

  console.log("✅ Generated og-image.jpg");

  // Generate desktop screenshot
  const desktopScreenshot = `
<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <!-- Browser mockup -->
  <rect width="1280" height="720" fill="#f1f5f9"/>
  <rect x="20" y="20" width="1240" height="680" fill="white" rx="8"/>
  
  <!-- Browser header -->
  <rect x="20" y="20" width="1240" height="40" fill="#e2e8f0" rx="8 8 0 0"/>
  <circle cx="50" cy="40" r="6" fill="#ef4444"/>
  <circle cx="70" cy="40" r="6" fill="#f59e0b"/>
  <circle cx="90" cy="40" r="6" fill="#10b981"/>
  
  <!-- Content -->
  <text x="640" y="150" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#1e293b" text-anchor="middle">30tools</text>
  <text x="640" y="200" font-family="Arial, sans-serif" font-size="24" fill="#64748b" text-anchor="middle">Your Ultimate Online Toolkit</text>
  
  <!-- Tool cards mockup -->
  <rect x="200" y="300" width="200" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" rx="8"/>
  <text x="300" y="340" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Image Tools</text>
  
  <rect x="440" y="300" width="200" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" rx="8"/>
  <text x="540" y="340" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Video Tools</text>
  
  <rect x="680" y="300" width="200" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" rx="8"/>
  <text x="780" y="340" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">PDF Tools</text>
</svg>`;

  await sharp(Buffer.from(desktopScreenshot))
    .resize(1280, 720)
    .png({ quality: 90 })
    .toFile(path.join(process.cwd(), "public", "screenshots", "desktop.png"));

  console.log("✅ Generated desktop.png");

  // Generate mobile screenshot
  const mobileScreenshot = `
<svg width="390" height="844" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
  <!-- Mobile mockup -->
  <rect width="390" height="844" fill="#f1f5f9"/>
  <rect x="10" y="50" width="370" height="744" fill="white" rx="20"/>
  
  <!-- Header -->
  <text x="195" y="150" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#1e293b" text-anchor="middle">30tools</text>
  <text x="195" y="180" font-family="Arial, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Free Online Toolkit</text>
  
  <!-- Tool cards -->
  <rect x="30" y="220" width="330" height="80" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="8"/>
  <text x="195" y="250" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Image Compressor</text>
  
  <rect x="30" y="320" width="330" height="80" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="8"/>
  <text x="195" y="350" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Video Converter</text>
</svg>`;

  await sharp(Buffer.from(mobileScreenshot))
    .resize(390, 844)
    .png({ quality: 90 })
    .toFile(path.join(process.cwd(), "public", "screenshots", "mobile.png"));

  console.log("✅ Generated mobile.png");

  console.log("📸 All images generated successfully!");
}

// Run the generation
async function main() {
  try {
    await generateIcons();
    await generateOGImage();
    console.log("🚀 All assets generated successfully!");
  } catch (error) {
    console.error("❌ Error generating assets:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateIcons, generateOGImage };
