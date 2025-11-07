import NotesTool from '@/components/tools/utilities/NotesTool';

export const metadata = {
  title: "Notes - Simple Online Notepad | 30tools",
  description: "Professional notes tool. Free online processing with high-quality results. No registration required, instant results.",
  keywords: [
    // Primary keywords
    "online notepad",
    "notes app",
    "online notes",
    "note taking tool",
    "web notepad",
    
    // Long-tail keywords for SEO ranking
    "free online notepad no registration",
    "simple notes app browser",
    "minimalist note taking tool",
    "auto save online notepad",
    "markdown notes online",
    "private notes browser storage",
    "quick notes online tool",
    "text editor online simple",
    "note taking app web based",
    "clean notepad interface",
    "browser notes storage",
    "offline notes tool"
  ].join(", "),
  openGraph: {
    title: "Free Online Notepad - Simple Notes Tool",
    description: "Clean, minimalistic online notepad for quick notes. Auto-saves to your browser and works offline. No registration required.",
    url: "https://30tools.com/notes",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/notes.jpg",
        width: 1200,
        height: 630,
        alt: "Notes - Online Notepad Tool"
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Notepad - Free Notes Tool",
    description: "Clean, minimalistic online notepad for quick notes. Auto-saves to your browser and works offline.",
    images: ["/og-images/notes.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/notes"
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Online Notepad",
  "description": "Free online notepad for taking quick notes with auto-save functionality and clean interface",
  "url": "https://30tools.com/notes",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Auto-save functionality",
    "Browser storage",
    "Offline support",
    "Clean interface",
    "No registration required",
    "Privacy focused",
    "Word count",
    "Character count",
    "Export notes"
  ]
};

export default function NotesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-background">
                Notes
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Simple, clean notepad for your thoughts. Auto-saves to your browser, works offline, and keeps your notes private. No registration required.
              </p>
            </div>

            <NotesTool />

            <div className="mt-12 text-center">
              <div className="bg-card rounded-lg p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">💾</span>
                    </div>
                    <h3 className="font-medium mb-2">Auto-Save</h3>
                    <p className="text-sm text-muted-foreground">Your notes are automatically saved to your browser as you type</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">🔒</span>
                    </div>
                    <h3 className="font-medium mb-2">Private</h3>
                    <p className="text-sm text-muted-foreground">All notes stay in your browser - no data sent to servers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">📱</span>
                    </div>
                    <h3 className="font-medium mb-2">Offline</h3>
                    <p className="text-sm text-muted-foreground">Works without internet connection once loaded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}