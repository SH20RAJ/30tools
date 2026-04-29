import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { url } = await req.json();

		if (!url) {
			return NextResponse.json({ error: "URL is required" }, { status: 400 });
		}

		const response = await fetch("https://api.vidssave.com/api/contentsite_api/media/parse", {
			method: "POST",
			headers: {
				accept: "*/*",
				"accept-language": "en-GB,en;q=0.8",
				"content-type": "application/x-www-form-urlencoded",
				origin: "https://vidssave.com",
				referer: "https://vidssave.com/",
				"user-agent":
					"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
			},
			body: new URLSearchParams({
				auth: "20250901majwlqo",
				domain: "api-ak.vidssave.com",
				origin: "source",
				link: url,
			}).toString(),
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error(`Vidssave API error:`, response.status, errorText);
			return NextResponse.json(
				{ error: `Upstream API error: ${response.statusText}` },
				{ status: response.status },
			);
		}

		const rawData = await response.json();
		console.log("RAW DATA:", JSON.stringify(rawData, null, 2));

		if (rawData.status !== 1 || !rawData.data) {
			return NextResponse.json(
				{ error: "Could not find video. Please check the URL and try again." },
				{ status: 404 },
			);
		}

		const video = Array.isArray(rawData.data) ? rawData.data[0] : rawData.data;

		if (!video) {
			return NextResponse.json(
				{ error: "Could not find video data." },
				{ status: 404 },
			);
		}

		const mediaGroups = video.media || video.medias || [];
		const flattenedMedias = [];

		mediaGroups.forEach((group) => {
			const resources = group.resources || [];
			resources.forEach((res) => {
				flattenedMedias.push({
					quality: res.quality || res.format_note || group.type || "Unknown",
					size: res.size ? `${(res.size / (1024 * 1024)).toFixed(1)} MB` : "Unknown",
					url: res.url || res.download_url || res.link,
					type:
						(res.format || "").toUpperCase().includes("MP3") ||
						(res.mime || "").includes("audio") ||
						group.type === "audio"
							? "audio"
							: "video",
				});
			});
		});

		// Transform to standard format expected by DownloaderEngine
		const transformedData = {
			source: "YouTube",
			title: video.title || "YouTube Video",
			thumbnail: video.thumbnail,
			duration: 0,
			author: video.user_item?.nickname || "Unknown",
			medias: flattenedMedias,
		};

		return NextResponse.json(transformedData);
	} catch (error) {
		console.error("Vidssave Proxy Error:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
