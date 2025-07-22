'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { 
  SettingsIcon, 
  PaletteIcon,
  CodeIcon,
  ZapIcon,
  ShieldIcon,
  TrendingUpIcon
} from 'lucide-react';

export default function TeraboxAdvancedTools({ 
  advancedSettings, 
  onSettingsChange,
  selectedPlayer,
  selectedTheme 
}) {
  const [activeTab, setActiveTab] = useState('appearance');

  const handleSettingChange = (key, value) => {
    onSettingsChange({
      ...advancedSettings,
      [key]: value
    });
  };

  const handleNestedSettingChange = (category, key, value) => {
    onSettingsChange({
      ...advancedSettings,
      [category]: {
        ...advancedSettings[category],
        [key]: value
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <SettingsIcon className="h-5 w-5 mr-2" />
          Advanced Tools
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="appearance" className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <PaletteIcon className="h-4 w-4 mr-2" />
                Visual Customization
              </h4>

              {/* Custom Colors */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="primary-color"
                      type="color"
                      value={advancedSettings.appearance?.primaryColor || '#3b82f6'}
                      onChange={(e) => handleNestedSettingChange('appearance', 'primaryColor', e.target.value)}
                      className="w-16 h-10"
                    />
                    <Input
                      value={advancedSettings.appearance?.primaryColor || '#3b82f6'}
                      onChange={(e) => handleNestedSettingChange('appearance', 'primaryColor', e.target.value)}
                      placeholder="#3b82f6"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accent-color">Accent Color</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="accent-color"
                      type="color"
                      value={advancedSettings.appearance?.accentColor || '#10b981'}
                      onChange={(e) => handleNestedSettingChange('appearance', 'accentColor', e.target.value)}
                      className="w-16 h-10"
                    />
                    <Input
                      value={advancedSettings.appearance?.accentColor || '#10b981'}
                      onChange={(e) => handleNestedSettingChange('appearance', 'accentColor', e.target.value)}
                      placeholder="#10b981"
                    />
                  </div>
                </div>
              </div>

              {/* Border Radius */}
              <div className="space-y-2">
                <Label>Border Radius: {advancedSettings.appearance?.borderRadius || 8}px</Label>
                <Slider
                  value={[advancedSettings.appearance?.borderRadius || 8]}
                  onValueChange={(value) => handleNestedSettingChange('appearance', 'borderRadius', value[0])}
                  max={50}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Shadow */}
              <div className="space-y-2">
                <Label>Shadow Intensity: {advancedSettings.appearance?.shadowIntensity || 3}</Label>
                <Slider
                  value={[advancedSettings.appearance?.shadowIntensity || 3]}
                  onValueChange={(value) => handleNestedSettingChange('appearance', 'shadowIntensity', value[0])}
                  max={10}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Custom CSS */}
              <div className="space-y-2">
                <Label htmlFor="custom-css">Custom CSS</Label>
                <Textarea
                  id="custom-css"
                  placeholder="/* Add your custom CSS here */
.video-player {
  /* Custom styles */
}"
                  value={advancedSettings.appearance?.customCSS || ''}
                  onChange={(e) => handleNestedSettingChange('appearance', 'customCSS', e.target.value)}
                  rows={6}
                />
              </div>

              {/* Logo/Watermark */}
              <div className="space-y-4">
                <h5 className="font-medium">Branding</h5>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="logo-url">Logo URL</Label>
                    <Input
                      id="logo-url"
                      placeholder="https://example.com/logo.png"
                      value={advancedSettings.appearance?.logoUrl || ''}
                      onChange={(e) => handleNestedSettingChange('appearance', 'logoUrl', e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-logo">Show Logo</Label>
                    <Switch
                      id="show-logo"
                      checked={advancedSettings.appearance?.showLogo || false}
                      onCheckedChange={(checked) => handleNestedSettingChange('appearance', 'showLogo', checked)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="behavior" className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <ZapIcon className="h-4 w-4 mr-2" />
                Player Behavior
              </h4>

              {/* Playback Settings */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-quality">Auto Quality</Label>
                  <Switch
                    id="auto-quality"
                    checked={advancedSettings.behavior?.autoQuality || true}
                    onCheckedChange={(checked) => handleNestedSettingChange('behavior', 'autoQuality', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="remember-position">Remember Position</Label>
                  <Switch
                    id="remember-position"
                    checked={advancedSettings.behavior?.rememberPosition || false}
                    onCheckedChange={(checked) => handleNestedSettingChange('behavior', 'rememberPosition', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="keyboard-shortcuts">Keyboard Shortcuts</Label>
                  <Switch
                    id="keyboard-shortcuts"
                    checked={advancedSettings.behavior?.keyboardShortcuts || true}
                    onCheckedChange={(checked) => handleNestedSettingChange('behavior', 'keyboardShortcuts', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="click-to-play">Click to Play/Pause</Label>
                  <Switch
                    id="click-to-play"
                    checked={advancedSettings.behavior?.clickToPlay || true}
                    onCheckedChange={(checked) => handleNestedSettingChange('behavior', 'clickToPlay', checked)}
                  />
                </div>
              </div>

              {/* Volume Settings */}
              <div className="space-y-2">
                <Label>Default Volume: {advancedSettings.behavior?.defaultVolume || 80}%</Label>
                <Slider
                  value={[advancedSettings.behavior?.defaultVolume || 80]}
                  onValueChange={(value) => handleNestedSettingChange('behavior', 'defaultVolume', value[0])}
                  max={100}
                  min={0}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Playback Speed */}
              <div className="space-y-2">
                <Label>Default Playback Speed</Label>
                <Select 
                  value={String(advancedSettings.behavior?.defaultSpeed || 1)}
                  onValueChange={(value) => handleNestedSettingChange('behavior', 'defaultSpeed', parseFloat(value))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.5">0.5x</SelectItem>
                    <SelectItem value="0.75">0.75x</SelectItem>
                    <SelectItem value="1">1x (Normal)</SelectItem>
                    <SelectItem value="1.25">1.25x</SelectItem>
                    <SelectItem value="1.5">1.5x</SelectItem>
                    <SelectItem value="2">2x</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Seek Settings */}
              <div className="space-y-2">
                <Label>Seek Step: {advancedSettings.behavior?.seekStep || 10} seconds</Label>
                <Slider
                  value={[advancedSettings.behavior?.seekStep || 10]}
                  onValueChange={(value) => handleNestedSettingChange('behavior', 'seekStep', value[0])}
                  max={60}
                  min={5}
                  step={5}
                  className="w-full"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <TrendingUpIcon className="h-4 w-4 mr-2" />
                Performance Optimization
              </h4>

              {/* Preload Settings */}
              <div className="space-y-2">
                <Label>Preload Strategy</Label>
                <Select 
                  value={advancedSettings.performance?.preload || 'metadata'}
                  onValueChange={(value) => handleNestedSettingChange('performance', 'preload', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="metadata">Metadata Only</SelectItem>
                    <SelectItem value="auto">Auto (Full Video)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Buffer Settings */}
              <div className="space-y-2">
                <Label>Buffer Size: {advancedSettings.performance?.bufferSize || 30} seconds</Label>
                <Slider
                  value={[advancedSettings.performance?.bufferSize || 30]}
                  onValueChange={(value) => handleNestedSettingChange('performance', 'bufferSize', value[0])}
                  max={120}
                  min={10}
                  step={10}
                  className="w-full"
                />
              </div>

              {/* Quality Settings */}
              <div className="space-y-2">
                <Label>Preferred Quality</Label>
                <Select 
                  value={advancedSettings.performance?.preferredQuality || 'auto'}
                  onValueChange={(value) => handleNestedSettingChange('performance', 'preferredQuality', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto</SelectItem>
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="720p">720p</SelectItem>
                    <SelectItem value="480p">480p</SelectItem>
                    <SelectItem value="360p">360p</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Performance Toggles */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="hardware-acceleration">Hardware Acceleration</Label>
                  <Switch
                    id="hardware-acceleration"
                    checked={advancedSettings.performance?.hardwareAcceleration || true}
                    onCheckedChange={(checked) => handleNestedSettingChange('performance', 'hardwareAcceleration', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="lazy-loading">Lazy Loading</Label>
                  <Switch
                    id="lazy-loading"
                    checked={advancedSettings.performance?.lazyLoading || false}
                    onCheckedChange={(checked) => handleNestedSettingChange('performance', 'lazyLoading', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="adaptive-streaming">Adaptive Streaming</Label>
                  <Switch
                    id="adaptive-streaming"
                    checked={advancedSettings.performance?.adaptiveStreaming || true}
                    onCheckedChange={(checked) => handleNestedSettingChange('performance', 'adaptiveStreaming', checked)}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center">
                <ShieldIcon className="h-4 w-4 mr-2" />
                Security & Privacy
              </h4>

              {/* Domain Restrictions */}
              <div className="space-y-2">
                <Label htmlFor="allowed-domains">Allowed Domains (one per line)</Label>
                <Textarea
                  id="allowed-domains"
                  placeholder="example.com
*.mydomain.com
localhost"
                  value={advancedSettings.security?.allowedDomains || ''}
                  onChange={(e) => handleNestedSettingChange('security', 'allowedDomains', e.target.value)}
                  rows={4}
                />
              </div>

              {/* Security Toggles */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="disable-right-click">Disable Right Click</Label>
                  <Switch
                    id="disable-right-click"
                    checked={advancedSettings.security?.disableRightClick || false}
                    onCheckedChange={(checked) => handleNestedSettingChange('security', 'disableRightClick', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="disable-download">Disable Download</Label>
                  <Switch
                    id="disable-download"
                    checked={advancedSettings.security?.disableDownload || false}
                    onCheckedChange={(checked) => handleNestedSettingChange('security', 'disableDownload', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="require-https">Require HTTPS</Label>
                  <Switch
                    id="require-https"
                    checked={advancedSettings.security?.requireHttps || true}
                    onCheckedChange={(checked) => handleNestedSettingChange('security', 'requireHttps', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="analytics-tracking">Analytics Tracking</Label>
                  <Switch
                    id="analytics-tracking"
                    checked={advancedSettings.security?.analyticsTracking || false}
                    onCheckedChange={(checked) => handleNestedSettingChange('security', 'analyticsTracking', checked)}
                  />
                </div>
              </div>

              {/* Expiration Settings */}
              <div className="space-y-2">
                <Label>Link Expiration</Label>
                <Select 
                  value={advancedSettings.security?.linkExpiration || 'never'}
                  onValueChange={(value) => handleNestedSettingChange('security', 'linkExpiration', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="1hour">1 Hour</SelectItem>
                    <SelectItem value="24hours">24 Hours</SelectItem>
                    <SelectItem value="7days">7 Days</SelectItem>
                    <SelectItem value="30days">30 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Password Protection */}
              <div className="space-y-2">
                <Label htmlFor="password-protection">Password Protection</Label>
                <Input
                  id="password-protection"
                  type="password"
                  placeholder="Enter password to protect video"
                  value={advancedSettings.security?.password || ''}
                  onChange={(e) => handleNestedSettingChange('security', 'password', e.target.value)}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}