'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CopyIcon, CheckIcon } from 'lucide-react';
import { toast } from 'sonner';

const CodeBlock = ({ code, language = 'html', className = '' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Simple syntax highlighting for HTML, JavaScript, and JSX
  const highlightCode = (code, language) => {
    if (!code) return '';

    let highlighted = code;

    switch (language) {
      case 'html':
        // HTML tags
        highlighted = highlighted.replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9]*)(.*?)(&gt;)/g, 
          '<span class="text-blue-600">$1</span><span class="text-purple-600">$2</span><span class="text-green-600">$3</span><span class="text-blue-600">$4</span>');
        // Attributes
        highlighted = highlighted.replace(/(\s)([a-zA-Z-]+)(=)(&quot;.*?&quot;)/g, 
          '$1<span class="text-orange-600">$2</span><span class="text-gray-500">$3</span><span class="text-green-500">$4</span>');
        break;
      
      case 'javascript':
      case 'jsx':
        // Keywords
        highlighted = highlighted.replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default)\b/g, 
          '<span class="text-purple-600">$1</span>');
        // Strings
        highlighted = highlighted.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, 
          '<span class="text-green-500">$1$2$1</span>');
        // Comments
        highlighted = highlighted.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, 
          '<span class="text-gray-500">$1</span>');
        break;
      
      default:
        return code;
    }

    return highlighted;
  };

  // Convert < and > to HTML entities for display
  const escapeHtml = (text) => {
    return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  const displayCode = highlightCode(escapeHtml(code), language);

  return (
    <div className={`relative bg-gray-900 text-gray-100 rounded-lg overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-sm font-mono text-gray-300">{language.toUpperCase()}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-6 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
        >
          {copied ? <CheckIcon className="w-3 h-3" /> : <CopyIcon className="w-3 h-3" />}
        </Button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm">
          <code dangerouslySetInnerHTML={{ __html: displayCode }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
