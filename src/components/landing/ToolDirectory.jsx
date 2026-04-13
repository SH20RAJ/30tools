"use client";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BoltIcon from "@mui/icons-material/Bolt";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";
import GridViewIcon from "@mui/icons-material/GridView";
import ImageIcon from "@mui/icons-material/Image";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ShieldIcon from "@mui/icons-material/Shield";
import StarIcon from "@mui/icons-material/Star";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import TuneIcon from "@mui/icons-material/Tune";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const ICON_MAP = {
	ImageIcon: ImageIcon,
	LayoutGridIcon: GridViewIcon,
	SearchIcon: TravelExploreIcon,
	StarIcon: StarIcon,
	UsersIcon: StarIcon,
	ShieldCheckIcon: ShieldIcon,
	ZapIcon: BoltIcon,
	pdf: PictureAsPdfIcon,
	video: VideoLibraryIcon,
	image: ImageIcon,
	downloaders: DownloadIcon,
	audio: MusicNoteIcon,
	utilities: TuneIcon,
	developer: CodeIcon,
	generators: AutoAwesomeIcon,
	seo: TravelExploreIcon,
};

export function ToolDirectory({ categories = [], lang = "en" }) {
	return (
		<Box sx={{ py: 6 }}>
			{categories.map((category) => (
				<Box key={category.key} sx={{ mb: 10 }}>
					<Typography
						variant="h4"
						sx={{
							textAlign: "center",
							fontWeight: 700,
							mb: 6,
							color: "text.primary",
							fontSize: { xs: "1.75rem", md: "2.25rem" },
							textDecoration: "underline",
							textUnderlineOffset: "8px",
							textDecorationColor: "primary.main",
						}}
					>
						{category.name}
					</Typography>
					<Grid container spacing={3}>
						{category.tools.map((tool) => (
							<Grid key={tool.id} item xs={12} sm={6} md={4} lg={3}>
								<Box
									component={Link}
									href={tool.route}
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 2,
										p: 3,
										borderRadius: 4,
										border: "1px solid",
										borderColor: "divider",
										bgcolor: "background.paper",
										textDecoration: "none",
										boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
										transition: "none",
										"&:hover": {
											borderColor: "primary.main",
											"& .tool-icon": { color: "primary.main" },
										},
									}}
								>
									<Box
										className="tool-icon"
										sx={{
											p: 1.5,
											borderRadius: 3,
											bgcolor: "action.hover",
											color: "text.secondary",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											transition: "none",
										}}
									>
										{(() => {
											const Icon =
												ICON_MAP[tool.icon] ||
												ICON_MAP[category.iconKey] ||
												ICON_MAP[category.key] ||
												GridViewIcon;
											return <Icon sx={{ fontSize: 28 }} />;
										})()}
									</Box>
									<Typography
										variant="h6"
										sx={{
											fontSize: "1rem",
											fontWeight: 600,
											color: "text.primary",
											lineHeight: 1.2,
										}}
									>
										{tool.name}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			))}
		</Box>
	);
}
