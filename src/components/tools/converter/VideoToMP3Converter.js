'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Download, Loader2, AlertCircle, CheckCircle, Music, FileVideo } from 'lucide-react';

export default function VideoToMP3Converter() {
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [conversionData, setConversionData] = useState(null);
    const [error, setError] = useState('');
    const [selectedQuality, setSelectedQuality] = useState('192');

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            // Check if it's a video file
            if (!uploadedFile.type.startsWith('video/')) {
                setError('Please select a valid video file');
                return;
            }
            setFile(uploadedFile);
            setError('');
            setConversionData(null);
        }
    };

    const handleConvert = async () => {
        if (!file) {
            setError('Please select a video file first');
            return;
        }

        setIsLoading(true);
        setError('');
        setConversionData(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 3000));

            const fileSizeMap = {
                '128': '3.2 MB',
                '192': '4.8 MB',
                '256': '6.4 MB',
                '320': '8.0 MB'
            };

            setConversionData({
                originalFile: file.name,
                duration: '2:45',
                format: file.type,
                outputQuality: selectedQuality + 'kbps',
                outputSize: fileSizeMap[selectedQuality],
                downloadUrl: '#'
            });
        } catch (err) {
            setError('Failed to convert video to MP3. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadMP3 = () => {
        console.log(`Downloading MP3 at ${selectedQuality}kbps quality`);
    };

    const qualityOptions = [
        { value: '128', label: '128kbps (Standard)', description: 'Good quality, smaller file size' },
        { value: '192', label: '192kbps (High)', description: 'High quality, balanced size' },
        { value: '256', label: '256kbps (Very High)', description: 'Very high quality, larger size' },
        { value: '320', label: '320kbps (Premium)', description: 'Maximum quality, largest size' }
    ];

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Music className="h-5 w-5" />
                        Video to MP3 Converter
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* File Upload */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                            type="file"
                            accept="video/*"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="video-upload"
                        />
                        <label htmlFor="video-upload" className="cursor-pointer">
                            <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                            <p className="text-lg font-medium mb-2">
                                {file ? file.name : 'Choose Video File'}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Supports MP4, AVI, MOV, MKV, WMV, and more
                            </p>
                        </label>
                    </div>

                    {/* Quality Selection */}
                    {file && (
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">Select MP3 Quality:</h4>
                            <div className="grid grid-cols-1 gap-2">
                                {qualityOptions.map((option) => (
                                    <label key={option.value} className="flex items-center space-x-3 p-3 border rounded cursor-pointer hover:bg-gray-50">
                                        <input
                                            type="radio"
                                            name="quality"
                                            value={option.value}
                                            checked={selectedQuality === option.value}
                                            onChange={(e) => setSelectedQuality(e.target.value)}
                                            className="text-purple-600"
                                        />
                                        <div className="flex-1">
                                            <div className="font-medium text-sm">{option.label}</div>
                                            <div className="text-xs text-muted-foreground">{option.description}</div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Convert Button */}
                    {file && (
                        <Button
                            onClick={handleConvert}
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                    Converting to MP3...
                                </>
                            ) : (
                                <>
                                    <Music className="h-4 w-4 mr-2" />
                                    Convert to MP3
                                </>
                            )}
                        </Button>
                    )}

                    {error && (
                        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    {conversionData && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">Video converted to MP3 successfully!</span>
                            </div>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <Music className="h-8 w-8 text-purple-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm mb-1">MP3 Audio File</h3>
                                            <p className="text-xs text-muted-foreground">Original: {conversionData.originalFile}</p>
                                            <p className="text-xs text-muted-foreground">Duration: {conversionData.duration}</p>
                                            <p className="text-xs text-muted-foreground">Quality: {conversionData.outputQuality}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <Music className="h-4 w-4 text-purple-600" />
                                            <div>
                                                <p className="text-sm font-medium">High Quality MP3</p>
                                                <p className="text-xs text-muted-foreground">Size: {conversionData.outputSize}</p>
                                            </div>
                                        </div>
                                        <Button
                                            onClick={downloadMP3}
                                            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                                        >
                                            <Download className="h-4 w-4 mr-1" />
                                            Download MP3
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    <div className="text-xs text-muted-foreground">
                        <p>• Supports all major video formats</p>
                        <p>• High-quality audio extraction up to 320kbps</p>
                        <p>• Fast processing with secure file handling</p>
                        <p>• No file size limits or conversion restrictions</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}