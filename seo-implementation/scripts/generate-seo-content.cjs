#!/usr/bin/env node

/**
 * SEO Content Generator
 * Generates enhanced metadata, FAQs, and HowTo content for tools
 */

const fs = require('fs');
const path = require('path');

// Content templates
const templates = {
  // Generate title variations
  generateTitle: (toolName, category) => {
    const patterns = [
      `Free ${toolName} Online - No Signup | 30tools`,
      `${toolName} - Free Online Tool | 30tools`,
      `Online ${toolName} - 100% Free | 30tools`,
      `${toolName} Tool - No Registration Required | 30tools`,
    ];
    return patterns[0]; // Use first pattern as default
  },

  // Generate description
  generateDescription: (toolName, action, benefits) => {
    return `${action} with our free ${toolName} online. ${benefits.join('. ')}. No signup required, 100% free, privacy-first. Try now!`;
  },

  // Generate extra slugs
  generateExtraSlugs: (toolName, category) => {
    const baseName = toolName.toLowerCase().replace(/\s+/g, '-');
    const slugs = [
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
    ];
    
    // Add category-specific slugs
    if (category === 'image') {
      slugs.push(
        `${baseName}-for-web`,
        `${baseName}-high-quality`,
        `${baseName}-bulk-processing`
      );
    } else if (category === 'pdf') {
      slugs.push(
        `${baseName}-secure`,
        `${baseName}-fast-processing`,
        `${baseName}-unlimited`
      );
    } else if (category === 'video') {
      slugs.push(
        `${baseName}-hd-quality`,
        `${baseName}-with-audio`,
        `${baseName}-mp4`
      );
    }
    
    return slugs;
  },

  // Generate FAQs
  generateFAQs: (toolName, category) => {
    return [
      {
        question: `What is ${toolName}?`,
        answer: `${toolName} is a free online tool that allows you to [describe main function]. It works directly in your browser with no signup or software installation required.`
      },
      {
        question: `Is ${toolName} free to use?`,
        answer: `Yes, ${toolName} is completely free with no hidden costs, subscriptions, or limitations. You can use it as many times as you need without any restrictions.`
      },
      {
        question: `Do I need to create an account?`,
        answer: `No account creation is required. Simply visit the page and start using ${toolName} immediately. We respect your privacy and don't require any personal information.`
      },
      {
        question: `Is my data safe and private?`,
        answer: `Yes, your data is completely safe. ${toolName} processes everything in your browser, meaning your files never leave your device. We don't store, collect, or share any of your data.`
      },
      {
        question: `What file formats are supported?`,
        answer: `${toolName} supports all common file formats including [list formats]. If you need support for a specific format, please contact us.`
      },
      {
        question: `Can I use ${toolName} on mobile devices?`,
        answer: `Yes, ${toolName} is fully responsive and works on all devices including smartphones, tablets, and desktop computers. The interface adapts to your screen size for optimal usability.`
      },
      {
        question: `Are there any file size limits?`,
        answer: `${toolName} can handle files of various sizes. For best performance, we recommend files under [size limit]. Larger files may take longer to process depending on your device.`
      },
      {
        question: `How long does processing take?`,
        answer: `Processing time depends on your file size and device performance. Most operations complete in seconds. Since everything runs in your browser, faster devices will process files more quickly.`
      },
    ];
  },

  // Generate HowTo steps
  generateHowTo: (toolName, category) => {
    const baseSteps = [
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
    
    return baseSteps;
  },

  // Generate article content
  generateArticle: (toolName, category) => {
    return `
## What is ${toolName}?

${toolName} is a powerful, free online tool designed to help you [describe main function] quickly and easily. Whether you're a professional, student, or casual user, our tool provides a simple, intuitive interface that gets the job done without any hassle.

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
Professionals use ${toolName} for [describe professional use case]. The tool's reliability and speed make it perfect for business environments where time is valuable.

### Educational Purposes
Students and educators find ${toolName} helpful for [describe educational use case]. It's a great resource for academic projects and assignments.

### Personal Projects
Whether you're working on a personal project or just need to [describe personal use case], ${toolName} provides the functionality you need without complexity.

## Tips for Best Results

1. **Prepare Your Files**: Ensure your files are in a supported format before uploading for faster processing.

2. **Check Settings**: Review all available settings to customize the output according to your specific needs.

3. **Use Modern Browsers**: For best performance, use the latest version of Chrome, Firefox, Safari, or Edge.

4. **Consider File Size**: While ${toolName} can handle large files, smaller files process faster and are easier to work with.

5. **Save Your Work**: Always download your results immediately after processing. Since we don't store files, closing the page will lose your work.

## Frequently Asked Questions

See the FAQ section above for answers to common questions about ${toolName}.

## Get Started Now

Ready to use ${toolName}? Simply scroll up and start using the tool - no signup required. If you have any questions or feedback, feel free to contact us.

## Related Tools

Looking for similar tools? Check out our other [category] tools that might help with your workflow.
`;
  },
};

// Generate enhanced metadata for a tool
function generateEnhancedMetadata(tool, category) {
  const toolName = tool.name;
  
  return {
    title: templates.generateTitle(toolName, category),
    description: templates.generateDescription(
      toolName,
      `Process ${toolName.toLowerCase()}`,
      ['Fast processing', 'Privacy-first', 'No signup required']
    ),
    extraSlugs: templates.generateExtraSlugs(toolName, category),
    faqs: templates.generateFAQs(toolName, category),
    howTo: templates.generateHowTo(toolName, category),
    article: templates.generateArticle(toolName, category),
  };
}

// Main function
function main() {
  console.log('🎨 SEO Content Generator\n');
  console.log('This script helps generate enhanced metadata for tools.\n');
  
  // Example usage
  const exampleTool = {
    id: 'example-tool',
    name: 'Example Tool',
    description: 'An example tool for demonstration',
  };
  
  const enhanced = generateEnhancedMetadata(exampleTool, 'utilities');
  
  console.log('📝 Example Enhanced Metadata:\n');
  console.log(JSON.stringify(enhanced, null, 2));
  
  console.log('\n✅ To use this generator:');
  console.log('   1. Import this module in your tool page');
  console.log('   2. Call generateEnhancedMetadata(tool, category)');
  console.log('   3. Use the returned data in your metadata and content\n');
  
  // Save example to file
  const examplePath = path.join(__dirname, '../seo-content-example.json');
  fs.writeFileSync(examplePath, JSON.stringify(enhanced, null, 2));
  console.log(`📄 Example saved to: ${examplePath}\n`);
}

// Export for use in other scripts
module.exports = {
  generateEnhancedMetadata,
  templates,
};

// Run if called directly
if (require.main === module) {
  main();
}
