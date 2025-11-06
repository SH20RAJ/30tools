import PdfProtectTool from '@/components/tools/pdf/PdfProtectTool';

export const metadata = {
  title: "PDF Password Protector - Add Password Protection to PDF",
  description: "Professional pdf protect to Process PDF files online. Free, secure & unlimited PDF processing. No email required, instant results.",
  keywords: "pdf password protect, add password to pdf, pdf security, protect pdf online, pdf encryption, secure pdf, password protect pdf free, i love pdf extract,online pdf combiner free,merge pdf gratis,pdf splitter online free,ilovepdf free,pdf love pdf,pdf join,ilovepdf dividir,ilovepdf 結合,ilovepdf عربي,i love to pdf,ilovepdf converter,i love my pdf converter,recortar pdf ilovepdf,we love pdf,i love pdf free,ilovepdf juntar,ilovepdf compresser,fusionner pdf ilovepdf,i live pdf,ilovepdf unire,word ke pdf gratis ilovepdf,pdf merge ilovepdf,i ilovepdf,ilovepdf edit pdf,pdf i love,i love pdf.com,love my pdf,ilovepdf editar pdf,word para pdf ilovepdf,ilovepdf jpg a pdf,pdf a imagen ilovepdf,jpg a pdf ilovepdf,i love pdf gratis,firmar pdf ilovepdf,pdf i love pdf,pdf a jpg ilovepdf,transformar pdf em word ilovepdf,pdf lovers,l love pdf,convertir pdf a word ilovepdf gratis,my love pdf,edit pdf ilovepdf,ilovepdf convertir,convert word to pdf ilovepdf,pdf ilovepdf,www.ilovepdf.com pdf,pdf para word ilovepdf,juntar pdf ilovepdf,ilovepdf 日本語,ilovepdf compressed,www.ilovepdf.com ​​​​,converter pdf em word ilovepdf,separar pdf ilovepdf,ilovepdf pdf to excel,gabung pdf ilovepdf,ilovepdf jpg to pdf,ilovepdf editar,ilov,i heart pdf,i love pdf en ligne,love pdf,dividir pdf ilovepdf,ilovepdf split,pdf to jpg ilovepdf,jpeg to pdf ilovepdf,ilovepdf pdf to jpg,pdf lover,i love pdf français,in love pdf,ilovepdf merge pdf,jpg to pdf ilovepdf,pdflove,ilovepdf comprimir,word to pdf converter ilovepdf,ilovepdf fusionner,da pdf a word ilovepdf,ipdf,convert word to pdf online,editar pdf ilovepdf,ilovepdf在线转换,convert pdf to word ilovepdf,ilovepdf.com,merge pdf ilovepdf,ilovepdf gratis,word to pdf ilovepdf,ilovepdf compress,ilovepdf juntar pdf,ilovepdf to word,pdf tools,ilovepdf edit,i love you pdf,comprimir pdf ilovepdf,ilovepdf word to pdf,love pdf converter,i love pdf merge pdf,yo amo pdf,pdf a word ilovepdf,ilovepdf online,i love pdf español,i love pdfs,ilovepdf pdf,ilovepdf español,ilovepdf en français,pdf to word converter ilovepdf,ilovepdf unir,我爱pdf,ilovepdf unir pdf,merge pdf i love pdf,de pdf a word ilovepdf,i love pdf unir,ilovepdf português,i love pdf gratuit,ilovepdf pdf a word,pdf to word ilovepdf,pdf to word free,convert pdf to word free,ilovepdf pdf para word,convert to pdf,pdf creator,separar pdf,pdf combiner,ilovepdf en español,i love pdf converter,ilovepdf在线转换官网,i lovepdf,unir pdf ilovepdf,i love,i love my pdf,ilovepdf merge,convert pdf to jpg,ilove,i love pdf merge,love,pdf love,pdf merge,pdf converter,convert word to pdf,combine pdf,ilovepdf pdf to word,pdf merger,i love pdf to word,ilove pdf,unir pdf,convert pdf to word,merge pdf,pdf to word converter,pdf,pdf to word,i love pdf",
  openGraph: {
    title: "Free PDF Password Protector - Secure Your PDF Files",
    description: "Add password protection to PDF files with military-grade encryption and custom permissions.",
    url: "https://30tools.com/pdf-protect",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-protect.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Password Protector"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Password Protector - Secure Your PDF Files",
    description: "Add password protection with 256-bit encryption and custom permissions.",
    images: ["/og-images/pdf-protect.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/pdf-protect"
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
  category: 'PDF Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'PDF Protect - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Pdf Protect",
  "description": "Professional pdf protect to Process PDF files online. Free, secure & unlimited PDF processing. No email required, instant results.",
  "url": "https://30tools.com/pdf-protect",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function PdfProtectPage() {
  return <PdfProtectTool />;
}
