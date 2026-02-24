const https = require('https');
const options = {
  hostname: 'www.urwatools.com',
  path: '/downloaders',
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
};
https.get(options, (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const regex = /href="\/downloaders\/([^"]+)"/g;
    let match;
    const tools = new Set();
    while ((match = regex.exec(data)) !== null) {
      if(match[1] && !match[1].startsWith('?') && match[1].length > 2) {
         tools.add(match[1]);
      }
    }
    console.log(Array.from(tools).join('\n'));
  });
}).on('error', (err) => {
  console.error(err);
});
