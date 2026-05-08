import toolsData from "@/constants/tools.json";

export const CURRENT_TOOL_COUNT = Object.values(toolsData.categories || {}).reduce(
	(total: number, category: any) => total + (category.tools?.length || 0),
	0,
);

export const SITE_CONFIG = {
	siteName: "30tools",
	siteUrl: "https://30tools.com",
	toolCountString: `${CURRENT_TOOL_COUNT}+`,
	popularToolCountString: "100+",
	lastUpdatedDate: new Date().toISOString().split("T")[0],
	maxFileSize: "50MB",
	supportedFileLimits: "Up to 50MB per file",
	contactEmail: "mail@30tools.com",
};
