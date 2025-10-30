# Bundle Size Optimization Recommendations

## Current Status
- ✅ Removed 26 unused UI components (~400KB saved)
- ✅ Removed 4 unused dependencies 
- ✅ Added chunk splitting
- ❌ Still have 3.05MB vendor chunk

## Priority Optimizations

### 1. Dynamic Import Heavy Libraries (High Impact)
Convert these to dynamic imports to reduce initial bundle:

```javascript
// Instead of: import { PDFDocument } from 'pdf-lib';
const loadPDFLib = async () => {
  const { PDFDocument, rgb } = await import('pdf-lib');
  return { PDFDocument, rgb };
};

// Instead of: import html2canvas from 'html2canvas';
const loadHtml2Canvas = async () => {
  const html2canvas = (await import('html2canvas')).default;
  return html2canvas;
};

// Instead of: import JSZip from 'jszip';
const loadJSZip = async () => {
  const JSZip = (await import('jszip')).default;
  return JSZip;
};
```

### 2. Replace Heavy Libraries (Medium Impact)
- Replace `pdf-lib` (500KB+) with lighter alternatives for simple operations
- Replace `html2canvas` (300KB+) with native browser APIs where possible
- Consider removing `wavesurfer.js` if audio visualization isn't critical

### 3. Tree Shaking Improvements (Medium Impact)
- Ensure all imports use named imports: `import { specific } from 'library'`
- Remove any unused utility functions
- Use `sideEffects: false` in package.json

### 4. Code Splitting by Route (High Impact)
- Split tools into separate route groups
- Load tool-specific libraries only when accessing those tools
- Use Next.js dynamic imports for components

### 5. External CDN for Large Libraries (High Impact)
Move heavy libraries to CDN to reduce bundle size:
```javascript
// Load from CDN instead of bundling
const loadExternalLib = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js';
    script.onload = () => resolve(window.PDFLib);
    document.head.appendChild(script);
  });
};
```

## Expected Savings
- Dynamic imports: ~1.5MB reduction in initial bundle
- Library replacements: ~800KB reduction
- Better tree shaking: ~200KB reduction
- **Total potential reduction: ~2.5MB**

## Implementation Priority
1. Dynamic imports (immediate, high impact)
2. CDN externalization (medium effort, high impact)  
3. Library replacements (high effort, medium impact)
4. Route-based code splitting (medium effort, high impact)