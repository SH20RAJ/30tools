export const intentData: Record<string, any> = {
    "compress-image-to-50kb": {
        parentToolId: "image-compressor",
        title: "Compress Image to 50KB Online - Free & No Signup",
        description: "Need to upload a photo to a form that requires exactly 50KB or less? Use our specialized compressor to hit your target size perfectly.",
        keywords: "compress image to 50kb, reduce image size to 50kb online, 50kb photo compressor",
        article: `
## How to Compress Images to Exactly 50KB
Many government and university application portals (like UPSC, SSC, or college forms) require photos to be under a strict 50KB limit. Our tool makes this easy.

### Why 50KB?
The 50KB limit is a standard threshold for database optimization on legacy systems. It ensures fast processing of millions of applications while maintaining just enough detail for identification.

### Maintaining Quality at Small Sizes
Compressing an image down to 50KB can often lead to blurring. Our algorithm uses "Smart Quantization" to preserve facial features and text clarity even at high compression ratios.
        `,
        faqs: [
            { question: "Will my photo be blurry at 50KB?", answer: "Our tool optimized for clarity, ensuring that even at 50KB, faces and text remain legible for official forms." },
            { question: "Can I compress multiple images to 50KB?", answer: "Yes, you can upload a batch of photos and set the same 50KB target for all of them." }
        ]
    },
    "resize-image-for-instagram": {
        parentToolId: "image-resizer",
        title: "Resize Image for Instagram (1080x1920) - Post & Story",
        description: "Instantly resize your photos for Instagram Posts, Stories, and Reels with perfect 1080x1920 or 1080x1080 dimensions.",
        keywords: "resize for instagram, instagram story size, 1080x1920 resizer, instagram post dimensions",
        article: `
## The Perfect Dimensions for Instagram Growth
To avoid awkward cropping and blurry uploads, you must use the correct aspect ratios for Instagram. Our tool provides one-click presets for every format.

### Instagram Story & Reels (9:16)
The standard for stories is 1080x1920 pixels. Using this exact size ensures that Instagram doesn't compress your file further, maintaining maximum sharpness for your followers.

### Instagram Square Post (1:1)
Classic square posts work best at 1080x1080 pixels. Our resizer handles the padding or cropping automatically to keep your subject centered.
        `,
        faqs: [
            { question: "What is the best resolution for Instagram?", answer: "1080 pixels wide is the standard. For stories, use 1080x1920. For posts, use 1080x1080 or 1080x1350." },
            { question: "Does resizing affect image quality?", answer: "We use Lanczos resampling to ensure that your resized images stay crisp and professional." }
        ]
    }
};

export function getIntentBySlug(slug: string) {
    return intentData[slug] || null;
}
