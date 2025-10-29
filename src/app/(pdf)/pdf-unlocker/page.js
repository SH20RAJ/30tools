import PdfUnlockerTool from '@/components/tools/pdf/PdfUnlockerTool';

export const metadata = {
  title: 'PDF Unlocker - Best PDF Password Remover Tool Online',
  description: "Best PDF unlocker tool to remove PDF password protection instantly. Free online PDF password remover, unlock encrypted PDF files, remove PDF security restrictions. Adobe PDF unlocker, systools PDF unlocker alternative. No software required.",
  keywords: "pdf unlocker, pdf password remover, remove pdf password, unlock pdf, best pdf unlocker, pdf unlocker free, pdf unlocker online, adobe pdf unlocker, systools pdf unlocker, pdf unlocker tool, unlock pdf document, pdf password recovery, remove pdf protection, free pdf unlocker, online pdf unlocker tools, pdf unlocker app, unlock pdf document without password, unlock encrypted pdf, pdf security remover, unlock password protected pdf, pdf unlocker crack, pdf unlocker download, pdf unlock bulk, batch pdf unlocker, unlock pdf by password, pdf unlocker chrome extension, pdf unlock converter, pdf unlock copy protection, unlock pdf copy text, pdf unlocker expert, pdf encryption unlock, unlock pdf excel, encrypted pdf unlock, pdf unlocker forgot password, pdf unlocker free without password, unlock pdf document free, unlock pdf document online, pdf unlock and merge, pdf unlock and compress, pdf unlock and edit, pdf unlock and download, pdf unlock comments, unlock pdf bank statement, unlock pdf bluebeam, pdf unlocker wondershare, pdf unlocker bot telegram, course hero pdf unlocker, cubexsoft pdf unlocker, cloudxtra pdf unlocker online, cigati pdf unlocker, canva pdf unlocker, aryson pdf unlocker, acrobat pdf unlocker, aadhaar pdf unlocker, ai pdf unlocker, any pdf unlocker, appnimi pdf unlocker, bitrecover pdf unlocker, elgindy pdf unlocker, elcomsoft pdf unlocker, portable pdf unlocker exe, systools pdf unlocker crack, systools pdf unlocker activation key, adobe pdf unlocker free download, best free pdf unlocker, best pdf unlocker tool, best pdf unlocker online, best pdf unlocker reddit, pdf unlocker and merger, pdf unlocker ai, pdf unlock aadhaar, pdf unlock book, pdf unlock by link, pdf unlock batch online, pdf copy unlock, pdf copy paste unlock, pdf unlocker com, pdf unlocker doi, pdf unlock document after signing, pdf unlocking data with generative ai and rag, download pdf unlocker, download pdf unlocker full version, download systools pdf unlocker, drive pdf unlocker, descargar pdf unlocker, pdf unlocker tool free download, pdf document unlocker, pdf unlocker free download for windows 10, pdf unlocker extension, pdf unlocker exe, pdf unlocker edit, pdf unlock edit online, pdf expired unlock, unlock pdf encrypted file, unlock pdf english, pdf edit unlocker, pdf unlocker en ligne, pdfgear online pdf unlocker, systools pdf unlocker free download",
  openGraph: {
    title: 'PDF Unlocker - Best PDF Password Remover Tool Online',
    description: 'Best PDF unlocker tool to remove PDF password protection instantly. Free online PDF password remover for encrypted PDF files.',
    type: 'website',
    url: 'https://30tools.com/pdf-unlocker',
  },
  alternates: {
    canonical: 'https://30tools.com/pdf-unlocker',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function PdfUnlockerPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "PDF Unlocker - Free Password Remover",
            "description": "Best free online PDF unlocker tool to remove password protection from PDF files instantly. Alternative to systools PDF unlocker, adobe PDF unlocker.",
            "url": "https://30tools.com/pdf-unlocker",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "provider": {
              "@type": "Organization",
              "name": "30tools",
              "url": "https://30tools.com"
            },
            "featureList": [
              "PDF password removal",
              "Unlock encrypted PDF files",
              "Remove PDF copy protection", 
              "Batch PDF processing",
              "No software installation required",
              "Free online PDF unlocker",
              "Adobe PDF unlocker alternative",
              "Systools PDF unlocker alternative"
            ],
            "keywords": "pdf unlocker, pdf password remover, unlock pdf, adobe pdf unlocker, systools pdf unlocker, best pdf unlocker, pdf unlocker free, online pdf unlocker tools"
          })
        }}
      />
      
      <PdfUnlockerTool />
    </>
  );
}
