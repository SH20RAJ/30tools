"use client";

import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeftIcon,
  DownloadIcon,
  MessageCircleIcon,
  SmartphoneIcon,
  ImageIcon,
  ClockIcon,
  CheckIcon,
  CheckCheckIcon,
  PlusIcon,
  TrashIcon,
} from "lucide-react";
import Link from "next/link";
import SocialShareButtons from "@/components/shared/SocialShareButtons";
import html2canvas from "html2canvas";

const CHAT_PLATFORMS = {
  whatsapp: {
    name: "💬 WhatsApp",
    bgColor: "#e5ddd5",
    bubbleColor: "#dcf8c6",
    receivedColor: "#ffffff",
    textColor: "#000000",
    timeColor: "#999999",
  },
  instagram: {
    name: "📸 Instagram DM",
    bgColor: "#ffffff",
    bubbleColor: "#3797f0",
    receivedColor: "#efefef",
    textColor: "#ffffff",
    timeColor: "#999999",
  },
  imessage: {
    name: "💙 iMessage",
    bgColor: "#000000",
    bubbleColor: "#007aff",
    receivedColor: "#e5e5ea",
    textColor: "#ffffff",
    timeColor: "#999999",
  },
  discord: {
    name: "🎮 Discord",
    bgColor: "#36393f",
    bubbleColor: "#5865f2",
    receivedColor: "#40444b",
    textColor: "#ffffff",
    timeColor: "#72767d",
  },
};

export default function FakeChatGeneratorTool() {
  const [platform, setPlatform] = useState("whatsapp");
  const [contactName, setContactName] = useState("John Doe");
  const [profilePic, setProfilePic] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! How are you?",
      sent: false,
      time: "10:30 AM",
      read: true,
    },
    {
      id: 2,
      text: "I'm doing great! Thanks for asking 😊",
      sent: true,
      time: "10:32 AM",
      read: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [showTimestamps, setShowTimestamps] = useState(true);
  const [showReadReceipts, setShowReadReceipts] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const chatRef = useRef(null);

  const addMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: newMessage,
      sent: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      read: true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
  };

  const addReceivedMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: newMessage,
      sent: false,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      read: true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const exportAsImage = async () => {
    if (!chatRef.current) return;

    setIsExporting(true);

    try {
      const canvas = await html2canvas(chatRef.current, {
        backgroundColor: CHAT_PLATFORMS[platform].bgColor,
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });

      const link = document.createElement("a");
      link.download = `fake-chat-${platform}-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (_error) {
      console.error("Export failed:", error);
    }

    setIsExporting(false);
  };

  const renderMessage = (message) => {
    const platformStyle = CHAT_PLATFORMS[platform];

    return (
      <div
        key={message.id}
        className={`flex mb-2 ${message.sent ? "justify-end" : "justify-start"}`}
      >
        <div className="group relative max-w-xs lg:max-w-md">
          {!message.sent && (
            <div className="flex items-center mb-1">
              <div className="w-6 h-6 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-xs">
                {contactName.charAt(0)}
              </div>
              <span className="text-xs text-muted-foreground">
                {contactName}
              </span>
            </div>
          )}

          <div
            className={`px-3 py-2 rounded-lg relative ${
              message.sent ? "rounded-br-none" : "rounded-bl-none"
            }`}
            style={{
              backgroundColor: message.sent
                ? platformStyle.bubbleColor
                : platformStyle.receivedColor,
              color: message.sent ? platformStyle.textColor : "#000000",
            }}
          >
            <p className="text-sm whitespace-pre-wrap">{message.text}</p>

            {showTimestamps && (
              <div className="flex items-center justify-end mt-1 gap-1">
                <span
                  className="text-xs opacity-70"
                  style={{
                    color: message.sent ? platformStyle.timeColor : "#666",
                  }}
                >
                  {message.time}
                </span>
                {message.sent && showReadReceipts && (
                  <div className="text-xs opacity-70">
                    {message.read ? (
                      <CheckCheckIcon
                        className="w-3 h-3"
                        style={{ color: "#4fc3f7" }}
                      />
                    ) : (
                      <CheckIcon className="w-3 h-3" />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <Button
            size="sm"
            variant="ghost"
            onClick={() => deleteMessage(message.id)}
            className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 p-0 bg-destructive/100 hover:bg-destructive text-white rounded-full"
          >
            <TrashIcon className="w-3 h-3" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-muted/20 dark:from-gray-900 dark:via-green-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/design-tools"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Design Tools
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-background">
              <MessageCircleIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-background">
                Fake Chat Generator
              </h1>
              <p className="text-muted-foreground">
                Create realistic chat screenshots for memes and viral content
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">📱 4 Platforms</Badge>
            <Badge variant="secondary">🎨 Realistic Design</Badge>
            <Badge variant="secondary">📸 Export as Image</Badge>
            <Badge variant="secondary">🔥 Meme Ready</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SmartphoneIcon className="h-5 w-5" />
                  Chat Settings
                </CardTitle>
                <CardDescription>
                  Customize your fake chat appearance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Platform Selection */}
                <div>
                  <Label htmlFor="platform">Platform</Label>
                  <Select value={platform} onValueChange={setPlatform}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(CHAT_PLATFORMS).map(([key, platform]) => (
                        <SelectItem key={key} value={key}>
                          {platform.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Contact Name */}
                <div>
                  <Label htmlFor="contactName">Contact Name</Label>
                  <Input
                    id="contactName"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Enter contact name"
                  />
                </div>

                {/* Options */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="timestamps"
                      checked={showTimestamps}
                      onCheckedChange={setShowTimestamps}
                    />
                    <Label htmlFor="timestamps" className="text-sm">
                      Show timestamps
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="readReceipts"
                      checked={showReadReceipts}
                      onCheckedChange={setShowReadReceipts}
                    />
                    <Label htmlFor="readReceipts" className="text-sm">
                      Show read receipts
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Message Input */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlusIcon className="h-5 w-5" />
                  Add Messages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="newMessage">Message Text</Label>
                  <Textarea
                    id="newMessage"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    rows={3}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={addMessage}
                    className="flex-1"
                    disabled={!newMessage.trim()}
                  >
                    Add Sent
                  </Button>
                  <Button
                    onClick={addReceivedMessage}
                    variant="outline"
                    className="flex-1"
                    disabled={!newMessage.trim()}
                  >
                    Add Received
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Export */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DownloadIcon className="h-5 w-5" />
                  Export Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={exportAsImage}
                  className="w-full bgtbd"
                  disabled={isExporting || messages.length === 0}
                >
                  {isExporting ? (
                    <>
                      <ImageIcon className="mr-2 h-4 w-4 animate-pulse" />
                      Exporting...
                    </>
                  ) : (
                    <>
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      Download as Image
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Chat Preview */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircleIcon className="h-5 w-5" />
                  Chat Preview
                </CardTitle>
                <CardDescription>
                  Your fake chat will look like this
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="border rounded-lg overflow-hidden">
                  {/* Chat Header */}
                  <div
                    className="px-4 py-3 border-b flex items-center gap-3"
                    style={{
                      backgroundColor:
                        platform === "whatsapp"
                          ? "#075e54"
                          : platform === "instagram"
                            ? "#ffffff"
                            : platform === "imessage"
                              ? "#f6f6f6"
                              : "#36393f",
                      color:
                        platform === "whatsapp"
                          ? "#ffffff"
                          : platform === "instagram"
                            ? "#000000"
                            : platform === "imessage"
                              ? "#000000"
                              : "#ffffff",
                    }}
                  >
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold">
                      {contactName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{contactName}</h3>
                      <p className="text-xs opacity-70">
                        {platform === "whatsapp" ? "online" : "Active now"}
                      </p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div
                    ref={chatRef}
                    className="p-4 min-h-96 max-h-96 overflow-y-auto"
                    style={{
                      backgroundColor: CHAT_PLATFORMS[platform].bgColor,
                    }}
                  >
                    {messages.map(renderMessage)}

                    {messages.length === 0 && (
                      <div className="text-center py-12 text-muted-foreground">
                        <MessageCircleIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Add some messages to see your chat!</p>
                      </div>
                    )}
                  </div>

                  {/* Chat Input (Visual Only) */}
                  <div
                    className="px-4 py-3 border-t flex items-center gap-2"
                    style={{
                      backgroundColor:
                        platform === "whatsapp"
                          ? "#f0f0f0"
                          : platform === "instagram"
                            ? "#ffffff"
                            : platform === "imessage"
                              ? "#f6f6f6"
                              : "#40444b",
                    }}
                  >
                    <div
                      className="flex-1 px-3 py-2 rounded-full text-sm"
                      style={{
                        backgroundColor:
                          platform === "whatsapp"
                            ? "#ffffff"
                            : platform === "instagram"
                              ? "#efefef"
                              : platform === "imessage"
                                ? "#ffffff"
                                : "#484c52",
                        color: platform === "discord" ? "#ffffff" : "#000000",
                      }}
                    >
                      Type a message...
                    </div>
                    <div className="w-8 h-8 bg-muted/500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">→</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>💡 Pro Tips for Viral Chats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">🎭 Keep it Believable</h4>
                <p>
                  Use realistic names and conversation flow for better
                  engagement
                </p>
              </div>
              <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">⏰ Timing Matters</h4>
                <p>
                  Use appropriate timestamps to make conversations feel natural
                </p>
              </div>
              <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">😂 Add Humor</h4>
                <p>Funny conversations get shared more on social media</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Share */}
        <div className="mt-12">
          <SocialShareButtons
            toolName="Fake Chat Generator"
            toolDescription="Create realistic fake chat screenshots for WhatsApp, Instagram, iMessage, and Discord. Perfect for memes! 📱💬"
            toolUrl="https://30tools.com/fake-chat-generator"
            category="generators"
          />
        </div>
      </div>
    </div>
  );
}
