"use client";

import ArticleIcon from "@mui/icons-material/Article";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";

// Google brand colors for the logo lettering
const LOGO_COLORS = [
	"#4285F4",
	"#EA4335",
	"#FBBC05",
	"#4285F4",
	"#34A853",
	"#EA4335",
	"#FBBC05",
];
const LOGO_TEXT = "30tools";

export function GoogleHero({ toolCount, quickSearchTags = [] }) {
	return (
		<Box
			component="section"
			sx={{
				position: "relative",
				pt: { xs: 8, md: 12 },
				pb: { xs: 8, md: 10 },
				textAlign: "center",
			}}
		>
			<Container maxWidth="md">
				{/* Animated Multicolor Logo */}
				<Box sx={{ mb: 4, animation: "fadeIn 0.8s ease-out" }}>
					<Typography
						variant="h1"
						component="h1"
						sx={{
							fontSize: { xs: "3.5rem", md: "7rem" },
							fontWeight: 400,
							letterSpacing: "-0.02em",
							lineHeight: 1.1,
							mb: 2,
							userSelect: "none",
						}}
					>
						{LOGO_TEXT.split("").map((char, i) => (
							<Box key={i} component="span" sx={{ color: LOGO_COLORS[i] }}>
								{char}
							</Box>
						))}
					</Typography>
					<Typography
						variant="h6"
						component="p"
						sx={{
							color: "text.secondary",
							fontWeight: 400,
							maxWidth: 480,
							mx: "auto",
							lineHeight: 1.6,
						}}
					>
						Every tool you need, right in your browser.{" "}
						<Box component="br" sx={{ display: { xs: "none", sm: "block" } }} />
						Simple. Secure. Searchable.
					</Typography>
				</Box>

				{/* Google-style Search Pill */}
				<Box
					sx={{
						maxWidth: 580,
						mx: "auto",
						mb: 3,
						animation: "fadeIn 0.7s ease-out",
					}}
				>
					<Paper
						component={Link}
						href="/search"
						elevation={1}
						sx={{
							display: "flex",
							alignItems: "center",
							height: 56,
							px: 3,
							borderRadius: 100,
							border: "1px solid",
							borderColor: "divider",
							textDecoration: "none",
							cursor: "text",
							transition: "box-shadow 0.15s",
							boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
							"&:hover": { boxShadow: "0 2px 8px rgba(0,0,0,0.12)" },
						}}
					>
						<SearchIcon
							sx={{ color: "text.secondary", mr: 2, flexShrink: 0 }}
						/>
						<InputBase
							placeholder={`Search ${toolCount}+ tools…`}
							inputProps={{ "aria-label": "search tools", tabIndex: -1 }}
							sx={{
								flex: 1,
								pointerEvents: "none",
								fontSize: 17,
								color: "text.secondary",
							}}
						/>
						<Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
							<ImageSearchIcon
								sx={{ color: "text.disabled", fontSize: 22, flexShrink: 0 }}
								titleAccess="Search by Image"
							/>
							<ArticleIcon
								sx={{ color: "text.disabled", fontSize: 22, flexShrink: 0 }}
								titleAccess="Search by Document"
							/>
						</Box>
					</Paper>
				</Box>

				{/* Quick Action Buttons */}
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						gap: 1.5,
						mb: 6,
					}}
				>
					<Button
						variant="outlined"
						component={Link}
						href="/search"
						sx={{
							borderRadius: 2,
							px: 3,
							borderColor: "divider",
							color: "text.primary",
							bgcolor: "background.default",
							fontWeight: 400,
							"&:hover": { bgcolor: "action.hover", borderColor: "divider" },
						}}
					>
						30tools Search
					</Button>
					<Button
						variant="outlined"
						component={Link}
						href="/search?lucky=true"
						sx={{
							borderRadius: 2,
							px: 3,
							borderColor: "divider",
							color: "text.primary",
							bgcolor: "background.default",
							fontWeight: 400,
							"&:hover": { bgcolor: "action.hover", borderColor: "divider" },
						}}
					>
						{"I'm Feeling Lucky"}
					</Button>
				</Box>

				{/* Quick Search Tag Chips */}
				{quickSearchTags.length > 0 && (
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							alignItems: "center",
							gap: 1,
							opacity: 0.85,
						}}
					>
						<Typography
							variant="body2"
							sx={{ color: "text.secondary", mr: 0.5 }}
						>
							Try:
						</Typography>
						{quickSearchTags.slice(0, 5).map((tag) => (
							<Chip
								key={tag}
								label={tag}
								component={Link}
								href={`/search?q=${encodeURIComponent(tag)}`}
								variant="outlined"
								size="small"
								clickable
								sx={{
									borderRadius: 100,
									fontSize: 13,
									fontWeight: 400,
									borderColor: "divider",
									"&:hover": { bgcolor: "action.hover", color: "primary.main" },
								}}
							/>
						))}
					</Box>
				)}
			</Container>
		</Box>
	);
}
