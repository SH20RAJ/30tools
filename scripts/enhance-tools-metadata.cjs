#!/usr/bin/env node

/**
 * Enhance Tools Metadata Script
 * Systematically improves metadata for all tools in tools.json
 */

const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

// Helper functions
function generateExtraSlugs(toolName, category, existingSlugs = []) {
  const baseName = toolName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  
  const newSlugs = [
    `${baseName}-online-free`,
    `free-${baseName}-no-signup`,
    `${baseName}-tool-online`,
    `best-free-${baseName}`,
    `${baseName}-without-registration`,
    `online-${baseName}-free`,
    `${baseName}-browser-based`,
    `${baseName}-no-download`,
    `${baseName}-instant-online`,
    `${baseName}-privacy-focused`,
    `${baseName}-web-based`,
    `${baseName}-no-install`,
    `free-online-${baseName}`,
    `${baseName}-secure-online`,
    `${baseName}-fast-processing`,
  ];
  
  // Filter out duplicates and existing slugs
  return [...new Set([...existingSlugs, ...newSlugs])].slice(0, 15);
}

function generateDefaultFAQs(toolName) {
  return [
    {
      question: `What is ${toolName}?`,
      answer: `${toolName} is a free online tool that helps you process files quickly and easily. It works directly in your browser with no signup or software installation required.`
    },
    {
      question: `Is ${toolName} free to use?`,
      answer: `Yes, ${toolName} is completely free with no hidden costs, subscriptions, or limitations. You can use it as many times as you need without any restrictions.`
    },
    {
      question: `Do I need to create an account to use ${toolName}?`,
      answer: `No account creation is required. Simply visit the page and start using ${toolName} immediately. We respect your privacy and don't require any personal information.`
    },
    {
      question: `Is my data safe when using ${toolName}?`,
      answer: `Yes, your data is completely safe. ${toolName} processes everything in your browser, meaning your files never leave your device. We don't store, collect, or share any of your data.`
    },
    {
      question: `Can I use ${toolName} on mobile devices?`,
      answer: `Yes, ${toolName} is fully responsive and works on all devices including smartphones, tablets, and desktop computers. The interface adapts to your screen size for optimal usability.`
    },
  ];
}

function generateDefaultHowTo(toolName) {
  return [
    {
      title: `Open ${toolName}`,
      description: `Navigate to the ${toolName} page on 30tools. No signup or download required - the tool loads instantly in your browser.`
    },
    {
      title: 'Upload Your File',
      description: 'Click the upload button or drag and drop your file into the designated area. Your file will be loaded securely in your browser.'
    },
    {
      title: 'Configure Settings',
      description: 'Adjust any settings or options according to your needs. The tool provides intuitive controls for customization.'
    },
    {
      title: 'Process Your File',
      description: `Click the process button and wait a few seconds while ${toolName} works on your file. Processing happens entirely in your browser.`
    },
    {
      title: 'Download Result',
      description: 'Once processing is complete, download your result file. You can process additional files or close the page - nothing is stored on our servers.'
    },
  ];
}

function generateDefaultFeatures(toolName) {
  return [
    `Free online ${toolName.toLowerCase()} with no signup required`,
    'Fast processing directly in your browser',
    'Privacy-first - your files never leave your device',
    'No file size limits or usage restrictions',
    'Works on all devices - desktop, mobile, and tablet',
    'No watermarks on output files',
    'Unlimited usage with no daily limits',
    'Simple, intuitive interface for everyone',
  ];
}

function generateArticle(toolName, category) {
  return `
## What is ${toolName}?

${toolName} is a powerful, free online tool designed to help you work with files quickly and efficiently. Whether you're a professional, student, or casual user, our tool provides a simple, intuitive interface that gets the job done without any hassle.

Unlike many online tools that require registration, subscriptions, or software downloads, ${toolName} works entirely in your browser. This means you can start using it immediately without creating an account or sharing any personal information.

## Why Choose Our ${toolName}?

### 🚀 Fast and Efficient
Our ${toolName} is optimized for speed and performance. Most operations complete in seconds, allowing you to work efficiently without waiting.

### 🔒 Privacy-Focused
Your privacy is our top priority. All processing happens directly in your browser, meaning your files never leave your device. We don't store, collect, or share any of your data.

### 💯 Completely Free
There are no hidden costs, premium tiers, or usage limits. ${toolName} is 100% free to use, forever.

### 📱 Works Everywhere
Use ${toolName} on any device - desktop, laptop, tablet, or smartphone. The responsive design adapts to your screen size for optimal usability.

### 🎯 No Signup Required
Start using ${toolName} immediately without creating an account, providing an email address, or downloading any software.

## Common Use Cases

### Professional Use
Professionals use ${toolName} for their daily workflow tasks. The tool's reliability and speed make it perfect for business environments where time is valuable.

### Educational Purposes
Students and educators find ${toolName} helpful for academic projects and assignments. It's a great resource for learning and teaching.

### Personal Projects
Whether you're working on a personal project or just need to process files quickly, ${toolName} provides the functionality you need without complexity.

## Tips for Best Results

1. **Prepare Your Files**: Ensure your files are in a supported format before uploading for faster processing.

2. **Check Settings**: Review all available settings to customize the output according to your specific needs.

3. **Use Modern Browsers**: For best performance, use the latest version of Chrome, Firefox, Safari, or Edge.

4. **Consider File Size**: While ${toolName} can handle large files, smaller files process faster and are easier to work with.

5. **Save Your Work**: Always download your results immediately after processing. Since we don't store files, closing the page will lose your work.

## Get Started Now

Ready to use ${toolName}? Simply scroll up and start using the tool - no signup required. If you have any questions or feedback, feel free to contact us.
`;
}

// Main enhancement function
function enhanceTools() {
  let enhancedCount = 0;
  let totalTools = 0;
  
  console.log('🔧 Enhancing tools metadata...\n');
  
  for (const [categoryKey, categoryData] of Object.entries(toolsData.categories || {})) {
    if (!categoryData.tools || !Array.isArray(categoryData.tools)) continue;
    
    for (let i = 0; i < categoryData.tools.length; i++) {
      const tool = categoryData.tools[i];
      totalTools++;
      let wasEnhanced = false;
      
      // Enhance extra slugs
      if (!tool.extraSlugs || tool.extraSlugs.length < 10) {
        tool.extraSlugs = generateExtraSlugs(tool.name, categoryKey, tool.extraSlugs || []);
        wasEnhanced = true;
      }
      
      // Add FAQs if missing
      if (!tool.faqs || tool.faqs.length < 5) {
        tool.faqs = generateDefaultFAQs(tool.name);
        wasEnhanced = true;
      }
      
      // Add HowTo if missing
      if (!tool.howTo || tool.howTo.length < 5) {
        tool.howTo = generateDefaultHowTo(tool.name);
        wasEnhanced = true;
      }
      
      // Add features if missing
      if (!tool.features || tool.features.length < 5) {
        tool.features = generateDefaultFeatures(tool.name);
        wasEnhanced = true;
      }
      
      // Add article if missing or too short
      if (!tool.article || tool.article.length < 500) {
        tool.article = generateArticle(tool.name, categoryKey);
        wasEnhanced = true;
      }
      
      if (wasEnhanced) {
        enhancedCount++;
        console.log(`✓ Enhanced: ${tool.name} (${tool.route})`);
      }
    }
  }
  
  // Update metadata
  toolsData.metadata.lastUpdated = new Date().toISOString().split('T')[0];
  toolsData.metadata.version = (parseFloat(toolsData.metadata.version) + 0.1).toFixed(1);
  
  // Save enhanced tools.json
  fs.writeFileSync(toolsPath, JSON.stringify(toolsData, null, 2));
  
  console.log(`\n✅ Enhancement complete!`);
  console.log(`   Total tools: ${totalTools}`);
  console.log(`   Enhanced: ${enhancedCount}`);
  console.log(`   Skipped: ${totalTools - enhancedCount}`);
  console.log(`\n📄 Updated: ${toolsPath}\n`);
}

// Run enhancement
try {
  enhanceTools();
} catch (error) {
  console.error('❌ Error enhancing tools:', error.message);
  process.exit(1);
}
