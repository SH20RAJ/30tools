import URLEncoder from "@/components/tools/developer/URLEncoderTool";

export const metadata = {
  title: 'URL Encoder/Decoder - Encode and Decode URLs | 30tools',
  description: 'Encode and decode URLs and query parameters. Convert special characters for safe URL transmission.',
  keywords: 'url encoder, url decoder, percent encoding, query parameters, url encoding, uri encoding',
  openGraph: {
    title: 'URL Encoder/Decoder - Encode and Decode URLs | 30tools',
    description: 'Encode and decode URLs and query parameters.',
    type: 'website',
  },
};

export default function URLEncoderPage() {
  return <URLEncoder />;
}
