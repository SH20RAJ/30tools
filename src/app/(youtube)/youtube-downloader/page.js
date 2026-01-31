import YouTubeDownloader from '@/components/tools/youtube/YouTubeDownloader';
import ScrollToTopButton from '@/components/tools/youtube/ScrollToTopButton';
import RelatedTools from '@/components/shared/RelatedTools';

export const metadata = {
  title: "Youtube Downloader - Free Online Tool | Professional Results",
  description: "Download YouTube videos in HD, 1080p, 4K quality for free. Fast online YouTube to MP4 & MP3 converter. No software or registration needed. Safe & Secure.",
  keywords: [
    "youtube downloader",
    "youtube video downloader",
    "youtube download",
    "youtube converter",
    "video downloader",
    "download youtube",
    "descargar videos de youtube",
    "savefrom.net",
    "savefrom",
    "download video youtube",
    "download youtube videos",
    "save from net",
    "youtube video download",
    "descargar videos youtube",
    "yt video downloader",
    "yt downloader",
    "download youtube video",
    "youtube videos download",
    "youtube downloader free",
    "descargar video de youtube",
    "savefrom youtube",
    "youtube video downloader online",
    "save from youtube",
    "savefrom.net downloader",
    "youtube downloader online",
    "ssyoutube",
    "download from youtube",
    "free youtube downloader",
    "descargar videos de youtube gratis",
    "download video",
    "how to download youtube videos",
    "youtube downloader free download",
    "youtube downloader for pc",
    "descargar video youtube",
    "download video from youtube",
    "youtube download video",
    "video downloader youtube",
    "free video downloader",
    "free youtube video downloader",
    "yt download",
    "video downloader free",
    "video download",
    "youtube download free",
    "youtube downloader video",
    "video downloader for pc",
    "ytdownloader",
    "youtube videos downloader",
    "downloader youtube",
    "online youtube downloader",
    "yt video download",
    "download youtube videos free",
    "youtube free download",
    "download yt video",
    "ss youtube",
    "youtube video download online",
    "download youtube videos online",
    "youtube free downloader",
    "online youtube video downloader",
    "youtube online downloader",
    "youtube downloader free online",
    "download youtube video free",
    "youtube link downloader",
    "download youtube video online",
    "video downloader app",
    "youtube video downloader for pc",
    "free download youtube",
    "you tube downloader",
    "youtube video download free",
    "youtube video downloader free download",
    "ssyoutube for pc",
    "youtube video downloader online free",
    "publer video downloader",
    "youtube download for pc free",
    "save youtube video",
    "ssyoutube download",
    "downloader youtube video",
    "ss video downloader",
    "free youtube downloader online",
    "youtube downloader app",
    "free youtube download",
    "download videos from youtube",
    "youtube downloader online free",
    "video youtube downloader",
    "sssyoutube",
    "free downloading videos from youtube",
    "youtube video free download",
    "youtube downloader for pc free",
    "download video from youtube free",
    "yt video downloader online",
    "download youtube free",
    "youtube downloads",
    "downloader video youtube",
    "free online youtube downloader",
    "youtube video herunterladen",
    "download youtube videos for free",
    "you tube video downloader",
    "how to download youtube videos for free",
    "youtube free video downloader",
    "youtube video downloader free online",
    "free download youtube video",
    "you tube video download",
    "download from youtube free",
    "best youtube downloader",
    "download video youtube free",
    "yt video downloader free",
    "video download youtube",
    "free download youtube videos",
    "free video downloader youtube",
    "free youtube downloader for computer",
    "yt downloader free",
    "youtube save",
    "online youtube video downloader free",
    "video downloader free for youtube",
    "yt youtube downloader",
    "ssyt downloader",
    "free downloader youtube",
    "ytdownloader free",
    "best youtube video downloader",
    "turboscribe youtube video downloader free"
  ].join(", "),
  openGraph: {
    title: "YouTube Video Downloader | Free & Fast HD Download",
    description: "Download YouTube videos and shorts in 1080p, 4K, and 8K. Convert to MP4 or MP3 instantly. No registration, no ads, 100% free.",
    url: "https://30tools.com/youtube-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/youtube-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Free YouTube Video Downloader"
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best YouTube Video Downloader 2024",
    description: "Save YouTube videos in seconds. HD, 4K support. Mp3 conversion. Try it now for free!",
    images: ["/og-images/youtube-downloader.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/youtube-downloader"
  },
};

const KEYWORD_INSIGHTS = [
  { keyword: "turboscribe youtube video downloader free", trends: [44,89,92,46,108,27,66,40,70,58], impressions: 640 },
  { keyword: "best youtube video downloader", trends: [86,75,76,74,81,69,64,70,60,69], impressions: 724 },
  { keyword: "ytdownloader free", trends: [72,67,80,72,127,81,75,70,70,72], impressions: 786 },
  { keyword: "free downloader youtube", trends: [129,106,111,90,68,53,87,57,69,83], impressions: 853 },
  { keyword: "ssyt downloader", trends: [72,99,95,64,97,94,90,118,128,122], impressions: 979 },
  { keyword: "yt youtube downloader", trends: [86,67,59,69,68,84,79,79,148,282], impressions: 1021 },
  { keyword: "video downloader free for youtube", trends: [84,63,75,74,116,173,179,85,155,148], impressions: 1152 },
  { keyword: "youtube download videos", trends: [112,137,82,136,104,83,93,145,144,138], impressions: 1174 },
  { keyword: "online youtube video downloader free", trends: [126,133,90,121,150,144,150,110,124,154], impressions: 1302 },
  { keyword: "youtube save", trends: [154,86,119,118,132,126,162,135,142,157], impressions: 1331 },
  { keyword: "yt downloader free", trends: [143,145,133,120,200,127,122,94,139,113], impressions: 1336 },
  { keyword: "free youtube downloader for computer", trends: [155,124,139,159,95,154,264,183,163,181], impressions: 1617 },
  { keyword: "free video downloader youtube", trends: [190,144,186,152,223,157,154,135,204,204], impressions: 1749 },
  { keyword: "free download youtube videos", trends: [220,189,191,199,237,148,155,146,136,159], impressions: 1780 },
  { keyword: "video download youtube", trends: [185,169,151,156,203,221,171,205,174,156], impressions: 1791 },
  { keyword: "yt video downloader free", trends: [138,174,152,155,184,154,159,185,255,241], impressions: 1797 },
  { keyword: "download video youtube free", trends: [169,160,154,211,274,190,193,152,163,180], impressions: 1846 },
  { keyword: "best youtube downloader", trends: [253,217,168,171,195,185,193,162,161,142], impressions: 1847 },
  { keyword: "download from youtube free", trends: [201,171,206,195,244,158,175,155,204,179], impressions: 1888 },
  { keyword: "you tube video download", trends: [166,201,165,194,216,195,216,187,244,181], impressions: 1965 },
  { keyword: "free download youtube video", trends: [189,195,208,216,248,206,196,170,162,198], impressions: 1988 },
  { keyword: "youtube video downloader free online", trends: [262,263,168,201,201,191,195,200,272,219], impressions: 2172 },
  { keyword: "sss youtube", trends: [226,192,198,194,233,254,217,243,231,250], impressions: 2238 },
  { keyword: "youtube free video downloader", trends: [247,202,226,297,179,173,243,228,274,210], impressions: 2279 },
  { keyword: "how to download youtube videos for free", trends: [288,292,263,232,241,297,260,221,279,229], impressions: 2602 },
  { keyword: "you tube video downloader", trends: [215,310,264,283,335,244,253,224,211,267], impressions: 2606 },
  { keyword: "download youtube videos for free", trends: [281,251,233,279,323,211,259,237,270,275], impressions: 2619 },
  { keyword: "youtube video herunterladen", trends: [284,279,231,278,295,280,230,207,289,297], impressions: 2670 },
  { keyword: "free online youtube downloader", trends: [317,273,221,227,273,305,362,197,250,258], impressions: 2683 },
  { keyword: "downloader video youtube", trends: [349,345,300,289,259,265,257,187,238,217], impressions: 2706 },
  { keyword: "youtube downloads", trends: [225,294,267,268,298,282,301,275,244,288], impressions: 2742 },
  { keyword: "download youtube free", trends: [261,230,247,253,326,316,326,239,297,259], impressions: 2754 },
  { keyword: "yt video downloader online", trends: [337,290,325,236,286,259,206,268,309,264], impressions: 2780 },
  { keyword: "download video from youtube free", trends: [343,386,319,364,391,256,238,168,197,200], impressions: 2862 },
  { keyword: "youtube downloader for pc free", trends: [209,197,192,163,232,309,286,386,532,379], impressions: 2885 },
  { keyword: "youtube video free download", trends: [291,282,255,321,312,234,261,299,327,307], impressions: 2889 },
  { keyword: "free downloading videos from youtube", trends: [275,288,232,307,389,362,327,283,424,477], impressions: 3364 },
  { keyword: "sssyoutube", trends: [338,430,362,375,396,328,277,298,301,332], impressions: 3437 },
  { keyword: "video youtube downloader", trends: [384,388,383,314,352,327,330,329,349,325], impressions: 3481 },
  { keyword: "youtube downloader online free", trends: [420,403,389,378,380,370,339,246,403,331], impressions: 3659 },
  { keyword: "download videos from youtube", trends: [399,383,402,414,476,378,352,280,377,375], impressions: 3836 },
  { keyword: "free youtube download", trends: [518,402,403,445,420,390,395,309,391,309], impressions: 3982 },
  { keyword: "youtube downloader app", trends: [352,316,304,314,300,452,400,474,571,532], impressions: 4015 },
  { keyword: "free youtube downloader online", trends: [467,404,377,407,560,445,417,341,474,428], impressions: 4320 },
  { keyword: "ss video downloader", trends: [412,503,530,523,458,435,412,313,357,384], impressions: 4327 },
  { keyword: "downloader youtube video", trends: [488,511,503,557,519,452,422,306,300,355], impressions: 4413 },
  { keyword: "ssyoutube download", trends: [550,365,340,373,344,373,298,258,672,888], impressions: 4461 },
  { keyword: "save youtube video", trends: [444,431,443,449,540,469,484,388,392,427], impressions: 4467 },
  { keyword: "youtube download for pc free", trends: [660,635,635,508,328,273,295,341,415,439], impressions: 4529 },
  { keyword: "youtube videos download", trends: [493,457,492,447,511,366,450,463,473,380], impressions: 4532 },
  { keyword: "publer video downloader", trends: [282,250,238,237,239,404,411,798,897,973], impressions: 4729 },
  { keyword: "youtube video downloader online free", trends: [503,510,453,556,668,487,500,570,576,595], impressions: 5418 },
  { keyword: "ssyoutube for pc", trends: [393,481,634,696,634,543,629,532,563,509], impressions: 5614 },
  { keyword: "youtube video downloader free download", trends: [778,917,765,700,869,379,331,284,344,320], impressions: 5687 },
  { keyword: "youtube video download free", trends: [557,623,578,572,566,539,554,631,561,539], impressions: 5720 },
  { keyword: "you tube downloader", trends: [643,568,588,651,636,554,653,424,493,520], impressions: 5730 },
  { keyword: "youtubedownloader", trends: [594,579,632,604,663,610,650,429,487,559], impressions: 5807 },
  { keyword: "free download youtube", trends: [632,654,621,658,621,654,558,506,481,450], impressions: 5835 },
  { keyword: "youtube video downloader for pc", trends: [661,616,643,634,643,574,561,503,540,539], impressions: 5914 },
  { keyword: "video downloader app", trends: [518,498,492,518,502,647,737,603,668,733], impressions: 5916 },
  { keyword: "download youtube video online", trends: [641,672,578,596,662,555,529,565,599,566], impressions: 5963 },
  { keyword: "youtube link downloader", trends: [560,560,519,482,612,600,549,686,756,723], impressions: 6047 },
  { keyword: "download youtube video free", trends: [792,712,706,667,679,516,558,499,538,531], impressions: 6198 },
  { keyword: "youtube downloader free online", trends: [554,488,498,460,552,632,759,617,834,897], impressions: 6291 },
  { keyword: "youtube online downloader", trends: [823,725,678,666,696,684,675,521,599,669], impressions: 6736 },
  { keyword: "online youtube video downloader", trends: [730,703,654,678,850,738,632,534,611,615], impressions: 6745 },
  { keyword: "youtube free downloader", trends: [845,719,791,736,869,915,706,478,662,638], impressions: 7359 },
  { keyword: "download youtube videos online", trends: [962,1027,929,858,758,600,679,650,794,646], impressions: 7903 },
  { keyword: "youtube video download online", trends: [723,698,711,779,802,770,795,831,980,874], impressions: 7963 },
  { keyword: "ss youtube", trends: [696,785,773,892,1044,854,810,655,758,708], impressions: 7975 },
  { keyword: "download yt video", trends: [866,863,887,830,849,807,866,777,858,856], impressions: 8459 },
  { keyword: "youtube free download", trends: [848,880,865,805,847,856,829,905,1022,989], impressions: 8846 },
  { keyword: "download youtube videos free", trends: [1032,1036,970,1120,1152,945,922,829,1042,977], impressions: 10025 },
  { keyword: "yt video download", trends: [967,1028,996,1023,1159,999,1010,1133,1071,1012], impressions: 10398 },
  { keyword: "online youtube downloader", trends: [1191,1095,1078,1096,1043,1133,1043,899,989,1092], impressions: 10659 },
  { keyword: "downloader youtube", trends: [1274,1086,1153,1207,1230,1171,1184,867,906,1003], impressions: 11081 },
  { keyword: "youtube videos downloader", trends: [1148,1056,1101,1144,1180,1160,1154,1192,1218,1155], impressions: 11508 },
  { keyword: "ytdownloader", trends: [1167,1003,1071,1109,1296,1127,1123,1157,1176,1319], impressions: 11548 },
  { keyword: "video downloader for pc", trends: [1328,1277,1203,1339,1199,1162,1148,1002,1054,1093], impressions: 11805 },
  { keyword: "youtube downloader video", trends: [1333,1238,1234,1245,1253,1183,1235,1045,1281,1119], impressions: 12166 },
  { keyword: "youtube download free", trends: [1177,1141,1204,1106,1354,1228,1210,1276,1287,1337], impressions: 12320 },
  { keyword: "video download", trends: [1445,1388,1353,1444,1394,1354,1383,1293,1303,1250], impressions: 13607 },
  { keyword: "video downloader free", trends: [1324,1140,1338,1431,1661,1552,1490,911,1409,1354], impressions: 13610 },
  { keyword: "yt download", trends: [1379,1340,1366,1398,1426,1336,1493,1562,1519,1515], impressions: 14334 },
  { keyword: "free youtube video downloader", trends: [1587,1624,1540,1668,1777,1579,1633,1375,1554,1552], impressions: 15889 },
  { keyword: "free video downloader", trends: [2058,1779,2039,1833,1859,1554,1528,1067,1331,1440], impressions: 16488 },
  { keyword: "video downloader youtube", trends: [1878,1573,1730,1583,1919,1679,1644,1338,1714,1667], impressions: 16725 },
  { keyword: "youtube download video", trends: [1880,1813,1778,1738,1798,1775,1666,1517,1564,1544], impressions: 17073 },
  { keyword: "download video from youtube", trends: [1961,1923,1994,2048,2099,2135,2021,1599,1942,1845], impressions: 19567 },
  { keyword: "descargar video youtube", trends: [2414,2420,2227,2266,2450,2271,2021,1346,1709,1809], impressions: 20933 },
  { keyword: "youtube downloader for pc", trends: [3101,2874,2829,2701,3146,1606,1718,1889,2064,1915], impressions: 23843 },
  { keyword: "youtube downloader free download", trends: [3037,2504,2795,2708,2501,2450,2252,1425,2320,2122], impressions: 24114 },
  { keyword: "how to download youtube videos", trends: [2859,2759,2590,2648,2602,2634,2604,2181,2609,2683], impressions: 26169 },
  { keyword: "download video", trends: [2869,2803,2596,2740,2854,2693,2671,2173,2562,2436], impressions: 26397 },
  { keyword: "descargar videos de youtube gratis", trends: [3382,3141,2860,2818,3437,3289,2856,1875,2333,2647], impressions: 28638 },
  { keyword: "free youtube downloader", trends: [3311,3060,3070,3016,3147,3063,3047,2118,2771,2640], impressions: 29243 },
  { keyword: "download from youtube", trends: [3271,3258,3150,3025,3266,3171,3212,2563,2657,2491], impressions: 30064 },
  { keyword: "ssyoutube", trends: [3103,3274,3303,3235,3404,2995,2869,2821,2970,2854], impressions: 30828 },
  { keyword: "youtube downloader online", trends: [4358,4221,4052,4128,3995,3551,3433,3145,3629,3237], impressions: 37749 },
  { keyword: "savefrom.net downloader", trends: [4462,3535,4029,4060,4946,4322,4255,2767,3855,3860], impressions: 40091 },
  { keyword: "save from youtube", trends: [4618,4358,5188,4652,4483,3784,3922,3038,3698,3935], impressions: 41676 },
  { keyword: "youtube video downloader online", trends: [4405,4498,4152,4406,4752,4073,4059,4079,4662,4276], impressions: 43362 },
  { keyword: "savefrom youtube", trends: [4865,4855,5111,5241,5241,4418,4028,3248,3563,3700], impressions: 44270 },
  { keyword: "descargar video de youtube", trends: [6078,5903,5450,5659,5868,4873,4698,3059,3432,3883], impressions: 48903 },
  { keyword: "youtube downloader free", trends: [4647,4104,3999,3952,4763,5171,5398,4705,6623,7219], impressions: 50581 },
  { keyword: "youtube视频下载", trends: [5972,5771,5668,5561,5792,6516,6895,5422,5714,6013], impressions: 59324 },
  { keyword: "download youtube video", trends: [7369,7234,7134,7228,7639,6954,6875,5735,6612,6699], impressions: 69479 },
  { keyword: "yt downloader", trends: [7811,7177,7088,7216,8215,7878,7490,6662,7042,7430], impressions: 74009 },
  { keyword: "yt video downloader", trends: [7822,8126,7746,7836,8741,8481,8279,8568,8919,8531], impressions: 83049 },
  { keyword: "descargar videos youtube", trends: [10012,9093,9668,9814,10604,10776,8964,5537,6712,7722], impressions: 88902 },
  { keyword: "youtube video download", trends: [8677,9096,8809,8905,9187,8650,8769,9276,9540,9359], impressions: 90268 },
  { keyword: "save from net", trends: [10152,9731,10489,10692,11032,9621,9988,7100,8848,9652], impressions: 97305 },
  { keyword: "download youtube videos", trends: [10969,10828,10428,10436,11226,10526,10474,8581,9722,9864], impressions: 103054 },
  { keyword: "download video youtube", trends: [12583,12048,12160,12597,12423,10657,10888,7992,9338,9880], impressions: 110566 },
  { keyword: "savefrom", trends: [14579,13802,14338,14321,14704,12325,12253,11064,11804,12271], impressions: 131461 },
  { keyword: "savefrom.net", trends: [14975,13414,13928,14375,15410,13797,13046,11620,12195,11742], impressions: 134502 },
  { keyword: "descargar videos de youtube", trends: [18129,17114,16239,16872,17094,15259,14004,9412,10999,12075], impressions: 147197 },
  { keyword: "download youtube", trends: [15521,14791,14648,14627,15611,15016,14850,13996,15195,15188], impressions: 149443 },
  { keyword: "video downloader", trends: [19924,18158,18730,18872,20416,19540,19558,16227,17578,17748], impressions: 186751 },
  { keyword: "youtube converter", trends: [22501,20973,21909,22198,24698,24339,23634,20132,20271,19274], impressions: 219929 },
  { keyword: "youtube download", trends: [32444,31504,32875,31485,32284,31597,30740,33311,34430,34046], impressions: 324716 },
  { keyword: "youtube video downloader", trends: [50034,49384,48422,49460,53397,50657,50079,47521,49081,49106], impressions: 497141 },
  { keyword: "youtube downloader", trends: [99456,93363,94566,95583,100152,99170,97429,89628,96637,93078], impressions: 959062 }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Free YouTube Video Downloader",
      "alternateName": "YouTube Downloader",
      "url": "https://30tools.com/youtube-downloader",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Download YouTube videos in 720p, 1080p, 4K",
        "Convert YouTube to MP3",
        "No registration required",
        "Unlimited downloads"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I download YouTube videos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1. Copy the URL of the YouTube video.\n2. Paste it into the search box above.\n3. Click 'Start', choose your format (MP4/MP3) and quality, then click Download."
          }
        },
        {
          "@type": "Question",
          "name": "Is this YouTube Downloader free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our tool is 100% free to use. You can download as many videos as you like without any cost or limitations."
          }
        },
        {
          "@type": "Question",
          "name": "Can I download YouTube Shorts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our downloader fully supports YouTube Shorts. Just paste the Shorts link and download it like any other video."
          }
        },
        {
          "@type": "Question",
          "name": "Is it safe to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, it is completely safe. We do not require any software installation, registration, or personal data. All downloads are processed directly in your browser."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Download a YouTube Video",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Copy URL",
          "text": "Go to YouTube, open the video you want to save, and copy its link from the address bar."
        },
        {
          "@type": "HowToStep",
          "name": "Paste Link",
          "text": "Paste the copied link into the input field on the 30tools YouTube Downloader page."
        },
        {
          "@type": "HowToStep",
          "name": "Download",
          "text": "Click the Start button, select your desired quality (e.g., 1080p) and format, and the download will begin instantly."
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://30tools.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "YouTube Tools",
          "item": "https://30tools.com/youtube-tools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "YouTube Downloader",
          "item": "https://30tools.com/youtube-downloader"
        }
      ]
    }
  ]
};

export default function YouTubeDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              YouTube Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download YouTube videos and audio in high definition quality for free. Our advanced YouTube downloader supports HD, Full HD, and 4K video downloads with lightning-fast speed. Convert YouTube videos to MP4 or extract high-quality MP3 audio files instantly without any software installation. Perfect for offline viewing, content creation, and educational purposes.
            </p>
            <p className="text-sm text-muted-foreground mb-4">Last Updated: January 2026</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality Downloads</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ MP4 & MP3 Support</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Registration Required</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Unlimited Downloads</span>
            </div>
          </div>

          <YouTubeDownloader />



          <div className="mt-16 space-y-16">

            {/* Features Grid */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Premium Features, Free for Everyone</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">⚡</div>
                  <h3 className="font-semibold text-lg mb-2">Ultra Fast Speed</h3>
                  <p className="text-sm text-muted-foreground">Download videos in seconds with our high-speed engines. No bandwidth limits or throttling.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">🎬</div>
                  <h3 className="font-semibold text-lg mb-2">4K & 8K Support</h3>
                  <p className="text-sm text-muted-foreground">Get the best quality possible. We support HD, FHD, 2K, 4K, and even 8K video resolutions.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">🎵</div>
                  <h3 className="font-semibold text-lg mb-2">Audio Extraction</h3>
                  <p className="text-sm text-muted-foreground">Convert video to MP3 easily. Extract high-fidelity audio tracks for music or podcasts.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">🔒</div>
                  <h3 className="font-semibold text-lg mb-2">100% Secure</h3>
                  <p className="text-sm text-muted-foreground">No malware, no trackers, no registration. Your privacy is our top priority.</p>
                </div>
              </div>
            </div>

            {/* Supported Platforms */}
            <div className="bg-muted/30 rounded-2xl p-8 border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Works on All Your Devices</h2>
                  <p className="text-muted-foreground mb-6">Whether you are using a smartphone, tablet, or computer, our tool adapts perfectly. Download YouTube videos on:</p>
                  <ul className="grid grid-cols-2 gap-3 text-sm">
                    <li className="flex items-center gap-2">✓ Windows PC & Laptop</li>
                    <li className="flex items-center gap-2">✓ macOS (Macbook, iMac)</li>
                    <li className="flex items-center gap-2">✓ iOS (iPhone, iPad)</li>
                    <li className="flex items-center gap-2">✓ Android Smartphones</li>
                    <li className="flex items-center gap-2">✓ Linux Distributions</li>
                    <li className="flex items-center gap-2">✓ Chrome, Safari, Firefox</li>
                  </ul>
                </div>
                <div className="relative h-48 bg-background rounded-xl border shadow-sm flex items-center justify-center overflow-hidden">
                  <span className="text-6xl opacity-20 font-bold select-none">Any Device</span>
                </div>
              </div>
            </div>

            {/* How to Guide with Schema-friendly structure */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">How to Download YouTube Videos</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                  <div className="relative bg-card p-8 rounded-lg border h-full text-center">
                    <span className="text-5xl font-black text-muted-foreground/10 absolute top-4 right-4">1</span>
                    <h3 className="text-xl font-bold mb-3">Copy Link</h3>
                    <p className="text-muted-foreground">Open the YouTube video you want to save and copy its URL from the browser address bar or share button.</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                  <div className="relative bg-card p-8 rounded-lg border h-full text-center">
                    <span className="text-5xl font-black text-muted-foreground/10 absolute top-4 right-4">2</span>
                    <h3 className="text-xl font-bold mb-3">Paste & Process</h3>
                    <p className="text-muted-foreground">Paste the link into the search box above. Our tool will automatically process the video and fetch formats.</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-green-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                  <div className="relative bg-card p-8 rounded-lg border h-full text-center">
                    <span className="text-5xl font-black text-muted-foreground/10 absolute top-4 right-4">3</span>
                    <h3 className="text-xl font-bold mb-3">Download</h3>
                    <p className="text-muted-foreground">Select your preferred quality (MP4 1080p, 4K, or MP3 audio) and click the download button.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded FAQ */}
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg mb-2">Is this tool free forever?</h3>
                  <p className="text-muted-foreground">Yes! 30tools YouTube Downloader is completely free. We do not charge for any downloads, quality options, or file conversions. You can use it as much as you want.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg mb-2">Can I download YouTube Shorts?</h3>
                  <p className="text-muted-foreground">Yes, our tool fully supports YouTube Shorts downloading. Simply paste the link to the Short, and we will extract the video in high quality for you.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg mb-2">Is it safe to download videos here?</h3>
                  <p className="text-muted-foreground">Absolutely. We do not require you to install any software or extensions, protecting you from malware. We also do not store any logs of what you download.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg mb-2">Where do the videos go after downloading?</h3>
                  <p className="text-muted-foreground">Videos are typically saved to your device's default "Downloads" folder. On mobile, they might appear in your Gallery or Files app depending on your settings.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-semibold text-lg mb-2">How to download 4K videos?</h3>
                  <p className="text-muted-foreground">If the original video was uploaded in 4K or 8K, our tool will provide those high-resolution options. Just look for the "2160p (4K)"  or "4320p (8K)" label in the download results.</p>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="space-y-8 mt-16">
              <h2 className="text-3xl font-bold text-center">More YouTube Tools</h2>
              <RelatedTools currentToolId="youtube-downloader" categorySlug="youtube" />
            </div>

            {/* Final CTA */}
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Ready to get started?</p>
              <ScrollToTopButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}