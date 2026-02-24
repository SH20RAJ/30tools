const url = "https://in.pinterest.com/pin/109212359711104837/";
fetch('https://api.seekin.ai/ikool/media/download', {
  method: 'POST',
  headers: {
    'accept': '*/*',
    'accept-language': 'en-GB,en;q=0.6',
    'content-type': 'application/json',
    'lang': 'en',
    'origin': 'https://www.seekin.ai',
    'priority': 'u=1, i',
    'referer': 'https://www.seekin.ai/',
    'sec-ch-ua': '"Not:A-Brand";v="99", "Brave";v="145", "Chromium";v="145"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'sec-gpc': '1',
    'sign': 'f45139d33152ecd30b3452ffd6c87344bd9f10b270c6da01d0e0da8945a0bf5c',
    'timestamp': '1771940766192',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36'
  },
  body: JSON.stringify({url})
}).then(r => r.json()).then(console.log).catch(console.error);
