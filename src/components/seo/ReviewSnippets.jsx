"use client";

import {
	Award,
	Heart,
	Quote,
	Star,
	StarHalf,
	ThumbsUp,
	User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Reviews data - currently empty. Add real reviews from your database/API when available.
const SAMPLE_REVIEWS = {};

function StarRating({ rating, showNumber = true, size = "small" }) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	const starSize = size === "small" ? "h-4 w-4" : "h-5 w-5";

	return (
		<div className="flex items-center gap-1">
			<div className="flex items-center">
				{[...Array(fullStars)].map((_, i) => (
					<Star
						key={i}
						className={`${starSize} fill-yellow-400 text-primary`}
					/>
				))}
				{hasHalfStar && (
					<StarHalf className={`${starSize} fill-yellow-400 text-primary`} />
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
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	if (variant === "compact") {
		return (
			<Card className="h-full">
				<CardContent className="p-4">
					<div className="flex items-start gap-3">
						<Avatar className="h-10 w-10">
							<AvatarImage src={review.avatar} alt={review.author} />
							<AvatarFallback>
								{review.author
									.split(" ")
									.map((n) => n[0])
									.join("")}
							</AvatarFallback>
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
							<AvatarFallback>
								{review.author
									.split(" ")
									.map((n) => n[0])
									.join("")}
							</AvatarFallback>
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
	limit = 6,
}) {
	const reviews = SAMPLE_REVIEWS[toolId] || SAMPLE_REVIEWS.default || [];
	if (!reviews || reviews.length === 0) return null;
	const displayedReviews = reviews.slice(0, limit);

	const avgRating =
		reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

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
			<section
				className="py-12 bg-gradient-to-br from-muted/30 to-muted/10"
				aria-labelledby="reviews-heading"
			>
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 id="reviews-heading" className="text-3xl font-bold mb-4">
							{title}
						</h2>

						{showRatingSummary && (
							<div className="flex items-center justify-center gap-4 mb-6">
								<div className="flex items-center gap-2">
									<StarRating rating={avgRating} size="large" />
									<span className="text-2xl font-bold">
										{avgRating.toFixed(1)}
									</span>
								</div>
								<div className="text-muted-foreground">
									Based on {reviews.length} reviews
								</div>
							</div>
						)}

						<p className="text-muted-foreground max-w-2xl mx-auto">
							Join thousands of satisfied users who trust our tools for their
							daily tasks
						</p>
					</div>

					{variant === "grid" && renderGrid()}
					{variant === "carousel" && renderCarousel()}
					{variant === "list" && renderList()}
				</div>
			</section>
		</>
	);
}

// Trust indicators component
export function TrustIndicators() {
	const stats = [
		{ label: "Tools Available", value: "405+", icon: User },
		{ label: "Categories", value: "10+", icon: Star },
		{ label: "Price", value: "Free", icon: Heart },
		{ label: "Signup Required", value: "No", icon: Award },
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
								<div className="text-2xl font-bold text-foreground">
									{stat.value}
								</div>
								<div className="text-sm text-muted-foreground">
									{stat.label}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
