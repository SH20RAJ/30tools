import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShieldIcon from "@mui/icons-material/Shield";
import BoltIcon from "@mui/icons-material/Bolt";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { GoogleNavbar } from "@/components/navigation/GoogleNavbar";
import { GoogleHero } from "@/components/landing/GoogleHero";
import { GoogleStats } from "@/components/landing/GoogleStats";
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
    `30tools - ${TOOL_COUNT}+ Free Online Tools | No Signup Required`,
    lang,
  );
  const description = await translateEngine.translate(
    `Efficiently process files with ${TOOL_COUNT}+ free online tools. Image compressor, PDF editor, video downloader, SEO audit, and developer utilities. Fast, secure, and 100% free.`,
    lang,
  );
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `https://30tools.com${lang !== "en" ? `?lang=${lang}` : ""}`,
    },
  };
}

export default async function LandingPage({ searchParams }) {
  const params = await searchParams;
  const lang = params.lang || "en";

  const [
    heroTitle, heroSubtitle, viewAllText, privacyTitle,
    donateTitle, donateSubtitle, supportButtonText,
    toolsAvailableLabel, freeForeveLabel, accessModelLabel,
  ] = await Promise.all([
    translateEngine.translate("Everything you need in one place.", lang),
    translateEngine.translate("Explore our comprehensive suite of tools, from AI-powered image editing to professional developer utilities.", lang),
    translateEngine.translate("View All Categories", lang),
    translateEngine.translate("Your privacy is our number one priority.", lang),
    translateEngine.translate("Built for the internet, by the internet.", lang),
    translateEngine.translate("30tools is a free project. We do not run ads or sell your data. If you find these tools helpful, consider supporting our server costs.", lang),
    translateEngine.translate("Support 30tools", lang),
    translateEngine.translate("Tools Available", lang),
    translateEngine.translate("Free Forever", lang),
    translateEngine.translate("Access Model", lang),
  ]);

  const priorityOrder = ["image", "pdf", "video", "downloaders", "audio", "utilities", "developer", "generators", "seo"];

  // Serialize categories — NO function components as props
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
          (cat.tools || []).slice(0, 5).map(async (tool) => ({
            name: await translateEngine.translate(tool.name, lang),
          })),
        ),
      };
    }),
  );

  const filteredCategories = toolCategories.filter(Boolean);
  const quickSearchTags = ["PDF", "Video", "Images", "SEO", "Dev", "Generator", "QR Code", "YouTube"];

  // Serializable stats — icons as strings, not functions
  const homepageStats = [
    { label: toolsAvailableLabel, value: `${TOOL_COUNT}+`, icon: "GridView" },
    { label: freeForeveLabel, value: "100%", icon: "Star" },
    { label: accessModelLabel, value: "Always", icon: "Security" },
  ];

  const privacyItems = await Promise.all(
    [
      { title: "Browser Based", desc: "Most processing happens purely in your browser. Files never even hit our servers.", iconKey: "bolt" },
      { title: "Auto-Deleted", desc: "For tools requiring our servers, files are deleted instantly after processing.", iconKey: "autorenew" },
      { title: "No Signups", desc: "No email, no login, no tracking. Just free tools accessible to everyone.", iconKey: "star" },
    ].map(async (item) => ({
      ...item,
      title: await translateEngine.translate(item.title, lang),
      desc: await translateEngine.translate(item.desc, lang),
    })),
  );

  const privacyIcons = { bolt: BoltIcon, autorenew: AutorenewIcon, star: StarIcon };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
      <GoogleNavbar />

      <Box component="main" sx={{ flex: 1 }}>
        <GoogleHero toolCount={TOOL_COUNT} quickSearchTags={quickSearchTags} lang={lang} />

        {/* Stats */}
        <Box component="section" sx={{ pb: 12 }}>
          <Container maxWidth="lg">
            <GoogleStats stats={homepageStats} />
          </Container>
        </Box>

        {/* Bento Grid Categories */}
        <Box component="section" sx={{ py: 12, bgcolor: "action.hover", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "divider" }}>
          <Container maxWidth="xl">
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", md: "flex-end" }, mb: 6, gap: 2 }}>
              <Box sx={{ maxWidth: 480 }}>
                <Typography variant="h3" sx={{ fontWeight: 400, mb: 1.5, color: "text.primary" }}>
                  {heroTitle}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {heroSubtitle}
                </Typography>
              </Box>
              <Button variant="outlined" href="/search" endIcon={<ArrowForwardIcon />} sx={{ borderRadius: 100, borderColor: "divider", color: "text.primary", flexShrink: 0 }}>
                {viewAllText}
              </Button>
            </Box>

            <CategoriesGrid categories={filteredCategories} lang={lang} />
          </Container>
        </Box>

        {/* Privacy Promise */}
        <Box component="section" sx={{ py: 12, borderBottom: "1px solid", borderColor: "divider" }}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <ShieldIcon sx={{ fontSize: 56, color: "primary.main", mb: 3, display: "block", mx: "auto" }} />
            <Typography variant="h3" sx={{ fontWeight: 400, mb: 6 }}>
              {privacyTitle}
            </Typography>
            <Grid container spacing={5} sx={{ textAlign: "left", mt: 2 }}>
              {privacyItems.map((item, i) => {
                const Icon = privacyIcons[item.iconKey] || StarIcon;
                return (
                  <Grid key={i} size={{ xs: 12, md: 4 }}>
                    <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5, fontWeight: 600 }}>
                      <Icon sx={{ color: "primary.main", fontSize: 22 }} />
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                      {item.desc}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>

        {/* Support / Donate CTA */}
        <Box component="section" sx={{ py: 12, bgcolor: "action.hover" }}>
          <Container maxWidth="md">
            <Box sx={{ borderRadius: 8, border: "1px solid", borderColor: "divider", bgcolor: "background.paper", p: { xs: 4, md: 8 }, textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <Typography variant="h4" sx={{ fontWeight: 400, mb: 3 }}>
                {donateTitle}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 5, maxWidth: 520, mx: "auto" }}>
                {donateSubtitle}
              </Typography>
              <Button
                variant="contained"
                href="https://payments.cashfree.com/forms/30tools"
                target="_blank"
                rel="noreferrer"
                endIcon={<FavoriteIcon sx={{ color: "#ea4335" }} />}
                size="large"
                sx={{ borderRadius: 100, px: 5, fontWeight: 500, boxShadow: "none", "&:hover": { boxShadow: "0 4px 12px rgba(26,115,232,0.3)" } }}
              >
                {supportButtonText}
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>

      <GoogleFooter />
    </Box>
  );
}
