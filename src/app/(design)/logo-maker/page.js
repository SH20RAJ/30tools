import LogoMaker from "@/components/tools/design/LogoMakerTool";

export const metadata = {
  title: 'Logo Maker - Create Simple Logos Online | 30tools',
  description: 'Create simple logos and brand graphics online. Design professional logos with text, shapes, and icons.',
  keywords: 'logo maker, logo creator, logo designer, brand graphics, logo generator, design logo',
  openGraph: {
    title: 'Logo Maker - Create Simple Logos Online | 30tools',
    description: 'Create simple logos and brand graphics online.',
    type: 'website',
  },
};

export default function LogoMakerPage() {
  return <LogoMaker />;
}
