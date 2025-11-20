"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Copy, Download, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function EmailExtractorTool() {
  const [text, setText] = useState("");
  const [emails, setEmails] = useState([]);

  const extractEmails = () => {
    if (!text.trim()) {
      toast.error("Please enter some text");
      return;
    }

    // Email regex pattern
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const found = text.match(emailRegex) || [];

    // Remove duplicates
    const unique = [...new Set(found)];

    setEmails(unique);

    if (unique.length === 0) {
      toast.warning("No email addresses found");
    } else {
      toast.success(`Found ${unique.length} email${unique.length > 1 ? 's' : ''}`);
    }
  };

  const copyAll = () => {
    navigator.clipboard.writeText(emails.join('\n'));
    toast.success("Copied all emails to clipboard!");
  };

  const downloadEmails = () => {
    const blob = new Blob([emails.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'extracted-emails.txt';
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded emails!");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text-input">Paste Text Here</Label>
            <Textarea
              id="text-input"
              placeholder="Paste any text containing email addresses..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[500px] font-mono text-sm"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={extractEmails} className="flex-1">
              <Mail className="w-4 h-4 mr-2" />
              Extract Emails
            </Button>
            <Button variant="outline" onClick={() => { setText(''); setEmails([]); }}>
              <Trash2 className="w-4 h-4 mr-2" />
              Clear
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Extracted Emails ({emails.length})
                </CardTitle>
                {emails.length > 0 && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={copyAll}>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy All
                    </Button>
                    <Button size="sm" variant="outline" onClick={downloadEmails}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {emails.length > 0 ? (
                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                  {emails.map((email, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                    >
                      <span className="font-mono text-sm">{email}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => {
                          navigator.clipboard.writeText(email);
                          toast.success("Copied!");
                        }}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No emails extracted yet</p>
                  <p className="text-sm mt-2">Paste text and click "Extract Emails"</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
