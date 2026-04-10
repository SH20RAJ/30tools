
Rules :
 - always fetch cooldown
 - dont miss any header file

Steps :

1. first fetch the cooldown to get data about like

curl 'https://ytdown.to/cooldown.php' \
  -H 'accept: application/json, text/javascript, */*; q=0.01' \
  -H 'accept-language: en-GB,en;q=0.5' \
  -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
  -b 'PHPSESSID=go6tjlikmro2k7uokfkh7jcagg' \
  -H 'origin: https://ytdown.to' \
  -H 'priority: u=1, i' \
  -H 'referer: https://ytdown.to/en2/' \
  -H 'sec-ch-ua: "Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36' \
  -H 'x-requested-with: XMLHttpRequest' \
  --data-raw 'action=check'
{"can_download":true,"remaining_time":0,"download_count":0}%                       

---

2. See the video fetching and the response schema json

curl 'https://ytdown.to/proxy.php' \
  -H 'accept: */*' \
  -H 'accept-language: en-GB,en;q=0.5' \
  -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
  -b 'PHPSESSID=go6tjlikmro2k7uokfkh7jcagg' \
  -H 'origin: https://ytdown.to' \
  -H 'priority: u=1, i' \
  -H 'referer: https://ytdown.to/en2/' \
  -H 'sec-ch-ua: "Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36' \
  -H 'x-requested-with: XMLHttpRequest' \
  --data-raw 'url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dc_my5B15ENU'
{"api":{"service":"YouTube","status":"OK","message":"Processing started.","id":"c_my5B15ENU","title":"Romantic Kishore Kumar Hits | Aap Ki Ankhon Mein Kuch | Ek Ajnabee Haseena Se | Old Hindi Hits","description":"These iconic songs, enriched by legendary voices and soulful music, are perfect for your nostalgic playlist.\n\nTimestamps: \n00:00 - Introduction \n00:05 - Aap Ki Ankhon Mein Kuch  \n04:13 - Ek Ajnabee Haseena Se  \n08:39 - O Mere Dil Ke Chain  \n13:16 - Mere Sapnon Ki Rani  \n18:16 - Pyar Deewana Hota Hai  \n23:00 - Are Jane Kaise Kab Kahan Iqrar  \n28:24 - Gaata Rahe Mera Dil  \n33:16 - Yeh Sham Mastani  \n37:53 - Dekha Ek Khwab  \n43:13 - Tere Chehre Se Nazar Nahin  \n\nCredits: \nSong Name: Aap Ki Ankhon Mein Kuch\nArtist: Kishore Kumar, Lata Mangeshkar\nLyricist: Gulzar\nMusic Director: R.D. Burman\n\nSong Name: Ek Ajnabee Haseena Se\nArtist: Kishore Kumar\nLyricist: Anand Bakshi\nMusic Director: R.D. Burman\n\nSong Name: O Mere Dil Ke Chain\nArtist: Kishore Kumar\nLyricist: Majrooh Sultanpuri\nMusic Director: R.D. Burman\n\nSong Name: Mere Sapnon Ki Rani\nArtist: Kishore Kumar\nLyricist: Anand Bakshi\nMusic Director: S.D. Burman\n\nSong Name: Pyar Deewana Hota Hai\nArtist: Kishore Kumar\nLyricist: Anand Bakshi\nMusic Director: R.D. Burman\n\nSong Name: Are Jane Kaise Kab Kahan Iqrar\nArtist: Kishore Kumar, Lata Mangeshkar\nLyricist: Anand Bakshi\nMusic Director: R.D. Burman\n\nSong Name: Gaata Rahe Mera Dil\nArtist: Lata Mangeshkar, Kishore Kumar\nLyricist: Shailendra\nMusic Director: S.D. Burman\n\nSong Name: Yeh Sham Mastani\nArtist: Kishore Kumar\nLyricist: Anand Bakshi\nMusic Director: R.D. Burman\n\nSong Name: Dekha Ek Khwab\nArtist: Lata Mangeshkar, Kishore Kumar\nLyricist: Javed Akhtar\nMusic Director: Shiv-Hari\n\nSong Name: Tere Chehre Se Nazar Nahin\nArtist: Lata Mangeshkar, Kishore Kumar\nLyricist: Sahir Ludhianvi\nMusic Director: Khayyam\n\n#omeredilkechain \n#kishorekumar \n#saregamacarvaan \n\n\ud83c\udfb6 Listen to more timeless classics like this:\n\nSpotify: https:\/\/open.spotify.com\/playlist\/7oL1sVIjHo0xmOeQjRJzRx?si=5UrK0YY3SSiI3As-xutong\nGaana: https:\/\/gaana.com\/playlist\/gaana-dj-carvaan-kishore-kumar-hits \nJioSaavn: https:\/\/www.jiosaavn.com\/featured\/carvaan---kishore-kumar-hits\/xk6D7eWJgTHgEhiRleA1SQ__ \n\nLearn to sing in Sur with AI Powered Personal Music Teacher- Padhanisa by Saregama. Download Padhanisa App now; https:\/\/sarega.ma\/padhanisa\n\nAawaz Aapki, Gaane Hamare, Ab Sunegi Duniya Saari\nMake your own cover on this song and we\u2019ll launch it on our Openstage Youtube Channel.\nSend it on content@saregama.com \n\nSleep by Saregama Carvaan, Pre-loaded with soothing sounds that help body and mind to relax. To buy, click here https:\/\/s.sarega.ma\/sleep\n\nTo buy Saregama Carvaan, visit  https:\/\/www.saregama.com\/carvaan\/carv...\nTo buy virus free original tracks, visit  https:\/\/www.saregama.com\/musicstore\n\nLabel:: Saregama India Ltd, A RPSG Group Company\n\nTo buy the original and virus free track, visit www.saregama.com","previewUrl":"https:\/\/rr2---sn-4g5ednse.googlevideo.com\/videoplayback?expire=1767016921&ei=eTVSabaMCvaJgMMPmJikiAw&ip=172.71.164.123&id=o-AHBTZOg-DwlhZsZ2pHjeeTUqsKmy3-4SFAiW405T-uJi&itag=137&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=46&met=1766995321%2C&mh=0i&mm=31%2C26&mn=sn-4g5ednse%2Csn-5hnednsz&ms=au%2Conr&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&initcwndbps=3462500&hightc=yes&siu=1&bui=AYUSA3Cr5HLmGKY6ZmTvTf3y7v3JCHBm72zXsgqeNExghbwszzbOLJcCcc7kjP3JXjNqxjEKzg&spc=wH4Qq03GrNq-rorzBXrliFkx6o7cWTqoyduYZA9urkp5iayhB0SY62zKUw&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=134358634&dur=2898.687&lmt=1762689712758855&mt=1766994788&fvip=5&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&txp=4535534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgEWE4GBdfUqKGnAuxkIz09oj944jANmnrjnYRgtp3h_ACIQCY1TMcwtTb-MT1-LLQVintYPSB-HkTLNZvNeYI2TabXw%3D%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAKFh1BjyMlt_eThUUM4aGmAYhrAHi_6MIGgX-tIcC6jBAiEA7sTm4qikkZNhDOckK5ZeKWPfp_BAJHPS0LhoN0qDfwg%3D","imagePreviewUrl":"https:\/\/i.ytimg.com\/vi\/c_my5B15ENU\/sddefault.jpg","permanentLink":"https:\/\/www.youtube.com\/watch?v=c_my5B15ENU","userInfo":{"name":"Saregama Carvaan","userCategory":false,"userBio":"Welcome to the official Saregama Carvaan YouTube channel, your ultimate destination for timeless Hindi music! Relive the golden era of Bollywood with a curated collection of classic songs from legendary singers and artists. Whether you're a fan of Lata Mangeshkar, Kishore Kumar, Mohammed Rafi, or Mukesh, Saregama Carvaan has it all. Enjoy evergreen hits, soulful melodies, and nostalgic tunes from the greatest voices in Indian music history. Tune in and let these timeless tracks take you on a musical journey through decades of unforgettable hits.\n","username":"@SaregamaCarvaan-h8u","userId":"UCFIMVKiJIEXCciTXqcF727Q","userAvatar":"https:\/\/s15.ytcontent.com\/v3\/v\/image\/UCFIMVKiJIEXCciTXqcF727Q\/UCFIMVKiJIEXCciTXqcF727Q\/R7ATvsda0GzkS46cEn_1fJTbTyU2G47nv8U8Yf4msZYCrmtjOya6I1AOjCD9I2tlJ8s9Y0f4dUg=s160-c-k-c0x00ffffff-no-rj?token=17669953211897b98f0582346fd96b8335c8acc490","userPhone":false,"userEmail":false,"internalUrl":"https:\/\/www.youtube.com\/@SaregamaCarvaan-h8u","externalUrl":false,"accountCountry":"India","dateJoined":"Sep 3, 2024","isVerified":false,"dateVerified":false},"mediaStats":{"mediaCount":"443","followersCount":"291K","followingCount":false,"likesCount":false,"commentsCount":false,"favouritesCount":false,"sharesCount":false,"viewsCount":"2.2M","downloadsCount":false},"mediaItems":[{"type":"Video","name":"Media #001","mediaId":1762689847117489,"mediaUrl":"https:\/\/s15.ytcontent.com\/v3\/videoProcess\/c_my5B15ENU\/1762689847117489\/1080p","mediaPreviewUrl":"https:\/\/rr2---sn-4g5ednse.googlevideo.com\/videoplayback?expire=1767016921&ei=eTVSabaMCvaJgMMPmJikiAw&ip=172.71.164.123&id=o-AHBTZOg-DwlhZsZ2pHjeeTUqsKmy3-4SFAiW405T-uJi&itag=137&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=46&met=1766995321%2C&mh=0i&mm=31%2C26&mn=sn-4g5ednse%2Csn-5hnednsz&ms=au%2Conr&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&initcwndbps=3462500&hightc=yes&siu=1&bui=AYUSA3Cr5HLmGKY6ZmTvTf3y7v3JCHBm72zXsgqeNExghbwszzbOLJcCcc7kjP3JXjNqxjEKzg&spc=wH4Qq03GrNq-rorzBXrliFkx6o7cWTqoyduYZA9urkp5iayhB0SY62zKUw&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=134358634&dur=2898.687&lmt=1762689712758855&mt=1766994788&fvip=5&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&txp=4535534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgEWE4GBdfUqKGnAuxkIz09oj944jANmnrjnYRgtp3h_ACIQCY1TMcwtTb-MT1-LLQVintYPSB-HkTLNZvNeYI2TabXw%3D%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAKFh1BjyMlt_eThUUM4aGmAYhrAHi_6MIGgX-tIcC6jBAiEA7sTm4qikkZNhDOckK5ZeKWPfp_BAJHPS0LhoN0qDfwg%3D","mediaThumbnail":"https:\/\/i.ytimg.com\/vi\/c_my5B15ENU\/sddefault.jpg","mediaRes":"1920x1080","mediaQuality":"FHD","mediaDuration":"48:19","mediaExtension":"MP4","mediaFileSize":"173.32 MB","mediaTask":"merge"},{"type":"Video","name":"Media #002","mediaId":1762689151701710,"mediaUrl":"https:\/\/s15.ytcontent.com\/v3\/videoProcess\/c_my5B15ENU\/1762689151701710\/720p","mediaPreviewUrl":"https:\/\/rr2---sn-4g5ednse.googlevideo.com\/videoplayback?expire=1767016921&ei=eTVSabaMCvaJgMMPmJikiAw&ip=172.71.164.123&id=o-AHBTZOg-DwlhZsZ2pHjeeTUqsKmy3-4SFAiW405T-uJi&itag=136&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=46&met=1766995321%2C&mh=0i&mm=31%2C26&mn=sn-4g5ednse%2Csn-5hnednsz&ms=au%2Conr&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&initcwndbps=3462500&hightc=yes&siu=1&bui=AYUSA3Cr5HLmGKY6ZmTvTf3y7v3JCHBm72zXsgqeNExghbwszzbOLJcCcc7kjP3JXjNqxjEKzg&spc=wH4Qq03GrNq-rorzBXrliFkx6o7cWTqoyduYZA9urkp5iayhB0SY62zKUw&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=50399399&dur=2898.687&lmt=1762689101302311&mt=1766994788&fvip=5&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&txp=4535534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgdvg06yAh_ke2YAZbDbssMGSxvzjpHZHOi8nQncvYptMCIQCfCyf3HZ7XvHl1wN5V4jVgE348ZDdTdFDCc0pFRAXzCA%3D%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAKFh1BjyMlt_eThUUM4aGmAYhrAHi_6MIGgX-tIcC6jBAiEA7sTm4qikkZNhDOckK5ZeKWPfp_BAJHPS0LhoN0qDfwg%3D","mediaThumbnail":"https:\/\/i.ytimg.com\/vi\/c_my5B15ENU\/sddefault.jpg","mediaRes":"1280x720","mediaQuality":"HD","mediaDuration":"48:19","mediaExtension":"MP4","mediaFileSize":"93.04 MB","mediaTask":"download"},{"type":"Video","name":"Media #003","mediaId":1762689670941381,"mediaUrl":"https:\/\/s15.ytcontent.com\/v3\/videoProcess\/c_my5B15ENU\/1762689670941381\/480p","mediaPreviewUrl":"https:\/\/rr2---sn-4g5ednse.googlevideo.com\/videoplayback?expire=1767016921&ei=eTVSabaMCvaJgMMPmJikiAw&ip=172.71.164.123&id=o-AHBTZOg-DwlhZsZ2pHjeeTUqsKmy3-4SFAiW405T-uJi&itag=135&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=46&met=1766995321%2C&mh=0i&mm=31%2C26&mn=sn-4g5ednse%2Csn-5hnednsz&ms=au%2Conr&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&initcwndbps=3462500&hightc=yes&siu=1&bui=AYUSA3Cr5HLmGKY6ZmTvTf3y7v3JCHBm72zXsgqeNExghbwszzbOLJcCcc7kjP3JXjNqxjEKzg&spc=wH4Qq03GrNq-rorzBXrliFkx6o7cWTqoyduYZA9urkp5iayhB0SY62zKUw&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=32472938&dur=2898.687&lmt=1762689638468443&mt=1766994788&fvip=5&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&txp=4535534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgRzh4sQQQtL9FnLcbFWqk6dg_HzXeDWktXhPSwXlCMJwCIAMctMufbnb-db8aGGSLRhn75qU0OcMpsGpB7UxF6zpX&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAKFh1BjyMlt_eThUUM4aGmAYhrAHi_6MIGgX-tIcC6jBAiEA7sTm4qikkZNhDOckK5ZeKWPfp_BAJHPS0LhoN0qDfwg%3D","mediaThumbnail":"https:\/\/i.ytimg.com\/vi\/c_my5B15ENU\/sddefault.jpg","mediaRes":"854x480","mediaQuality":"SD","mediaDuration":"48:19","mediaExtension":"MP4","mediaFileSize":"75.90 MB","mediaTask":"merge"},{"type":"Video","name":"Media #004","mediaId":1762689093885462,"mediaUrl":"https:\/\/s15.ytcontent.com\/v3\/videoProcess\/c_my5B15ENU\/1762689093885462\/360p","mediaPreviewUrl":"https:\/\/rr2---sn-4g5ednse.googlevideo.com\/videoplayback?expire=1767016921&ei=eTVSabaMCvaJgMMPmJikiAw&ip=172.71.164.123&id=o-AHBTZOg-DwlhZsZ2pHjeeTUqsKmy3-4SFAiW405T-uJi&itag=134&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=46&met=1766995321%2C&mh=0i&mm=31%2C26&mn=sn-4g5ednse%2Csn-5hnednsz&ms=au%2Conr&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&initcwndbps=3462500&hightc=yes&siu=1&bui=AYUSA3Cr5HLmGKY6ZmTvTf3y7v3JCHBm72zXsgqeNExghbwszzbOLJcCcc7kjP3JXjNqxjEKzg&spc=wH4Qq03GrNq-rorzBXrliFkx6o7cWTqoyduYZA9urkp5iayhB0SY62zKUw&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=24806779&dur=2898.687&lmt=1762689069078683&mt=1766994788&fvip=5&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&txp=4535534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAMDK9QGEQeGaXNIJ3hHfcH7fMCXRRu--WXXusemrqXizAiEA0URbFMR9lMdItoE_IMktx2D3OKRaI2yFY-cMdRCgr8E%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAKFh1BjyMlt_eThUUM4aGmAYhrAHi_6MIGgX-tIcC6jBAiEA7sTm4qikkZNhDOckK5ZeKWPfp_BAJHPS0LhoN0qDfwg%3D","mediaThumbnail":"https:\/\/i.ytimg.com\/vi\/c_my5B15ENU\/sddefault.jpg","mediaRes":"640x360","mediaQuality":"SD","mediaDuration":"48:19","mediaExtension":"MP4","mediaFileSize":"68.57 MB","mediaTask":"download"},{"type":"Video","name":"Media #005","mediaId":1762689725865814,"mediaUrl":"https:\/\/s15.ytcontent.com\/v3\/videoProcess\/c_my5B15ENU\/1762689725865814\/240p","mediaPreviewUrl":"https:\/\/rr2---sn-4g5ednse.googlevideo.com\/videoplayback?expire=1767016921&ei=eTVSabaMCvaJgMMPmJikiAw&ip=172.71.164.123&id=o-AHBTZOg-DwlhZsZ2pHjeeTUqsKmy3-4SFAiW405T-uJi&itag=133&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=46&met=1766995321%2C&mh=0i&mm=31%2C26&mn=sn-4g5ednse%2Csn-5hnednsz&ms=au%2Conr&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&initcwndbps=3462500&hightc=yes&siu=1&bui=AYUSA3Cr5HLmGKY6ZmTvTf3y7v3JCHBm72zXsgqeNExghbwszzbOLJcCcc7kjP3JXjNqxjEKzg&spc=wH4Qq03GrNq-rorzBXrliFkx6o7cWTqoyduYZA9urkp5iayhB0SY62zKUw&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=15339221&dur=2898.687&lmt=1762689710526593&mt=1766994788&fvip=5&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&txp=4535534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAIKtTQSDylrSWTrRCJIBYS5icaCL8326VTg3oNlFo_UwAiBbGaHTDJcsWwm5qKQPkJN6qdiiXN9xyuuT4jDVyw7RLA%3D%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAKFh1BjyMlt_eThUUM4aGmAYhrAHi_6MIGgX-tIcC6jBAiEA7sTm4qikkZNhDOckK5ZeKWPfp_BAJHPS0LhoN0qDfwg%3D","mediaThumbnail":"https:\/\/i.ytimg.com\/vi\/c_my5B15ENU\/sddefault.jpg","mediaRes":"426x240","mediaQuality":"SD","mediaDuration":"48:19","mediaExtension":"MP4","mediaFileSize":"59.52 MB","mediaTask":"merge"},{"type":"Video","name":"Media #006","mediaId":1762689132648449,"mediaUrl":"https:\/\/s15.ytcontent.com\/v3\/videoProcess\/c_my5B15ENU\/1762689132648449\/144p","mediaPreviewUrl":"https:\/\/rr2---sn-4g5ednse.googlevideo.com\/videoplayback?expire=1767016921&ei=eTVSabaMCvaJgMMPmJikiAw&ip=172.71.164.123&id=o-AHBTZOg-DwlhZsZ2pHjeeTUqsKmy3-4SFAiW405T-uJi&itag=160&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=46&met=1766995321%2C&mh=0i&mm=31%2C26&mn=sn-4g5ednse%2Csn-5hnednsz&ms=au%2Conr&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&initcwndbps=3462500&hightc=yes&siu=1&bui=AYUSA3Cr5HLmGKY6ZmTvTf3y7v3JCHBm72zXsgqeNExghbwszzbOLJcCcc7kjP3JXjNqxjEKzg&spc=wH4Qq03GrNq-rorzBXrliFkx6o7cWTqoyduYZA9urkp5iayhB0SY62zKUw&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=9330767&dur=2898.687&lmt=1762689123317682&mt=1766994788&fvip=5&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&txp=4535534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgTyQgF7UEB0VaZcy1QhLyoBT6WBLvIHSMEx3k21YtZOsCIQDCF1wAtKDoan5p6b1x3u2qsx5V_jrv1e0pxPCZXU2gEA%3D%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAKFh1BjyMlt_eThUUM4aGmAYhrAHi_6MIGgX-tIcC6jBAiEA7sTm4qikkZNhDOckK5ZeKWPfp_BAJHPS0LhoN0qDfwg%3D","mediaThumbnail":"https:\/\/i.ytimg.com\/vi\/c_my5B15ENU\/sddefault.jpg","mediaRes":"256x144","mediaQuality":"SD","mediaDuration":"48:19","mediaExtension":"MP4","mediaFileSize":"53.77 MB","mediaTask":"merge"},{"type":"Audio","name":"Media #007","mediaId":1762686423896979,"mediaUrl":"https:\/\/s15.ytcontent.com\/v3\/audioProcess\/c_my5B15ENU\/1762686423896979\/48k","mediaPreviewUrl":"https:\/\/rr2---sn-4g5ednse.googlevideo.com\/videoplayback?expire=1767016921&ei=eTVSabaMCvaJgMMPmJikiAw&ip=172.71.164.123&id=o-AHBTZOg-DwlhZsZ2pHjeeTUqsKmy3-4SFAiW405T-uJi&itag=139&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=46&met=1766995321%2C&mh=0i&mm=31%2C26&mn=sn-4g5ednse%2Csn-5hnednsz&ms=au%2Conr&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&initcwndbps=3462500&hightc=yes&siu=1&bui=AYUSA3Cr5HLmGKY6ZmTvTf3y7v3JCHBm72zXsgqeNExghbwszzbOLJcCcc7kjP3JXjNqxjEKzg&spc=wH4Qq03GrNq-rorzBXrliFkx6o7cWTqoyduYZA9urkp5iayhB0SY62zKUw&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=17677191&dur=2898.825&lmt=1762686406219788&mt=1766994788&fvip=5&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&txp=4532534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgHG-7geHolEfxKbRHH1PHz4bf3dBZ1CwoY1tIZYwdxXwCIQDg-cT6F72MQqzza4JrL-AF2QtMSHT7-MroJGnnBPCQbQ%3D%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAKFh1BjyMlt_eThUUM4aGmAYhrAHi_6MIGgX-tIcC6jBAiEA7sTm4qikkZNhDOckK5ZeKWPfp_BAJHPS0LhoN0qDfwg%3D","mediaThumbnail":"https:\/\/i.ytimg.com\/vi\/c_my5B15ENU\/sddefault.jpg","mediaRes":false,"mediaQuality":"48K","mediaDuration":"48:19","mediaExtension":"M4A","mediaFileSize":"16.85 MB","mediaTask":"download"},{"type":"Audio","name":"Media #008","mediaId":1762686453295628,"mediaUrl":"https:\/\/s15.ytcontent.com\/v3\/audioProcess\/c_my5B15ENU\/1762686453295628\/128k","mediaPreviewUrl":"https:\/\/rr2---sn-4g5ednse.googlevideo.com\/videoplayback?expire=1767016921&ei=eTVSabaMCvaJgMMPmJikiAw&ip=172.71.164.123&id=o-AHBTZOg-DwlhZsZ2pHjeeTUqsKmy3-4SFAiW405T-uJi&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=46&met=1766995321%2C&mh=0i&mm=31%2C26&mn=sn-4g5ednse%2Csn-5hnednsz&ms=au%2Conr&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&initcwndbps=3462500&hightc=yes&siu=1&bui=AYUSA3Cr5HLmGKY6ZmTvTf3y7v3JCHBm72zXsgqeNExghbwszzbOLJcCcc7kjP3JXjNqxjEKzg&spc=wH4Qq03GrNq-rorzBXrliFkx6o7cWTqoyduYZA9urkp5iayhB0SY62zKUw&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=46913961&dur=2898.755&lmt=1762686406381667&mt=1766994788&fvip=5&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&txp=4532534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Chightc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAMAtJ7cffM80QVZHfFsfymQ-ZhENanlHAZgBDt5OsStZAiEAxcKTXLdUtBS0KFg-HJBeppg60ANwdji0rQ1Qtqmgmy0%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAKFh1BjyMlt_eThUUM4aGmAYhrAHi_6MIGgX-tIcC6jBAiEA7sTm4qikkZNhDOckK5ZeKWPfp_BAJHPS0LhoN0qDfwg%3D","mediaThumbnail":"https:\/\/i.ytimg.com\/vi\/c_my5B15ENU\/sddefault.jpg","mediaRes":false,"mediaQuality":"128K","mediaDuration":"48:19","mediaExtension":"M4A","mediaFileSize":"44.74 MB","mediaTask":"download"}]}}%  



---


3. then fetch the process of downloading any video like if I have to download mp4 video the I will fetch 720p link from the prev response mediaUrl it

curl 'https://ytdown.to/proxy.php' \
  -H 'accept: */*' \
  -H 'accept-language: en-GB,en;q=0.5' \
  -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
  -b 'PHPSESSID=go6tjlikmro2k7uokfkh7jcagg' \
  -H 'origin: https://ytdown.to' \
  -H 'priority: u=1, i' \
  -H 'referer: https://ytdown.to/en2/' \
  -H 'sec-ch-ua: "Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36' \
  -H 'x-requested-with: XMLHttpRequest' \
  --data-raw 'url=https%3A%2F%2Fs15.ytcontent.com%2Fv3%2FvideoProcess%2Fc_my5B15ENU%2F1762689151701710%2F720p'

this curl will return res like 

{
    "api": {
        "processId": 938769,
        "percent": "19%",
        "estimatedFileSize": "92.81 MB",
        "fileName": "YTDown.com_YouTube_Romantic-Kishore-Kumar-Hits-Aap-Ki-Ankho_Media_c_my5B15ENU_002_720p.mp4",
        "fileSize": 97313360,
        "fileUrl": "In Processing..."
    }
}


refetch it , it will give the process percentage 

{
    "api": {
        "processId": 938769,
        "percent": "44%",
        "estimatedFileSize": "92.81 MB",
        "fileName": "YTDown.com_YouTube_Romantic-Kishore-Kumar-Hits-Aap-Ki-Ankho_Media_c_my5B15ENU_002_720p.mp4",
        "fileSize": 97313360,
        "fileUrl": "In Processing..."
    }
}


finally grab the direct download link using fileUrl
from the reponse when  "percent": "Completed",
{
    "api": {
        "processId": 938769,
        "percent": "Completed",
        "estimatedFileSize": "93.52 MB",
        "fileName": "YTDown.com_YouTube_Romantic-Kishore-Kumar-Hits-Aap-Ki-Ankho_Media_c_my5B15ENU_002_720p.mp4",
        "fileSize": "93.52 MB",
        "fileUrl": "https:\/\/s15.ytcontent.com\/v3\/d\/video\/c_my5B15ENU\/1762689151701710\/YTDown.com_YouTube_Romantic-Kishore-Kumar-Hits-Aap-Ki-Ankho_Media_c_my5B15ENU_002_720p.mp4?token=176699587366200eea8ec825e99395047132f25632"
    }
}

this is how you got the api download a video/audio file from youtube
