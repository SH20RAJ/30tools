async function postBlogs() {
    let page = 1;
    while (true) {
        try {
            console.log(`Fetching page ${page} from Dev.to API...`);
            // Fetch top webdev articles with pagination
            const res = await fetch(`https://dev.to/api/articles?tag=webdev&top=30&per_page=30&page=${page}`);

            if (!res.ok) {
                console.error(`Failed to fetch page ${page}: ${res.status} ${res.statusText}`);
                // Stop or continue? Usually stop if API fails.
                break;
            }

            const articles = await res.json();

            if (!articles || articles.length === 0) {
                console.log(`No articles found on page ${page}. Loop finished.`);
                break;
            }

            console.log(`Found ${articles.length} articles on page ${page} to post.`);

            // Iterate
            for (const [index, article] of articles.entries()) {
                console.log(`[Page ${page} - ${index + 1}/${articles.length}] Posting: ${article.title}...`);

                const localLink = `https://30tools.com/blogs/${article.user.username}/${article.slug}`;
                const localLink2 = `https://devto.30tools.com/article/${article.user.username}/${article.slug}`;

                // Construct content
                const content = `${article.title}\n\n${article.description}\n\nRead more: ${localLink}\n\n ( ${localLink2} ) \n\n Write Stories on https://unstory.live \n\n https://unstory.live/posts/the-art-of-letting-go-part-8-4c7996e5 `;

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
                            "access-token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTQyZTljODY2YmUxOTQ4ZmM1OTZmNzAiLCJzdGF0dXMiOiJBQ1RJVkUiLCJkb21haW4iOiJNZWRpYWwiLCJpYXQiOjE3NjU5OTI5MDQsImV4cCI6MTc4MTU0NDkwNH0.Q5TQVRCjQCqqhNpNZRBNQQ3SxwNPx-qrMtw4TKsaB19R8fxUCB2PjwLIJgihwlefyim3QEYWpKLMPXCuFk8dqISirYT7MdtL0v25_tVn3yKf2E5N7RYMNPQU-RJ1yD-N4V8C-H6doUfN_GjRfgjZr01NYG5v8deHchnOrWnzhS138fn0GArjfvxAUuoQwt91oRRhPV6L_2hWXgVs8FuQPOKziqNTGYcTBze4dmkvJidj-h2tBi_VR74FT0BO60MZ_D2VdcsbkCeGEY2o9sW6gS6ZOTinzPKefyR_AjxQtla-QrOtQMTk6tgjXyoO-ls54UusWNa9Gpxzz7UrggAFbIWF4fe96rPwP5oE-qhq6IxHVl_h9PpEiP2EBG8GI2461QRzkETSgNtMPUaYFdzC06z4SsynQvIVQw79udNqARb8tJCkBn86bJesLyJEUyUbtREqgOAxhTaN4ZkeGxu9zWefLPx0KwRfBEi0n1GsSWkaksfC9sBbQ9xaTlJ4FVXGhI9FgKho-FIwhJjVFQLL60hcrF34uzIpEYHm4rWawvNlxTH2Rj0gC_HKg9KR5LSX-EOQVO-Cv04Sy_qZt0zeTsEK9EPEkRjIw8Ez-be0j9SouLVBQAlpODTQwfXUIFSVNT5UjRGmDF_NQi0cFA_7fXLw8jIPiPRd8qeM_zazBF4",
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

                console.log("Waiting...");
                await new Promise(r => setTimeout(r, 100));
            }

            // Advance page
            page++;
            console.log(`Finished page ${page - 1}. Moving to page ${page}...`);
            // Add a small delay between pages to be safe
            await new Promise(r => setTimeout(r, 1000));

        } catch (err) {
            console.error("Script failed:", err);
            // Wait and try again or break?
            // If it's an infinite loop daemon, wait longer. But here likely just paginate.
            console.log("Error encountered. Waiting 5s before retry...");
            await new Promise(r => setTimeout(r, 5000));
        }
    }
}

postBlogs();
