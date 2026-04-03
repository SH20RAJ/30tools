import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { GoogleNavbar } from "@/components/navigation/GoogleNavbar";
import { GoogleFooter } from "@/components/footers/GoogleFooter";
import { MinimalHero } from "@/components/landing/MinimalHero";
import { TrustSection } from "@/components/landing/TrustSection";
import { SimpleStats } from "@/components/landing/SimpleStats";
import { ToolDirectory } from "@/components/landing/ToolDirectory";
import toolsData from "@/constants/tools.json";
import translateEngine from "@/lib/translate";

const TOOL_COUNT = Object.values(toolsData.categories || {}).reduce(
  (total, category) => total + (category.tools?.length || 0),
  0,
);

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const lang = params.lang || "en";
  const title = await translateEngine.translate(
    `30tools - ${TOOL_COUNT}+ Free Online Tools | SEO & Developer Tools`,
    lang,
  );
  const description = await translateEngine.translate(
    `Minimal, fast, and private online toolkit with ${TOOL_COUNT}+ tools for image, PDF, and video. Free forever, no signup required.`,
    lang,
  );

  return {
    title: { absolute: title },
    description,
    keywords: [
      "free online tools",
      "seo toolkit",
      "image compressors",
      "video converters",
      "developer utilities",
    ].join(", "),
    alternates: {
      canonical: `https://30tools.com${lang !== "en" ? `?lang=${lang}` : ""}`,
    },
    openGraph: {
      title,
      description,
      url: `https://30tools.com${lang !== "en" ? `?lang=${lang}` : ""}`,
      siteName: "30tools",
      type: "website",
      images: [{ url: "https://30tools.com/og-image.jpg", width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function LandingPage({ searchParams }) {
  const params = await searchParams;
  const lang = params.lang || "en";

  const [heroTitle, heroSubtitle] = await Promise.all([
    translateEngine.translate("30Tools - 100% Free Online Toolkit", lang),
    translateEngine.translate(
      "Efficiently process files with over 200+ free online tools. Image compressors, PDF editors, video converters, SEO utilities, and more. Fast, secure, and always free.",
      lang,
    ),
  ]);

  const priorityOrder = [
    "image",
    "pdf",
    "video",
    "downloaders",
    "audio",
    "utilities",
    "developer",
    "generators",
    "seo",
  ];

  const toolCategories = await Promise.all(
    priorityOrder.map(async (key) => {
      const cat = toolsData.categories[key];
      if (!cat) return null;

      return {
        key,
        iconKey: cat.icon || key,
        name: await translateEngine.translate(cat.name, lang),
        description: await translateEngine.translate(cat.description, lang),
        tools: await Promise.all(
          (cat.tools || []).map(async (tool) => ({
            ...tool,
            name: await translateEngine.translate(tool.name, lang),
          })),
        ),
      };
    }),
  );

  const filteredCategories = toolCategories.filter(Boolean);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <GoogleNavbar />

      <Box component="main" sx={{ flex: 1, py: { xs: 4, md: 8 } }}>
        <Container maxWidth="xl">
          <MinimalHero title={heroTitle} subtitle={heroSubtitle} />
          
          <TrustSection />
          
          <SimpleStats />
          
          <ToolDirectory categories={filteredCategories} lang={lang} />
        </Container>
      </Box>

      <GoogleFooter />
    </Box>
  );
}
