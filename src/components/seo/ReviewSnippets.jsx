'use client';

import { Star, StarHalf, Quote, User, Calendar, ThumbsUp, Heart, Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Review snippet data - In a real app, this would come from your database/API
const SAMPLE_REVIEWS = {
  'image-compressor': [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "/avatars/sarah.jpg",
      rating: 5,
      date: "2024-01-15",
      title: "Perfect for web optimization",
      content: "This image compressor is exactly what I needed for my website. Reduced my image sizes by 75% without any visible quality loss. The batch processing feature saves me hours of work!",
      verified: true,
      helpful: 24,
      platform: "Trustpilot"
    },
    {
      id: 2,
      author: "Mike Rodriguez",
      avatar: "/avatars/mike.jpg",
      rating: 4.5,
      date: "2024-01-12",
      title: "Great tool, very fast",
      content: "Super fast compression and the quality is maintained really well. The interface is clean and easy to use. Only minor issue is it could use more format options.",
      verified: true,
      helpful: 18,
      platform: "Google Reviews"
    },
    {
      id: 3,
      author: "Emma Thompson",
      avatar: "/avatars/emma.jpg",
      rating: 5,
      date: "2024-01-10",
      title: "Saved my project deadline",
      content: "Had to compress hundreds of images for a client project. This tool processed them all in minutes while maintaining professional quality. Absolutely recommended!",
      verified: true,
      helpful: 31,
      platform: "Capterra"
    }
  ],
  'pdf-merger': [
    {
      id: 4,
      author: "David Kim",
      avatar: "/avatars/david.jpg",
      rating: 5,
      date: "2024-01-18",
      title: "Essential for document management",
      content: "I merge PDFs daily for work and this tool is perfect. It preserves bookmarks and formatting, which many other tools mess up. The processing is lightning fast too.",
      verified: true,
      helpful: 27,
      platform: "G2"
    },
    {
      id: 5,
      author: "Lisa Park",
      avatar: "/avatars/lisa.jpg",
      rating: 4.5,
      date: "2024-01-16",
      title: "Simple and effective",
      content: "Clean interface, no unnecessary features, just does what it promises. Merged 20+ PDFs into one document without any issues. Great for preparing reports.",
      verified: true,
      helpful: 19,
      platform: "Trustpilot"
    }
  ],
  'default': [
    {
      id: 6,
      author: "Alex Johnson",
      avatar: "/avatars/alex.jpg",
      rating: 5,
      date: "2024-01-20",
      title: "Amazing collection of tools",
      content: "30tools has become my go-to for all online utilities. Every tool I've used works perfectly and the fact that it's all free is incredible. No ads, no watermarks!",
      verified: true,
      helpful: 45,
      platform: "ProductHunt"
    },
    {
      id: 7,
      author: "Maria Garcia",
      avatar: "/avatars/maria.jpg",
      rating: 4.5,
      date: "2024-01-19",
      title: "Reliable and fast",
      content: "Been using these tools for months now. They're consistently reliable and much faster than similar tools I've tried. The privacy-first approach is a huge plus.",
      verified: true,
      helpful: 33,
      platform: "Capterra"
    },
    {
      id: 8,
      author: "James Wilson",
      avatar: "/avatars/james.jpg",
      rating: 5,
      date: "2024-01-17",
      title: "Professional quality tools",
      content: "As a freelancer, I need tools that work reliably without breaking the bank. 30tools delivers professional-grade utilities completely free. Highly recommended!",
      verified: true,
      helpful: 29,
      platform: "Trustpilot"
    }
  ]
};

function StarRating({ rating, showNumber = true, size = "small" }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  const starSize = size === "small" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className={`${starSize} fill-yellow-400 text-yellow-400`} />
        ))}
        {hasHalfStar && (
          <StarHalf className={`${starSize} fill-yellow-400 text-yellow-400`} />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className={`${starSize} text-gray-300`} />
        ))}
      </div>
      {showNumber && (
        <span className="text-sm font-medium text-muted-foreground ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

function ReviewCard({ review, variant = "default" }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (variant === "compact") {
    return (
      <Card className="h-full">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={review.avatar} alt={review.author} />
              <AvatarFallback>{review.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium text-sm">{review.author}</p>
                  <StarRating rating={review.rating} />
                </div>
                {review.verified && (
                  <Badge variant="secondary" className="text-xs">
                    <Award className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {review.content}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={review.avatar} alt={review.author} />
              <AvatarFallback>{review.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">{review.author}</p>
                {review.verified && (
                  <Badge variant="secondary" className="text-xs">
                    <Award className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <StarRating rating={review.rating} />
                <span className="text-xs text-muted-foreground">
                  {formatDate(review.date)}
                </span>
              </div>
            </div>
          </div>
          <Quote className="h-6 w-6 text-muted-foreground/40" />
        </div>
        {review.title && (
          <h3 className="font-medium text-foreground">{review.title}</h3>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground leading-relaxed mb-4">
          {review.content}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>{review.helpful}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>via {review.platform}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ReviewSnippets({ 
  toolId, 
  title = "What Our Users Say",
  showRatingSummary = true,
  variant = "grid", // "grid", "carousel", "list"
  limit = 6
}) {
  const reviews = SAMPLE_REVIEWS[toolId] || SAMPLE_REVIEWS.default;
  const displayedReviews = reviews.slice(0, limit);
  
  // Calculate aggregate rating
  const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length * 67; // Simulate more reviews
  
  // Generate structured data for reviews
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": toolId ? `${toolId.replace('-', ' ')} Tool` : "30tools Online Toolkit",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": totalReviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": displayedReviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.content,
      "datePublished": review.date
    }))
  };

  const renderGrid = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedReviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );

  const renderCarousel = () => (
    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
      {displayedReviews.map((review) => (
        <div key={review.id} className="min-w-[300px] max-w-[400px]">
          <ReviewCard review={review} variant="compact" />
        </div>
      ))}
    </div>
  );

  const renderList = () => (
    <div className="space-y-6">
      {displayedReviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      
      <section className="py-12 bg-gradient-to-br from-muted/30 to-muted/10" aria-labelledby="reviews-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="reviews-heading" className="text-3xl font-bold mb-4">
              {title}
            </h2>
            
            {showRatingSummary && (
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <StarRating rating={avgRating} size="large" />
                  <span className="text-2xl font-bold">{avgRating.toFixed(1)}</span>
                </div>
                <div className="text-muted-foreground">
                  Based on {totalReviews.toLocaleString()}+ reviews
                </div>
              </div>
            )}
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied users who trust our tools for their daily tasks
            </p>
          </div>

          {variant === 'grid' && renderGrid()}
          {variant === 'carousel' && renderCarousel()}
          {variant === 'list' && renderList()}
        </div>
      </section>
    </>
  );
}

// Trust indicators component
export function TrustIndicators() {
  const stats = [
    { label: "Active Users", value: "50K+", icon: User },
    { label: "Tools Processed", value: "2M+", icon: Star },
    { label: "Average Rating", value: "4.9/5", icon: Heart },
    { label: "Uptime", value: "99.9%", icon: Award }
  ];

  return (
    <section className="py-8 border-y bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}