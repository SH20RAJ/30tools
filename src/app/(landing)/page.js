import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { GoogleNavbar } from "@/components/navigation/GoogleNavbar";
import { CategoriesGrid } from "@/components/landing/CategoriesGrid";
import { GoogleFooter } from "@/components/footers/GoogleFooter";
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
    `30tools - ${TOOL_COUNT}+ Free Online Tools`,
    lang,
  );
  const description = await translateEngine.translate(
    `Minimal, fast, and private online toolkit with ${TOOL_COUNT}+ tools.`,
    lang,
  );

  return {
    title: { absolute: title },
    description,
    keywords: [
      "free online tools",
      "image pdf video tools",
      "seo tools",
      "developer utilities",
      "privacy-first online toolkit",
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

  const [
    badgeText,
    heroTitle,
    heroSubtitle,
    primaryCta,
    secondaryCta,
    toolsAvailableLabel,
    freeLabel,
    privateLabel,
  ] = await Promise.all([
    translateEngine.translate("Refined Toolkit", lang),
    translateEngine.translate("Clean tools. Premium feel.", lang),
    translateEngine.translate(
      "Everything essential, designed to stay out of your way.",
      lang,
    ),
    translateEngine.translate("Browse Tools", lang),
    translateEngine.translate("Open Search", lang),
    translateEngine.translate("Tools", lang),
    translateEngine.translate("Always Free", lang),
    translateEngine.translate("Privacy First", lang),
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
          (cat.tools || []).slice(0, 4).map(async (tool) => ({
            name: await translateEngine.translate(tool.name, lang),
          })),
        ),
      };
    }),
  );

  const filteredCategories = toolCategories.filter(Boolean);

  const statItems = [
    {
      icon: GridViewRoundedIcon,
      label: toolsAvailableLabel,
      value: `${TOOL_COUNT}+`,
    },
    {
      icon: WorkspacePremiumRoundedIcon,
      label: freeLabel,
      value: "100%",
    },
    {
      icon: VerifiedRoundedIcon,
      label: privateLabel,
      value: "On",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          "radial-gradient(circle at top, rgba(25,118,210,0.08), transparent 45%), var(--mui-palette-background-default)",
      }}
    >
      <GoogleNavbar />

      <Box component="main" sx={{ flex: 1 }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 10 } }}>
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Chip
              label={badgeText}
              sx={{
                borderRadius: 999,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
                fontWeight: 500,
                px: 1,
              }}
            />

            <Box sx={{ maxWidth: 760 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.2rem", md: "4rem" },
                  lineHeight: 1.05,
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  mb: 2,
                }}
              >
                {heroTitle}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { xs: "1rem", md: "1.125rem" } }}>
                {heroSubtitle}
              </Typography>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button
                variant="contained"
                size="large"
                href="/search"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 999,
                  px: 4,
                  boxShadow: "0 12px 30px rgba(25,118,210,0.2)",
                }}
              >
                {primaryCta}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/search"
                sx={{ borderRadius: 999, px: 4, borderColor: "divider" }}
              >
                {secondaryCta}
              </Button>
            </Stack>
          </Stack>

          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              p: { xs: 2.5, md: 3 },
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 2,
            }}
          >
            {statItems.map((item) => {
              const Icon = item.icon;
              return (
                <Box
                  key={item.label}
                  sx={{
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    px: 2.5,
                    py: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Icon sx={{ color: "primary.main", fontSize: 22 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      {item.label}
                    </Typography>
                    <Typography variant="h6" sx={{ lineHeight: 1.2 }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>

        <Box
          component="section"
          aria-label="Tool categories"
          sx={{
            pb: { xs: 10, md: 14 },
            borderTop: "1px solid",
            borderBottom: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
          }}
        >
          <Container maxWidth="xl" sx={{ pt: { xs: 5, md: 7 } }}>
            <CategoriesGrid categories={filteredCategories} lang={lang} />
          </Container>
        </Box>
      </Box>

      <GoogleFooter />
    </Box>
  );
}
