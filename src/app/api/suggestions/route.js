import { NextResponse } from 'next/server';

const suggestions = [
  "image compressor",
  "free image compressor",
  "image optimizer",
  "compress images online",
  "image minimizer",
  "resize image",
  "convert image",
  "image converter",
  "jpeg compressor",
  "png compressor",
  "webp converter",
  "video compressor",
  "pdf compressor",
  "audio converter",
  "word counter",
  "qr code generator",
  "color picker",
  "json formatter",
  "css minifier",
  "password generator"
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';

  if (!query.trim()) {
    return NextResponse.json([query, []]);
  },

  const filtered = suggestions
    .filter(suggestion => suggestion.includes(query))
    .slice(0, 8);

  // Return in OpenSearch suggestion format
  return NextResponse.json([query, filtered]);
}
