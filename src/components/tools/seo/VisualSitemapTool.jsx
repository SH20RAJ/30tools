"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Search, Network, ChevronRight, ChevronDown, FileText, Folder } from "lucide-react";

const TreeNode = ({ node, depth = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const hasChildren = node.children && Object.keys(node.children).length > 0;
    const isRoot = depth === 0;

    return (
        <div className="select-none">
            <div
                className={`
          flex items-center gap-2 py-1.5 px-2 rounded-md transition-colors cursor-pointer
          ${isExpanded ? 'bg-muted/30' : 'hover:bg-muted/50'}
          ${isRoot ? 'font-bold text-lg text-primary' : 'text-sm'}
        `}
                style={{ marginLeft: `${depth * 12}px` }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className={`p-1 rounded-md ${hasChildren ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : "bg-gray-100 dark:bg-gray-800 text-gray-500"}`}>
                    {hasChildren ? (
                        isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />
                    ) : (
                        <div className="w-3 h-3" />
                    )}
                </div>

                {hasChildren ? <Folder className="w-4 h-4 text-amber-500" /> : <FileText className="w-4 h-4 text-blue-400" />}

                <span className="truncate">{node.name || (isRoot ? "Root" : "/")}</span>

                {hasChildren && (
                    <span className="text-xs text-muted-foreground ml-auto bg-muted px-1.5 py-0.5 rounded-full">
                        {Object.keys(node.children).length}
                    </span>
                )}
            </div>

            {isExpanded && hasChildren && (
                <div
                    className="overflow-hidden border-l border-border/50 ml-[15px] animate-in slide-in-from-top-1 fade-in duration-200"
                >
                    {Object.keys(node.children).sort().map((key) => (
                        <TreeNode key={key} node={node.children[key]} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function VisualSitemapTool() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [treeData, setTreeData] = useState(null);
    const [stats, setStats] = useState(null);

    const processSitemap = (xmlContent) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, "text/xml");
        const urls = Array.from(xmlDoc.getElementsByTagName("url")).map(
            (urlNode) => {
                const loc = urlNode.getElementsByTagName("loc")[0]?.textContent;
                // Basic clean to remove protocol and domain for tree building
                try {
                    const urlObj = new URL(loc);
                    return { full: loc, path: urlObj.pathname };
                } catch {
                    return { full: loc, path: loc };
                }
            }
        ).filter(u => u.full); // remove empty

        if (urls.length === 0) {
            throw new Error("No URLs found in sitemap. Check if it's a valid XML sitemap.");
        }

        // Build Tree
        const root = { name: new URL(urls[0]?.full || "https://example.com").hostname, children: {} };

        urls.forEach(({ path }) => {
            const parts = path.split("/").filter(Boolean);
            let current = root;

            parts.forEach((part, index) => {
                if (!current.children[part]) {
                    current.children[part] = { name: part, children: {} };
                }
                current = current.children[part];
            });
        });

        setStats({ totalUrls: urls.length });
        setTreeData(root);
    };

    const handleAnalyze = async () => {
        if (!url) return;
        setLoading(true);
        setError(null);
        setTreeData(null);

        try {
            const res = await fetch("/api/visual-sitemap", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Failed to fetch sitemap");

            processSitemap(data.xml);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 w-full max-w-5xl mx-auto">
            <Card className="border-2 border-primary/5 shadow-lg">
                <CardHeader className="bg-muted/30 pb-8 border-b">
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent flex items-center gap-3">
                        <Network className="w-8 h-8 text-primary" />
                        Visual Sitemap Generator
                    </CardTitle>
                    <CardDescription className="text-lg">
                        Visualize your website structure by parsing your XML sitemap
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                    <div className="flex gap-3">
                        <Input
                            placeholder="https://example.com/sitemap.xml"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="h-12 text-lg"
                        />
                        <Button
                            onClick={handleAnalyze}
                            disabled={loading || !url}
                            className="h-12 px-8 text-lg font-semibold"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Search className="w-5 h-5 mr-2" />}
                            Visualize
                        </Button>
                    </div>

                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>

            {treeData && (
                <Card className="shadow-md overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/20">
                        <div>
                            <CardTitle>Site Structure</CardTitle>
                            <CardDescription>Hierarchical view of {stats?.totalUrls} pages</CardDescription>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => {
                            // Trigger re-render to reset view mechanism could be improved, 
                            // but purely passing new object ref works for now
                            setTreeData({ ...treeData });
                        }}>
                            Refresh View
                        </Button>
                    </CardHeader>
                    <CardContent className="p-6 bg-card min-h-[500px]">
                        <div className="border rounded-lg p-6 bg-background shadow-inner">
                            <TreeNode node={treeData} />
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
