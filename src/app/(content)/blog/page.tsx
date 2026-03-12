import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const metadata = {
	title: "Blog - 30Tools",
	description:
		"Explore our latest articles, guides, and reviews on productivity tools, converters, and more.",
	alternates: {
		canonical: "https://30tools.com/blog",
	},
};

import { blogs } from "@/constants/blog-data";

export default function BlogListing() {
	return (
		<div className="container mx-auto px-4 py-12 max-w-6xl">
			<div className="text-center mb-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
					Latest Articles
				</h1>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
					Insights, tutorials, and reviews to help you get the most out of your
					digital tools.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{blogs.map((blog) => (
					<Link href={`/blog/${blog.slug}`} key={blog.slug} className="group">
						<Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none bg-secondary/10 hover:bg-secondary/20 backdrop-blur-sm">
							<CardHeader>
								<div className="text-sm text-muted-foreground mb-2">
									{blog.date}
								</div>
								<CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
									{blog.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="line-clamp-3 text-base">
									{blog.description}
								</CardDescription>
								<div className="mt-4 text-primary font-medium text-sm flex items-center group-hover:underline">
									Read Article
									<svg
										className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										></path>
									</svg>
								</div>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
