'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { generateFAQSchema } from '@/constants/seo/advanced-metadata';

export default function FAQSection({ 
  faqs = [], 
  title = "Frequently Asked Questions",
  showSchema = true,
  variant = "accordion", // "accordion", "grid", "list"
  categoryTitle,
  toolName
}) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const schema = showSchema ? generateFAQSchema(faqs) : null;

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const renderAccordionFAQ = () => (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold">
          <HelpCircle className="h-6 w-6 text-primary" />
          {title}
        </CardTitle>
        {categoryTitle && (
          <p className="text-muted-foreground">
            Everything you need to know about {categoryTitle.toLowerCase()}
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {faqs.map((faq, index) => (
          <Collapsible
            key={index}
            open={openItems.has(index)}
            onOpenChange={() => toggleItem(index)}
            className="border rounded-lg"
          >
            <CollapsibleTrigger className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground pr-4">{faq.question}</h3>
                {openItems.has(index) ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-3">
              <div className="pt-2 border-t">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );

  const renderGridFAQ = () => (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <MessageCircle className="h-6 w-6 text-primary" />
          {title}
        </h2>
        {categoryTitle && (
          <p className="text-muted-foreground">
            Common questions about {categoryTitle.toLowerCase()}
          </p>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <Card key={index} className="h-fit">
            <CardHeader className="pb-3">
              <h3 className="font-medium text-foreground">{faq.question}</h3>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderListFAQ = () => (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {categoryTitle && (
          <p className="text-muted-foreground">
            Quick answers for {categoryTitle.toLowerCase()}
          </p>
        )}
      </div>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-l-4 border-primary pl-4">
            <h3 className="font-medium text-foreground mb-2">{faq.question}</h3>
            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {showSchema && schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      
      <section className="py-12 bg-muted/30" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          {variant === 'accordion' && renderAccordionFAQ()}
          {variant === 'grid' && renderGridFAQ()}
          {variant === 'list' && renderListFAQ()}
        </div>
      </section>
    </>
  );
}

// Enhanced FAQ component with search functionality
export function SearchableFAQ({ 
  faqs = [], 
  title = "Help Center",
  placeholder = "Search questions...",
  showSchema = true 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState(faqs);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setFilteredFAQs(faqs);
      return;
    }

    const filtered = faqs.filter(faq => 
      faq.question.toLowerCase().includes(term.toLowerCase()) ||
      faq.answer.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFAQs(filtered);
  };

  const schema = showSchema ? generateFAQSchema(faqs) : null;

  return (
    <>
      {showSchema && schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      
      <section className="py-12" aria-labelledby="searchable-faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="searchable-faq-heading" className="text-3xl font-bold text-center mb-8">
              {title}
            </h2>
            
            {/* Search Input */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
            </div>

            {/* FAQ Results */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                <FAQSection 
                  faqs={filteredFAQs} 
                  title=""
                  showSchema={false}
                  variant="list"
                />
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    No questions found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Category-specific FAQ components
export function ImageToolsFAQ() {
  const faqs = [
    {
      question: "How do I compress images without losing quality?",
      answer: "Our smart compression algorithm maintains visual quality while reducing file size by up to 80%. You can adjust compression levels to balance size and quality."
    },
    {
      question: "What image formats are supported?",
      answer: "We support JPEG, PNG, WebP, BMP, GIF, TIFF, and SVG formats. All processing happens in your browser for privacy."
    },
    {
      question: "Is there a file size limit?",
      answer: "You can process images up to 50MB each. For batch processing, you can handle up to 20 images simultaneously."
    },
    {
      question: "Can I convert image formats?",
      answer: "Yes! Our tools support conversion between all major image formats including modern formats like WebP for better web optimization."
    }
  ];

  return (
    <FAQSection 
      faqs={faqs}
      title="Image Tools FAQ"
      categoryTitle="Image Processing Tools"
      variant="accordion"
    />
  );
}

export function PDFToolsFAQ() {
  const faqs = [
    {
      question: "How do I merge multiple PDF files?",
      answer: "Upload your PDF files, arrange them in the desired order, and click merge. The tool preserves bookmarks and maintains document quality."
    },
    {
      question: "Can I split a large PDF into smaller files?",
      answer: "Yes, you can split PDFs by page ranges, extract specific pages, or split into individual pages with our PDF splitter tool."
    },
    {
      question: "Is my PDF data secure?",
      answer: "Absolutely. All PDF processing happens locally in your browser. Files are never uploaded to servers or stored anywhere."
    },
    {
      question: "What's the maximum PDF file size?",
      answer: "You can process PDF files up to 100MB each. For larger files, consider compressing them first with our PDF compressor."
    }
  ];

  return (
    <FAQSection 
      faqs={faqs}
      title="PDF Tools FAQ"
      categoryTitle="PDF Processing Tools"
      variant="grid"
    />
  );
}