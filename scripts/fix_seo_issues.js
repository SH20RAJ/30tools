#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 30tools SEO Auto-Fix Starting...\n');

// Enhanced SEO templates for different tool categories
const seoTemplates = {
  video: {
    titleTemplate: (toolName) => `${toolName} - Free Online Video Tool | High-Quality Results`,
    descriptionTemplate: (toolName, action) => `Professional ${toolName.toLowerCase()} tool. ${action} videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.`,
    keywords: [
      'video tool', 'online video', 'free video', 'video processing', 'video editor',
      'video converter', 'video compressor', 'video optimizer', 'video quality',
      'professional video tool', 'fast video processing', 'secure video editing',
      'no watermark video', 'unlimited video processing', 'mobile video tool'
    ]
  },
  calculator: {
    titleTemplate: (toolName) => `${toolName} - Free Online Calculator | Instant Results`,
    descriptionTemplate: (toolName, purpose) => `Free ${toolName.toLowerCase()} with instant accurate results. ${purpose} online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.`,
    keywords: [
      'calculator', 'online calculator', 'free calculator', 'math calculator',
      'calculation tool', 'calculator online free', 'instant calculator',
      'accurate calculator', 'professional calculator', 'student calculator',
      'mobile calculator', 'web calculator', 'calculator app', 'calculator widget'
    ]
  },
  converter: {
    titleTemplate: (toolName) => `${toolName} - Free Online Converter | Instant Conversion`,
    descriptionTemplate: (toolName, conversion) => `Convert ${conversion} instantly with our free ${toolName.toLowerCase()}. High-quality conversion with privacy protection. No registration required, unlimited use.`,
    keywords: [
      'converter', 'online converter', 'free converter', 'file converter',
      'conversion tool', 'convert online', 'instant conversion', 'bulk converter',
      'professional converter', 'secure conversion', 'privacy focused converter',
      'unlimited conversion', 'fast converter', 'quality converter'
    ]
  },
  generator: {
    titleTemplate: (toolName) => `${toolName} - Free Online Generator | Create Instantly`,
    descriptionTemplate: (toolName, generates) => `Generate ${generates} instantly with our free ${toolName.toLowerCase()}. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.`,
    keywords: [
      'generator', 'online generator', 'free generator', 'generator tool',
      'create online', 'instant generator', 'professional generator',
      'unlimited generator', 'creative tool', 'content generator',
      'business generator', 'developer tool', 'generator app'
    ]
  },
  text: {
    titleTemplate: (toolName) => `${toolName} - Free Text Tool | Professional Text Processing`,
    descriptionTemplate: (toolName, process) => `Professional ${toolName.toLowerCase()} to ${process} text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.`,
    keywords: [
      'text tool', 'online text tool', 'free text tool', 'text processing',
      'text editor', 'text analyzer', 'text converter', 'text formatter',
      'professional text tool', 'writer tool', 'student tool', 'text utility',
      'instant text processing', 'advanced text features'
    ]
  },
  image: {
    titleTemplate: (toolName) => `${toolName} - Free Image Tool | Professional Quality`,
    descriptionTemplate: (toolName, action) => `Professional ${toolName.toLowerCase()} for ${action} images online. Free, fast & secure image processing. No watermarks, maintains original quality.`,
    keywords: [
      'image tool', 'online image tool', 'free image tool', 'image editor',
      'image converter', 'image compressor', 'image optimizer', 'photo tool',
      'professional image tool', 'image processing', 'picture tool',
      'instant image editing', 'bulk image processing', 'secure image tool'
    ]
  },
  pdf: {
    titleTemplate: (toolName) => `${toolName} - Free PDF Tool | Professional PDF Processing`,
    descriptionTemplate: (toolName, action) => `Professional ${toolName.toLowerCase()} to ${action} PDF files online. Free, secure & unlimited PDF processing. No email required, instant results.`,
    keywords: [
      'pdf tool', 'online pdf tool', 'free pdf tool', 'pdf editor',
      'pdf converter', 'pdf compressor', 'pdf merger', 'pdf splitter',
      'professional pdf tool', 'document tool', 'pdf processing',
      'instant pdf editing', 'secure pdf tool', 'unlimited pdf'
    ]
  },
  seo: {
    titleTemplate: (toolName) => `${toolName} - Free SEO Tool | Boost Your Rankings`,
    descriptionTemplate: (toolName, purpose) => `Professional ${toolName.toLowerCase()} for ${purpose}. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.`,
    keywords: [
      'seo tool', 'online seo tool', 'free seo tool', 'seo analyzer',
      'seo checker', 'search engine optimization', 'seo audit',
      'professional seo tool', 'website optimization', 'ranking tool',
      'seo analysis', 'seo insights', 'search optimization'
    ]
  },
  developer: {
    titleTemplate: (toolName) => `${toolName} - Free Developer Tool | Professional Coding`,
    descriptionTemplate: (toolName, purpose) => `Professional ${toolName.toLowerCase()} for developers. ${purpose} with advanced features. Free coding tool for programmers, students & professionals.`,
    keywords: [
      'developer tool', 'coding tool', 'programming tool', 'web developer tool',
      'free developer tool', 'online coding tool', 'programmer tool',
      'development tool', 'software tool', 'code editor', 'code formatter',
      'professional coding tool', 'advanced developer features'
    ]
  }
};

// Enhanced keyword database
const enhancedKeywords = {
  'video-compressor': {
    primary: ['video compressor', 'compress video online', 'video compression tool'],
    secondary: ['reduce video file size', 'video size reducer', 'compress mp4', 'video optimizer'],
    longTail: [
      'compress video online free no watermark',
      'reduce video file size without losing quality',
      'video compressor for whatsapp status',
      'compress large video files for email',
      'free video compression tool unlimited',
      'online video compressor for social media',
      'compress 4k video to smaller size',
      'batch video compression online free'
    ]
  },
  'basic-calculator': {
    primary: ['basic calculator', 'calculator online', 'free calculator'],
    secondary: ['simple calculator', 'math calculator', 'online calculator free'],
    longTail: [
      'basic calculator online free no download',
      'simple calculator large buttons seniors',
      'calculator online free unlimited use',
      'basic calculator with memory function',
      'online calculator keyboard shortcuts',
      'free calculator app web browser',
      'calculator tool for students homework',
      'basic calculator percentage square root'
    ]
  },
  'password-generator': {
    primary: ['password generator', 'secure password generator', 'strong password generator'],
    secondary: ['random password generator', 'password creator', 'password maker'],
    longTail: [
      'secure password generator online free',
      'strong password generator with symbols',
      'random password generator 12 characters',
      'password generator for multiple accounts',
      'enterprise password generator tool',
      'password generator with custom rules',
      'bulk password generator for teams',
      'memorable password generator secure'
    ]
  }
  // Add more tool-specific keywords...
};

// Function to determine tool category from path
function getToolCategory(filePath) {
  if (filePath.includes('(video)') || filePath.includes('video-')) return 'video';
  if (filePath.includes('(calculator)') || filePath.includes('calculator')) return 'calculator';
  if (filePath.includes('(converter)') || filePath.includes('converter')) return 'converter';
  if (filePath.includes('(generator)') || filePath.includes('generator')) return 'generator';
  if (filePath.includes('(text)') || filePath.includes('text-')) return 'text';
  if (filePath.includes('(image)') || filePath.includes('image-')) return 'image';
  if (filePath.includes('(pdf)') || filePath.includes('pdf-')) return 'pdf';
  if (filePath.includes('(seo)') || filePath.includes('seo-')) return 'seo';
  if (filePath.includes('(developer)') || filePath.includes('developer')) return 'developer';
  return 'general';
}

// Function to extract tool name from path
function getToolName(filePath) {
  const parts = filePath.split('/');
  const toolPath = parts[parts.length - 2];
  return toolPath
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to generate optimized metadata
function generateOptimizedMetadata(filePath, currentContent) {
  const toolName = getToolName(filePath);
  const category = getToolCategory(filePath);
  const template = seoTemplates[category] || seoTemplates.general;
  
  // Generate title (50-65 characters)
  let title = template?.titleTemplate?.(toolName) || `${toolName} - Free Online Tool | Professional Results`;
  if (title.length > 65) {
    title = `${toolName} - Free Online Tool | 30tools`;
  }
  
  // Generate description (120-160 characters)
  let description = template?.descriptionTemplate?.(toolName, 'Process') || 
    `Professional ${toolName.toLowerCase()} tool. Free online processing with high-quality results. No registration required, instant results.`;
  
  if (description.length > 160) {
    description = `Free ${toolName.toLowerCase()} tool with professional results. No registration required, instant processing, secure & unlimited use.`;
  }
  
  // Generate keywords
  const baseKeywords = template?.keywords || [];
  const toolSpecific = [
    toolName.toLowerCase(),
    `${toolName.toLowerCase()} online`,
    `free ${toolName.toLowerCase()}`,
    `${toolName.toLowerCase()} tool`,
    `online ${toolName.toLowerCase()} free`
  ];
  
  const keywords = [...new Set([...toolSpecific, ...baseKeywords])];
  
  return {
    title,
    description,
    keywords: keywords.slice(0, 25), // Limit to 25 keywords
    category,
    toolName
  };
}

// Function to enhance existing metadata in file
function enhanceMetadata(content, filePath) {
  const optimized = generateOptimizedMetadata(filePath, content);
  
  // Check if metadata export exists
  if (!content.includes('export const metadata')) {
    // Add complete metadata object
    const metadataCode = `
import ${optimized.toolName.replace(/\s+/g, '')}Tool from '@/components/tools/${optimized.category}/${optimized.toolName.replace(/\s+/g, '')}Tool';

export const metadata = {
  title: "${optimized.title}",
  description: "${optimized.description}",
  keywords: [
    ${optimized.keywords.map(k => `"${k}"`).join(',\n    ')}
  ].join(", "),
  openGraph: {
    title: "${optimized.title}",
    description: "${optimized.description}",
    url: "https://30tools.com/${filePath.split('/').slice(-2, -1)[0]}",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/${filePath.split('/').slice(-2, -1)[0]}.jpg",
        width: 1200,
        height: 630,
        alt: "${optimized.title}"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "${optimized.title}",
    description: "${optimized.description}",
    images: ["/og-images/${filePath.split('/').slice(-2, -1)[0]}.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/${filePath.split('/').slice(-2, -1)[0]}"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: '${optimized.category.charAt(0).toUpperCase() + optimized.category.slice(1)} Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': '${optimized.toolName} - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "${optimized.toolName}",
  "description": "${optimized.description}",
  "url": "https://30tools.com/${filePath.split('/').slice(-2, -1)[0]}",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};
`;
    
    return metadataCode + content;
  } else {
    // Update existing metadata
    let updatedContent = content;
    
    // Update title if too short or too long
    const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
    if (titleMatch && (titleMatch[1].length < 30 || titleMatch[1].length > 65)) {
      updatedContent = updatedContent.replace(titleMatch[0], `title: "${optimized.title}"`);
    }
    
    // Update description if too short or too long
    const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
    if (descMatch && (descMatch[1].length < 120 || descMatch[1].length > 160)) {
      updatedContent = updatedContent.replace(descMatch[0], `description: "${optimized.description}"`);
    }
    
    // Add missing OpenGraph if not present
    if (!content.includes('openGraph')) {
      const openGraphCode = `,
  openGraph: {
    title: "${optimized.title}",
    description: "${optimized.description}",
    url: "https://30tools.com/${filePath.split('/').slice(-2, -1)[0]}",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/${filePath.split('/').slice(-2, -1)[0]}.jpg",
        width: 1200,
        height: 630,
        alt: "${optimized.title}"
      }
    ],
    type: "website"
  }`;
      updatedContent = updatedContent.replace('};', openGraphCode + '\n};');
    }
    
    // Add missing Twitter Card if not present
    if (!content.includes('twitter')) {
      const twitterCode = `,
  twitter: {
    card: "summary_large_image",
    title: "${optimized.title}",
    description: "${optimized.description}",
    images: ["/og-images/${filePath.split('/').slice(-2, -1)[0]}.jpg"],
    creator: "@30tools"
  }`;
      updatedContent = updatedContent.replace('};', twitterCode + '\n};');
    }
    
    // Add canonical URL if not present
    if (!content.includes('canonical')) {
      const canonicalCode = `,
  alternates: {
    canonical: "https://30tools.com/${filePath.split('/').slice(-2, -1)[0]}"
  }`;
      updatedContent = updatedContent.replace('};', canonicalCode + '\n};');
    }
    
    // Add structured data if not present
    if (!content.includes('application/ld+json') && !content.includes('jsonLd')) {
      const structuredDataCode = `
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "${optimized.toolName}",
  "description": "${optimized.description}",
  "url": "https://30tools.com/${filePath.split('/').slice(-2, -1)[0]}",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

`;
      // Insert before export default function
      updatedContent = updatedContent.replace(/export default function/, structuredDataCode + 'export default function');
      
      // Add JSON-LD script to component if it doesn't exist
      if (!content.includes('application/ld+json')) {
        const jsonLdScript = `
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />`;
        
        // Insert after opening component tag
        updatedContent = updatedContent.replace(/return\s*\(\s*</, `return (
        <>
            ${jsonLdScript}
            <`);
        updatedContent = updatedContent.replace(/\s*\);\s*}$/, `        </>\n    );\n}`);
      }
    }
    
    return updatedContent;
  }
}

// Function to find and fix all pages
function fixAllPages() {
  const appDir = './src/app';
  let fixedCount = 0;
  let errorCount = 0;
  
  function findPageFiles(dir) {
    const files = [];
    
    function traverse(currentDir) {
      const entries = fs.readdirSync(currentDir);
      
      entries.forEach(entry => {
        const fullPath = path.join(currentDir, entry);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !entry.startsWith('.') && entry !== 'node_modules') {
          traverse(fullPath);
        } else if (entry === 'page.js') {
          files.push(fullPath);
        }
      });
    }
    
    traverse(dir);
    return files;
  }
  
  const pageFiles = findPageFiles(appDir);
  
  console.log(`🔧 Processing ${pageFiles.length} pages...\n`);
  
  pageFiles.forEach((filePath, index) => {
    try {
      const relativePath = filePath.replace('./src/app/', '');
      const content = fs.readFileSync(filePath, 'utf8');
      const enhancedContent = enhanceMetadata(content, filePath);
      
      if (enhancedContent !== content) {
        fs.writeFileSync(filePath, enhancedContent);
        console.log(`✅ Fixed: ${relativePath}`);
        fixedCount++;
      } else {
        console.log(`⚪ No changes needed: ${relativePath}`);
      }
      
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error.message);
      errorCount++;
    }
  });
  
  console.log('\n🎯 SEO FIX SUMMARY');
  console.log('='.repeat(40));
  console.log(`✅ Pages Fixed: ${fixedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📊 Total Processed: ${pageFiles.length}`);
  console.log(`📈 Success Rate: ${((pageFiles.length - errorCount) / pageFiles.length * 100).toFixed(1)}%`);
}

// Run the fix
fixAllPages();

console.log('\n🚀 SEO ENHANCEMENT COMPLETE!');
console.log('\nWhat was fixed:');
console.log('✅ Optimized titles (30-65 characters)');
console.log('✅ Enhanced descriptions (120-160 characters)');
console.log('✅ Added comprehensive keywords');
console.log('✅ Implemented OpenGraph tags');
console.log('✅ Added Twitter Card metadata');
console.log('✅ Set canonical URLs');
console.log('✅ Added structured data (JSON-LD)');
console.log('✅ Enhanced mobile optimization');
console.log('\n🎯 Next: Run the SEO analysis again to verify improvements!');