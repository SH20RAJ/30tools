// Temporary email checker using disposable-email-domains repository data

const BLOCKLIST_URL =
  "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/refs/heads/main/disposable_email_blocklist.conf";
const ALLOWLIST_URL =
  "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/refs/heads/main/allowlist.conf";

// Cache for the domain lists
let blocklistCache = null;
let allowlistCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

async function fetchDomainList(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "30tools-temp-email-checker",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((domain) => domain.toLowerCase());
  } catch (error) {
    console.error("Error fetching domain list:", error);
    return [];
  }
}

async function loadDomainLists() {
  const now = Date.now();

  // Return cached data if still valid
  if (
    blocklistCache &&
    allowlistCache &&
    cacheTimestamp &&
    now - cacheTimestamp < CACHE_DURATION
  ) {
    return { blocklist: blocklistCache, allowlist: allowlistCache };
  }

  try {
    const [blocklist, allowlist] = await Promise.all([
      fetchDomainList(BLOCKLIST_URL),
      fetchDomainList(ALLOWLIST_URL),
    ]);

    // Update cache
    blocklistCache = blocklist;
    allowlistCache = allowlist;
    cacheTimestamp = now;

    return { blocklist, allowlist };
  } catch (error) {
    console.error("Error loading domain lists:", error);
    // Return empty arrays if fetch fails
    return { blocklist: [], allowlist: [] };
  }
}

export async function checkTempEmail(input) {
  try {
    const { blocklist, allowlist } = await loadDomainLists();

    // Determine if input is email or domain
    const isEmail = input.includes("@");
    let domain;
    let localPart = null;

    if (isEmail) {
      const emailParts = input.split("@");
      if (emailParts.length !== 2) {
        throw new Error("Invalid email format");
      }
      localPart = emailParts[0];
      domain = emailParts[1].toLowerCase();
    } else {
      domain = input.toLowerCase();
    }

    // Check against lists
    const inBlocklist = blocklist.includes(domain);
    const inAllowlist = allowlist.includes(domain);

    // Determine if temporary
    // If in allowlist, it's not temporary
    // If in blocklist, it's temporary
    // If in neither, we assume it's valid (not temporary)
    const isTemporary = inBlocklist && !inAllowlist;

    // Generate recommendation
    let recommendation = "";
    if (isTemporary) {
      recommendation =
        "This appears to be a temporary/disposable email domain. Consider requiring a permanent email address for important communications.";
    } else if (inAllowlist) {
      recommendation =
        "This domain is explicitly whitelisted as a legitimate email provider.";
    } else {
      recommendation =
        "This domain is not in our temporary email database. It appears to be a legitimate email domain.";
    }

    return {
      success: true,
      inputType: isEmail ? "email" : "domain",
      domain,
      localPart,
      isTemporary,
      inBlocklist,
      inAllowlist,
      recommendation,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error checking temp email:", error);
    return {
      success: false,
      error: error.message || "Failed to check email",
    };
  }
}

export async function getTempEmailStats() {
  try {
    const { blocklist, allowlist } = await loadDomainLists();
    return {
      blocklist: blocklist.length,
      allowlist: allowlist.length,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error getting stats:", error);
    return {
      blocklist: 0,
      allowlist: 0,
      lastUpdated: new Date().toISOString(),
    };
  }
}
