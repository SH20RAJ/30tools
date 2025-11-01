'use client';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Copy, Trash2, FileText, RotateCcw, Save } from 'lucide-react';
import { toast } from 'sonner';

export default function NotesTool() {
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [lastSaved, setLastSaved] = useState(null);
  const [autoSave, setAutoSave] = useState(true);

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('notes-content');
    const savedTime = localStorage.getItem('notes-last-saved');
    
    if (savedContent) {
      setContent(savedContent);
      if (savedTime) {
        setLastSaved(new Date(savedTime));
      }
    }
  }, []);

  // Update word and character counts
  useEffect(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    const chars = content.length;
    setWordCount(words);
    setCharCount(chars);
  }, [content]);

  // Auto-save functionality
  const saveToStorage = useCallback(() => {
    localStorage.setItem('notes-content', content);
    const now = new Date();
    localStorage.setItem('notes-last-saved', now.toISOString());
    setLastSaved(now);
  }, [content]);

  // Auto-save when content changes
  useEffect(() => {
    if (autoSave && content !== '') {
      const timeoutId = setTimeout(() => {
        saveToStorage();
      }, 1000); // Save after 1 second of no typing

      return () => clearTimeout(timeoutId);
    }
  }, [content, autoSave, saveToStorage]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const clearNotes = () => {
    if (window.confirm('Are you sure you want to clear all notes? This cannot be undone.')) {
      setContent('');
      localStorage.removeItem('notes-content');
      localStorage.removeItem('notes-last-saved');
      setLastSaved(null);
      toast.success('Notes cleared');
    }
  };

  const copyToClipboard = async () => {
    if (!content.trim()) {
      toast.error('No content to copy');
      return;
    }

    try {
      await navigator.clipboard.writeText(content);
      toast.success('Copied to clipboard');
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const downloadAsText = () => {
    if (!content.trim()) {
      toast.error('No content to download');
      return;
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `notes-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Notes downloaded');
  };

  const manualSave = () => {
    saveToStorage();
    toast.success('Notes saved');
  };

  const formatLastSaved = (date) => {
    if (!date) return 'Never';
    
    const now = new Date();
    const diffMs = now - date;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    
    if (diffSecs < 60) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <Card className="border-0 shadow-sm bg-card/50 backdrop-blur">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileText className="w-5 h-5 text-indigo-500" />
            Your Notes
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {autoSave ? 'Auto-save on' : 'Auto-save off'}
            </Badge>
            <Badge variant="outline" className="text-xs">
              Last saved: {formatLastSaved(lastSaved)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="relative">
          <Textarea
            value={content}
            onChange={handleContentChange}
            placeholder="Start typing your notes here...

This notepad automatically saves your content to your browser's local storage.
Your notes are private and never sent to any server.

Features:
• Auto-save as you type
• Word and character count
• Download as text file
• Copy to clipboard
• Works offline"
            className="min-h-[400px] resize-none border-border/50 bg-background/50 text-base leading-relaxed focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
            style={{ fontFamily: 'ui-monospace, "SF Mono", Monaco, monospace' }}
          />
        </div>

        {/* Stats and Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{wordCount} words</span>
            <span>{charCount} characters</span>
            {content.length > 0 && (
              <span>{Math.ceil(charCount / 1000)}KB</span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={manualSave}
              disabled={!content.trim()}
              className="text-xs"
            >
              <Save className="w-3 h-3 mr-1" />
              Save
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              disabled={!content.trim()}
              className="text-xs"
            >
              <Copy className="w-3 h-3 mr-1" />
              Copy
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={downloadAsText}
              disabled={!content.trim()}
              className="text-xs"
            >
              <Download className="w-3 h-3 mr-1" />
              Download
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={clearNotes}
              disabled={!content.trim()}
              className="text-xs text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
            >
              <Trash2 className="w-3 h-3 mr-1" />
              Clear
            </Button>
          </div>
        </div>

        {/* Quick Tips */}
        {content.length === 0 && (
          <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 mt-4">
            <h4 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">Quick Tips:</h4>
            <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
              <li>• Your notes auto-save as you type</li>
              <li>• All data stays in your browser (100% private)</li>
              <li>• Works offline once loaded</li>
              <li>• Use keyboard shortcuts: Ctrl+A (select all), Ctrl+C (copy)</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}