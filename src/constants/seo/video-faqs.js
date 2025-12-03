export const videoFAQs = {
    common: [
        {
            question: "Is it free to use?",
            answer:
                "Yes, all our video tools are completely free to use. You don't need to register or pay anything.",
        },
        {
            question: "Is it safe?",
            answer:
                "Yes, your privacy is our priority. All processing happens locally in your browser when possible, or files are securely processed and deleted immediately after.",
        },
        {
            question: "Do I need to install software?",
            answer:
                "No, our tools work entirely in your web browser. You don't need to download or install any software.",
        },
        {
            question: "What formats are supported?",
            answer:
                "We support most common video formats including MP4, AVI, MOV, WEBM, and MKV.",
        },
    ],

    "video-compressor": [
        {
            question: "How much can I compress my video?",
            answer:
                "You can typically reduce video file size by 30-80% depending on the quality settings you choose, without significant visual loss.",
        },
        {
            question: "Will the quality be reduced?",
            answer:
                "Compression always involves some trade-off, but our smart compression algorithms maintain the best possible quality for the target file size.",
        },
        {
            question: "Is there a file size limit?",
            answer:
                "Since processing happens in your browser, the limit depends on your device's memory. We recommend files under 2GB for best performance.",
        },
    ],

    "video-converter": [
        {
            question: "What formats can I convert to?",
            answer:
                "You can convert videos to MP4, WEBM, AVI, MOV, and other popular formats.",
        },
        {
            question: "Does it support 4K videos?",
            answer:
                "Yes, we support resolutions up to 4K, depending on your device's processing power.",
        },
    ],

    "video-trimmer": [
        {
            question: "Can I cut multiple parts?",
            answer:
                "Currently, our tool allows you to trim the start and end of a video. Multi-segment trimming is coming soon.",
        },
        {
            question: "Will the output be re-encoded?",
            answer:
                "We try to cut without re-encoding when possible for instant results. If you change formats, re-encoding is required.",
        },
    ],

    "gif-to-video": [
        {
            question: "What video format will I get?",
            answer:
                "By default, GIFs are converted to MP4 format, which is widely supported and efficient.",
        },
        {
            question: "Will the animation speed change?",
            answer:
                "No, we preserve the original frame rate and speed of your GIF animation.",
        },
    ],

    "video-to-gif": [
        {
            question: "Can I select a specific part?",
            answer:
                "Yes, you can choose the exact start and end time for your GIF.",
        },
        {
            question: "How can I reduce the GIF size?",
            answer:
                "You can reduce the resolution, frame rate, or duration to make the file size smaller.",
        },
    ],

    "video-to-audio": [
        {
            question: "What audio formats are supported?",
            answer:
                "You can extract audio as MP3, WAV, or AAC files.",
        },
        {
            question: "Can I extract audio from a specific part?",
            answer:
                "Yes, you can trim the video before extracting the audio.",
        },
    ],
};

export const getVideoToolFAQs = (toolId) => {
    const toolSpecificFAQs = videoFAQs[toolId] || [];
    return [...videoFAQs.common, ...toolSpecificFAQs];
};
