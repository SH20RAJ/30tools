import { NextResponse } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

const COMMON_HEADERS = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'en-GB,en;q=0.5',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'https://ytdown.to',
    'referer': 'https://ytdown.to/en2/',
    'sec-ch-ua': '"Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
    'sec-ch-ua-mobile': "?0",
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    'cookie': 'PHPSESSID=go6tjlikmro2k7uokfkh7jcagg'
};

// HELPERS
async function telegram(method, body) {
    return fetch(`${TELEGRAM_API}/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}

const REQUIRED_CHANNEL = "-1002023867798"; // @sopbots

async function checkMembership(userId) {
    try {
        const res = await telegram('getChatMember', {
            chat_id: REQUIRED_CHANNEL,
            user_id: userId
        });
        const data = await res.json();
        if (!data.ok) return false;
        const status = data.result.status;
        return ['creator', 'administrator', 'member'].includes(status);
    } catch (e) {
        console.error("Membership Check Error:", e);
        return false;
    }
}

async function sendJoinMessage(chatId) {
    await telegram('sendMessage', {
        chat_id: chatId,
        text: "🚨 **Wait! You're not in our channel yet.**\n\nPlease join our channel **@sopbots** to get the latest updates, give feedback, and unlock all features of this bot.\n\nAfter joining, send the link again!",
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [{ text: "📢 Join @sopbots", url: "https://t.me/sopbots" }]
            ]
        }
    });
}

async function fetchVideoInfo(url) {
    try {
        // Cooldown check
        await fetch('https://ytdown.to/cooldown.php', { method: 'POST', headers: COMMON_HEADERS, body: 'action=check' });

        const res = await fetch('https://ytdown.to/proxy.php', {
            method: 'POST',
            headers: COMMON_HEADERS,
            body: `url=${encodeURIComponent(url)}`
        });
        const data = await res.json();
        return data.api;
    } catch (e) {
        console.error("Info Error:", e);
        return null;
    }
}

async function pollStatus(processUrl, chatId, messageId) {
    let attempts = 0;
    while (attempts < 8) {
        try {
            const res = await fetch('https://ytdown.to/proxy.php', {
                method: 'POST',
                headers: COMMON_HEADERS,
                body: `url=${encodeURIComponent(processUrl)}`
            });
            const data = await res.json();
            const api = data.api;

            if (api) {
                const poweredBy = "\n\nPowered by https://30tools.com/youtube-downloader\nFeedback: @sopbots";
                const isAudio = api.fileName && (api.fileName.toLowerCase().endsWith('.mp3') || api.fileName.toLowerCase().endsWith('.m4a'));
                const isVideo = api.fileName && api.fileName.toLowerCase().endsWith('.mp4');

                // Cleanup status message
                await telegram('deleteMessage', { chat_id: chatId, message_id: messageId });

                let sent = false;
                // Attempt to send as file if under ~45MB (Telegram limit is 50MB, but being safe)
                const sizeInMb = parseFloat(api.fileSize) || 0;
                if (sizeInMb > 0 && sizeInMb < 45) {
                    try {
                        if (isVideo) {
                            const sendRes = await telegram('sendVideo', {
                                chat_id: chatId,
                                video: api.fileUrl,
                                caption: `✅ **${api.fileName}**\nSize: ${api.fileSize}${poweredBy}`,
                                parse_mode: 'Markdown',
                                reply_markup: {
                                    inline_keyboard: [[{ text: "🎬 Download Another", callback_data: "home" }]]
                                }
                            });
                            if ((await sendRes.json()).ok) sent = true;
                        } else if (isAudio) {
                            const sendRes = await telegram('sendAudio', {
                                chat_id: chatId,
                                audio: api.fileUrl,
                                title: api.fileName,
                                caption: `✅ **${api.fileName}**\nSize: ${api.fileSize}${poweredBy}`,
                                parse_mode: 'Markdown',
                                reply_markup: {
                                    inline_keyboard: [[{ text: "🎵 Download Another", callback_data: "home" }]]
                                }
                            });
                            if ((await sendRes.json()).ok) sent = true;
                        } else {
                            const sendRes = await telegram('sendDocument', {
                                chat_id: chatId,
                                document: api.fileUrl,
                                caption: `✅ **${api.fileName}**\nSize: ${api.fileSize}${poweredBy}`,
                                parse_mode: 'Markdown',
                                reply_markup: {
                                    inline_keyboard: [[{ text: "🔄 Download Another", callback_data: "home" }]]
                                }
                            });
                            if ((await sendRes.json()).ok) sent = true;
                        }
                    } catch (e) {
                        console.error("File Send Error:", e);
                    }
                }

                if (!sent) {
                    await telegram('sendMessage', {
                        chat_id: chatId,
                        text: `✅ **Ready!**\n\nTitle: ${api.fileName}\nSize: ${api.fileSize}\n\n[Download Now](${api.fileUrl})${poweredBy}`,
                        parse_mode: 'Markdown',
                        reply_markup: {
                            inline_keyboard: [[{ text: "🔄 Download Another", callback_data: "home" }]]
                        }
                    });
                }
                else {
                    // Update progress
                    await telegram('editMessageText', {
                        chat_id: chatId,
                        message_id: messageId,
                        text: `⏳ **Processing... ${api.percent}**\n\nPlease wait while we prepare your file...`
                    });
                }
            }
        } catch (e) {
            console.error("Poll Error:", e);
        }
        attempts++;
        await new Promise(r => setTimeout(r, 3000));
    }

    // timeout fallback
    await telegram('editMessageText', {
        chat_id: chatId,
        message_id: messageId,
        text: `⏳ **Still processing...**\n\nIt's taking a bit longer. Click the button below to check again in a few seconds.`,
        reply_markup: {
            inline_keyboard: [[{ text: "🔄 Refresh Status", callback_data: `st:${processUrl}` }]]
        }
    });
}

export async function POST(req) {
    try {
        const update = await req.json();

        // 1. Handle Messages
        if (update.message) {
            const chatId = update.message.chat.id;
            const text = update.message.text || "";

            if (text === "/start") {
                await telegram('sendMessage', {
                    chat_id: chatId,
                    text: "👋 **Welcome to 30Tools Video Downloader Bot!**\n\nSend me any YouTube link or directly share from YouTube App to telegram->bot to get started.\n\n📢 **Join @sopbots** for updates and feedback.\n\nPowered by https://30tools.com/youtube-downloader",
                    parse_mode: 'Markdown',
                    reply_markup: {
                        inline_keyboard: [[{ text: "📢 Join @sopbots", url: "https://t.me/sopbots" }]]
                    }
                });
                return NextResponse.json({ ok: true });
            }

            const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
            const match = text.match(ytRegex);

            if (match) {
                // Check membership before processing
                const isMember = await checkMembership(update.message.from.id);
                if (!isMember) {
                    await sendJoinMessage(chatId);
                    return NextResponse.json({ ok: true });
                }

                const videoId = match[1];
                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

                await telegram('sendMessage', { chat_id: chatId, text: "🔎 **Fetching video details...**", parse_mode: 'Markdown' });

                const info = await fetchVideoInfo(videoUrl);
                if (!info || info.status !== "OK") {
                    await telegram('sendMessage', { chat_id: chatId, text: "❌ Sorry, I couldn't fetch that video. Please try again." });
                    return NextResponse.json({ ok: true });
                }

                const keyboard = [];
                // Sort by resolution
                const videoFormats = info.mediaItems
                    .filter(m => m.type === "Video")
                    .sort((a, b) => parseInt(b.mediaRes) - parseInt(a.mediaRes));

                // Add video buttons
                videoFormats.slice(0, 5).forEach(m => {
                    // Extract domain prefix (e.g., "s15")
                    const domainMatch = m.mediaUrl.match(/https?:\/\/([^.]+)/);
                    const domain = domainMatch ? domainMatch[1] : "s15";

                    keyboard.push([{
                        text: `🎬 ${m.mediaQuality} (${m.mediaExtension.toUpperCase()})`,
                        callback_data: `dl:${domain}:${videoId}:${m.mediaId}:${m.mediaQuality.toLowerCase()}`
                    }]);
                });

                // Add audio button
                const audio = info.mediaItems.find(m => m.type === "Audio");
                if (audio) {
                    const domainMatch = audio.mediaUrl.match(/https?:\/\/([^.]+)/);
                    const domain = domainMatch ? domainMatch[1] : "s15";
                    keyboard.push([{
                        text: `🎵 MP3 Audio`,
                        callback_data: `dl:${domain}:${videoId}:${audio.mediaId}:${audio.mediaQuality.toLowerCase()}`
                    }]);
                }

                await telegram('sendPhoto', {
                    chat_id: chatId,
                    photo: info.imagePreviewUrl,
                    caption: `🎥 **${info.title}**\n\nSelect a format to download:\n\nPowered by https://30tools.com/youtube-downloader\nFeedback: @sopbots`,
                    parse_mode: 'Markdown',
                    reply_markup: { inline_keyboard: keyboard }
                });
            }
        }

        // 2. Handle Callback Queries
        if (update.callback_query) {
            const cq = update.callback_query;
            const chatId = cq.message.chat.id;
            const data = cq.data;

            await telegram('answerCallbackQuery', { callback_query_id: cq.id });

            if (data.startsWith('dl:')) {
                // Check membership before starting processing
                const isMember = await checkMembership(cq.from.id);
                if (!isMember) {
                    await sendJoinMessage(chatId);
                    return NextResponse.json({ ok: true });
                }

                const [_, domain, videoId, mediaId, quality] = data.split(':');
                const processUrl = `https://${domain}.ytcontent.com/v3/${quality === 'mp3' ? 'audio' : 'video'}Process/${videoId}/${mediaId}/${quality}`;

                const msg = await telegram('sendMessage', {
                    chat_id: chatId,
                    text: "🚀 **Starting processing...**"
                });
                const msgData = await msg.json();

                if (msgData.ok) {
                    await pollStatus(processUrl, chatId, msgData.result.message_id);
                }
            } else if (data.startsWith('st:')) {
                const processUrl = data.slice(3);
                await pollStatus(processUrl, chatId, cq.message.message_id);
            } else if (data === 'home') {
                await telegram('sendMessage', {
                    chat_id: chatId,
                    text: "👋 **Welcome back!**\n\nReady for another one? Send me a YouTube link.",
                    parse_mode: 'Markdown'
                });
            }
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Webhook Error:", error);
        return NextResponse.json({ ok: true }); // Always return 200 to Telegram
    }
}
