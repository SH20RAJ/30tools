import { NextResponse } from "next/server";

const INDEXNOW_KEY = "634a2c77198a45429967eb9dc1252278";
const SITE_URL = "https://30tools.com";

// All downloader URLs
const DOWNLOADER_URLS = [
	"akillitv-video-downloader",
	"bandcamp-video-downloader",
	"bilibili-video-downloader",
	"bitchute-video-downloader",
	"blogger-video-downloader",
	"blutv-video-downloader",
	"buzzfeed-video-downloader",
	"capcut-video-downloader",
	"chingari-video-downloader",
	"dailymotion-video-downloader",
	"douyin-video-downloader",
	"espn-video-downloader",
	"facebook-story-downloader",
	"facebook-video-downloader",
	"febspot-video-downloader",
	"flickr-video-downloader",
	"gaana-video-downloader",
	"ifunny-video-downloader",
	"imdb-video-downloader",
	"imgur-video-downloader",
	"instagram-downloader",
	"instagram-image-downloader",
	"instagram-reel-downloader",
	"instagram-story-downloader",
	"instagram-videos-downloader",
	"izlesene-video-downloader",
	"kickstarter-video-downloader",
	"kwai-video-downloader",
	"likee-video-downloader",
	"linkedin-video-downloader",
	"m3u8-downloader",
	"mashable-video-downloader",
	"mixcloud-video-downloader",
	"mxtakatak-video-downloader",
	"ninegag-video-downloader",
	"odnoklassniki-video-downloader",
	"online-video-downloader",
	"periscope-video-downloader",
	"pinterest-gif-downloader",
	"pinterest-image-downloader",
	"pinterest-video-downloader",
	"puhutv-video-downloader",
	"reddit-downloader",
	"reddit-video-downloader",
	"rumble-video-downloader",
	"sharechat-video-downloader",
	"snapchat-video-downloader",
	"soundcloud-video-downloader",
	"streamable-video-downloader",
	"ted-video-downloader",
	"telegram-video-downloader",
	"threads-video-downloader",
	"tumblr-video-downloader",
	"twitch-video-downloader",
	"vkontakte-video-downloader",
	"youtube-thumbnail-downloader",
	"all-downloaders",
];

// Key static pages
const STATIC_URLS = [
	"",
	"search",
	"about",
	"contact",
	"help",
	"privacy",
	"terms",
	"blog",
	"api-docs",
];

export async function POST(_request) {
	try {
		const allUrls = [
			...STATIC_URLS.map((slug) => `${SITE_URL}/${slug}`),
			...DOWNLOADER_URLS.map((slug) => `${SITE_URL}/${slug}`),
		];

		// Submit to Bing IndexNow
		const bingResponse = await fetch("https://api.indexnow.org/indexnow", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				host: "30tools.com",
				key: INDEXNOW_KEY,
				keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
				urlList: allUrls.slice(0, 10000), // IndexNow supports up to 10K URLs per batch
			}),
		});

		// Submit to Yandex IndexNow
		const yandexResponse = await fetch("https://yandex.com/indexnow", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				host: "30tools.com",
				key: INDEXNOW_KEY,
				keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
				urlList: allUrls.slice(0, 10000),
			}),
		});

		// Submit to Naver IndexNow
		const naverResponse = await fetch(
			"https://searchadvisor.naver.com/indexnow",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					host: "30tools.com",
					key: INDEXNOW_KEY,
					keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
					urlList: allUrls.slice(0, 10000),
				}),
			},
		);

		return NextResponse.json({
			success: true,
			urlsSubmitted: allUrls.length,
			bing: { status: bingResponse.status, ok: bingResponse.ok },
			yandex: { status: yandexResponse.status, ok: yandexResponse.ok },
			naver: { status: naverResponse.status, ok: naverResponse.ok },
		});
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 },
		);
	}
}

export async function GET() {
	return NextResponse.json({
		service: "IndexNow API",
		key: INDEXNOW_KEY,
		instructions:
			"POST to this endpoint to submit all URLs to Bing + Yandex + Naver for instant indexing.",
		endpoints: [
			"https://api.indexnow.org/indexnow (Bing, DuckDuckBot, Yandex)",
			"https://yandex.com/indexnow",
			"https://searchadvisor.naver.com/indexnow",
		],
	});
}
