const fs = require("fs");
const path = require("path");

const toolsJson = JSON.parse(fs.readFileSync("./src/constants/tools.json", "utf8"));
const allTools = Object.values(toolsJson.categories).flatMap(c => c.tools);

const slugs = ["aesthetic-collage-maker", "aesthetic-bio-generator"];

slugs.forEach(slug => {
    const found = allTools.find(t => t.extraSlugs && t.extraSlugs.includes(slug));
    console.log(`Found tool for ${slug}: ${found ? found.id : "NOT FOUND"} (${found ? found.name : "N/A"})`);
});
