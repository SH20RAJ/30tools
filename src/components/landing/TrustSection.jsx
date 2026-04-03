import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export function TrustSection() {
  const logos = [
    { name: "Product Hunt", color: "#DA552F" },
    { name: "reddit", color: "#FF4500" },
    { name: "brave", color: "#FB542B" },
  ];

  return (
    <Box 
      sx={{ 
        py: 4, 
        textAlign: "center",
      }}
    >
      <Stack 
        direction="row" 
        spacing={4} 
        alignItems="center" 
        justifyContent="center"
        flexWrap="wrap"
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: "1.25rem", 
            fontWeight: 700, 
            color: "text.primary",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            mr: 2,
          }}
        >
          AS SEEN IN:
        </Typography>
        {logos.map((logo) => (
          <Box 
            key={logo.name}
            sx={{ 
              fontSize: "1.5rem", 
              fontWeight: 800, 
              color: logo.color,
              px: 2,
              py: 1,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              gap: 1,
              transition: "none",
            }}
          >
            {logo.name}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
