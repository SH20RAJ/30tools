import JWTDecoder from "@/components/tools/developer/JWTDecoderTool";

export const metadata = {
  title: "JWT Decoder - Decode JSON Web Tokens | 30tools",
  description:
    "Professional jwt decoder for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  keywords:
    "jwt decoder, json web token, jwt parser, token decoder, jwt validator, jwt analyzer",
  openGraph: {
    title: "JWT Decoder - Decode JSON Web Tokens | 30tools",
    description: "Decode and verify JSON Web Tokens online.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jwt Decoder - Free Developer Tool | Professional Coding",
    description:
      "Professional jwt decoder for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
    images: ["/og-images/jwt-decoder.jpg"],
    creator: "@30tools",
  },

  alternates: {
    canonical: "https://30tools.com/jwt-decoder",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Jwt Decoder",
  description:
    "Professional jwt decoder for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  url: "https://30tools.com/jwt-decoder",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function JWTDecoderPage() {
  return <JWTDecoder />;
}
