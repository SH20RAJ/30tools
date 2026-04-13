"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GoogleLogo } from "@/components/shared/GoogleLogo";

export function GoogleNavbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        router.push("/search");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ gap: 1, px: { xs: 2, md: 3 } }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <GoogleLogo />
        </Box>

        {/* Search Bar – desktop only */}
        <Box
          component={Link}
          href="/search"
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            maxWidth: 560,
            alignItems: "center",
            px: 2,
            py: 0.75,
            borderRadius: 100,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "action.hover",
            cursor: "text",
            textDecoration: "none",
            transition: "all 0.15s",
            boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
            "&:hover": { borderColor: "text.disabled", bgcolor: "action.selected" },
          }}
        >
          <SearchIcon sx={{ color: "text.secondary", mr: 1.5, fontSize: 20 }} />
          <InputBase
            placeholder="Search tools…"
            inputProps={{ "aria-label": "search tools", tabIndex: -1 }}
            sx={{ flex: 1, pointerEvents: "none", fontSize: 14, color: "text.secondary" }}
          />
          <Box
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              px: 0.75,
              py: 0.25,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              fontSize: 10,
              fontWeight: 700,
              color: "text.disabled",
            }}
          >
            <span>⌘</span>
            <span>K</span>
          </Box>
        </Box>

        {/* Spacer */}
        <Box sx={{ flex: 1, display: { md: "none" } }} />

        {/* Mobile search button */}
        <Tooltip title="Search">
          <IconButton
            component={Link}
            href="/search"
            size="small"
            sx={{ display: { md: "none" }, borderRadius: "50%" }}
          >
            <SearchIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        {/* Help */}
        <Tooltip title="Help">
          <IconButton
            size="small"
            sx={{ display: { xs: "none", sm: "inline-flex" }, borderRadius: "50%" }}
          >
            <HelpOutlineIcon fontSize="small" sx={{ color: "text.secondary" }} />
          </IconButton>
        </Tooltip>

        {/* GitHub */}
        <Tooltip title="Open Source - GitHub">
          <IconButton
            component="a"
            href="https://github.com/sh20raj/30tools"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ borderRadius: "50%" }}
          >
            <GitHubIcon fontSize="small" sx={{ color: "text.secondary" }} />
          </IconButton>
        </Tooltip>

        {/* Apps */}
        <Tooltip title="Browse Tools">
          <IconButton
            component={Link}
            href="/search"
            size="small"
            sx={{ borderRadius: "50%" }}
          >
            <AppsIcon fontSize="small" sx={{ color: "text.secondary" }} />
          </IconButton>
        </Tooltip>

        {/* Divider */}
        <Box
          sx={{
            width: 1,
            height: 24,
            bgcolor: "divider",
            display: { xs: "none", sm: "block" },
          }}
        />

        {/* Avatar badge */}
        {mounted && (
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "primary.main",
              fontSize: 11,
              fontWeight: 700,
              ml: 0.5,
              border: "2px solid",
              borderColor: "primary.light",
            }}
          >
            30
          </Avatar>
        )}
      </Toolbar>
    </AppBar>
  );
}
