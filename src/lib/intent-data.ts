import { getToolByExtraSlug } from "@/lib/tools";

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
    },
    "pdf-to-word-without-email": {
        parentToolId: "pdf-to-word",
        title: "Convert PDF to Word Online Free - No Email Required",
        description: "Convert your PDF documents to editable DOCX files instantly. 100% free, no email signup, and no registration. Secure browser-based conversion.",
        keywords: "pdf to word no email, free pdf to word converter without registration, convert pdf to docx no signup",
        article: `
## Convert PDF to Word Without Giving Your Email
Most online PDF converters ask for your email address to send you the converted file. This often leads to unwanted marketing emails and spam. 30tools is different.

### 100% Private Conversion
Our PDF to Word converter works directly in your browser or on our secure servers without storing your personal data. You download the file directly from the interface—no email inbox required.

### Retain Formatting and Layout
We use advanced OCR and layout analysis to ensure that your Word document looks exactly like your original PDF, preserving fonts, tables, and images.
        `,
        faqs: [
            { question: "Is it really free without an email?", answer: "Yes, 30tools provides professional-grade conversion tools completely free of charge with no signup or email barriers." },
            { question: "What file formats are supported?", answer: "We support all standard PDF files and convert them to the latest .docx format compatible with Microsoft Word and Google Docs." }
        ]
    },
    "youtube-to-mp3-320kbps": {
        parentToolId: "youtube-downloader",
        title: "YouTube to MP3 320kbps - High Quality Audio Downloader",
        description: "Download YouTube videos as high-quality 320kbps MP3 audio files. Free, fast, and secure online converter with no signup required.",
        keywords: "youtube to mp3 320kbps, high quality youtube mp3 downloader, yt to mp3 converter free",
        article: `
## Download YouTube Music in High Fidelity (320kbps)
When you convert YouTube videos to audio, quality matters. Most converters limit you to 128kbps, which sounds flat and compressed. Our tool supports the maximum possible bitrate for crystal clear sound.

### Why choose 320kbps?
320kbps is the "Gold Standard" for MP3 files. It provides the best balance between file size and audio fidelity, making it indistinguishable from CD quality for most listeners.

### Fast and Secure
Simply paste your YouTube link, select the MP3 320kbps option, and your download will start instantly. No software installation needed.
        `,
        faqs: [
            { question: "Is 320kbps better than 128kbps?", answer: "Yes, 320kbps contains much more audio data, resulting in better bass, clearer highs, and a richer soundstage." },
            { question: "Can I download entire playlists in 320kbps?", answer: "Our downloader currently supports individual video conversions to maintain the highest quality standards." }
        ]
    }
};

export function getIntentBySlug(slug: string) {
    const existing = intentData[slug];
    let result: any = null;
    
    if (existing) {
        result = { ...existing };
    } else {
        const parentTool = getToolByExtraSlug(slug);
        if (parentTool) {
            const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
            result = {
                parentToolId: parentTool.id,
                title: `${title} Online - Free & No Signup`,
                description: `Free ${title} online. ${parentTool.name} allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.`,
                keywords: `${title}, free online tool, no signup, ${parentTool.category}, ${title} online, 30tools`,
            };
        }
    }
    
    if (result) {
        const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        let hash = 0;
        for (let i = 0; i < slug.length; i++) hash += slug.charCodeAt(i);
        
        if (!existing) {
            const titleTemplates = [
                `${title} Online - Free & No Signup`,
                `Free ${title} - Fast & Easy Online Tool`,
                `${title} Tool - 100% Free & Secure`,
                `${title} Online - Browser-First Utility`
            ];
            const descTemplates = [
                `Need a fast way to ${slug.replace(/-/g, ' ')}? Use our free browser-based ${title} tool. Operate 100% privately without signup.`,
                `Easily process ${slug.replace(/-/g, ' ')} online. Secure, privacy-first utility that runs directly in your browser with zero signups required.`,
                `Looking for a free ${title} online? Get instant, high-quality results with our private, secure browser utility tool. No email needed.`,
                `Try our free online ${title} tool. Quick, secure, and fully private browser-based processing. Clean files and save time.`
            ];
            result.title = titleTemplates[hash % titleTemplates.length];
            result.description = descTemplates[(hash + 1) % descTemplates.length];
        }
        
        if (!result.article) {
            result.article = `
## About ${title}

Our online **${title}** tool is optimized to provide a fast, secure, and browser-first experience. It allows you to perform your tasks quickly without any friction.

### Why use this online tool?
- **100% Free & No Registration**: You don't need to sign up, log in, or share your email address. Start using it immediately.
- **Privacy First**: All processing runs locally on your device via JavaScript. Your files and data are never sent to our servers.
- **Fast and Secure**: Enjoy instantaneous processing with zero queues or wait times.

### How it works:
1. Access the **${title}** utility.
2. Input your data or upload your files using the interactive drag-and-drop workspace.
3. Adjust the tool settings to suit your target requirements.
4. Click the action button and download your output files instantly.
`;
        }
        
        if (!result.faqs || result.faqs.length === 0) {
            result.faqs = [
                {
                    question: `Is the ${title} tool completely free?`,
                    answer: `Yes, our ${title} tool is 100% free with no hidden charges, subscription fees, or daily usage limits.`
                },
                {
                    question: `Do you upload my files or data to any server?`,
                    answer: `No. We value your privacy. All processing for ${title} is done locally in your browser, meaning your data never leaves your computer.`
                },
                {
                    question: `Do I need to install any software to use ${title}?`,
                    answer: `No installation is required. The tool operates directly in any modern web browser across desktop and mobile devices.`
                }
            ];
        }
    }
    
    return result;
}
