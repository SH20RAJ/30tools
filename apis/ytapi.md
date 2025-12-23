# YouTube Downloader API Documentation

This document explicitly details the API endpoint and parameters used within the `src/components/tools/youtube/YouTubeDownloader.jsx` component to fetch video metadata and download links.

## API Endpoint

**URL**: `https://ytdl.socialplug.io/api/video-info`

**Method**: `GET`

## Request Parameters

| Parameter | Type   | Required | Description                              |
| :-------- | :----- | :------- | :--------------------------------------- |
| `url`     | String | Yes      | The **encoded** full URL of the YouTube video. |

## Headers

The following headers are required for the request to be accepted by the endpoint:

| Header   | Value                     |
| :------- | :------------------------ |
| `origin` | `https://www.socialplug.io` |
| `accept` | `application/json, text/plain, */*` |

## Example Request (JavaScript)

```javascript
const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const encoded = encodeURIComponent(url);
const apiUrl = `https://ytdl.socialplug.io/api/video-info?url=${encoded}`;

fetch(apiUrl, {
  headers: {
    accept: "application/json, text/plain, */*",
    origin: "https://www.socialplug.io",
  },
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response Structure

The API returns a JSON object containing video metadata and arrays of available formats.

### Key Fields

- **title**: Video title.
- **image** / **thumbnail**: URL of the video thumbnail.
- **duration**: Duration string or seconds.
- **format_options**: Object containing format arrays.
  - **video**: Object containing video formats (e.g., `video.mp4` array).
    - `quality`: Quality label (e.g., "1080p").
    - `fileSize`: Size in bytes (string).
    - `url` / `src`: Direct download URL.
    - `hasAudio`: Boolean indicating if audio is included.
  - **audio**: Object containing audio formats (e.g., `audio.mp3` array).

## Notes

- The `url` parameter **must be URL-encoded**.
- The `origin` header is critical; omitting it may result in a 403 Forbidden response.
