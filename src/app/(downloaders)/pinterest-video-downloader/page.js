import PinterestDownloader from "@/components/tools/downloaders/PinterestDownloader";
import Link from 'next/link';

export const metadata = {
  title: "Pinterest Video Downloader - Free Online Tool | 30tools",
  description: "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available....",
  keywords: [
    "pinterest video downloader 2026",
    "download pinterest video",
    "save pinterest gif",
    "pinterest image downloader hd",
    "download pins free",
    "pinterest saver online",
    "pinterest to mp4",
    "updated 2026",
    "pinterest media downloader",
    "save pinterest ideas",
    "pinterest photo saver",
    "download pinterest story",
  ].join(", "),
  openGraph: {
    title: "Pinterest Video Downloader (2026) - Save Videos & GIFs",
    description:
      "⚡ Download Pinterest videos, GIFs & Images in HD quality! Free & unlimited tool (Updated 2026).",
    url: "https://30tools.com/pinterest-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/pinterest-downloader.jpg", // Assuming image exists or will differ
        width: 1200,
        height: 630,
        alt: "Pinterest Video Downloader 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest Video Downloader (2026) - Free Pin Saver",
    description: "⚡ Save Pinterest videos & GIFs in HD. Updated 2026!",
    images: ["/og-images/pinterest-downloader.jpg"], // Consistency
    creator: "@30tools",
  },
  alternates: { canonical: "https://30tools.com/pinterest-video-downloader" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-1828915420581549"
      data-ad-slot="4669751596"
    ></ins>
  </div>
);

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pinterest Video Downloader",
    alternateName: ["Pin Saver", "Pinterest Image Downloader"],
    description:
      "Free online tool to download videos, GIFs and Images from Pinterest in HD.",
    url: "https://30tools.com/pinterest-video-downloader",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Download Pinterest Videos",
      "Save Pinterest GIFs",
      "Download HD Images",
      "No registration required",
    ],
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download from Pinterest",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Copy Link",
        text: "Open the Pin and copy its link.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Paste URL",
        text: "Paste the link into the 30Tools Pinterest Downloader.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Download",
        text: "Choose to save the Video, GIF, or Image.",
      },
    ],
  },
};

export default function PinterestVideoDownloaderPage() {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSchemas.webApp),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSchemas.howTo),
        }}
      />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/all-downloaders" className="hover:text-primary">
                  Downloaders
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">
                Pinterest Video Downloader
              </li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Pinterest Video Downloader
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📌 Save Pins</span>
              <span>🎥 Videos & GIFs</span>
              <span>🖼️ Images</span>
              <span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <PinterestDownloader />
          </div>

          {/* SEO Content: Why Use Us */}
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">
              Why You Should Use Our Pinterest Video Downloader
            </h2>
            <p className="text-muted-foreground mb-8">
              Our Pinterest video downloader makes it easy to download Pinterest
              videos in high quality, including Full HD, 2K, and 4K MP4 format.
              You can also download Pinterest images, GIFs, and Idea Pins in
              high quality. Whether you're using a phone, tablet, or PC, you can
              save your favorite Pinterest videos quickly and easily. No
              software installation is required, just copy the link and start
              downloading directly from your browser.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">
                  Download Pinterest Videos in High Quality
                </h3>
                <p className="text-muted-foreground m-0">
                  With our Pinterest video downloader, you can save videos in
                  Full HD and 4K resolution, complete with sound. Unlike other
                  tools that limit you to lower-quality downloads, we ensure
                  that you get the best possible experience.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">
                  Easy for All Devices
                </h3>
                <p className="text-muted-foreground m-0">
                  Our downloader works across all devices, including mobile
                  phones, PCs, and tablets, and is compatible with both Android
                  and iOS operating systems. There's no need to install any
                  additional software, simply use your browser to download
                  Pinterest videos with ease.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Free to Use</h3>
                <p className="text-muted-foreground m-0">
                  Our Pinterest video downloader is completely free to use. We
                  only display a few ads to support our development, so you can
                  download as many videos as you like without any cost.
                </p>
              </div>
            </div>
          </section>

          <AdUnit />

          {/* How to Download Steps */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              How to Download Pinterest Video with 30tools
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Download Pinterest videos in the best formats, including 1080p,
              2K, and 4K, for free using 30tools.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Find Videos",
                  desc: "From Pinterest, Copy the Pinterest video URL by clicking Share and choosing Copy Video URL.",
                },
                {
                  step: "2",
                  title: "Paste Video",
                  desc: "Paste the Pinterest video URL in the box above and hit the Download button.",
                },
                {
                  step: "3",
                  title: "Download Video",
                  desc: "Click on the video quality that you want to download (SD or HD or 1080).",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit />

          {/* Key Features & Features List */}
          <section className="mb-16 grid md:grid-cols-2 gap-12">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">
                30tools - Best Pinterest Video Downloader
              </h2>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Key Features of 30tools Pinterest Downloader
              </h3>
              <ul className="space-y-3 mb-8">
                <li>
                  Support multiple formats. Our Pinterest video download helps
                  you download FULL HD, and 4K videos with sound. Most of the
                  current tools only allow HD videos.
                </li>
                <li>
                  Pinterest video downloader for every device (mobile phone, PC,
                  or tablet), and every OS (Android, IOS).
                </li>
                <li>
                  Download Pinterest videos only using your browser. We want to
                  keep things simple for our users. You don't need to install
                  any software.
                </li>
                <li>It's always be free.</li>
                <li>
                  Supports downloading Pinterest videos in HD quality and HD
                  resolution whenever available, ensuring the highest clarity
                  for your saved content.
                </li>
                <li>
                  Also supports saving Pinterest images, Idea Pins, and GIFs in
                  high quality without needing any apps or extensions.
                </li>
                <li>
                  Allows you to download Pinterest videos and media files in MP4
                  format for better compatibility across all devices.
                </li>
                <li>
                  Fast and reliable servers ensure smooth downloading for
                  videos, images, and other Pinterest content even during peak
                  hours.
                </li>
                <li>
                  Allows you to preview the Pinterest videos, images, or GIFs
                  before downloading when supported by Pinterest.
                </li>
                <li>
                  Built-in Pinterest to MP4 conversion, giving users flexible
                  download options whether they want the full video or just the
                  audio.
                </li>
              </ul>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-primary mt-0 md:mt-16">
                How to download video from Pinterest?
              </h3>
              <ul className="mb-8">
                <li>Copy the Pinterest video link</li>
                <li>
                  Pinterest video download link example:{" "}
                  <code>https://www.pinterest.com/pin/607845280972986482/</code>{" "}
                  OR <code>https://pin.it/4kOV9H0</code>
                </li>
                <li>
                  Go to <strong>30tools</strong> and paste the video link
                </li>
                <li>Select the video's quality that you want to download</li>
                <li>Download videos to your device.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-primary">
                What makes 30tools the best Pinterest downloader?
              </h3>
              <ul className="space-y-2">
                <li>Easy to use.</li>
                <li>
                  Multiple download options, with a lot of different formats:
                  144p, 240p, 360p, 720p HD, 1080p, FULL HD or 4K.
                </li>
                <li>
                  Works as an online Pinterest downloader app alternative.
                </li>
                <li>
                  Supports downloading not only videos but also Pinterest
                  images, GIFs, and Idea Pins in their original quality.
                </li>
                <li>Automatically converts Pinterest videos to MP4 format.</li>
              </ul>
            </div>
          </section>

          <AdUnit />

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "Why Use 30tools To Download Pinterest Video?",
                  a: "Based on user reviews and feedback, 30tools is one of the fastest, most reliable, and highest-quality Pinterest Video Downloader tools at the moment. We are committed to helping you save videos from Pinterest quickly and in the best possible quality.",
                },
                {
                  q: "How to download Pinterest videos to your computer?",
                  a: "On a computer, just copy the link of the Pinterest video, paste it into the input box at the top of this page, and click the Download button. You can download Pinterest videos in MP4 format with no watermark quickly and easily.",
                },
                {
                  q: "How to download Pinterest videos to Android?",
                  a: "Just like downloading on a computer, it's very simple, go to 30tools Pinterest Downloader -> Paste Pinterest Video Link -> And Click Download -> Choose the quality you want to download (Support to 4K Video).",
                },
                {
                  q: "How to Download 4k Pinterest Videos?",
                  a: "You just need a 4K quality Pinterest video link. Copy the link -> Access 30tools -> Paste Pinterest Video Link -> And Press Download -> Choose the quality you 4K to download.",
                },
                {
                  q: "How to download Pinterest videos to your iPhone (iOS)?",
                  a: "IOS is a little more complicated, because iOS does not support Live Video download natively the same way. You can use an app like Documents by Readdle, Open the application's browser -> Access 30tools -> Paste Pinterest Video Link -> And Click Download -> Select the quality.",
                },
                {
                  q: "How to download Pinterest videos in MP4 format?",
                  a: "With 30tools, saving Pinterest videos in MP4 is simple. Just copy the Pinterest video link, paste it into the input box at the top of this page, and choose MP4 from the available formats. Our Pinterest video downloader will convert the video automatically and generate a fast MP4 download link for your device.",
                },
                {
                  q: "Can I save Pinterest videos on my phone?",
                  a: "Yes, you can use the 30tools Pinterest saver to download Pinterest videos on your Android or iPhone. The saved video will appear in your device's Downloads folder. On iPhone, use the 'Save to Files' option if required.",
                },
                {
                  q: "Can I convert Pinterest videos to MP4?",
                  a: "Yes. 30tools automatically converts Pinterest to MP4. Just copy the Pinterest video link, paste it into our downloader, and choose the MP4 option.",
                },
                {
                  q: "Do I need a Pinterest downloader app to save videos?",
                  a: "No. You don't need to install any Pinterest downloader app. 30tools works directly in your browser and performs the same job as a Pinterest downloader app.",
                },
                {
                  q: "Can I download Pinterest GIFs, images, or Idea Pins?",
                  a: "Yes. 30tools supports downloading all types of Pinterest media, including videos, images, animated GIFs, and Idea Pins.",
                },
                {
                  q: "Does 30tools store downloaded videos or keep a copy of the video?",
                  a: "Oh no, 30tools does not host videos nor keep copies of downloaded videos. All videos are stored on Pinterest's servers and only downloaded to your device.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h3 className="text-lg font-semibold mb-2">
                Do you have any questions to answer?
              </h3>
              <p className="text-muted-foreground">
                Please contact us via our contact page. We will reply to you as
                quickly as possible.
              </p>
            </div>
          </section>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(
            5,
          ),
        }}
      />
    </>
  );
}
