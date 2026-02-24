const https = require('https');
https.get('https://www.urwatools.com/downloaders', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const urls = [...data.matchAll(/href="\/([^"]+)"/g)].map(m => m[1]);
    const filtered = urls.filter(u => u.includes('downloader') && !u.includes('downloaders')).filter((v, i, a) => a.indexOf(v) === i);
    console.log(filtered.join('\n'));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
