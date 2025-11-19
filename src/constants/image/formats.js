// Supported image formats
export const SUPPORTED_FORMATS = {
  INPUT: [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/bmp",
    "image/gif",
    "image/tiff",
  ],
  OUTPUT: ["image/jpeg", "image/png", "image/webp"],
};

export const FORMAT_EXTENSIONS = {
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/bmp": ".bmp",
  "image/gif": ".gif",
  "image/tiff": ".tiff",
};

export const FORMAT_INFO = {
  JPEG: {
    name: "JPEG",
    extension: ".jpg",
    description: "Best for photos with many colors",
    compressible: true,
    supportsTransparency: false,
  },
  PNG: {
    name: "PNG",
    extension: ".png",
    description: "Best for images with transparency",
    compressible: true,
    supportsTransparency: true,
  },
  WEBP: {
    name: "WebP",
    extension: ".webp",
    description: "Modern format with excellent compression",
    compressible: true,
    supportsTransparency: true,
  },
};
