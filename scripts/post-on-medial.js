const fs = require('fs');
const path = require('path');

const TOOLS_PATH = path.join(__dirname, '../src/constants/tools.json');

async function postTools() {
    try {
        // Read tools
        console.log("Reading tools from:", TOOLS_PATH);
        const rawData = fs.readFileSync(TOOLS_PATH, 'utf-8');
        const data = JSON.parse(rawData);

        // Flatten tools
        const allTools = [];
        if (data.categories) {
            Object.values(data.categories).forEach(cat => {
                if (cat.tools) {
                    allTools.push(...cat.tools);
                }
            });
        }

        console.log(`Found ${allTools.length} tools to post.`);

        // Iterate
        for (const [index, tool] of allTools.entries()) {
            console.log(`[${index + 1}/${allTools.length}] Posting: ${tool.name}...`);

            // Construct content
            const content = `${tool.name}\n\n${tool.description}\n\nhttps://30tools.com${tool.route}`;

            const bodyObj = {
                content: content,
                referenceType: "POD",
                referenceId: "6564423ab5270801401cb0cd",
                creator: {
                    type: "USER",
                    isPremium: false,
                    id: "6942e9c866be1948fc596f70"
                }
            };

            const boundary = "----WebKitFormBoundaryIPstk87iX1vLH44U";
            // Note: Body boundary lines must start with --
            const bodyString = `------WebKitFormBoundaryIPstk87iX1vLH44U\r\nContent-Disposition: form-data; name="post"\r\n\r\n${JSON.stringify(bodyObj)}\r\n------WebKitFormBoundaryIPstk87iX1vLH44U--\r\n`;

            try {
                const response = await fetch("https://prod.medial.app/api/v2/post", {
                    headers: {
                        "accept": "*/*",
                        "accept-language": "en-GB,en;q=0.8",
                        "access-token": "seyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTQyZTljODY2YmUxOTQ4ZmM1OTZmNzAiLCJzdGF0dXMiOiJBQ1RJVkUiLCJkb21haW4iOiJNZWRpYWwiLCJpYXQiOjE3NjU5OTI5MDQsImV4cCI6MTc4MTU0NDkwNH0.Q5TQVRCjQCqqhNpNZRBNQQ3SxwNPx-qrMtw4TKsaB19R8fxUCB2PjwLIJgihwlefyim3QEYWpKLMPXCuFk8dqISirYT7MdtL0v25_tVn3yKf2E5N7RYMNPQU-RJ1yD-N4V8C-H6doUfN_GjRfgjZr01NYG5v8deHchnOrWnzhS138fn0GArjfvxAUuoQwt91oRRhPV6L_2hWXgVs8FuQPOKziqNTGYcTBze4dmkvJidj-h2tBi_VR74FT0BO60MZ_D2VdcsbkCeGEY2o9sW6gS6ZOTinzPKefyR_AjxQtla-QrOtQMTk6tgjXyoO-ls54UusWNa9Gpxzz7UrggAFbIWF4fe96rPwP5oE-qhq6IxHVl_h9PpEiP2EBG8GI2461QRzkETSgNtMPUaYFdzC06z4SsynQvIVQw79udNqARb8tJCkBn86bJesLyJEUyUbtREqgOAxhTaN4ZkeGxu9zWefLPx0KwRfBEi0n1GsSWkaksfC9sBbQ9xaTlJ4FVXGhI9FgKho-FIwhJjVFQLL60hcrF34uzIpEYHm4rWawvNlxTH2Rj0gC_HKg9KR5LSX-EOQVO-Cv04Sy_qZt0zeTsEK9EPEkRjIw8Ez-be0j9SouLVBQAlpODTQwfXUIFSVNT5UjRGmDF_NQi0cFA_7fXLw8jIPiPRd8qeM_zazBF4",
                        "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryIPstk87iX1vLH44U",
                        "priority": "u=1, i",
                        "sec-ch-ua": "\"Brave\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"macOS\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-site",
                        "sec-gpc": "1",
                        "referrer": "https://medial.app/",
                        "referrerPolicy": "strict-origin-when-cross-origin"
                    },
                    body: bodyString,
                    method: "POST"
                });

                if (!response.ok) {
                    console.error(`Failed to post ${tool.name}: ${response.status} ${response.statusText}`);
                    const text = await response.text();
                    console.error("Response:", text);
                } else {
                    console.log(`Successfully posted ${tool.name}`);
                }
            } catch (error) {
                console.error(`Error posting ${tool.name}:`, error);
            }

            // Delay 10 seconds to be safe from rate limits
            console.log("Waiting 10 seconds...");
            await new Promise(r => setTimeout(r, 100));
        }
    } catch (err) {
        console.error("Script failed:", err);
    }
}

postTools();