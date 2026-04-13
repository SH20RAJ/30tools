import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function SimpleStats() {
	const stats = [
		{ title: "200+", label: "Free Online Tools" },
		{ title: "10M+", label: "Times Tools Used" },
		{ title: "20K+", label: "Daily Users" },
		{ title: "1.5M+", label: "Page Views/Month" },
		{ title: "600K+", label: "Search Clicks/Month" },
	];

	return (
		<Box
			sx={{
				py: 6,
				bgcolor: "background.paper",
				border: "1px solid",
				borderColor: "divider",
				borderRadius: 4,
				my: 4,
			}}
		>
			<Container maxWidth="lg">
				<Typography
					variant="h4"
					sx={{
						textAlign: "center",
						fontWeight: 700,
						mb: 6,
						color: "text.primary",
						fontSize: { xs: "1.5rem", md: "2rem" },
					}}
				>
					We are growing together:
				</Typography>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={4}
					alignItems="center"
					justifyContent="center"
					flexWrap="wrap"
					gap={4}
				>
					{stats.map((stat) => (
						<Box
							key={stat.label}
							sx={{
								textAlign: "center",
								minWidth: { xs: "100%", sm: "200px" },
							}}
						>
							<Typography
								variant="h3"
								sx={{
									fontWeight: 800,
									color: "text.primary",
									mb: 1,
									fontSize: { xs: "2.5rem", md: "3rem" },
								}}
							>
								{stat.title}
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontWeight: 500,
									color: "text.secondary",
									fontSize: "1.1rem",
								}}
							>
								{stat.label}
							</Typography>
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	);
}
