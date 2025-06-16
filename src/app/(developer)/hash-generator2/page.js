import HashGeneratorTool from '@/components/tools/security/HashGeneratorTool';

export const metadata = {
  title: "Hash Generator - MD5, SHA-1, SHA-256, SHA-512, SHA-3 | 30tools",
  description: "Generate cryptographic hashes with multiple algorithms. MD5, SHA-1, SHA-256, SHA-512, and SHA-3 hash generator. File and text support with instant results.",
  keywords: "hash generator, md5 generator, sha256 generator, sha512 generator, cryptographic hash, checksum generator",
  openGraph: {
    title: "Hash Generator - MD5, SHA-1, SHA-256, SHA-512, SHA-3",
    description: "Generate cryptographic hashes with multiple algorithms and file support.",
    url: "https://30tools.com/hash-generator",
    images: [
      {
        url: "/og-images/hash-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Hash Generator Tool"
      }
    ],
  },
};

export default function HashGeneratorPage() {
  return <HashGeneratorTool />;
}
