"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const generateBreadcrumbSchema = (breadcrumbs) => {
	if (!breadcrumbs || breadcrumbs.length === 0) return null;
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: breadcrumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			item: `https://30tools.com${crumb.url}`,
		})),
	};
};

/**
 * @typedef {Object} Breadcrumb
 * @property {string} name
 * @property {string} url
 * @property {boolean} [isLast]
 */

/**
 * @param {Object} props
 * @param {Breadcrumb[]} [props.customBreadcrumbs]
 * @param {string} [props.homeText="Home"]
 * @param {boolean} [props.suppressSchema=false]
 */
export default function BreadcrumbsEnhanced({
	customBreadcrumbs = [],
	homeText = "Home",
	suppressSchema = false,
}) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const lang = searchParams.get("lang") || "en";
	const queryString = lang !== "en" ? `?lang=${lang}` : "";

	// Generate breadcrumbs from URL path if custom ones aren't provided
	const generateBreadcrumbs = () => {
		if (customBreadcrumbs.length > 0) {
			return [
				{ name: homeText, url: `/${queryString}` },
				...customBreadcrumbs.map((cb) => ({
					...cb,
					url: `${cb.url}${queryString}`,
				})),
			];
		}

		const pathSegments = pathname.split("/").filter(Boolean);
		const breadcrumbs = [{ name: homeText, url: `/${queryString}` }];

		let currentPath = "";

		pathSegments.forEach((segment, index) => {
			currentPath += `/${segment}`;

			// Beautify segment names
			const name = segment
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");

			breadcrumbs.push({
				name,
				url: `${currentPath}${queryString}`,
				isLast: index === pathSegments.length - 1,
			});
		});

		return breadcrumbs;
	};

	const breadcrumbs = generateBreadcrumbs();
	const schema = suppressSchema ? null : generateBreadcrumbSchema(breadcrumbs);

	return (
		<>
			{/* Schema.org structured data */}
			{schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
				/>
			)}

			{/* Visible breadcrumbs */}
			<nav
				aria-label="Breadcrumb navigation"
				className="flex items-center space-x-1 text-sm text-muted-foreground mb-6 bg-muted/30 px-4 py-2 "
			>
				<div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
					{breadcrumbs.map((crumb, index) => (
						<div
							key={index}
							className="flex items-center space-x-1 whitespace-nowrap"
						>
							{index === 0 && (
								<Home className="h-4 w-4 mr-1" aria-hidden="true" />
							)}

							{crumb.isLast ? (
								<span
									className="font-medium text-foreground"
									aria-current="page"
								>
									{crumb.name}
								</span>
							) : (
								<Link
									href={crumb.url}
									className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
									title={`Go to ${crumb.name}`}
								>
									{crumb.name}
								</Link>
							)}

							{index < breadcrumbs.length - 1 && (
								<ChevronRight
									className="h-3 w-3 text-muted-foreground/60"
									aria-hidden="true"
								/>
							)}
						</div>
					))}
				</div>
			</nav>
		</>
	);
}

// Rich breadcrumb component with enhanced SEO features
export function RichBreadcrumbs({
	breadcrumbs,
	showHome = true,
	showSchema = true,
	className = "",
	variant = "default", // "default", "minimal", "pills"
}) {
	const _pathname = usePathname();

	const processedBreadcrumbs = showHome
		? [{ name: "Home", url: "/", icon: Home }, ...breadcrumbs]
		: breadcrumbs;

	const schema = showSchema
		? generateBreadcrumbSchema(processedBreadcrumbs)
		: null;

	const variantClasses = {
		default: "bg-muted/30 px-4 py-2 ",
		minimal: "border-b pb-2",
		pills: "space-x-2",
	};

	return (
		<>
			{showSchema && schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
				/>
			)}

			<nav
				aria-label="Breadcrumb"
				className={`flex items-center space-x-1 text-sm text-muted-foreground mb-6 ${variantClasses[variant]} ${className}`}
			>
				<ol className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
					{processedBreadcrumbs.map((crumb, index) => {
						const isLast = index === processedBreadcrumbs.length - 1;
						const Icon = crumb.icon;

						return (
							<li
								key={index}
								className="flex items-center space-x-1 whitespace-nowrap"
							>
								<div className="flex items-center">
									{Icon && <Icon className="h-4 w-4 mr-1" aria-hidden="true" />}

									{isLast ? (
										<span
											className="font-medium text-foreground"
											aria-current="page"
										>
											{crumb.name}
										</span>
									) : (
										<Link
											href={crumb.url}
											className={`hover:text-foreground transition-colors ${
												variant === "pills"
													? "bg-muted px-2 py-1 "
													: "underline-offset-4 hover:underline"
											}`}
											title={`Navigate to ${crumb.name}`}
										>
											{crumb.name}
										</Link>
									)}
								</div>

								{!isLast && (
									<ChevronRight
										className="h-3 w-3 text-muted-foreground/60 mx-1"
										aria-hidden="true"
									/>
								)}
							</li>
						);
					})}
				</ol>
			</nav>
		</>
	);
}
