import toolsData from "@/constants/tools.json";

export const SITE_NAME = "30tools";
export const SITE_URL = "https://30tools.com";
export const CONTACT_EMAIL = "mail@30tools.com";
export const COMPANY_OR_OWNER_NAME = "30tools";
export const LAST_UPDATED = "2026-05-09";

const allTools = Object.values(toolsData.categories || {}).flatMap(
	(category: any) => category?.tools || [],
);

export const TOOL_COUNT = allTools.length;
export const TOOL_COUNT_STRING = `${TOOL_COUNT}`;

export const CATEGORY_COUNT = Object.keys(toolsData.categories || {}).length;
export const POPULAR_TOOL_COUNT = allTools.filter((tool: any) => tool?.popular).length;

export const SITE_CONFIG = {
	siteName: SITE_NAME,
	siteUrl: SITE_URL,
	toolCount: TOOL_COUNT,
	toolCountString: TOOL_COUNT_STRING,
	categoryCount: CATEGORY_COUNT,
	popularToolCount: POPULAR_TOOL_COUNT,
	popularToolCountString: `${POPULAR_TOOL_COUNT}`,
	seoVariantCount: 0,
	lastUpdatedDate: LAST_UPDATED,
	maxFileSize: "50MB",
	supportedFileLimits: "Up to 50MB per file",
	contactEmail: CONTACT_EMAIL,
	companyOrOwnerName: COMPANY_OR_OWNER_NAME,
};
