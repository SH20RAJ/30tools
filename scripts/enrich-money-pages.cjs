const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const data = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

const clusters = {
  exam: [
    "ssc-photo-resizer", "signature-resizer-under-20kb", "upsc-photo-resizer", 
    "railway-exam-photo-resizer", "pan-card-photo-resizer", "passport-photo-maker", 
    "photo-compressor-under-50kb", "form-image-size-checker", "jee-photo-resizer", 
    "neet-photo-resizer", "ibps-photo-resizer"
  ],
  compression: [
    "compress-image-to-20kb", "compress-image-to-50kb", "compress-image-to-100kb", 
    "compress-image-to-200kb", "image-compressor", "resize-image-in-cm", 
    "resize-image-in-mm", "resize-image-in-pixels", "jpg-to-png-converter", 
    "png-to-jpg-converter", "webp-to-jpg-converter", "jpg-to-webp-converter"
  ],
  student: [
    "75-attendance-calculator", "cgpa-calculator", "sgpa-calculator", 
    "cgpa-to-percentage-calculator", "required-marks-calculator"
  ],
  finance: [
    "brick-calculator", "paint-calculator", "tile-calculator", "loan-calculator", 
    "gst-calculator", "discount-calculator", "margin-calculator"
  ],
  dev: [
    "json-formatter", "json-validator", "json-editor", "base64-encode", 
    "base64-decode", "html-beautifier", "css-minifier", "javascript-minifier", 
    "word-counter", "text-compare", "text-to-slug-converter", "remove-line-breaks", 
    "kruti-dev-to-unicode", "unicode-to-kruti-dev"
  ],
  adsense: [
    "adsense-calculator"
  ]
};

const templates = {
  exam: {
    article: "## Prepare Your Images for Forms\\nUploading photos to official portals often requires strict adherence to file size and dimension limits. Our tool helps prepare images for forms quickly and easily. By running this utility in your browser, you ensure that your personal documents remain completely private.\\n\\n### Common Use Cases\\n- Adjusting dimensions for application portals.\\n- Shrinking file sizes to meet rigid megabyte or kilobyte limits without losing facial clarity.\\n- Validating aspect ratios for ID cards and signatures.",
    faqs: [
      { question: "Is my personal photo safe?", answer: "Yes, all processing happens locally in your browser. Your images are never uploaded to our servers." },
      { question: "Will the quality be reduced?", answer: "We use smart compression to lower the file size while maintaining the visual clarity required for form submissions." },
      { question: "Can I use this on mobile?", answer: "Absolutely. Our tool works seamlessly on all modern smartphones." },
      { question: "Is this an official government tool?", answer: "No, we are an independent utility designed to help you prepare your files to meet general requirements." }
    ],
    howTo: {
      name: "How to format your photo",
      steps: [
        { name: "Upload", text: "Drag and drop your image or click to select." },
        { name: "Adjust", text: "Set your target file size or dimensions as required by your form." },
        { name: "Download", text: "Click to process and download the optimized image instantly." }
      ]
    }
  },
  compression: {
    article: "## Fast, Private Image Compression\\nLarge images can slow down websites and consume unnecessary storage. This utility is designed to reduce your file sizes instantly without sacrificing noticeable quality.\\n\\n### Example\\nIf you have a 5MB high-resolution photograph, our tool can compress it to under 200KB while preserving the core visual details. This is perfect for web publishing, email attachments, and general storage optimization.\\n\\n### Common Use Cases\\n- Web developers optimizing assets for faster Core Web Vitals.\\n- Photographers sharing proofs with clients over email.\\n- Everyday users clearing up space on their devices.",
    faqs: [
      { question: "What formats do you support?", answer: "We support JPG, PNG, WEBP, and more, depending on your browser capabilities." },
      { question: "Do you store my images?", answer: "No. Everything is compressed using client-side technology. Your data stays with you." },
      { question: "Is there a limit to how many I can compress?", answer: "You can compress as many images as you need for free." },
      { question: "Does this affect the image dimensions?", answer: "By default, compression only reduces file size. You can optionally resize dimensions if needed." }
    ],
    howTo: {
      name: "How to compress an image",
      steps: [
        { name: "Select Image", text: "Choose the image you want to compress from your device." },
        { name: "Set Target", text: "Select your desired file size or compression level." },
        { name: "Save", text: "Download the compressed file directly." }
      ]
    }
  },
  student: {
    article: "## Simple Calculations for Students\\nManaging academic scores and attendance shouldn't be stressful. This calculator is built to give you precise, instant answers so you can focus on studying.\\n\\n### Example\\nNeed to know how many more classes you must attend to reach a 75% threshold? Or maybe you want to convert your CGPA to a standard percentage? Simply input your current numbers, and we'll calculate the exact figures you need.\\n\\n### Common Use Cases\\n- Tracking semester goals and required grades.\\n- Verifying attendance requirements before exams.\\n- Converting grading scales for scholarship applications.",
    faqs: [
      { question: "Are the formulas accurate?", answer: "We use standard academic conversion formulas recognized by most institutions." },
      { question: "Do I need to sign up to save my data?", answer: "No signup is required. You can bookmark the page or print the results for your records." },
      { question: "Is this tool free to use?", answer: "Yes, our educational calculators are 100% free." },
      { question: "Can I use it for multiple subjects?", answer: "Yes, you can run calculations repeatedly for different courses." }
    ],
    howTo: {
      name: "How to use the calculator",
      steps: [
        { name: "Enter Data", text: "Input your current marks, credits, or attendance records." },
        { name: "Calculate", text: "The tool will automatically process your inputs." },
        { name: "Review", text: "View your results and adjust inputs to plan your academic targets." }
      ]
    }
  },
  finance: {
    article: "## Accurate Business & Construction Estimates\\nWhether you're estimating material costs for a renovation or calculating margins for your business, precision is key. This calculator provides fast, reliable outputs based on your inputs.\\n\\n### Example\\nIf you are planning to tile a 500 sq ft room, our tool will tell you exactly how many tiles you need, factoring in standard waste percentages. Similarly, financial tools help you instantly see profit margins after taxes and discounts.\\n\\n### Common Use Cases\\n- Contractors drafting quick quotes for clients.\\n- Small business owners analyzing pricing strategies.\\n- Homeowners planning DIY projects.",
    faqs: [
      { question: "Do you save my financial data?", answer: "No, all calculations are performed locally on your device for complete privacy." },
      { question: "Are these estimates guaranteed?", answer: "These are mathematical estimates. Always consult a professional for critical financial or structural decisions." },
      { question: "Can I adjust the tax or waste percentages?", answer: "Yes, most of our calculators allow you to input custom percentage variables." },
      { question: "Does this work offline?", answer: "Once loaded, the calculator logic can function without an active internet connection." }
    ],
    howTo: {
      name: "How to estimate your costs",
      steps: [
        { name: "Input Metrics", text: "Enter your base measurements, costs, or financial figures." },
        { name: "Adjust Variables", text: "Include taxes, waste factors, or discount rates." },
        { name: "Get Results", text: "Instantly view your final estimates and cost breakdowns." }
      ]
    }
  },
  dev: {
    article: "## Browser-Based Developer Utilities\\nDevelopers need tools that are fast, reliable, and secure. Our suite of text and code utilities is designed to run entirely in your browser, ensuring your proprietary code or sensitive strings are never sent over the network.\\n\\n### Example\\nPaste a minified JSON payload to instantly format it into readable syntax, complete with color highlighting and syntax validation. Or securely encode and decode base64 strings without relying on server-side processing.\\n\\n### Common Use Cases\\n- Debugging API responses.\\n- Formatting minified code for code reviews.\\n- Quickly comparing text differences or counting characters.",
    faqs: [
      { question: "Is my code secure?", answer: "Yes. All processing is executed client-side via JavaScript. Your code never leaves your computer." },
      { question: "Do you support large files?", answer: "Yes, our tools are optimized to handle large text blobs efficiently without crashing the browser." },
      { question: "Can I use this for proprietary company data?", answer: "Because it processes locally, it is generally safe for proprietary data, but always follow your company's security policies." },
      { question: "Do I need to install any extensions?", answer: "No, these are purely web-based utilities that require no installation." }
    ],
    howTo: {
      name: "How to use dev tools",
      steps: [
        { name: "Paste Code", text: "Paste your raw text, code, or data into the input field." },
        { name: "Execute", text: "Click the action button to format, encode, or validate." },
        { name: "Copy Output", text: "Copy the processed result to your clipboard with one click." }
      ]
    }
  },
  adsense: {
    article: "## Understand Your Ad Revenue Potential\\nEstimating potential earnings from display ads can be confusing due to variables like Page RPM, CTR, and CPC. This calculator helps publishers project their daily, monthly, and yearly income based on traffic and engagement metrics.\\n\\n### Page RPM vs. Impressions\\nPage Revenue Per Mille (RPM) is the estimated earnings for every 1,000 pageviews. It is a more holistic metric than looking at individual ad impressions, as it accounts for the total value a page generates. Traffic quality, niche, and user location heavily influence these metrics.\\n\\n### Common Use Cases\\n- Planning monetization strategies for new blogs.\\n- Setting traffic goals to reach specific income targets (e.g., $100/day).\\n- Comparing current performance against industry benchmarks.",
    faqs: [
      { question: "Are these earnings guaranteed?", answer: "No, this is purely an estimation tool. Actual earnings vary widely based on seasonality, ad placement, and advertiser bids." },
      { question: "What is a good RPM?", answer: "A 'good' RPM depends on your niche. Entertainment might see $1-$3, while finance or tech can see $10-$30+." },
      { question: "Does this calculator save my site data?", answer: "No, all inputs are processed locally in your browser for your privacy." },
      { question: "How can I improve my earnings?", answer: "Focus on high-quality content, optimize your Core Web Vitals, and ensure your AdSense placements follow best practices without overwhelming the user." }
    ],
    howTo: {
      name: "How to calculate ad revenue",
      steps: [
        { name: "Enter Traffic", text: "Input your estimated monthly pageviews." },
        { name: "Set Metrics", text: "Adjust the CTR, CPC, or use an estimated Page RPM." },
        { name: "View Projection", text: "Instantly see your projected daily, monthly, and annual earnings." }
      ]
    }
  }
};

let updated = 0;

Object.values(data.categories).forEach(category => {
  category.tools.forEach(tool => {
    for (const [clusterName, ids] of Object.entries(clusters)) {
      if (ids.includes(tool.id) || (tool.extraSlugs && tool.extraSlugs.some(slug => ids.includes(slug)))) {
        const tpl = templates[clusterName];
        
        // Enrich
        if (!tool.article || tool.article.trim() === "") tool.article = tpl.article;
        if (!tool.faqs || tool.faqs.length === 0) tool.faqs = tpl.faqs;
        if (!tool.howTo || !tool.howTo.steps) tool.howTo = tpl.howTo;
        
        // Ensure standard SEO properties are set
        if (!tool.title) tool.title = tool.name + " - Free Online Tool";
        
        updated++;
      }
    }
  });
});

fs.writeFileSync(toolsPath, JSON.stringify(data, null, 2));
console.log('Successfully enriched ' + updated + ' money pages.');
