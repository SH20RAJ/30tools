import WhiteboardTool from '@/components/tools/design/WhiteboardTool';

export const metadata = {
  title: "Free Online Whiteboard - Draw, Sketch & Collaborate | 30tools",
  description: "Free unlimited online whiteboard for drawing, sketching, brainstorming and collaboration. No registration required. Export as PNG, JPG or SVG.",
  keywords: "online whiteboard, free whiteboard, drawing board, sketch pad, digital whiteboard, collaborative whiteboard",
  openGraph: {
    title: "Free Online Whiteboard - Draw, Sketch & Collaborate",
    description: "Free unlimited online whiteboard for drawing, sketching, brainstorming and collaboration.",
    url: "https://30tools.com/whiteboard",
    images: [
      {
        url: "/og-images/whiteboard.jpg",
        width: 1200,
        height: 630,
        alt: "Online Whiteboard Tool"
      }
    ],
  },
};

export default function WhiteboardPage() {
  return <WhiteboardTool />;
}