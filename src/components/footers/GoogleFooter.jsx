"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  Link as MuiLink,
  Divider
} from "@mui/material";
import { GoogleLogo } from "@/components/shared/GoogleLogo";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LanguageSelector } from "@/components/shared/LanguageSelector";

const footerColumns = [
  {
    heading: "Product",
    links: [
      { label: "Browse Tools", href: "/search" },
      { label: "Blog", href: "/blog" },
      { label: "About Us", href: "/about" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Donate", href: "https://payments.cashfree.com/forms/30tools", external: true, highlight: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

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
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
        mt: "auto",
        background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Brand col */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box sx={{ mb: 2 }}>
              <GoogleLogo />
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 300, lineHeight: 1.7, mb: 2 }}>
              Free, fast, and private online tools for everyone.
              Built with privacy by design — your data stays in your browser.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <MuiLink
                href="https://github.com/sh20raj/30tools"
                target="_blank"
                rel="noreferrer"
                sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                aria-label="GitHub"
              >
                <GitHubIcon fontSize="small" />
              </MuiLink>
              <MuiLink
                href="https://twitter.com/sh20raj"
                target="_blank"
                rel="noreferrer"
                sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                aria-label="Twitter"
              >
                <TwitterIcon fontSize="small" />
              </MuiLink>
            </Box>
          </Grid>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <Grid key={col.heading} size={{ xs: 6, sm: 4, lg: 2 }}>
              <Typography
                variant="overline"
                sx={{ fontWeight: 700, color: "text.primary", display: "block", mb: 1.5 }}
              >
                {col.heading}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 1 }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <MuiLink
                      component={link.external ? "a" : Link}
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      underline="hover"
                      variant="body2"
                      sx={{
                        color: link.highlight ? "primary.main" : "text.secondary",
                        fontWeight: link.highlight ? 500 : 400,
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  </li>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, alignItems: "center" }}>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              © 2026 30tools.com
            </Typography>
            <MuiLink component={Link} href="/privacy" underline="hover" variant="caption" sx={{ color: "text.secondary" }}>
              Privacy
            </MuiLink>
            <MuiLink component={Link} href="/terms" underline="hover" variant="caption" sx={{ color: "text.secondary" }}>
              Terms
            </MuiLink>
          </Box>

          {/* Language Selector */}
          <LanguageSelector languages={languages} />
        </Box>
      </Container>
    </Box>
  );
}
