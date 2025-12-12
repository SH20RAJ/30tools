"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Copy, ExternalLink, Check } from "lucide-react";
import { toast } from "sonner";

export default function WhatsAppLinkGenerator() {
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [generatedLink, setGeneratedLink] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    const generate = () => {
        if (!phone) {
            toast.error("Please enter a phone number");
            return;
        }

        // Basic clean up
        const cleanPhone = phone.replace(/[^\d]/g, "");
        const encodedMessage = encodeURIComponent(message);
        const link = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

        setGeneratedLink(link);
        toast.success("Link generated!");
    };

    const copyLink = () => {
        navigator.clipboard.writeText(generatedLink);
        setIsCopied(true);
        toast.success("Copied to clipboard!");
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="w-6 h-6 text-green-500" />
                        Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number (with Country Code)</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="e.g. 15551234567"
                                className="pl-9"
                            />
                        </div>
                        <p className="text-xs text-muted-foreground">Do not include +, -, or () brackets.</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Pre-filled Message (Optional)</label>
                        <Textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Hi, I'm interested in your services..."
                            className="h-32 resize-none"
                        />
                    </div>

                    <Button onClick={generate} className="w-full h-12 text-lg bg-green-600 hover:bg-green-700">
                        Generate WhatsApp Link
                    </Button>
                </CardContent>
            </Card>

            {generatedLink && (
                <Card className="bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800">
                    <CardContent className="p-6">
                        <label className="text-sm font-bold text-green-800 dark:text-green-300 mb-2 block">Your Link is Ready:</label>
                        <div className="flex gap-2">
                            <Input value={generatedLink} readOnly className="bg-background" />
                            <Button size="icon" variant="outline" onClick={copyLink}>
                                {isCopied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                            </Button>
                            <Button size="icon" variant="default" asChild>
                                <a href={generatedLink} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
