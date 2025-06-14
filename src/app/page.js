import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ImageIcon, 
  VideoIcon, 
  MusicIcon, 
  FileTextIcon, 
  FileIcon,
  ArrowRightIcon,
  ZapIcon,
  ShieldCheckIcon,
  SmartphoneIcon
} from "lucide-react";

export default function Home() {
  const toolCategories = [
    {
      icon: ImageIcon,
      title: "Image Tools",
      description: "Compress, resize, convert formats",
      tools: ["Compress", "Resize", "Convert", "Optimize"]
    },
    {
      icon: VideoIcon,
      title: "Video Tools", 
      description: "Convert, compress, trim videos",
      tools: ["Convert", "Compress", "Trim", "Optimize"]
    },
    {
      icon: MusicIcon,
      title: "Audio Tools",
      description: "Format conversion, trim, compress",
      tools: ["Convert", "Trim", "Compress", "Extract"]
    },
    {
      icon: FileIcon,
      title: "PDF Tools",
      description: "Merge, split, compress PDFs",
      tools: ["Merge", "Split", "Compress", "Convert"]
    },
    {
      icon: FileTextIcon,
      title: "Text Tools",
      description: "Word count, case convert, format",
      tools: ["Word Count", "Case Convert", "JSON Format", "Minify"]
    }
  ];

  const features = [
    {
      icon: ZapIcon,
      title: "Blazing Fast",
      description: "Lightning-fast processing with optimized algorithms"
    },
    {
      icon: ShieldCheckIcon,
      title: "Privacy First",
      description: "No data stored, all processing happens locally"
    },
    {
      icon: SmartphoneIcon,
      title: "Mobile Friendly",
      description: "Works perfectly on all devices and screen sizes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">30tools</h1>
              <Badge variant="secondary">Free</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Your Ultimate 
            <span className="text-primary"> Online Toolkit</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Fast, free, and privacy-focused tools for image, video, audio, PDF, and text processing. 
            No sign-up required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Browse Tools
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Tool Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">30+ Tools Across 5 Categories</h3>
          <p className="text-muted-foreground text-lg">
            Everything you need for your digital files, all in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {toolCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
          <p className="text-muted-foreground text-lg">
            Join thousands of users who trust 30tools for their daily file processing needs.
          </p>
          <Button size="lg" className="text-lg px-8">
            Explore All Tools
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 30tools.com - All rights reserved</p>
            <p className="mt-2 text-sm">
              Fast, free, and privacy-focused online tools for everyone
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
