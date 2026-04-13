"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";

export function LanguageSelector({ languages = [] }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleOpen = (e) => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);

	return (
		<>
			<Button
				size="small"
				variant="outlined"
				startIcon={<LanguageIcon sx={{ fontSize: 16 }} />}
				endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 16 }} />}
				onClick={handleOpen}
				aria-controls={open ? "language-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				sx={{
					borderRadius: 100,
					fontSize: 12,
					fontWeight: 500,
					borderColor: "divider",
					color: "text.secondary",
					px: 2,
					"&:hover": { borderColor: "text.disabled", bgcolor: "action.hover" },
				}}
			>
				Change Language
			</Button>

			<Menu
				id="language-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				transformOrigin={{ horizontal: "right", vertical: "bottom" }}
				anchorOrigin={{ horizontal: "right", vertical: "top" }}
				slotProps={{
					paper: {
						sx: {
							borderRadius: 3,
							border: "1px solid",
							borderColor: "divider",
							boxShadow: 4,
							maxHeight: 320,
							width: 260,
							mt: -1,
						},
					},
				}}
			>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						p: 0.5,
					}}
				>
					{languages.map((lang) => (
						<MenuItem
							key={lang.code}
							component={Link}
							href={`?lang=${lang.code}`}
							onClick={handleClose}
							sx={{
								borderRadius: 2,
								px: 1.5,
								py: 0.75,
								minHeight: 0,
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								fontSize: 12,
							}}
						>
							<span>{lang.name}</span>
							<Typography
								component="span"
								sx={{
									fontSize: 9,
									fontWeight: 700,
									textTransform: "uppercase",
									color: "text.disabled",
								}}
							>
								{lang.code}
							</Typography>
						</MenuItem>
					))}
				</Box>
			</Menu>
		</>
	);
}
