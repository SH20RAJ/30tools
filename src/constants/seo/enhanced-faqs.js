// Comprehensive FAQ database for all tools and categories
export const TOOL_FAQS = {
  'image-compressor': [
    {
      question: "How does the image compressor work?",
      answer: "Our image compressor uses advanced algorithms to reduce file size while maintaining visual quality. It analyzes each pixel and removes unnecessary data without affecting what you see."
    },
    {
      question: "What image formats can I compress?",
      answer: "We support all major formats including JPEG, PNG, WebP, BMP, GIF, TIFF, and SVG. You can compress single images or batch process up to 20 files at once."
    },
    {
      question: "Is there a file size limit for compression?",
      answer: "You can compress images up to 50MB each. For larger files, try resizing the image dimensions first or contact us for enterprise solutions with higher limits."
    },
    {
      question: "Will compressing images affect the quality?",
      answer: "Our smart compression reduces file size by 50-80% while maintaining excellent visual quality. You can adjust compression levels to balance size reduction with quality preservation."
    },
    {
      question: "Are my images stored on your servers?",
      answer: "No, your privacy is our priority. All image processing happens locally in your browser. Your images are never uploaded to our servers or stored anywhere."
    },
    {
      question: "Can I compress images for web use?",
      answer: "Absolutely! Our compressor is perfect for web optimization. It maintains quality while significantly reducing load times and bandwidth usage for your website."
    },
    {
      question: "How much can I reduce my image file sizes?",
      answer: "Typically, you can reduce image sizes by 50-80% without noticeable quality loss. Results vary based on image content, format, and your chosen compression settings."
    },
    {
      question: "Does the tool work offline?",
      answer: "Yes! Once the page loads, you can compress images without an internet connection since all processing happens in your browser locally."
    }
  ],
  
  'pdf-merger': [
    {
      question: "How do I merge PDF files?",
      answer: "Simply upload your PDF files, arrange them in your desired order by dragging and dropping, then click 'Merge PDFs'. The tool will combine them into a single document."
    },
    {
      question: "Is there a limit to how many PDFs I can merge?",
      answer: "You can merge up to 20 PDF files in a single operation. Each file can be up to 100MB in size for optimal performance."
    },
    {
      question: "Will bookmarks and links be preserved?",
      answer: "Yes! Our PDF merger preserves bookmarks, internal links, and document structure. The merged PDF maintains all navigation features from the original files."
    },
    {
      question: "Can I rearrange pages after uploading?",
      answer: "Absolutely! You can drag and drop files to reorder them before merging. You can also remove unwanted files from the merge queue."
    },
    {
      question: "What happens to password-protected PDFs?",
      answer: "If your PDF is password-protected, you'll need to enter the password during upload. The merged output can optionally be password-protected as well."
    },
    {
      question: "Does merging reduce PDF quality?",
      answer: "No, our merger maintains the original quality of all PDFs. Text remains searchable, images stay sharp, and formatting is preserved perfectly."
    }
  ],

  'qr-code-generator': [
    {
      question: "What types of QR codes can I create?",
      answer: "You can generate QR codes for URLs, text, email addresses, phone numbers, WiFi credentials, contact cards (vCard), and more. Each type is optimized for its specific use case."
    },
    {
      question: "Can I customize the QR code appearance?",
      answer: "Yes! You can change colors, add logos, adjust the size, and choose from different styles. All customizations maintain scannability across devices."
    },
    {
      question: "What size should my QR code be for printing?",
      answer: "For optimal scanning, QR codes should be at least 1 inch (2.5cm) square when printed. Our generator provides high-resolution downloads perfect for print materials."
    },
    {
      question: "Do QR codes expire?",
      answer: "No, QR codes themselves never expire. However, if the content they link to (like a website) changes or becomes unavailable, the QR code won't work."
    },
    {
      question: "Can I track QR code scans?",
      answer: "Our basic QR codes are static and don't include tracking. For analytics and dynamic content, consider using our premium QR code service with built-in tracking."
    },
    {
      question: "What's the best format to download QR codes?",
      answer: "PNG is best for digital use and web, while SVG is perfect for print materials as it scales without quality loss. We provide both formats for maximum flexibility."
    }
  ],

  'password-generator': [
    {
      question: "How secure are the generated passwords?",
      answer: "Our passwords use cryptographically secure random generation with customizable character sets. All generation happens locally in your browser for maximum security."
    },
    {
      question: "What makes a password strong?",
      answer: "Strong passwords are long (12+ characters), include uppercase, lowercase, numbers, and symbols, avoid dictionary words, and are unique for each account."
    },
    {
      question: "Can I generate passwords for specific requirements?",
      answer: "Yes! You can customize length, character types, exclude similar characters, and add specific requirements to meet any password policy."
    },
    {
      question: "Should I use the same password for multiple accounts?",
      answer: "Never! Always use unique passwords for each account. If one account is compromised, unique passwords prevent attackers from accessing your other accounts."
    },
    {
      question: "How often should I change my passwords?",
      answer: "Change passwords immediately if there's a security breach, annually for important accounts, and whenever you suspect compromise. Use a password manager to track updates."
    },
    {
      question: "Are password managers safe to use?",
      answer: "Yes, reputable password managers are much safer than reusing weak passwords. They encrypt your data and help you maintain unique, strong passwords for every account."
    }
  ],

  'video-compressor': [
    {
      question: "What video formats can I compress?",
      answer: "We support MP4, AVI, MOV, WMV, FLV, MKV, and WebM formats. The output is typically MP4 for maximum compatibility across devices and platforms."
    },
    {
      question: "How much can I reduce video file size?",
      answer: "You can typically reduce video files by 60-80% while maintaining good quality. The exact reduction depends on the original video's compression and your quality settings."
    },
    {
      question: "Will compressing affect video quality?",
      answer: "Our smart compression balances file size reduction with quality preservation. You can choose from quality presets or customize settings to meet your specific needs."
    },
    {
      question: "What's the maximum video file size I can compress?",
      answer: "You can compress videos up to 500MB in size. For larger files, consider splitting them first or contact us for enterprise-level processing options."
    },
    {
      question: "Can I compress videos for social media?",
      answer: "Absolutely! We offer presets optimized for Instagram, TikTok, YouTube, Facebook, and other platforms with their specific size and quality requirements."
    },
    {
      question: "How long does video compression take?",
      answer: "Processing time depends on video length and quality settings. Most videos under 100MB process within 2-5 minutes. All processing happens in your browser."
    }
  ],

  'text-tools': [
    {
      question: "What text tools are available?",
      answer: "Our text toolkit includes word counter, character counter, case converter, text formatter, Lorem ipsum generator, and text-to-speech converter."
    },
    {
      question: "Can I process large amounts of text?",
      answer: "Yes! Our tools can handle documents up to 1MB in size, which is approximately 500,000 words or 1000+ pages of typical text content."
    },
    {
      question: "Do text tools work with different languages?",
      answer: "Most of our text tools work with any language that uses Unicode characters, including English, Spanish, French, German, Chinese, Japanese, and many others."
    },
    {
      question: "Can I save or export processed text?",
      answer: "Yes! You can copy processed text to your clipboard or download it as a text file. Some tools also offer export to other formats like Word or PDF."
    },
    {
      question: "Are there keyboard shortcuts available?",
      answer: "Yes! Use Ctrl+A to select all text, Ctrl+C to copy, Ctrl+V to paste, and Ctrl+Z to undo. Tool-specific shortcuts are shown in the interface."
    }
  ]
};

// Category-specific FAQs
export const CATEGORY_FAQS = {
  'image-tools': [
    {
      question: "What image tools are available?",
      answer: "Our image toolkit includes compressor, converter, resizer, background remover, watermark remover, format converter, and batch processing tools."
    },
    {
      question: "Can I process images in bulk?",
      answer: "Yes! Most image tools support batch processing, allowing you to upload and process up to 20 images simultaneously for increased productivity."
    },
    {
      question: "Are processed images saved on your servers?",
      answer: "No, all image processing happens locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security."
    },
    {
      question: "What's the best format for web images?",
      answer: "WebP offers the best compression for web use, followed by JPEG for photos and PNG for images with transparency. Our tools help you choose the optimal format."
    }
  ],

  'pdf-tools': [
    {
      question: "What PDF tools do you offer?",
      answer: "Our PDF suite includes merger, splitter, compressor, converter, page extractor, password remover, and annotation tools for comprehensive PDF management."
    },
    {
      question: "Can I edit PDF content directly?",
      answer: "Our tools focus on PDF manipulation rather than content editing. For text editing, convert to Word format, edit, then convert back to PDF."
    },
    {
      question: "Do you support password-protected PDFs?",
      answer: "Yes! You can remove passwords (with authorization), add password protection, and process protected PDFs by providing the correct password."
    },
    {
      question: "What's the difference between merging and combining PDFs?",
      answer: "Merging creates one continuous document, while combining can maintain separate sections. Our merger tool offers both options based on your needs."
    }
  ],

  'video-tools': [
    {
      question: "What video editing features are available?",
      answer: "Our video tools include compressor, converter, trimmer, watermark remover, format converter, and optimization tools for various platforms."
    },
    {
      question: "Can I edit videos frame by frame?",
      answer: "Our tools focus on common video tasks like compression and conversion. For detailed frame editing, we recommend dedicated video editing software."
    },
    {
      question: "Do you support 4K video processing?",
      answer: "Yes! We support 4K video processing, though processing times may be longer. Consider compressing 4K videos for faster sharing and storage."
    },
    {
      question: "Can I extract audio from videos?",
      answer: "Absolutely! Our video converter can extract audio in various formats including MP3, WAV, and AAC from any supported video file."
    }
  ]
};

// General platform FAQs
export const GENERAL_FAQS = [
  {
    question: "Is 30tools really free to use?",
    answer: "Yes! All our tools are completely free with no hidden charges, subscriptions, or watermarks. We believe in providing accessible tools for everyone."
  },
  {
    question: "Do I need to create an account?",
    answer: "No account required! All tools work immediately without registration. However, creating an account lets you save preferences and access premium features."
  },
  {
    question: "How do you protect user privacy?",
    answer: "We use client-side processing whenever possible, meaning your files never leave your device. We don't store personal data and follow strict privacy practices."
  },
  {
    question: "Can I use these tools for commercial purposes?",
    answer: "Yes! Our tools are free for both personal and commercial use. There are no licensing restrictions on the output files you create."
  },
  {
    question: "What browsers are supported?",
    answer: "Our tools work on all modern browsers including Chrome, Firefox, Safari, and Edge. Mobile browsers are also fully supported for on-the-go use."
  },
  {
    question: "Do tools work offline?",
    answer: "Many of our tools work offline once loaded since they process files locally. However, some features may require an internet connection."
  },
  {
    question: "How do I report bugs or request features?",
    answer: "Use our contact form or GitHub repository to report issues or suggest new features. We actively respond to user feedback and regularly add new tools."
  },
  {
    question: "Can I embed these tools on my website?",
    answer: "Yes! We offer embed codes for many tools. Contact us for widget options and integration assistance for your website or application."
  },
  {
    question: "Are there file size limits?",
    answer: "File size limits vary by tool but are generous for most use cases. Image tools support up to 50MB, PDFs up to 100MB, and videos up to 500MB."
  },
  {
    question: "How often are new tools added?",
    answer: "We regularly add new tools based on user requests and emerging needs. Follow us on social media or subscribe to our newsletter for updates."
  }
];

// SEO-optimized FAQ helper functions
export const generateToolFAQs = (toolId) => {
  return TOOL_FAQS[toolId] || [];
};

export const generateCategoryFAQs = (category) => {
  return CATEGORY_FAQS[category] || [];
};

export const getAllFAQs = () => {
  return {
    general: GENERAL_FAQS,
    tools: TOOL_FAQS,
    categories: CATEGORY_FAQS
  };
};

// Search FAQs function
export const searchFAQs = (query, scope = 'all') => {
  const allFAQs = [];
  
  if (scope === 'all' || scope === 'general') {
    allFAQs.push(...GENERAL_FAQS);
  }
  
  if (scope === 'all' || scope === 'tools') {
    Object.values(TOOL_FAQS).forEach(faqs => allFAQs.push(...faqs));
  }
  
  if (scope === 'all' || scope === 'categories') {
    Object.values(CATEGORY_FAQS).forEach(faqs => allFAQs.push(...faqs));
  }
  
  return allFAQs.filter(faq => 
    faq.question.toLowerCase().includes(query.toLowerCase()) ||
    faq.answer.toLowerCase().includes(query.toLowerCase())
  );
};

export default {
  TOOL_FAQS,
  CATEGORY_FAQS,
  GENERAL_FAQS,
  generateToolFAQs,
  generateCategoryFAQs,
  getAllFAQs,
  searchFAQs
};