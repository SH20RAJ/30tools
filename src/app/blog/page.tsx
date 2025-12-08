import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
    title: 'Blog - 30Tools',
    description: 'Explore our latest articles, guides, and reviews on productivity tools, converters, and more.',
};

const blogs = [
    {
        slug: 'y2mate-youtube-to-mp3-converter',
        title: 'Y2Mate YouTube to MP3 Converter – Features & Top Alternative',
        description: 'A comprehensive review of Y2Mate and its best alternatives for converting YouTube videos to MP3.',
        date: '2025-01-15',
    },
    {
        slug: 'convert-youtube-videos-high-quality-320kbps-mp3',
        title: '3 Methods to Convert YouTube Videos to High-Quality 320kbps MP3',
        description: 'Learn how to extract high-fidelity audio from YouTube videos with these simple methods.',
        date: '2025-01-14',
    },
    {
        slug: 'publer-reviews',
        title: 'Publer Reviews: A Comprehensive User Guide',
        description: 'In-depth analysis of Publer social media management tool, its features, and pricing.',
        date: '2025-01-13',
    },
    {
        slug: 'best-free-youtube-to-mp3-converters-2025',
        title: '6 Best Free YouTube to MP3 Converters You Should Try in 2025',
        description: 'Our top picks for the best free YouTube to MP3 converters available this year.',
        date: '2025-01-12',
    },
    {
        slug: 'extract-audio-from-video-methods',
        title: '3 Methods to Help You Extract Audio from Video',
        description: 'Step-by-step guide on how to strip audio tracks from video files easily.',
        date: '2025-01-11',
    },
    {
        slug: 'cancel-netflix-membership-guide',
        title: 'Step-by-Step Guide to Cancel Your Netflix Membership',
        description: 'Hassle-free guide to canceling your Netflix subscription in just a few clicks.',
        date: '2025-01-10',
    },
    {
        slug: 'best-urdu-english-translators-2025',
        title: 'Best Urdu to English Translators You Can Use in 2025',
        description: 'Top translation tools for accurate Urdu to English conversion.',
        date: '2025-01-09',
    },
    {
        slug: 'best-pdf-document-translators',
        title: '4 Best PDF Document Translators for Accurate Conversions',
        description: 'Translate your PDF documents while maintaining formatting with these top tools.',
        date: '2025-01-08',
    },
    {
        slug: 'best-paraphrasing-tools-rewrite-text',
        title: 'Best Paraphrasing Tools to Rewrite Text Accurately',
        description: 'Avoid plagiarism and enhance your writing with the best paraphrasing tools.',
        date: '2025-01-07',
    },
    {
        slug: 'top-sentence-rewriters-review',
        title: 'Top 4 Sentence Rewriters: A Comprehensive Review and Comparison',
        description: 'Compare the best sentence rewriter tools to improve your content flow and clarity.',
        date: '2025-01-06',
    },
];

export default function BlogListing() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Latest Articles
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Insights, tutorials, and reviews to help you get the most out of your digital tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group">
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none bg-secondary/10 hover:bg-secondary/20 backdrop-blur-sm">
                            <CardHeader>
                                <div className="text-sm text-muted-foreground mb-2">{blog.date}</div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                                    {blog.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="line-clamp-3 text-base">
                                    {blog.description}
                                </CardDescription>
                                <div className="mt-4 text-primary font-medium text-sm flex items-center group-hover:underline">
                                    Read Article
                                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
