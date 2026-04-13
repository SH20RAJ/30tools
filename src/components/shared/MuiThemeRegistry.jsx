"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { darkTheme, lightTheme } from "@/lib/mui-theme";

/**
 * MUI ThemeRegistry – bridges next-themes (dark/light class) with MUI ThemeProvider.
 * Must be a Client Component because it reads the resolved theme at runtime.
 */
export default function MuiThemeRegistry({ children }) {
	const { resolvedTheme } = useTheme();
	const theme = useMemo(
		() => (resolvedTheme === "dark" ? darkTheme : lightTheme),
		[resolvedTheme],
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			{children}
		</ThemeProvider>
	);
}
