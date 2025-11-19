import InstagramDPDownloader from "@/components/tools/downloaders/InstagramDPDownloader";

export const metadata = {
  title: "Instagram Dp Downloader - Free Online Tool | Professional Results",
  description:
    "Professional instagram dp downloader tool. Free online processing with high-quality results. No registration required, instant results.",
  keywords: [
    // Primary Instagram DP keywords
    "instagram dp downloader",
    "download instagram profile picture",
    "instagram profile picture downloader",
    "ig dp downloader",
    "instagram dp download",
    "save instagram profile picture",
    "instagram profile photo downloader",
    "instagram avatar downloader",
    "instagram pp downloader",
    "instagram profile pic saver",

    // Long-tail SEO keywords
    "instagram dp downloader online free",
    "download instagram profile picture hd",
    "instagram profile picture viewer full size",
    "save instagram dp to phone",
    "instagram profile picture downloader anonymous",
    "instagram dp downloader for pc mobile",
    "free instagram profile picture downloader",
    "instagram profile photo full resolution",
    "bulk instagram dp downloader",
    "instagram profile picture zoom and download",

    // International keywords
    "descargar foto de perfil instagram",
    "baixar foto do perfil instagram",
    "télécharger photo profil instagram",
    "تحميل صورة الملف الشخصي انستقرام",
    "scaricare foto profilo instagram",
    "tải ảnh đại diện instagram",

    // Feature specific
    "instagram profile picture full size",
    "instagram dp hd quality",
    "instagram profile picture viewer",
    "instagram avatar full resolution",
    "instagram profile photo zoom",
  ].join(", "),
  openGraph: {
    title: "Instagram DP Downloader - Download Profile Pictures HD Free",
    description:
      "Download Instagram profile pictures in full size HD quality. Free, fast, and secure Instagram DP downloader.",
    url: "https://30tools.com/instagram-dp-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/instagram-dp-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram DP Downloader - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram DP Downloader - Download Profile Pictures HD",
    description:
      "Download Instagram profile pictures in full size HD quality. Free Instagram DP downloader.",
    images: ["/og-images/instagram-dp-downloader.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/instagram-dp-downloader",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Instagram DP Downloader",
  description:
    "Free online tool to download Instagram profile pictures in full size HD quality",
  url: "https://30tools.com/instagram-dp-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download Instagram profile pictures",
    "Full size HD quality downloads",
    "Anonymous profile picture viewing",
    "No login required",
    "Works on all devices",
    "Fast processing speed",
    "Unlimited free downloads",
    "Privacy protected",
  ],
};

export default function InstagramDPDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-background">
              Instagram DP Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download Instagram profile pictures (DP) in full size HD quality
              for free. Our advanced Instagram DP downloader allows you to view
              and save Instagram profile photos in their original resolution.
              Access profile pictures anonymously without any login requirement.
              Perfect for saving contact photos, profile research, and personal
              collection.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Full Size HD
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Anonymous Access
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ No Login Required
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Instant Download
              </span>
            </div>
          </div>

          <InstagramDPDownloader />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                How to Download Instagram Profile Pictures
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Enter Username</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter the Instagram username whose profile picture you want
                    to download
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">View Full Size</h3>
                  <p className="text-sm text-muted-foreground">
                    Our tool will fetch and display the profile picture in full
                    resolution
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download HD Image</h3>
                  <p className="text-sm text-muted-foreground">
                    Click download to save the Instagram profile picture to your
                    device
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Instagram DP Downloader Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🖼️ Full Resolution Quality
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download Instagram profile pictures in their original full
                    size and highest quality. Get crystal clear images without
                    any compression or quality loss.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    👤 Anonymous Viewing
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    View and download Instagram profile pictures completely
                    anonymously. The profile owner will never know you accessed
                    or downloaded their profile photo.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    ⚡ Instant Access
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant access to any public Instagram profile picture.
                    Our tool fetches profile photos in seconds without any
                    waiting time or processing delays.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    📱 Mobile Friendly
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Perfectly optimized for mobile devices. Download Instagram
                    profile pictures directly to your phone gallery with just a
                    few taps on any device.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Instagram DP Downloader FAQ
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download profile pictures from private accounts?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can only download profile pictures from public Instagram
                    accounts. Private account profile pictures are not
                    accessible through our downloader.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What quality will the downloaded profile picture be?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Profile pictures are downloaded in their original full
                    resolution as uploaded to Instagram, typically in high
                    quality suitable for contact photos and personal use.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Do I need to log into Instagram?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No Instagram login required! Our tool works completely
                    anonymously without needing any Instagram account access or
                    personal information.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download multiple profile pictures at once?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Currently, you can download one profile picture at a time.
                    Simply enter different usernames to download multiple
                    profile pictures sequentially.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Is it legal to download Instagram profile pictures?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can download public profile pictures for personal use.
                    Always respect copyright and privacy laws, and use
                    downloaded images responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
