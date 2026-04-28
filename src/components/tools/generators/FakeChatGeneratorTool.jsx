"use client";

import { useState, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
	MessageSquare,
	Plus,
	Trash2,
	Download,
	Smartphone,
	ArrowLeft,
	Phone,
	Video,
	MoreVertical,
	Check,
	Wifi,
	Battery,
	Signal,
} from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const CHAT_STYLES = {
	whatsapp: {
		name: "WhatsApp",
		bg: "#e5ddd5",
		headerBg: "#075e54",
		sentBg: "#dcf8c6",
		receivedBg: "#ffffff",
		textColor: "#303030",
		timeColor: "#999999",
	},
	iphone: {
		name: "iMessage",
		bg: "#ffffff",
		headerBg: "#f9f9f9",
		sentBg: "#007aff",
		receivedBg: "#e9e9eb",
		textColor: "#000000",
		timeColor: "#8e8e93",
		sentTextColor: "#ffffff",
	},
	telegram: {
		name: "Telegram",
		bg: "#8bb8e2",
		headerBg: "#517da2",
		sentBg: "#effdde",
		receivedBg: "#ffffff",
		textColor: "#000000",
		timeColor: "#999999",
	},
};

function htmlToCanvas(element) {
	return new Promise((resolve) => {
		const rect = element.getBoundingClientRect();
		const canvas = document.createElement("canvas");
		const scale = 2;
		canvas.width = rect.width * scale;
		canvas.height = rect.height * scale;
		const ctx = canvas.getContext("2d");
		ctx.scale(scale, scale);

		const svgData = new XMLSerializer().serializeToString(
			createSvgFromElement(element, rect.width, rect.height)
		);

		const img = new Image();
		img.onload = () => {
			ctx.drawImage(img, 0, 0, rect.width, rect.height);
			resolve(canvas);
		};
		img.onerror = () => resolve(null);
		img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData);
	});
}

function createSvgFromElement(el, w, h) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", w);
	svg.setAttribute("height", h);
	svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	const foreign = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"foreignObject"
	);
	foreign.setAttribute("width", "100%");
	foreign.setAttribute("height", "100%");
	const div = document.createElement("div");
	div.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
	div.appendChild(el.cloneNode(true));
	foreign.appendChild(div);
	svg.appendChild(foreign);
	return svg;
}

export default function FakeChatGeneratorTool() {
	const [chatStyle, setChatStyle] = useState("whatsapp");
	const [contactName, setContactName] = useState("John");
	const [messages, setMessages] = useState([
		{ id: 1, sender: "other", text: "Hey! How are you?", time: "10:30 AM" },
		{
			id: 2,
			sender: "me",
			text: "I'm great! Thanks for asking 😊",
			time: "10:31 AM",
		},
		{
			id: 3,
			sender: "other",
			text: "Want to grab coffee later?",
			time: "10:32 AM",
		},
		{
			id: 4,
			sender: "me",
			text: "Sure! See you at 3pm ☕",
			time: "10:33 AM",
		},
	]);
	const [newMsg, setNewMsg] = useState("");
	const [newMsgSender, setNewMsgSender] = useState("me");
	const chatRef = useRef(null);

	const addMessage = () => {
		if (!newMsg.trim()) {
			toast.error("Please enter a message");
			return;
		}
		const now = new Date();
		const timeStr = now.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "2-digit",
			hour12: true,
		});
		setMessages([
			...messages,
			{
				id: Date.now(),
				sender: newMsgSender,
				text: newMsg,
				time: timeStr,
			},
		]);
		setNewMsg("");
		toast.success("Message added");
	};

	const removeMessage = (id) => {
		setMessages(messages.filter((m) => m.id !== id));
	};

	const downloadChat = useCallback(async () => {
		if (!chatRef.current) return;
		try {
			const { default: html2canvas } = await import("html2canvas");
			const canvas = await html2canvas(chatRef.current, {
				scale: 2,
				useCORS: true,
				backgroundColor: null,
			});
			const link = document.createElement("a");
			link.download = `fake-chat-${contactName.toLowerCase()}.png`;
			link.href = canvas.toDataURL("image/png");
			link.click();
			toast.success("Chat screenshot downloaded!");
		} catch {
			toast.error("Failed to download. Try again.");
		}
	}, [contactName]);

	const style = CHAT_STYLES[chatStyle];

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-lg flex items-center gap-2">
						<MessageSquare className="h-5 w-5 text-primary" />
						Fake Chat Generator
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div>
							<Label>Chat Style</Label>
							<Select value={chatStyle} onValueChange={setChatStyle}>
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{Object.entries(CHAT_STYLES).map(([key, s]) => (
										<SelectItem key={key} value={key}>
											{s.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label>Contact Name</Label>
							<Input
								value={contactName}
								onChange={(e) => setContactName(e.target.value)}
								placeholder="Contact name"
							/>
						</div>
						<div className="flex items-end">
							<Button
								onClick={downloadChat}
								className="w-full gap-2"
								variant="outline"
							>
								<Download className="h-4 w-4" />
								Download Screenshot
							</Button>
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div className="space-y-4">
							<div className="flex gap-2">
								<Input
									value={newMsg}
									onChange={(e) => setNewMsg(e.target.value)}
									placeholder="Type a message..."
									onKeyDown={(e) => e.key === "Enter" && addMessage()}
									className="flex-1"
								/>
								<Select value={newMsgSender} onValueChange={setNewMsgSender}>
									<SelectTrigger className="w-[120px]">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="me">Me (Sent)</SelectItem>
										<SelectItem value="other">
											{contactName} (Received)
										</SelectItem>
									</SelectContent>
								</Select>
								<Button onClick={addMessage} size="icon">
									<Plus className="h-4 w-4" />
								</Button>
							</div>

							<div className="space-y-2 max-h-[400px] overflow-y-auto">
								{messages.map((msg) => (
									<div
										key={msg.id}
										className={`flex items-center gap-2 p-2 rounded-lg border ${
											msg.sender === "me"
												? "bg-primary/5 border-primary/20"
												: "bg-muted/50 border-border"
										}`}
									>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2 mb-0.5">
												<span className="text-xs font-medium">
													{msg.sender === "me" ? "You" : contactName}
												</span>
												<span className="text-xs text-muted-foreground">
													{msg.time}
												</span>
											</div>
											<p className="text-sm break-all">{msg.text}</p>
										</div>
										<Button
											variant="ghost"
											size="icon"
											className="shrink-0 h-7 w-7"
											onClick={() => removeMessage(msg.id)}
										>
											<Trash2 className="h-3 w-3 text-muted-foreground" />
										</Button>
									</div>
								))}
							</div>
						</div>

						<div className="flex justify-center">
							<div
								ref={chatRef}
								className="w-[320px] rounded-3xl overflow-hidden shadow-2xl border border-border"
								style={{ backgroundColor: style.bg }}
							>
								<div
									className="px-4 py-2 flex items-center gap-3"
									style={{ backgroundColor: style.headerBg }}
								>
									<ArrowLeft className="h-5 w-5 text-white" />
									<div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
										<Smartphone className="h-4 w-4 text-white" />
									</div>
									<div className="flex-1">
										<div className="text-white font-semibold text-sm">
											{contactName}
										</div>
										<div className="text-white/70 text-[10px]">online</div>
									</div>
									<div className="flex items-center gap-3 text-white">
										<Video className="h-5 w-5" />
										<Phone className="h-5 w-5" />
										<MoreVertical className="h-5 w-5" />
									</div>
								</div>

								<div className="flex items-center justify-between px-4 py-1 text-[9px] text-white/60"
									style={{ backgroundColor: style.headerBg }}>
									<div className="flex items-center gap-1">
										<Signal className="h-2.5 w-2.5" />
										<span>Figma</span>
									</div>
									<div className="flex items-center gap-1">
										<Wifi className="h-2.5 w-2.5" />
									</div>
									<div className="flex items-center gap-1">
										<Battery className="h-3 w-3" />
										<span>9:41</span>
									</div>
								</div>

								<div className="p-3 space-y-1.5" style={{ minHeight: "300px" }}>
									{messages.map((msg) => (
										<div
											key={msg.id}
											className={`flex ${
												msg.sender === "me" ? "justify-end" : "justify-start"
											}`}
										>
											<div
												className="max-w-[75%] px-2.5 py-1.5 rounded-lg text-[13px] leading-snug"
												style={{
													backgroundColor:
														msg.sender === "me"
															? style.sentBg
															: style.receivedBg,
													color:
														msg.sender === "me" && style.sentTextColor
															? style.sentTextColor
															: style.textColor,
												}}
											>
												<span className="break-all">{msg.text}</span>
												<span
													className="text-[9px] ml-1.5 float-right mt-1.5"
													style={{ color: style.timeColor }}
												>
													{msg.time}
													{msg.sender === "me" && chatStyle === "whatsapp" && (
														<Check className="inline h-2.5 w-2.5 ml-0.5 text-blue-500" />
													)}
												</span>
											</div>
										</div>
									))}
								</div>

								<div className="px-3 py-2 flex items-center gap-2 bg-white/80">
									<div className="flex-1 bg-white rounded-full px-3 py-1.5 text-xs text-gray-400 border">
										Type a message
									</div>
									<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
										<MessageSquare className="h-3.5 w-3.5 text-white" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
