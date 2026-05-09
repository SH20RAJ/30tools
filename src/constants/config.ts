import { getAllTools } from "@/lib/tools";

export const SITE_NAME = "30tools";
export const SITE_URL = "https://30tools.com";

// Tool counts derived from the tool registry to avoid conflicting hard-coded numbers
export const TOOL_COUNT = getAllTools().length;
export const TOOL_COUNT_STRING = String(TOOL_COUNT);

// Calculate popular tools count (tools marked as popular in the registry)
export const POPULAR_TOOL_COUNT = getAllTools().filter(t => t.popular).length;
export const POPULAR_TOOL_COUNT_STRING = `${POPULAR_TOOL_COUNT}+`;

export const LAST_UPDATED = "2026-04-14";
export const CONTACT_EMAIL = "mail@30tools.com";

export const COMPANY_OR_OWNER_NAME = "30tools";
import toolsData from "@/constants/tools.json";

export const CURRENT_TOOL_COUNT = Object.values(toolsData.categories || {}).reduce(
	(total: number, category: any) => total + (category.tools?.length || 0),
	0,
);

export const SITE_CONFIG = {
	siteName: "30tools",
	siteUrl: "https://30tools.com",
	toolCountString: `${CURRENT_TOOL_COUNT}+`,
	popularToolCountString: POPULAR_TOOL_COUNT_STRING, // Dynamic - computed from tools.json
	lastUpdatedDate: new Date().toISOString().split("T")[0],
	maxFileSize: "50MB",
	supportedFileLimits: "Up to 50MB per file",
	contactEmail: "mail@30tools.com",
};
