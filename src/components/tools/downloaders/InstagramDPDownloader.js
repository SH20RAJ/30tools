'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, User, Loader2, AlertCircle, CheckCircle, Image } from 'lucide-react';

export default function InstagramDPDownloader() {
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState('');

    const handleGetProfile = async () => {
        if (!username.trim()) {
            setError('Please enter an Instagram username');
            return;
        }

        if (username.includes('@')) {
            setUsername(username.replace('@', ''));
        }

        setIsLoading(true);
        setError('');
        setProfileData(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            setProfileData({
                username: username,
                fullName: 'User Full Name',
                profilePicUrl: '/placeholder-profile-pic.jpg',
                isPrivate: false,
                followers: '1.2K',
                following: '456',
                posts: '89',
                bio: 'Sample bio text here...',
                isVerified: false,
                downloadSizes: [
                    { quality: 'Full Resolution', size: '1.8 MB', url: '#' },
                    { quality: 'High Quality', size: '850 KB', url: '#' },
                    { quality: 'Medium Quality', size: '320 KB', url: '#' }
                ]
            });
        } catch (err) {
            setError('Failed to load profile picture. Please check the username and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadProfilePic = (option) => {
        console.log(`Downloading profile picture in ${option.quality}`);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Image className="h-5 w-5" />
                        Instagram DP Downloader
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-2">
                        <Input
                            type="text"
                            placeholder="Enter Instagram username (without @)..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="flex-1"
                        />
                        <Button
                            onClick={handleGetProfile}
                            disabled={isLoading}
                            className=""
                        >
                            {isLoading ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <User className="h-4 w-4" />
                            )}
                            {isLoading ? 'Loading...' : 'Get DP'}
                        </Button>
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50 rounded-lg text-destructive">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    {profileData && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">Profile picture loaded successfully!</span>
                            </div>

                            <Card>
                                <CardContent className="p-4">
                                    {/* Profile Info */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="relative">
                                            <img
                                                src={profileData.profilePicUrl}
                                                alt="Profile Picture"
                                                className="w-24 h-24 rounded-full object-cover border-2 border-border"
                                            />
                                            {profileData.isVerified && (
                                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-muted/500 rounded-full flex items-center justify-center">
                                                    <CheckCircle className="h-4 w-4 text-white" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-semibold">@{profileData.username}</h3>
                                                {profileData.isPrivate && (
                                                    <span className="text-xs bg-gray-100 text-muted-foreground px-2 py-1 rounded">
                                                        Private
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-2">{profileData.fullName}</p>
                                            <div className="flex gap-4 text-xs text-muted-foreground mb-2">
                                                <span><strong>{profileData.posts}</strong> posts</span>
                                                <span><strong>{profileData.followers}</strong> followers</span>
                                                <span><strong>{profileData.following}</strong> following</span>
                                            </div>
                                            {profileData.bio && (
                                                <p className="text-xs text-muted-foreground">{profileData.bio}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Download Options */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium">Download Profile Picture:</h4>
                                        {profileData.downloadSizes.map((option, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 border rounded">
                                                <div>
                                                    <span className="text-sm font-medium">{option.quality}</span>
                                                    <span className="text-xs text-muted-foreground ml-2">({option.size})</span>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    onClick={() => downloadProfilePic(option)}
                                                    className=""
                                                >
                                                    <Download className="h-3 w-3 mr-1" />
                                                    Download
                                                </Button>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Preview */}
                                    <div className="mt-4 p-3 bg-gray-50 rounded">
                                        <p className="text-xs text-muted-foreground mb-2">Full Size Preview:</p>
                                        <img
                                            src={profileData.profilePicUrl}
                                            alt="Full Size Preview"
                                            className="w-full max-w-xs mx-auto rounded-lg border"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    <div className="text-xs text-muted-foreground">
                        <p>• Download Instagram profile pictures in full resolution</p>
                        <p>• Anonymous access - no notifications sent</p>
                        <p>• Works with public accounts only</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}