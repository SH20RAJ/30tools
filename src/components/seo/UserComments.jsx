"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  Reply,
  Heart,
  Share2,
  Flag,
  User,
  Clock,
  ChevronDown,
  ChevronUp,
  Filter,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample comments data - in a real app, this would come from your database
const SAMPLE_COMMENTS = [
  {
    id: 1,
    author: "Alex Chen",
    avatar: "/avatars/alex-chen.jpg",
    content:
      "This image compressor is amazing! Reduced my website images by 70% without any noticeable quality loss. The batch processing feature is a game-changer.",
    timestamp: "2024-01-20T10:30:00Z",
    likes: 24,
    replies: 3,
    verified: true,
    helpful: true,
    toolRating: 5,
  },
  {
    id: 2,
    author: "Sarah Johnson",
    avatar: "/avatars/sarah-johnson.jpg",
    content:
      "Perfect tool for my blog! The interface is super clean and intuitive. Love that it works directly in the browser without uploading files to servers.",
    timestamp: "2024-01-19T15:45:00Z",
    likes: 18,
    replies: 1,
    verified: false,
    helpful: true,
    toolRating: 5,
  },
  {
    id: 3,
    author: "Mike Rodriguez",
    avatar: "/avatars/mike-rodriguez.jpg",
    content:
      "Great compression quality! Used it for optimizing images for my e-commerce store. Would love to see more format options in the future.",
    timestamp: "2024-01-18T09:20:00Z",
    likes: 12,
    replies: 0,
    verified: true,
    helpful: true,
    toolRating: 4,
  },
  {
    id: 4,
    author: "Emma Thompson",
    avatar: "/avatars/emma-thompson.jpg",
    content:
      "Fast and reliable! Processed 50+ images in under a minute. The quality settings give good control over the compression ratio.",
    timestamp: "2024-01-17T14:10:00Z",
    likes: 31,
    replies: 5,
    verified: false,
    helpful: true,
    toolRating: 5,
  },
];

function CommentItem({ comment, onReply, onLike, depth = 0 }) {
  const [liked, setLiked] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now - time) / (1000 * 60 * 60));

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const handleLike = () => {
    setLiked(!liked);
    onLike(comment.id, !liked);
  };

  const handleReply = () => {
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText("");
      setShowReplyForm(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${i < rating ? "text-primary" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={`${depth > 0 ? "ml-8 border-l-2 border-muted pl-4" : ""}`}>
      <div className="flex gap-3 p-4 border-b last:border-b-0">
        <Avatar className="h-10 w-10">
          <AvatarImage src={comment.avatar} alt={comment.author} />
          <AvatarFallback>
            {comment.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{comment.author}</span>
            {comment.verified && (
              <Badge variant="secondary" className="text-xs">
                Verified
              </Badge>
            )}
            {comment.helpful && (
              <Badge variant="outline" className="text-xs text-primary">
                Helpful
              </Badge>
            )}
            <span className="text-xs text-muted-foreground">
              {formatTimeAgo(comment.timestamp)}
            </span>
          </div>

          {comment.toolRating && (
            <div className="flex items-center gap-1">
              {renderStars(comment.toolRating)}
              <span className="text-xs text-muted-foreground ml-1">
                Rated this tool
              </span>
            </div>
          )}

          <p className="text-sm text-foreground leading-relaxed">
            {comment.content}
          </p>

          <div className="flex items-center gap-4 text-sm">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`h-auto p-1 ${liked ? "text-destructive" : "text-muted-foreground"}`}
            >
              <Heart
                className={`h-4 w-4 mr-1 ${liked ? "fill-current" : ""}`}
              />
              {comment.likes + (liked ? 1 : 0)}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="h-auto p-1 text-muted-foreground"
            >
              <Reply className="h-4 w-4 mr-1" />
              Reply
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-1 text-muted-foreground"
            >
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-1 text-muted-foreground"
            >
              <Flag className="h-4 w-4" />
            </Button>
          </div>

          {showReplyForm && (
            <div className="mt-3 space-y-2">
              <Textarea
                placeholder="Write a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="min-h-[80px]"
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={handleReply}>
                  Post Reply
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowReplyForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function UserComments({
  toolId,
  toolName,
  showStats = true,
  allowComments = true,
}) {
  const [comments, setComments] = useState(SAMPLE_COMMENTS);
  const [newComment, setNewComment] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // newest, oldest, helpful, popular
  const [filterBy, setFilterBy] = useState("all"); // all, verified, helpful
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "You",
        avatar: "/avatars/default.jpg",
        content: newComment,
        timestamp: new Date().toISOString(),
        likes: 0,
        replies: 0,
        verified: false,
        helpful: false,
        toolRating: 5,
      };

      setComments([comment, ...comments]);
      setNewComment("");
      setShowCommentForm(false);
    }
  };

  const handleLike = (commentId, liked) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + (liked ? 1 : -1) }
          : comment,
      ),
    );
  };

  const handleReply = (commentId, replyText) => {
    // In a real app, this would create a new reply
    console.log("Reply to", commentId, ":", replyText);
  };

  const sortedComments = [...comments].sort((a, b) => {
    switch (sortBy) {
      case "oldest":
        return new Date(a.timestamp) - new Date(b.timestamp);
      case "helpful":
        return (b.helpful ? 1 : 0) - (a.helpful ? 1 : 0);
      case "popular":
        return b.likes - a.likes;
      default: // newest
        return new Date(b.timestamp) - new Date(a.timestamp);
    }
  });

  const filteredComments = sortedComments.filter((comment) => {
    switch (filterBy) {
      case "verified":
        return comment.verified;
      case "helpful":
        return comment.helpful;
      default:
        return true;
    }
  });

  const averageRating =
    comments.reduce((sum, comment) => sum + (comment.toolRating || 0), 0) /
    comments.filter((c) => c.toolRating).length;

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                User Comments & Reviews
                <Badge variant="secondary">{comments.length}</Badge>
              </CardTitle>

              {showStats && (
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>4.8/5 avg rating</span>
                  </div>
                  <div>
                    {comments.filter((c) => c.helpful).length} helpful reviews
                  </div>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Add Comment Form */}
            {allowComments && (
              <div className="space-y-4">
                {!showCommentForm ? (
                  <Button
                    variant="outline"
                    onClick={() => setShowCommentForm(true)}
                    className="w-full"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Share your experience with {toolName}
                  </Button>
                ) : (
                  <div className="space-y-3 p-4 border rounded-lg bg-muted/50">
                    <Textarea
                      placeholder={`How was your experience with ${toolName}? Help others by sharing your feedback...`}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex gap-2">
                      <Button onClick={handleAddComment}>Post Comment</Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowCommentForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Filters and Sorting */}
            <div className="flex flex-wrap items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-border rounded px-2 py-1 bg-background"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="helpful">Most Helpful</option>
                  <option value="popular">Most Liked</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Filter:</span>
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="text-sm border border-border rounded px-2 py-1 bg-background"
                >
                  <option value="all">All Comments</option>
                  <option value="verified">Verified Only</option>
                  <option value="helpful">Helpful Only</option>
                </select>
              </div>

              <div className="text-sm text-muted-foreground">
                Showing {filteredComments.length} of {comments.length} comments
              </div>
            </div>

            {/* Comments List */}
            <div className="divide-y divide-border">
              {filteredComments.length > 0 ? (
                filteredComments.map((comment) => (
                  <CommentItem
                    key={comment.id}
                    comment={comment}
                    onReply={handleReply}
                    onLike={handleLike}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No comments yet</h3>
                  <p className="text-muted-foreground">
                    Be the first to share your experience with {toolName}!
                  </p>
                </div>
              )}
            </div>

            {/* Load More Button */}
            {filteredComments.length > 0 &&
              filteredComments.length < comments.length && (
                <div className="text-center">
                  <Button variant="outline">
                    Load More Comments
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// Lightweight comments widget for embedding
export function CommentsWidget({ toolId, compact = false }) {
  const recentComments = SAMPLE_COMMENTS.slice(0, compact ? 2 : 3);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Recent Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentComments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">
                {comment.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">{comment.author}</span>
                <div className="flex text-xs text-primary">
                  {Array.from(
                    { length: comment.toolRating || 5 },
                    (_, i) => "★",
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {comment.content}
              </p>
            </div>
          </div>
        ))}

        <Button variant="outline" size="sm" className="w-full">
          View All Reviews
        </Button>
      </CardContent>
    </Card>
  );
}
