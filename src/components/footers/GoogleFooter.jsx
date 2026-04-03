"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
  Stack
} from "@mui/material";
import { GoogleLogo } from "@/components/shared/GoogleLogo";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { LanguageSelector } from "@/components/shared/LanguageSelector";
import toolsData from "@/constants/tools.json";

const languages = [
  { name: "English", code: "en" },
  { name: "Español", code: "es" },
  { name: "Français", code: "fr" },
  { name: "Deutsch", code: "de" },
  { name: "हिन्दी", code: "hi" },
  { name: "Indonesian", code: "id" },
  { name: "Italiano", code: "it" },
  { name: "日本語", code: "ja" },
  { name: "한국어", code: "ko" },
  { name: "Português", code: "pt" },
  { name: "Русский", code: "ru" },
  { name: "Türkçe", code: "tr" },
  { name: "Tiếng Việt", code: "vi" },
  { name: "中文", code: "zh" },
  { name: "Polski", code: "pl" },
];

export function GoogleFooter() {
  const categories = Object.entries(toolsData.categories || {}).map(([key, cat]) => ({
    label: cat.name,
    href: `/search?category=${key}`
  }));

  const youtubeTools = [
    { label: "YouTube Tag Extractor", href: "/youtube-tag-extractor" },
    { label: "YouTube Tag Generator", href: "/youtube-tag-generator" },
    { label: "YouTube Hashtag Extractor", href: "/youtube-hashtag-extractor" },
    { label: "YouTube Hashtag Generator", href: "/youtube-hashtag-generator" },
    { label: "YouTube Title Extractor", href: "/youtube-title-extractor" },
    { label: "YouTube Title Generator", href: "/youtube-title-generator" },
    { label: "YouTube Video Statistics", href: "/youtube-video-statistics" },
  ];

  const trendingTools = [
    { label: "Text Repeater", href: "/text-repeater" },
    { label: "Decimal to HEX", href: "/decimal-to-hex" },
    { label: "Domain to IP", href: "/domain-to-ip" },
    { label: "Word to Number", href: "/word-to-number" },
    { label: "JSON Validator", href: "/json-validator" },
    { label: "Credit Card Validator", href: "/credit-card-validator" },
    { label: "Case Converter", href: "/case-converter" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
        mt: "auto",
        pt: 10,
        pb: 6,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Left Column: Brand & Company */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <GoogleLogo />
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              30Tools provides over 200 free tools for SEO experts, developers, students, and writers.
              Everything you need to process files, optimize content, and streamline your workflow — all for free.
            </Typography>
            
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Company</Typography>
            <Stack spacing={1} component="ul" sx={{ listStyle: "none", p: 0, m: 0, mb: 4 }}>
              <li><MuiLink component={Link} href="/about" variant="body2" color="text.secondary" underline="hover">About Us</MuiLink></li>
              <li><MuiLink component={Link} href="/privacy" variant="body2" color="text.secondary" underline="hover">Privacy Policy</MuiLink></li>
              <li><MuiLink component={Link} href="/terms" variant="body2" color="text.secondary" underline="hover">Terms of Service</MuiLink></li>
              <li><MuiLink component={Link} href="/contact" variant="body2" color="text.secondary" underline="hover">Contact Us</MuiLink></li>
            </Stack>

            <Stack direction="row" spacing={2}>
              <MuiLink href="#" sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}><FacebookIcon /></MuiLink>
              <MuiLink href="#" sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}><TwitterIcon /></MuiLink>
              <MuiLink href="#" sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}><GitHubIcon /></MuiLink>
            </Stack>
          </Grid>

          {/* Middle 1: Categories */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 3 }}>Tools Category</Typography>
            <Stack spacing={1.5} component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {categories.slice(0, 12).map((item) => (
                <li key={item.label}>
                  <MuiLink component={Link} href={item.href} variant="body2" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{ mr: 1 }}>•</Box> {item.label}
                  </MuiLink>
                </li>
              ))}
            </Stack>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 5, mb: 3 }}>Blog</Typography>
            <Stack spacing={1.5} component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li><MuiLink component={Link} href="/blog" variant="body2" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}><Box component="span" sx={{ mr: 1 }}>•</Box> Best Software</MuiLink></li>
              <li><MuiLink component={Link} href="/blog/seo" variant="body2" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}><Box component="span" sx={{ mr: 1 }}>•</Box> SEO</MuiLink></li>
              <li><MuiLink component={Link} href="/blog/web" variant="body2" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}><Box component="span" sx={{ mr: 1 }}>•</Box> Web</MuiLink></li>
            </Stack>
          </Grid>

          {/* Middle 2: YouTube Tools */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 3 }}>Our YouTube Tools</Typography>
            <Stack spacing={1.5} component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {youtubeTools.map((item) => (
                <li key={item.label}>
                  <MuiLink component={Link} href={item.href} variant="body2" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{ mr: 1 }}>•</Box> {item.label}
                  </MuiLink>
                </li>
              ))}
            </Stack>
          </Grid>

          {/* Right: Trending Tools */}
          <Grid item xs={12} sm={6} md={3.5}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 3 }}>Other Trending Tools</Typography>
            <Stack spacing={1.5} component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {trendingTools.map((item) => (
                <li key={item.label}>
                  <MuiLink component={Link} href={item.href} variant="body2" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{ mr: 1 }}>•</Box> {item.label}
                  </MuiLink>
                </li>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", gap: 3 }}>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            © 2026 30tools.com — All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <LanguageSelector languages={languages} />
            <Stack direction="row" spacing={3}>
              <MuiLink component={Link} href="/privacy" variant="caption" color="text.secondary" underline="hover">Privacy</MuiLink>
              <MuiLink component={Link} href="/terms" variant="caption" color="text.secondary" underline="hover">Terms</MuiLink>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
