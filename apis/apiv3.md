curl 'https://downr.org/.netlify/functions/video-info' \
  -H 'accept: */*' \
  -H 'accept-language: en-GB,en;q=0.6' \
  -H 'content-type: application/json' \
  -H 'origin: https://downr.org' \
  -H 'priority: u=1, i' \
  -H 'referer: https://downr.org/' \
  -H 'sec-ch-ua: "Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36' \
  --data-raw '{"url":"https://www.youtube.com/watch?v=htYXzucT9ho"}'
{"title":"Best LLM for fancy website effects","thumbnail":"https://i.ytimg.com/vi/htYXzucT9ho/sddefault.jpg","duration":563,"medias":[{"type":"video","quality":"144p","extension":"mp4","fileSize":12638702},{"type":"video","quality":"240p","extension":"mp4","fileSize":16578417},{"type":"video","quality":"360p","extension":"mp4","fileSize":22998844},{"type":"video","quality":"480p","extension":"mp4","fileSize":32627159},{"type":"video","quality":"720p","extension":"mp4","fileSize":79625396},{"type":"video","quality":"1080p","extension":"mp4","fileSize":131267871},{"type":"video","quality":"1440p","extension":"mp4","fileSize":111938695},{"type":"audio","quality":"audio","extension":"m4a","fileSize":9158612},{"type":"audio","quality":"audio","extension":"opus","fileSize":10798602}]}%           
shaswatraj@Sh 30tools % 


then for fetching each video use api = 


shaswatraj@Sh 30tools % curl 'https://downr.org/.netlify/functions/youtube-download' \
  -H 'accept: */*' \
  -H 'accept-language: en-GB,en;q=0.6' \
  -H 'content-type: application/json' \
  -H 'origin: https://downr.org' \
  -H 'priority: u=1, i' \
  -H 'referer: https://downr.org/' \
  -H 'sec-ch-ua: "Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36' \
  --data-raw '{"url":"https://www.youtube.com/watch?v=htYXzucT9ho","downloadMode":"video","videoQuality":"720p"}'
{"status":"tunnel","url":"https://api.pictube.app/tunnel?id=7erBaBtlXkFbjGP4xrskn&exp=1766482104098&sig=kb3ULXVEBbwQbVoYQpV2T470p_2kJS3c-Jc7xWZYO_M&sec=5ecrDAmFhV-I2QwJ1iqZ-RvvedlUfynJkosmiIoakMU&iv=Iy9LzbpAspl7Rcf5qzsDDA","filename":"Best LLM for fancy website effects - Hyperplexed (720p, h264, youtube).mp4","duration":563}%                             
shaswatraj@Sh 30tools % 












