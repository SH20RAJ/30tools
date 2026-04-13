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
import Chip from "@mui/material/Chip";
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

const CARD_ACCENTS = [
	"#1a73e8",
	"#ea4335",
	"#fbbc05",
	"#34a853",
	"#a142f4",
	"#e52592",
	"#e8710a",
	"#007b83",
	"#1967d2",
];

/**
 * CategoriesGrid – Client Component.
 * Accepts serializable category objects (no function props).
 *
 * @param {{ categories: Array<{key: string, name: string, description: string, iconKey: string, tools: Array<{name: string}>}> }} props
 */
export function CategoriesGrid({ categories = [], lang = "en" }) {
	return (
		<Grid container spacing={3}>
			{categories.map((category, index) => {
				const isFeatured = index < 2;
				const Icon =
					ICON_MAP[category.iconKey] || ICON_MAP[category.key] || GridViewIcon;
				const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];

				return (
					<Grid
						key={category.key}
						size={{
							xs: 12,
							sm: isFeatured ? 12 : 6,
							md: isFeatured ? 6 : 4,
							lg: isFeatured ? 4 : 3,
						}}
					>
						<Box
							component={Link}
							href={`/search?category=${category.key}&lang=${lang}`}
							sx={{
								display: "flex",
								flexDirection: "column",
								height: isFeatured ? 260 : 220,
								p: 4,
								borderRadius: 6,
								border: "1px solid",
								borderColor: "divider",
								bgcolor: "background.paper",
								textDecoration: "none",
								overflow: "hidden",
								transition: "all 0.25s",
								"&:hover": {
									boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
									borderColor: accent,
									"& .cat-icon-box": { bgcolor: accent, color: "#fff" },
									"& .cat-name": { color: accent },
								},
							}}
						>
							<Box
								className="cat-icon-box"
								sx={{
									mb: "auto",
									display: "inline-flex",
									p: 1.5,
									borderRadius: 3,
									bgcolor: "action.hover",
									color: "text.secondary",
									width: "fit-content",
									transition: "all 0.25s",
								}}
							>
								<Icon sx={{ fontSize: 24 }} />
							</Box>

							<Box sx={{ mt: 3 }}>
								<Typography
									className="cat-name"
									variant="h6"
									sx={{
										fontWeight: 600,
										mb: 0.5,
										color: "text.primary",
										transition: "color 0.25s",
									}}
								>
									{category.name}
								</Typography>
								<Typography
									variant="body2"
									sx={{
										color: "text.secondary",
										display: "-webkit-box",
										WebkitLineClamp: 2,
										WebkitBoxOrient: "vertical",
										overflow: "hidden",
									}}
								>
									{category.description}
								</Typography>
							</Box>

							<Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 0.75 }}>
								{(category.tools || [])
									.slice(0, isFeatured ? 5 : 2)
									.map((tool, ti) => (
										<Chip
											key={ti}
											label={tool.name}
											size="small"
											sx={{
												fontSize: 11,
												height: 24,
												bgcolor: "action.hover",
												color: "text.secondary",
												border: "1px solid transparent",
												borderRadius: 100,
											}}
										/>
									))}
							</Box>
						</Box>
					</Grid>
				);
			})}
		</Grid>
	);
}
