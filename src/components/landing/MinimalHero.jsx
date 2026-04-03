import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function MinimalHero({ title, subtitle }) {
  return (
    <Box 
      component="section" 
      sx={{ 
        pt: { xs: 8, md: 10 }, 
        pb: { xs: 4, md: 6 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "4rem" },
          fontWeight: 700,
          color: "text.primary",
          mb: 2,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.25rem" },
          color: "text.secondary",
          maxWidth: "800px",
          mx: "auto",
          fontWeight: 400,
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
