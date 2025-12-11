import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

/**
 * ToolChain Component
 * Suggests the logical next step tool for the user.
 * 
 * Usage:
 * <ToolChain 
 *   currentTool="tiktok-downloader" 
 *   suggestions={[
 *     { id: 'video-to-audio', title: 'Extract Audio', desc: 'Convert this video to MP3', icon: 'MusicIcon', href: '/video-to-audio' },
 *     { id: 'video-trimmer', title: 'Trim Video', desc: 'Cut specific parts', icon: 'ScissorsIcon', href: '/video-trimmer' }
 *   ]} 
 * />
 */
export default function ToolChain({ suggestions = [] }) {
    if (!suggestions || suggestions.length === 0) return null;

    return (
        <div className="my-8 p-6 bg-muted/30 rounded-xl border border-border/50">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary">✨</span> Next Steps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestions.map((tool) => (
                    <div key={tool.id} className="flex items-center justify-between p-4 bg-background rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                        <div>
                            <h4 className="font-medium text-foreground">{tool.title}</h4>
                            <p className="text-sm text-muted-foreground">{tool.desc}</p>
                        </div>
                        <Link href={tool.href}>
                            <Button size="sm" variant="secondary" className="group">
                                Use Tool
                                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
