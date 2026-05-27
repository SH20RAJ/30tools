#!/usr/bin/env node

/**
 * Generate Blog Post Templates
 * Creates SEO-optimized blog post templates for content marketing
 */

const fs = require('fs');
const path = require('path');

const blogTemplates = [
  {
    slug: '10-best-free-image-tools-2026',
    title: '10 Best Free Image Tools in 2026 - No Signup Required',
    description: 'Discover the best free online image tools for compression, conversion, editing, and optimization. All tools work in your browser with no signup required.',
    category: 'image',
    keywords: ['best free image tools', 'image compressor', 'image converter', 'online image editor'],
  },
  {
    slug: 'how-to-compress-images-without-losing-quality',
    title: 'How to Compress Images Without Losing Quality: Complete Guide 2026',
    description: 'Learn professional techniques to compress images while maintaining quality. Step-by-step guide with tips for web, print, and social media.',
    category: 'image',
    keywords: ['compress images', 'image optimization', 'reduce file size', 'image quality'],
  },
  {
    slug: 'pdf-tools-every-student-needs',
    title: 'PDF Tools Every Student Needs in 2026 - Free & Easy to Use',
    description: 'Essential PDF tools for students: merge, split, compress, convert, and edit PDFs online for free. Perfect for assignments and research.',
    category: 'pdf',
    keywords: ['pdf tools for students', 'free pdf editor', 'pdf converter', 'merge pdf'],
  },
  {
    slug: 'youtube-downloader-complete-guide-2026',
    title: 'YouTube Downloader: Complete Guide 2026 - Download Videos Safely',
    description: 'Complete guide to downloading YouTube videos safely and legally. Learn about formats, quality options, and best practices.',
    category: 'youtube',
    keywords: ['youtube downloader', 'download youtube videos', 'youtube to mp4', 'video downloader'],
  },
  {
    slug: 'best-developer-tools-online-free',
    title: '25 Best Free Developer Tools Online - Boost Your Productivity',
    description: 'Essential online developer tools for JSON formatting, code minification, API testing, and more. All free with no signup required.',
    category: 'developer',
    keywords: ['developer tools', 'json formatter', 'code minifier', 'api tester'],
  },
];

function generateBlogPost(template) {
  const date = new Date().toISOString().split('T')[0];
  
  return `---
title: "${template.title}"
description: "${template.description}"
date: "${date}"
author: "30tools Team"
category: "${template.category}"
keywords: ${JSON.stringify(template.keywords)}
image: "/og-images/${template.slug}.jpg"
---

# ${template.title}

${template.description}

## Introduction

[Write engaging introduction that hooks the reader and explains what they'll learn]

## Why This Matters

[Explain the importance and benefits of the topic]

## Main Content

### Section 1: [Topic]

[Detailed content with examples, screenshots, and step-by-step instructions]

### Section 2: [Topic]

[More detailed content]

### Section 3: [Topic]

[Additional content]

## Tips & Best Practices

1. **Tip 1**: [Actionable advice]
2. **Tip 2**: [Actionable advice]
3. **Tip 3**: [Actionable advice]

## Common Mistakes to Avoid

- **Mistake 1**: [Explanation and how to avoid]
- **Mistake 2**: [Explanation and how to avoid]
- **Mistake 3**: [Explanation and how to avoid]

## Frequently Asked Questions

### Question 1?
Answer with detailed explanation.

### Question 2?
Answer with detailed explanation.

### Question 3?
Answer with detailed explanation.

## Conclusion

[Summarize key points and provide clear call-to-action]

## Related Tools

- [Tool 1 Name](link) - Description
- [Tool 2 Name](link) - Description
- [Tool 3 Name](link) - Description

---

*Last updated: ${date}*
`;
}

function main() {
  const blogDir = path.join(__dirname, '../content/blog');
  
  // Create blog directory if it doesn't exist
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }
  
  console.log('\n📝 Generating blog post templates...\n');
  
  for (const template of blogTemplates) {
    const filePath = path.join(blogDir, `${template.slug}.md`);
    const content = generateBlogPost(template);
    
    fs.writeFileSync(filePath, content);
    console.log(`✓ Created: ${template.slug}.md`);
  }
  
  console.log(`\n✅ Generated ${blogTemplates.length} blog post templates`);
  console.log(`📁 Location: ${blogDir}`);
  console.log(`\n💡 Next steps:`);
  console.log(`   1. Fill in the content sections with detailed information`);
  console.log(`   2. Add relevant images and screenshots`);
  console.log(`   3. Link to related tools from 30tools`);
  console.log(`   4. Publish and promote on social media\n`);
}

main();
