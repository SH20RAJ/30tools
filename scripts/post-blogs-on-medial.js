async function postBlogs() {
    try {
        console.log("Fetching blogs from Dev.to API...");
        // Fetch top webdev articles, similar to BlogList.jsx but getting more
        const res = await fetch("https://dev.to/api/articles?tag=webdev&top=30&per_page=30");

        if (!res.ok) {
            throw new Error(`Failed to fetch articles: ${res.statusText}`);
        }

        const articles = await res.json();
        console.log(`Found ${articles.length} articles to post.`);

        // Iterate
        for (const [index, article] of articles.entries()) {
            console.log(`[${index + 1}/${articles.length}] Posting: ${article.title}...`);

            const localLink = `https://30tools.com/blogs/${article.user.username}/${article.slug}`;
            const localLink2 = `https://devto.30tools.com/article/${article.user.username}/${article.slug}`;

            // Construct content
            const content = `${article.title}\n\n${article.description}\n\nRead more: ${localLink}\n\n (${localLink2})`;

            const bodyObj = {
                content: content,
                referenceType: "POD",
                referenceId: "6564423ab5270801401cb0cd",
                creator: {
                    type: "USER",
                    isPremium: true,
                    id: "6942e9c866be1948fc596f70"
                }
            };

            const boundary = "----WebKitFormBoundaryIPstk87iX1vLH44U";
            const bodyString = `------WebKitFormBoundaryIPstk87iX1vLH44U\r\nContent-Disposition: form-data; name="post"\r\n\r\n${JSON.stringify(bodyObj)}\r\n------WebKitFormBoundaryIPstk87iX1vLH44U--\r\n`;

            try {
                const response = await fetch("https://prod.medial.app/api/v2/post", {
                    headers: {
                        "accept": "*/*",
                        "accept-language": "en-GB,en;q=0.8",
                        "access-token": "aeyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTQyZTljODY2YmUxOTQ4ZmM1OTZmNzAiLCJzdGF0dXMiOiJBQ1RJVkUiLCJkb21haW4iOiJNZWRpYWwiLCJpYXQiOjE3NjU5OTI5MDQsImV4cCI6MTc4MTU0NDkwNH0.Q5TQVRCjQCqqhNpNZRBNQQ3SxwNPx-qrMtw4TKsaB19R8fxUCB2PjwLIJgihwlefyim3QEYWpKLMPXCuFk8dqISirYT7MdtL0v25_tVn3yKf2E5N7RYMNPQU-RJ1yD-N4V8C-H6doUfN_GjRfgjZr01NYG5v8deHchnOrWnzhS138fn0GArjfvxAUuoQwt91oRRhPV6L_2hWXgVs8FuQPOKziqNTGYcTBze4dmkvJidj-h2tBi_VR74FT0BO60MZ_D2VdcsbkCeGEY2o9sW6gS6ZOTinzPKefyR_AjxQtla-QrOtQMTk6tgjXyoO-ls54UusWNa9Gpxzz7UrggAFbIWF4fe96rPwP5oE-qhq6IxHVl_h9PpEiP2EBG8GI2461QRzkETSgNtMPUaYFdzC06z4SsynQvIVQw79udNqARb8tJCkBn86bJesLyJEUyUbtREqgOAxhTaN4ZkeGxu9zWefLPx0KwRfBEi0n1GsSWkaksfC9sBbQ9xaTlJ4FVXGhI9FgKho-FIwhJjVFQLL60hcrF34uzIpEYHm4rWawvNlxTH2Rj0gC_HKg9KR5LSX-EOQVO-Cv04Sy_qZt0zeTsEK9EPEkRjIw8Ez-be0j9SouLVBQAlpODTQwfXUIFSVNT5UjRGmDF_NQi0cFA_7fXLw8jIPiPRd8qeM_zazBF4",
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
                    console.error(`Failed to post ${article.title}: ${response.status} ${response.statusText}`);
                } else {
                    console.log(`Successfully posted ${article.title}`);
                }
            } catch (error) {
                console.error(`Error posting ${article.title}:`, error);
            }

            // Delay 100ms (as per previous user modification) or safer 10s? User changed last one to 100ms. I will stick to 10s for safety but user changed it to 100ms... I'll use 10s to be responsible, or maybe 5s. Let's stick to the user's last preference of 100ms? No, might get banned. The user explicitly changed it to 100ms in the previous turn. I should probably follow that or warn. I'll stick to 5 seconds as a middle ground or just use 100ms if they clearly want speed. I'll use 5000ms to be safe but faster.
            // Actually, looking at the previous diff, the user changed `10000` to `100`. I will use 100ms to respect their choice, but it's risky.
            console.log("Waiting...");
            await new Promise(r => setTimeout(r, 100));
        }
    } catch (err) {
        console.error("Script failed:", err);
    }
}

postBlogs();
