// Image compression constants
export const COMPRESSION_QUALITY = {
  HIGH: 90,
  MEDIUM: 80,
  LOW: 60,
  AGGRESSIVE: 40
};

export const COMPRESSION_PRESETS = {
  WEB_OPTIMIZED: {
    quality: 85,
    name: "Web Optimized",
    description: "Perfect balance of quality and file size for websites"
  },
  SOCIAL_MEDIA: {
    quality: 75,
    name: "Social Media",
    description: "Optimized for Instagram, Facebook, Twitter posts"
  },
  EMAIL_FRIENDLY: {
    quality: 65,
    name: "Email Friendly",
    description: "Small file sizes for email attachments"
  },
  MAXIMUM_COMPRESSION: {
    quality: 45,
    name: "Maximum Compression",
    description: "Smallest file size possible"
  }
};

export const COMPRESSION_LIMITS = {
  MAX_FILE_SIZE: 50 * 1024 * 1024, // 50MB
  MAX_FILES_BATCH: 20,
  MAX_DIMENSION: 10000
};

export const COMPRESSION_MESSAGES = {
  SUCCESS: "Image compressed successfully!",
  ERROR: "Failed to compress image. Please try again.",
  PROCESSING: "Compressing your image...",
  BATCH_PROCESSING: "Processing images..."
};
