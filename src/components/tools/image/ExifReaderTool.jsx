"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, MapPin, Calendar, Info, FileImage, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import EXIF from "exif-js";

export default function ExifReaderTool() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [exifData, setExifData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file) => {
    setLoading(true);
    const url = URL.createObjectURL(file);
    setImage(file);
    setPreviewUrl(url);
    setExifData(null);

    // Read EXIF data
    EXIF.getData(file, function () {
      const allTags = EXIF.getAllTags(this);

      // Format important tags
      const formattedData = {
        all: allTags,
        basic: {
          Make: allTags.Make,
          Model: allTags.Model,
          DateTime: allTags.DateTime,
          Software: allTags.Software,
        },
        camera: {
          ExposureTime: allTags.ExposureTime ? `1/${Math.round(1 / allTags.ExposureTime)}s` : null,
          FNumber: allTags.FNumber ? `f/${allTags.FNumber}` : null,
          ISOSpeedRatings: allTags.ISOSpeedRatings,
          FocalLength: allTags.FocalLength ? `${allTags.FocalLength}mm` : null,
          Flash: allTags.Flash,
          MeteringMode: allTags.MeteringMode,
          WhiteBalance: allTags.WhiteBalance,
        },
        gps: {
          Latitude: allTags.GPSLatitude,
          Longitude: allTags.GPSLongitude,
          Altitude: allTags.GPSAltitude,
        }
      };

      setExifData(formattedData);
      setLoading(false);

      if (Object.keys(allTags).length === 0) {
        toast.warning("No EXIF data found in this image.");
      } else {
        toast.success("EXIF data extracted successfully!");
      }
    });
  };

  const formatGPS = (coords, ref) => {
    if (!coords) return null;
    return `${coords[0]}° ${coords[1]}' ${coords[2]}" ${ref || ''}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {!image ? (
        <div
          className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-12 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Upload Image to Read EXIF</h2>
          <p className="text-muted-foreground mb-6">
            Supports JPG, TIFF, HEIC (converted). View camera settings, location, and more.
          </p>
          <Button size="lg">Select Image</Button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/jpeg,image/tiff,image/png"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Image Preview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-card border rounded-xl p-4 shadow-sm">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Filename</span>
                  <span className="font-medium truncate max-w-[200px]">{image.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-medium">{(image.size / 1024 / 1024).toFixed(2)} MB</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium">{image.type}</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => {
                  setImage(null);
                  setExifData(null);
                  setPreviewUrl(null);
                }}
              >
                Upload Another
              </Button>
            </div>
          </div>

          {/* EXIF Data */}
          <div className="lg:col-span-8 space-y-6">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : exifData && Object.keys(exifData.all).length > 0 ? (
              <div className="space-y-6">
                {/* Camera Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="w-5 h-5" />
                      Camera Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <DataPoint label="Make" value={exifData.basic.Make} />
                    <DataPoint label="Model" value={exifData.basic.Model} />
                    <DataPoint label="Exposure" value={exifData.camera.ExposureTime} />
                    <DataPoint label="Aperture" value={exifData.camera.FNumber} />
                    <DataPoint label="ISO" value={exifData.camera.ISOSpeedRatings} />
                    <DataPoint label="Focal Length" value={exifData.camera.FocalLength} />
                    <DataPoint label="Flash" value={exifData.camera.Flash} />
                    <DataPoint label="Software" value={exifData.basic.Software} />
                  </CardContent>
                </Card>

                {/* Date & Time */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Date & Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <DataPoint label="Original Date" value={exifData.basic.DateTime} />
                  </CardContent>
                </Card>

                {/* GPS */}
                {(exifData.gps.Latitude || exifData.gps.Longitude) && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Location Data
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <DataPoint label="Latitude" value={exifData.gps.Latitude} />
                      <DataPoint label="Longitude" value={exifData.gps.Longitude} />
                      <DataPoint label="Altitude" value={exifData.gps.Altitude} />
                      <div className="mt-4 pt-4 border-t">
                        <a
                          href={`https://www.google.com/maps?q=${exifData.gps.Latitude},${exifData.gps.Longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* All Tags (Collapsible or Scrollable) */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Raw Data
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono max-h-96 overflow-y-auto">
                      <pre>{JSON.stringify(exifData.all, null, 2)}</pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center py-12 bg-card border rounded-xl">
                <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">No EXIF Data Found</h3>
                <p className="text-muted-foreground">
                  This image doesn't appear to contain any metadata.
                  <br />
                  Try uploading an original photo from a camera or phone.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function DataPoint({ label, value }) {
  if (!value) return null;
  return (
    <div className="space-y-1">
      <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
      <p className="font-medium truncate" title={value.toString()}>{value.toString()}</p>
    </div>
  );
}
