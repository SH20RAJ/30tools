"use client";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GridViewIcon from "@mui/icons-material/GridView";
import SecurityIcon from "@mui/icons-material/Security";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ICON_MAP = {
	GridView: GridViewIcon,
	Star: StarIcon,
	Security: SecurityIcon,
	CheckCircle: CheckCircleIcon,
	AccessTime: AccessTimeIcon,
};

export function GoogleStats({ stats = [] }) {
	if (!stats || stats.length === 0) return null;

	return (
		<Box
			sx={{
				maxWidth: 800,
				mx: "auto",
				mt: 10,
				pt: 6,
				borderTop: "1px solid",
				borderColor: "divider",
			}}
		>
			<Grid container spacing={4} justifyContent="center">
				{stats.map((stat, i) => {
					const Icon = ICON_MAP[stat.icon] || GridViewIcon;
					return (
						<Grid
							key={i}
							size={{ xs: 6, md: 4 }}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: 0.5,
							}}
						>
							<Box
								sx={{
									p: 1,
									mb: 1,
									bgcolor: "action.hover",
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Icon sx={{ fontSize: 20, color: "text.secondary" }} />
							</Box>
							<Typography
								variant="h5"
								component="div"
								sx={{ fontWeight: 600, color: "text.primary" }}
							>
								{stat.value}
							</Typography>
							<Typography
								variant="caption"
								sx={{
									color: "text.secondary",
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									fontWeight: 500,
									textAlign: "center",
								}}
							>
								{stat.label}
							</Typography>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}
