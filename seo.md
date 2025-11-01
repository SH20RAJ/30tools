# SEO Guidelines for 30tools

## Core SEO Principles

### 1. Title Tags
- Keep titles under 60 characters
- Include primary keyword near the beginning
- Use power words: "Free", "Professional", "Online", "Fast", "Secure"
- Format: "[Tool Name] - [Primary Benefit] | 30tools"
- Example: "Startup Name Generator - AI-Powered Business Names | 30tools"

### 2. Meta Descriptions
- Keep under 160 characters
- Include primary and secondary keywords naturally
- Add call-to-action words: "Generate", "Create", "Convert", "Download"
- Include benefit-focused language
- Mention "free", "no registration", "instant"

### 3. Long-tail Keywords Strategy
- Target 3-5 word phrases with lower competition
- Include industry-specific modifiers
- Add geographic modifiers when relevant
- Use question-based keywords (How to, What is, etc.)

### 4. Keyword Categories by Tool Type

#### Generators
- Primary: "[tool] generator", "free [tool] generator", "[tool] maker"
- Long-tail: "ai powered [tool] generator", "professional [tool] creator online"
- Modifiers: "instant", "random", "creative", "unique", "custom"

#### Converters
- Primary: "[format] to [format] converter", "convert [format] to [format]"
- Long-tail: "free online [format] converter", "batch [format] conversion"
- Modifiers: "fast", "bulk", "high quality", "lossless"

#### Compressors
- Primary: "[file type] compressor", "compress [file type]"
- Long-tail: "reduce [file type] size online", "optimize [file type] for web"
- Modifiers: "without quality loss", "bulk", "free unlimited"

### 5. Required Meta Tags for Each Page

#### Essential Tags
```html
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="author" content="30tools Team" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<link rel="canonical" href="https://30tools.com/[tool-slug]" />
```

#### Open Graph Tags
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="https://30tools.com/[tool-slug]" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://30tools.com/og-images/[tool-slug].jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="30tools" />
<meta property="og:locale" content="en_US" />
```

#### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@30tools" />
<meta name="twitter:creator" content="@30tools" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://30tools.com/og-images/[tool-slug].jpg" />
```

### 6. Structured Data (JSON-LD)

#### For Tools
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "[Tool Name]",
  "description": "[Detailed description]",
  "url": "https://30tools.com/[tool-slug]",
  "applicationCategory": "WebApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
  "featureList": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

### 7. Long-tail Keyword Templates

#### Generators
- "ai powered [item] generator free"
- "random [item] generator online"
- "professional [item] creator"
- "custom [item] maker tool"
- "bulk [item] generator free"

#### Converters
- "convert [format] to [format] online free"
- "batch [format] conversion tool"
- "[format] converter no quality loss"
- "fast [format] to [format] converter"
- "unlimited [format] conversions"

#### Compressors
- "compress [file type] without quality loss"
- "reduce [file type] size online free"
- "bulk [file type] compression"
- "optimize [file type] for web"
- "[file type] size reducer tool"

#### Analyzers
- "[item] analyzer free online"
- "check [item] quality tool"
- "[item] performance tester"
- "analyze [item] properties"
- "[item] validator online"
