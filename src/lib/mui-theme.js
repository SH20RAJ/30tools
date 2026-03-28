import { createTheme } from "@mui/material/styles";

// Google Product palette (Material 3 inspired)
const GOOGLE_BLUE = "#1a73e8";
const GOOGLE_BLUE_LIGHT = "#4285F4";
const GOOGLE_RED = "#EA4335";
const GOOGLE_YELLOW = "#FBBC05";
const GOOGLE_GREEN = "#34A853";


const shape = { borderRadius: 12 };

const typography = {
	fontFamily: [
		"var(--font-open-sans)",
		'"Open Sans"',
		"var(--font-roboto)",
		"Roboto",
		"-apple-system",
		"BlinkMacSystemFont",
		'"Segoe UI"',
		"sans-serif",
	].join(","),
	h1: { fontWeight: 400, letterSpacing: "-0.02em" },
	h2: { fontWeight: 400, letterSpacing: "-0.01em" },
	h3: { fontWeight: 500 },
	h4: { fontWeight: 500 },
	h5: { fontWeight: 500 },
	h6: { fontWeight: 500 },
	button: { textTransform: "none", fontWeight: 500 },
};

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: GOOGLE_BLUE,
			light: GOOGLE_BLUE_LIGHT,
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#f1f3f4",
			contrastText: "#3c4043",
		},
		error: { main: GOOGLE_RED },
		warning: { main: GOOGLE_YELLOW },
		success: { main: GOOGLE_GREEN },
		background: {
			default: "#ffffff",
			paper: "#ffffff",
		},
		text: {
			primary: "#202124",
			secondary: "#5f6368",
			disabled: "#9aa0a6",
		},
		divider: "#e8eaed",
	},
	shape,
	typography,
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					scrollbarWidth: "thin",
					"&::-webkit-scrollbar": { width: 8, height: 8 },
					"&::-webkit-scrollbar-track": { background: "#ffffff" },
					"&::-webkit-scrollbar-thumb": {
						background: "#e8eaed",
						borderRadius: 10,
					},
					"&::-webkit-scrollbar-thumb:hover": { background: "#9aa0a6" },
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: { borderRadius: 100, boxShadow: "none", "&:hover": { boxShadow: "none" } },
			},
		},
		MuiChip: {
			styleOverrides: { root: { borderRadius: 100 } },
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 24,
					boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
					border: "1px solid #e8eaed",
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "rgba(255,255,255,0.95)",
					backdropFilter: "blur(12px)",
					boxShadow: "0 1px 0 #e8eaed",
					color: "#202124",
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: { borderRadius: "100px !important" },
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: { borderRadius: 100 },
				notchedOutline: { borderColor: "#e8eaed" },
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: { backgroundImage: "none" },
			},
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#8ab4f8",
			light: "#aecbfa",
			contrastText: "#202124",
		},
		secondary: {
			main: "#3c4043",
			contrastText: "#e8eaed",
		},
		error: { main: "#f28b82" },
		warning: { main: "#fdd663" },
		success: { main: "#81c995" },
		background: {
			default: "#202124",
			paper: "#292a2d",
		},
		text: {
			primary: "#e8eaed",
			secondary: "#9aa0a6",
			disabled: "#5f6368",
		},
		divider: "#3c4043",
	},
	shape,
	typography,
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					scrollbarWidth: "thin",
					"&::-webkit-scrollbar": { width: 8, height: 8 },
					"&::-webkit-scrollbar-track": { background: "#202124" },
					"&::-webkit-scrollbar-thumb": {
						background: "#3c4043",
						borderRadius: 10,
					},
					"&::-webkit-scrollbar-thumb:hover": { background: "#5f6368" },
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: { borderRadius: 100, boxShadow: "none", "&:hover": { boxShadow: "none" } },
			},
		},
		MuiChip: {
			styleOverrides: { root: { borderRadius: 100 } },
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 24,
					boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
					border: "1px solid #3c4043",
					backgroundColor: "#292a2d",
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "rgba(32,33,36,0.95)",
					backdropFilter: "blur(12px)",
					boxShadow: "0 1px 0 #3c4043",
					color: "#e8eaed",
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: { borderRadius: "100px !important" },
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: { borderRadius: 100 },
				notchedOutline: { borderColor: "#3c4043" },
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: { backgroundImage: "none" },
			},
		},
	},
});
