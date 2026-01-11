"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Copy, RefreshCw, Link as LinkIcon, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

export default function UTMBuilderTool() {
    const [url, setUrl] = useState("");
    const [source, setSource] = useState("");
    const [medium, setMedium] = useState("");
    const [campaign, setCampaign] = useState("");
    const [term, setTerm] = useState("");
    const [content, setContent] = useState("");
    const [generatedUrl, setGeneratedUrl] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        generateUrl();
    }, [url, source, medium, campaign, term, content]);

    const generateUrl = () => {
        if (!url) {
            setGeneratedUrl("");
            setError("");
            return;
        }

        try {
            // Validate URL
            let validUrl = url;
            if (!validUrl.match(/^https?:\/\//)) {
                validUrl = "https://" + validUrl;
            }
            new URL(validUrl); // Throws if invalid

            const newUrlObj = new URL(validUrl);
            if (source) newUrlObj.searchParams.set("utm_source", source);
            if (medium) newUrlObj.searchParams.set("utm_medium", medium);
            if (campaign) newUrlObj.searchParams.set("utm_campaign", campaign);
            if (term) newUrlObj.searchParams.set("utm_term", term);
            if (content) newUrlObj.searchParams.set("utm_content", content);

            setGeneratedUrl(newUrlObj.toString());
            setError("");
        } catch (e) {
            setError("Please enter a valid URL (e.g., website.com)");
            setGeneratedUrl("");
        }
    };

    const copyToClipboard = () => {
        if (!generatedUrl) return;
        navigator.clipboard.writeText(generatedUrl);
        toast.success("UTM URL copied to clipboard!");
    };

    const resetForm = () => {
        setUrl("");
        setSource("");
        setMedium("");
        setCampaign("");
        setTerm("");
        setContent("");
        setGeneratedUrl("");
        setError("");
        toast.info("Form reset");
    };

    return (
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
            <CardHeader className="bg-muted/30">
                <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-6 w-6 text-primary" />
                    Campaign URL Builder
                </CardTitle>
                <CardDescription>
                    Add UTM parameters to your URLs to track campaigns in Google Analytics 4 (GA4).
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                {/* Main URL Input */}
                <div className="space-y-2">
                    <Label htmlFor="url" className="text-base font-semibold">
                        Website URL <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="url"
                        placeholder="e.g. https://www.example.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="h-12"
                    />
                    <p className="text-sm text-muted-foreground">
                        The full website URL (e.g. https://www.example.com)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* UTM Source */}
                    <div className="space-y-2">
                        <Label htmlFor="source">
                            Campaign Source (utm_source) <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="source"
                            placeholder="e.g. google, newsletter"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            The referrer: (e.g. google, newsletter)
                        </p>
                    </div>

                    {/* UTM Medium */}
                    <div className="space-y-2">
                        <Label htmlFor="medium">
                            Campaign Medium (utm_medium) <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="medium"
                            placeholder="e.g. cpc, banner, email"
                            value={medium}
                            onChange={(e) => setMedium(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            Marketing medium: (e.g. cpc, banner, email)
                        </p>
                    </div>

                    {/* UTM Campaign */}
                    <div className="space-y-2">
                        <Label htmlFor="campaign">
                            Campaign Name (utm_campaign) <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="campaign"
                            placeholder="e.g. spring_sale"
                            value={campaign}
                            onChange={(e) => setCampaign(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            Product, promo code, or slogan (e.g. spring_sale)
                        </p>
                    </div>

                    {/* UTM Term */}
                    <div className="space-y-2">
                        <Label htmlFor="term">Campaign Term (utm_term)</Label>
                        <Input
                            id="term"
                            placeholder="e.g. running+shoes"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            Identify the paid keywords
                        </p>
                    </div>

                    {/* UTM Content */}
                    <div className="space-y-2">
                        <Label htmlFor="content">Campaign Content (utm_content)</Label>
                        <Input
                            id="content"
                            placeholder="e.g. logolink, textlink"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            Use to differentiate ads (e.g. logolink vs textlink)
                        </p>
                    </div>
                </div>

                {/* Error Alert */}
                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {/* Generated URL Section */}
                <div className="space-y-3 pt-6 border-t">
                    <h3 className="text-lg font-semibold">Generated Campaign URL</h3>
                    <div className="relative">
                        <div className="p-4 bg-secondary rounded-lg font-mono text-sm break-all min-h-[3rem] flex items-center pr-12">
                            {generatedUrl || "Fill in the fields above to generate URL..."}
                        </div>
                        <Button
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                            onClick={copyToClipboard}
                            disabled={!generatedUrl}
                        >
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="outline" onClick={resetForm} className="w-full sm:w-auto">
                            <RefreshCw className="mr-2 h-4 w-4" /> Reset Form
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
