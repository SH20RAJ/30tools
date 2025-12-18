export const dynamic = "force-static";

export default function EmbedLayout({ children }) {
  // Minimal layout with no navigation or footer to make iframe-friendly pages
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body className="bg-black text-white">
        <div className="min-h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
