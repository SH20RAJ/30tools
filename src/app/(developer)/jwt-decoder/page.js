import JWTDecoder from "@/components/tools/developer/JWTDecoderTool";

export const metadata = {
  title: 'JWT Decoder - Decode JSON Web Tokens | 30tools',
  description: 'Decode and verify JSON Web Tokens (JWT). View header, payload, and signature information from JWT tokens.',
  keywords: 'jwt decoder, json web token, jwt parser, token decoder, jwt validator, jwt analyzer',
  openGraph: {
    title: 'JWT Decoder - Decode JSON Web Tokens | 30tools',
    description: 'Decode and verify JSON Web Tokens online.',
    type: 'website',
  },
};

export default function JWTDecoderPage() {
  return <JWTDecoder />;
}
