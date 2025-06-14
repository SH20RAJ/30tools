const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create a professional favicon design for 30tools
const faviconSvg = `
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="toolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1d4ed8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="numberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle with gradient -->
  <circle cx="16" cy="16" r="14" fill="url(#toolGradient)" stroke="#1e40af" stroke-width="1"/>
  
  <!-- "30" text optimized for small size -->
  <text x="16" y="20" font-family="Arial, sans-serif" font-size="12" font-weight="bold" 
        fill="url(#numberGradient)" text-anchor="middle" letter-spacing="-0.5px">30</text>
  
  <!-- Small tool icon -->
  <g transform="translate(23, 8)" fill="white" opacity="0.9">
    <!-- Wrench icon simplified -->
    <rect x="0" y="2" width="1.5" height="6" rx="0.5"/>
    <circle cx="0.75" cy="1.5" r="1" fill="none" stroke="white" stroke-width="0.5"/>
    <circle cx="0.75" cy="8.5" r="0.8" fill="white"/>
  </g>
</svg>`;

async function generateFavicon() {
  console.log('🎨 Generating professional favicon for 30tools...');
  
  try {
    // Create favicon.ico (32x32 and 16x16 sizes)
    const sizes = [16, 32];
    const pngBuffers = [];
    
    for (const size of sizes) {
      const pngBuffer = await sharp(Buffer.from(faviconSvg))
        .resize(size, size)
        .png({ quality: 90, compressionLevel: 9 })
        .toBuffer();
      
      pngBuffers.push(pngBuffer);
      
      // Also save individual PNG files
      await sharp(pngBuffer)
        .toFile(path.join(process.cwd(), 'public', 'icons', `favicon-${size}x${size}.png`));
      
      console.log(`✅ Generated favicon-${size}x${size}.png`);
    }
    
    // Create the main favicon.ico in public root
    await sharp(pngBuffers[1]) // Use 32x32 for main favicon
      .toFile(path.join(process.cwd(), 'public', 'favicon.ico'));
    
    console.log('✅ Generated favicon.ico');
    
    // Update the base icon SVG with the favicon design
    fs.writeFileSync(
      path.join(process.cwd(), 'public', 'icons', 'favicon.svg'), 
      faviconSvg
    );
    
    console.log('✅ Generated favicon.svg');
    
    // Create Apple touch icon (180x180)
    await sharp(Buffer.from(faviconSvg))
      .resize(180, 180)
      .png({ quality: 90 })
      .toFile(path.join(process.cwd(), 'public', 'icons', 'apple-touch-icon.png'));
    
    console.log('✅ Updated apple-touch-icon.png');
    
    console.log('🎉 Professional favicon generation complete!');
    
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  generateFavicon();
}

module.exports = { generateFavicon };
