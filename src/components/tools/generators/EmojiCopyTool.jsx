'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeftIcon, SearchIcon, ClockIcon, SmileIcon } from 'lucide-react';
import Link from 'next/link';
import SocialShareButtons from '@/components/shared/SocialShareButtons';

// Simplified emoji categories with basic emojis only
const EMOJI_CATEGORIES = {
  smileys: {
    name: '😀 Smileys',
    emojis: [
      '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '😘', '😗', '😚', '😙',
      '😋', '😛', '😜', '😝', '🤑', '🤗', '🤔', '🤐', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '😌', '😔',
      '😪', '😴', '😷', '🤒', '🤕', '🤢', '🤧', '😵', '🤠', '😎', '🤓', '😕', '😟', '🙁', '😮', '😯', '😲',
      '😳', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '😤', '😡',
      '😠', '😈', '👿', '💀', '☠️', '💩', '👻', '👽', '👾', '🤖'
    ]
  },
  people: {
    name: '👋 People',
    emojis: [
      '👋', '✋', '👌', '👍', '👎', '✊', '👊', '👏', '🙏', '💪', '👂', '👃', '👀', '👄', '👶', '👦', '👧',
      '👨', '👩', '👴', '👵', '👮', '👷', '💂', '🕵️', '👩‍⚕️', '👨‍⚕️', '👩‍🎓', '👨‍🎓', '👩‍🏫', '👨‍🏫', '👩‍🌾',
      '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🔧', '👨‍🔧', '👩‍🏭', '👨‍🏭', '👩‍💼', '👨‍💼', '👩‍🔬', '👨‍🔬', '👩‍💻', '👨‍💻',
      '👩‍🎤', '👨‍🎤', '👩‍🎨', '👨‍🎨', '👩‍✈️', '👨‍✈️', '👩‍🚀', '👨‍🚀', '👩‍🚒', '👨‍🚒'
    ]
  },
  animals: {
    name: '🐶 Animals',
    emojis: [
      '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧',
      '🐦', '🐤', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🕷️', '🦂', '🦀', '🐍', '🦎',
      '🦖', '🦕', '🐙', '🦑', '🦐', '🐠', '🐟', '🐡', '🐬', '🦈', '🐳', '🐋', '🦭', '🐊', '🐆', '🐅', '🐃',
      '🐂', '🐄', '🐪', '🐫', '🦙', '🦘', '🦒', '🐘', '🦏', '🦛', '🐐', '🐏', '🐑', '🐎', '🦓', '🦌'
    ]
  },
  food: {
    name: '🍔 Food',
    emojis: [
      '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅',
      '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🌽', '🥕', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨',
      '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🥪', '🥙',
      '🧆', '🌮', '🌯', '🥗', '🥘', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚',
      '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫',
      '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼', '☕', '🍵', '🧃', '🥤', '🍶', '🍺', '🍻', '🥂', '🍷',
      '🥃', '🍸', '🍹', '🧉', '🍾', '🧊', '🥄', '🍴', '🍽️', '🥣', '🥡', '🥢'
    ]
  },
  travel: {
    name: '✈️ Travel',
    emojis: [
      '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🦯', '🦽', '🦼',
      '🛴', '🚲', '🛵', '🏍️', '🛺', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝',
      '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '✈️', '🛫', '🛬', '🛩️', '💺', '🛰️', '🚀', '🛸', '🚁',
      '🛶', '⛵', '🚤', '🛥️', '🛳️', '⛴️', '🚢', '⚓', '🚧', '⛽', '🚏', '🚦', '🚥', '🗺️', '🗿', '🗽', '🗼',
      '🏰', '🏯', '🏟️', '🎡', '🎢', '🎠', '⛲', '⛱️', '🏖️', '🏝️', '🏜️', '🌋', '⛰️', '🏔️', '🗻', '🏕️', '⛺',
      '🏠', '🏡', '🏘️', '🏚️', '🏗️', '🏢', '🏭', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒',
      '🏛️', '⛪', '🕌', '🕍', '🛕', '🕋', '⛩️', '🛤️', '🛣️', '🗾', '🎑', '🏞️', '🌅', '🌄', '🌠', '🎇', '🎆',
      '🌇', '🌆', '🏙️', '🌃', '🌌', '🌉', '🌁'
    ]
  },
  activities: {
    name: '⚽ Activities',
    emojis: [
      '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏',
      '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛼', '🛷', '⛸️', '🥌', '🎿', '⛷️',
      '🏂', '🪂', '🏋️', '🤼', '🤸', '⛹️', '🤾', '🏌️', '🏇', '🧘', '🏄', '🏊', '🤽', '🚣', '🧗', '🚵', '🚴',
      '🏆', '🥇', '🥈', '🥉', '🏅', '🎖️', '🏵️', '🎗️', '🎫', '🎟️', '🎪', '🤹', '🎭', '🩰', '🎨', '🎬', '🎤',
      '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🪕', '🎻', '🎲', '♟️', '🎯', '🎳', '🎮', '🎰', '🧩'
    ]
  },
  objects: {
    name: '💡 Objects',
    emojis: [
      '⌚', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🗜️', '💽', '💾', '💿', '📀', '📼', '📷',
      '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️', '⏲️',
      '⏰', '🕰️', '⌛', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯️', '🪔', '🧯', '🛢️', '💸', '💵', '💴', '💶', '💷',
      '💰', '💳', '💎', '⚖️', '🧰', '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🪓', '🔩', '⚙️', '🧱', '⛓️', '🧲', '🔫', '💣',
      '🧨', '🪓', '🔪', '🗡️', '⚔️', '🛡️', '🚬', '⚰️', '⚱️', '🏺', '🔮', '📿', '🧿', '💈', '⚗️', '🔭', '🔬', '🕳️',
      '🩹', '💊', '💉', '🩸', '🧬', '🦠', '🧫', '🧪', '🌡️', '🧹', '🧺', '🧻', '🚽', '🚰', '🚿', '🛁', '🛀', '🧼',
      '🪒', '🧽', '🧴', '🛎️', '🔑', '🗝️', '🚪', '🪑', '🛋️', '🛏️', '🛌', '🧸', '🖼️', '🛍️', '🛒', '🎁', '🎈',
      '🎏', '🎀', '🎊', '🎉', '🎎', '🏮', '🎐', '🧧', '✉️', '📩', '📨', '📧', '💌', '📥', '📤', '📦', '🏷️',
      '📪', '📫', '📬', '📭', '📮', '📯', '📜', '📃', '📄', '📑', '🧾', '📊', '📈', '📉', '🗒️', '🗓️', '📆',
      '📅', '🗑️', '📇', '🗃️', '🗳️', '🗄️', '📋', '📁', '📂', '🗂️', '🗞️', '📰', '📓', '📔', '📒', '📕', '📗',
      '📘', '📙', '📚', '📖', '🔖', '🧷', '🔗', '📎', '🖇️', '📐', '📏', '🧮', '📌', '📍', '✂️', '🖊️', '🖋️',
      '✒️', '🖌️', '🖍️', '📝', '✏️', '🔍', '🔎', '🔏', '🔐', '🔒', '🔓'
    ]
  },
  symbols: {
    name: '🔣 Symbols',
    emojis: [
      '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘',
      '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈', '♉', '♊', '♋',
      '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸',
      '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️',
      '🆘', '❌', '⭕', '🛑', '⛔', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭',
      '❗', '❕', '❓', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️', '🔰', '♻️', '✅', '🈯', '💹',
      '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿', '🅿️', '🈳', '🈂️', '🛂', '🛃', '🛄',
      '🛅', '🚹', '🚺', '🚼', '⚧️', '🚻', '🚮', '🎦', '📶', '🈁', '🔣', 'ℹ️', '🔤', '🔡', '🔠', '🆖', '🆗',
      '🆙', '🆒', '🆕', '🆓', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '🔢', '#️⃣',
      '*️⃣', '⏏️', '▶️', '⏸️', '⏯️', '⏹️', '⏺️', '⏭️', '⏮️', '⏩', '⏪', '⏫', '⏬', '◀️', '🔼', '🔽', '➡️', '⬅️',
      '⬆️', '⬇️', '↗️', '↘️', '↙️', '↖️', '↕️', '↔️', '↪️', '↩️', '⤴️', '⤵️', '🔀', '🔁', '🔂', '🔄', '🔃', '🎵',
      '🎶', '➕', '➖', '➗', '✖️', '♾️', '💲', '💱', '™️', '©️', '®️', '👁️‍🗨️', '🔚', '🔙', '🔛', '🔝', '🔜', '〰️',
      '➰', '➿', '✔️', '☑️', '🔘', '🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '⚫', '⚪', '🟤', '🔺', '🔻', '🔸', '🔹',
      '🔶', '🔷', '🔳', '🔲', '▪️', '▫️', '◾', '◽', '◼️', '◻️', '⬛', '⬜', '🟥', '🟧', '🟨', '🟩', '🟦', '🟪',
      '🟫'
    ]
  },
  flags: {
    name: '🏁 Flags',
    emojis: [
      '🏁', '🚩', '🎌', '🏴', '🏳️', '🏳️‍🌈', '🏳️‍⚧️', '🏴‍☠️', '🇦🇨', '🇦🇩', '🇦🇪', '🇦🇫', '🇦🇬', '🇦🇮', '🇦🇱', '🇦🇲',
      '🇦🇴', '🇦🇶', '🇦🇷', '🇦🇸', '🇦🇹', '🇦🇺', '🇦🇼', '🇦🇽', '🇦🇿', '🇧🇦', '🇧🇧', '🇧🇩', '🇧🇪', '🇧🇫', '🇧🇬', '🇧🇭',
      '🇧🇮', '🇧🇯', '🇧🇱', '🇧🇲', '🇧🇳', '🇧🇴', '🇧🇶', '🇧🇷', '🇧🇸', '🇧🇹', '🇧🇻', '🇧🇼', '🇧🇾', '🇧🇿', '🇨🇦', '🇨🇨',
      '🇨🇩', '🇨🇫', '🇨🇬', '🇨🇭', '🇨🇮', '🇨🇰', '🇨🇱', '🇨🇲', '🇨🇳', '🇨🇴', '🇨🇵', '🇨🇷', '🇨🇺', '🇨🇻', '🇨🇼', '🇨🇽',
      '🇨🇾', '🇨🇿', '🇩🇪', '🇩🇬', '🇩🇯', '🇩🇰', '🇩🇲', '🇩🇴', '🇩🇿', '🇪🇦', '🇪🇨', '🇪🇪', '🇪🇬', '🇪🇭', '🇪🇷', '🇪🇸',
      '🇪🇹', '🇪🇺', '🇫🇮', '🇫🇯', '🇫🇰', '🇫🇲', '🇫🇴', '🇫🇷', '🇬🇦', '🇬🇧', '🇬🇩', '🇬🇪', '🇬🇫', '🇬🇬', '🇬🇭', '🇬🇮',
      '🇬🇱', '🇬🇲', '🇬🇳', '🇬🇵', '🇬🇶', '🇬🇷', '🇬🇸', '🇬🇹', '🇬🇺', '🇬🇼', '🇬🇾', '🇭🇰', '🇭🇲', '🇭🇳', '🇭🇷', '🇭🇹',
      '🇭🇺', '🇮🇨', '🇮🇩', '🇮🇪', '🇮🇱', '🇮🇲', '🇮🇳', '🇮🇴', '🇮🇶', '🇮🇷', '🇮🇸', '🇮🇹', '🇯🇪', '🇯🇲', '🇯🇴', '🇯🇵',
      '🇰🇪', '🇰🇬', '🇰🇭', '🇰🇮', '🇰🇲', '🇰🇳', '🇰🇵', '🇰🇷', '🇰🇼', '🇰🇾', '🇰🇿', '🇱🇦', '🇱🇧', '🇱🇨', '🇱🇮', '🇱🇰',
      '🇱🇷', '🇱🇸', '🇱🇹', '🇱🇺', '🇱🇻', '🇱🇾', '🇲🇦', '🇲🇨', '🇲🇩', '🇲🇪', '🇲🇫', '🇲🇬', '🇲🇭', '🇲🇰', '🇲🇱', '🇲🇲',
      '🇲🇳', '🇲🇴', '🇲🇵', '🇲🇶', '🇲🇷', '🇲🇸', '🇲🇹', '🇲🇺', '🇲🇻', '🇲🇼', '🇲🇽', '🇲🇾', '🇲🇿', '🇳🇦', '🇳🇨', '🇳🇪',
      '🇳🇫', '🇳🇬', '🇳🇮', '🇳🇱', '🇳🇴', '🇳🇵', '🇳🇷', '🇳🇺', '🇳🇿', '🇴🇲', '🇵🇦', '🇵🇪', '🇵🇫', '🇵🇬', '🇵🇭', '🇵🇰',
      '🇵🇱', '🇵🇲', '🇵🇳', '🇵🇷', '🇵🇸', '🇵🇹', '🇵🇼', '🇵🇾', '🇶🇦', '🇷🇪', '🇷🇴', '🇷🇸', '🇷🇺', '🇷🇼', '🇸🇦', '🇸🇧',
      '🇸🇨', '🇸🇩', '🇸🇪', '🇸🇬', '🇸🇭', '🇸🇮', '🇸🇯', '🇸🇰', '🇸🇱', '🇸🇲', '🇸🇳', '🇸🇴', '🇸🇷', '🇸🇸', '🇸🇹', '🇸🇻',
      '🇸🇽', '🇸🇾', '🇸🇿', '🇹🇦', '🇹🇨', '🇹🇩', '🇹🇫', '🇹🇬', '🇹🇭', '🇹🇯', '🇹🇰', '🇹🇱', '🇹🇲', '🇹🇳', '🇹🇴', '🇹🇷',
      '🇹🇹', '🇹🇻', '🇹🇼', '🇹🇿', '🇺🇦', '🇺🇬', '🇺🇲', '🇺🇳', '🇺🇸', '🇺🇾', '🇺🇿', '🇻🇦', '🇻🇨', '🇻🇪', '🇻🇬', '🇻🇮',
      '🇻🇳', '🇻🇺', '🇼🇫', '🇼🇸', '🇽🇰', '🇾🇪', '🇾🇹', '🇿🇦', '🇿🇲', '🇿🇼'
    ]
  }
};

function EmojiCopyTool() {
  const [searchQuery, setSearchQuery] = useState('');
  // Make sure we start with a category that exists in our data
  const [activeCategory, setActiveCategory] = useState(Object.keys(EMOJI_CATEGORIES)[0] || 'smileys');
  const [recentEmojis, setRecentEmojis] = useState([]);
  const [copiedEmoji, setCopiedEmoji] = useState(null);

  // Load recent emojis from localStorage on component mount
  useEffect(() => {
    const savedRecents = localStorage.getItem('recentEmojis');
    if (savedRecents) {
      try {
        setRecentEmojis(JSON.parse(savedRecents).slice(0, 30));
      } catch (e) {
        console.error('Failed to parse recent emojis', e);
      }
    }
  }, []);

  // Ensure activeCategory is valid
  useEffect(() => {
    if (!EMOJI_CATEGORIES[activeCategory]) {
      setActiveCategory('smileys');
    }
  }, [activeCategory]);

  const handleCopyEmoji = (emoji) => {
    navigator.clipboard.writeText(emoji);
    setCopiedEmoji(emoji);

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopiedEmoji(null);
    }, 2000);

    // Add to recent emojis
    const updatedRecents = [emoji, ...recentEmojis.filter(e => e !== emoji)].slice(0, 30);
    setRecentEmojis(updatedRecents);
    localStorage.setItem('recentEmojis', JSON.stringify(updatedRecents));
  };

  // Filter emojis based on search query
  const filteredEmojis = searchQuery.trim() ?
    Object.values(EMOJI_CATEGORIES).flatMap(category =>
      category.emojis.filter(emoji => emoji.includes(searchQuery))
    ) :
    EMOJI_CATEGORIES[activeCategory]?.emojis || EMOJI_CATEGORIES.smileys.emojis;

  return (
    <div className="min-h-screen bg-muted/20 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/generators" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Generators
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-background">
              <SmileIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-background">
                Emoji Copy Tool
              </h1>
              <p className="text-muted-foreground">Find, copy, and paste emojis easily for your messages and content</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">🔍 Easy Search</Badge>
            <Badge variant="secondary">📋 One-Click Copy</Badge>
            <Badge variant="secondary">🕒 Recent Emojis</Badge>
            <Badge variant="secondary">🌈 All Categories</Badge>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search emojis..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Main Content */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Emoji Collection</CardTitle>
            <CardDescription>
              Click on any emoji to copy it to your clipboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="smileys" value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="mb-4 flex flex-wrap">
                {Object.entries(EMOJI_CATEGORIES).map(([key, category]) => (
                  <TabsTrigger key={key} value={key} className="text-sm">
                    {category?.name || key}
                  </TabsTrigger>
                ))}
                {recentEmojis.length > 0 && (
                  <TabsTrigger value="recent" className="text-sm">
                    <ClockIcon className="h-4 w-4 mr-1" /> Recent
                  </TabsTrigger>
                )}
              </TabsList>

              {/* Display emojis based on search or category */}
              <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-16 gap-2">
                {searchQuery.trim() ? (
                  filteredEmojis.length > 0 ? (
                    filteredEmojis.map((emoji, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className={`h-10 w-10 p-0 text-xl hover:bg-muted ${copiedEmoji === emoji ? 'ring-2 ring-primary' : ''}`}
                        onClick={() => handleCopyEmoji(emoji)}
                      >
                        {emoji}
                      </Button>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8 text-muted-foreground">
                      No emojis found matching "{searchQuery}"
                    </div>
                  )
                ) : activeCategory === 'recent' ? (
                  recentEmojis.length > 0 ? (
                    recentEmojis.map((emoji, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className={`h-10 w-10 p-0 text-xl hover:bg-muted ${copiedEmoji === emoji ? 'ring-2 ring-primary' : ''}`}
                        onClick={() => handleCopyEmoji(emoji)}
                      >
                        {emoji}
                      </Button>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8 text-muted-foreground">
                      No recent emojis yet
                    </div>
                  )
                ) : (
                  (EMOJI_CATEGORIES[activeCategory]?.emojis || []).map((emoji, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`h-10 w-10 p-0 text-xl hover:bg-muted ${copiedEmoji === emoji ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => handleCopyEmoji(emoji)}
                    >
                      {emoji}
                    </Button>
                  ))
                )}
              </div>
            </Tabs>
          </CardContent>
        </Card>

        {/* Recently Used */}
        {recentEmojis.length > 0 && activeCategory !== 'recent' && !searchQuery.trim() && (
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                Recently Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {recentEmojis.slice(0, 20).map((emoji, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`h-10 w-10 p-0 text-xl hover:bg-muted ${copiedEmoji === emoji ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => handleCopyEmoji(emoji)}
                  >
                    {emoji}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Emoji Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">🔍 Find Emojis Fast</h4>
                <p>Use the search bar to quickly find specific emojis by typing keywords</p>
              </div>
              <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">📋 One-Click Copy</h4>
                <p>Click any emoji to instantly copy it to your clipboard for pasting anywhere</p>
              </div>
              <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">🌈 Emoji Categories</h4>
                <p>Browse emojis by category to find the perfect one for your message</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Share */}
        <div className="mt-12">
          <SocialShareButtons
            toolName="Emoji Copy Tool"
            toolDescription="Find and copy emojis easily with our comprehensive emoji library! Perfect for messages, social media, and content. 😍"
            toolUrl="https://30tools.com/emoji-copy"
            category="generators"
          />
        </div>
      </div>
    </div>
  );
}

export default EmojiCopyTool;