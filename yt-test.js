const url = "https://www.youtube.com/watch?v=avKnn77eLfo";
const encoded = encodeURIComponent(url);
const apiUrl = `https://ytdl.socialplug.io/api/video-info?url=${encoded}`;

console.log(`Testing API: ${apiUrl}`);

fetch(apiUrl, {
    headers: {
        'accept': "application/json, text/plain, */*",
        'origin': "https://www.socialplug.io",
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    },
})
    .then(response => {
        console.log(`Status: ${response.status}`);
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`Request failed with status ${response.status}: ${text}`);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Success! API Response:');
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
