# Deprecated YouTube Downloader API (ytdown.to)

This documentation covers the previous API implementation that proxied requests to `ytdown.to`.

## Overview

**Base URL**: `https://ytdown.to/proxy.php`
**Method**: `POST`
**Content-Type**: `application/x-www-form-urlencoded; charset=UTF-8`

## 1. Fetch Video Information

### Request

**Payload:**
```x-www-form-urlencoded
url={YOUTUBE_VIDEO_URL}
```

**Required Headers:**
- `Origin`: `https://ytdown.to`
- `Referer`: `https://ytdown.to/en2/`
- `X-Requested-With`: `XMLHttpRequest`

### Response

The API returns a JSON object. The core data is wrapped in an `api` object.

```json
{
  "api": {
    "id": "video_id_hash",
    "title": "Video Title",
    "imagePreviewUrl": "https://thumbnail.url/...",
    "mediaItems": [
      {
        "type": "Video", // or "Audio"
        "mediaQuality": "1080p",
        "mediaFileSize": "12.5 MB",
        "mediaUrl": "https://ytdown.to/download/...", // Intermediate URL for Step 2
        "mediaExtension": "mp4"
        // ... other fields
      },
      // ... more items
    ]
  }
}
```

## 2. Generate Download Link (Step 2)

The `mediaUrl` from the first response is not a direct download link. It must be sent back to the API to initiate the conversion/link generation process.

### Request

**Payload:**
```x-www-form-urlencoded
url={MEDIA_URL_FROM_STEP_1}
```

**Required Headers:** Same as above.

### Response

The API returns a status object. You may need to poll this endpoint until `percent` is "Completed".

```json
{
  "api": {
    "percent": "Completed", // or "0%", "15%", etc.
    "fileUrl": "https://googlevideo.com/...", // The final direct download link
    "status": "success" // or "processing"
  }
}
```

### Logic Flow

1.  **POST** video URL to get `mediaItems`.
2.  User selects a format -> Get specific `mediaUrl`.
3.  **POST** `mediaUrl` to endpoint.
4.  Check `api.percent` and `api.fileUrl`.
    *   If `fileUrl` is `"In Processing..."` or `percent` != `"Completed"`, wait and retry.
    *   If `percent` == `"Completed"`, use `fileUrl` to download.
