import InstagramDPDownloader from "@/components/tools/downloaders/InstagramDPDownloader";

export const metadata = {
  title: "Instagram DP Downloader - View & Download Profile Pictures | 30tools",
  description: "View and download Instagram profile pictures in full HD size. Zoom into IG DPs and save them. Free Instagram profile picture viewer and downloader.",
  keywords: [
    "instagram dp downloader", "instagram profile picture downloader", "insta dp viewer",
    "download instagram dp", "instagram profile photo viewer", "full size instagram dp",
    "ig dp saver", "zoom instagram profile picture", "view ig profile pic hd",
    "instagram pfp downloader", "instazoom alternative"
  ].join(", "),
  openGraph: {
    title: "Instagram DP Downloader - View Full Size Profile Pics",
    description: "⚡ View and download Instagram profile pictures in HD!",
    url: "https://30tools.com/instagram-dp-downloader",
    siteName: "30tools",
    type: "website",
  },
  alternates: { canonical: "https://30tools.com/instagram-dp-downloader" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function InstagramDPDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li>/</li>
              <li><a href="/all-downloaders" className="hover:text-primary">Downloaders</a></li>
              <li>/</li>
              <li className="text-foreground font-medium">Instagram DP Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Instagram DP Downloader (HD)</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Fastest <strong>instagram profile picture downloader</strong>. View and download Instagram profile photos in full HD resolution. See any <strong>ig dp viewer</strong> content in large size for public or private accounts safely.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🔍 <strong>View Full Size IG DP</strong></span><span>💾 <strong>Download HD PFP</strong></span><span>👤 Any Account</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <InstagramDPDownloader />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download Instagram DP</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Enter Username", desc: "Type the Instagram username or paste the profile link." },
                { step: "2", title: "Search", desc: "Click search to find the user and fetch their profile picture." },
                { step: "3", title: "Download", desc: "View the DP in full size and click download to save it." }
              ].map((s, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/instagram-downloader", icon: "📸", title: "Instagram Downloader", desc: "Download all content" },
                { href: "/instagram-story-downloader", icon: "📖", title: "Story Downloader", desc: "Download stories" },
                { href: "/facebook-downloader", icon: "📘", title: "Facebook Downloader", desc: "Download FB videos" },
                { href: "/tiktok-downloader", icon: "🎵", title: "TikTok Downloader", desc: "Download TikToks" }
              ].map((tool, i) => (
                <a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tool.icon}</span>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
