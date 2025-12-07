
import { getAllCategories, getToolsByCategory } from "@/constants/tools-utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Visual Sitemap | 30Tools",
    description: "Browse all 135+ free online tools available on 30Tools. Find image converters, PDF tools, video downloaders, and more.",
};

export default function VisualSitemapPage() {
    const categories = getAllCategories();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Visual Sitemap
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400">
                        A complete overview of all free tools available on our platform.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid gap-12">
                    {categories.map(({ key, name, description, icon }) => {
                        const tools = getToolsByCategory(key);
                        if (tools.length === 0) return null;

                        return (
                            <section key={key} id={key} className="space-y-6">
                                <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        {/* Render icon if simple string or component */}
                                        <span>{name}</span>
                                        <span className="text-sm font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                                            {tools.length}
                                        </span>
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 mt-1">{description}</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {tools.map((tool: any) => (
                                        <Link
                                            key={tool.id}
                                            href={tool.external ? tool.route : tool.route}
                                            className="group relative flex flex-col p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200"
                                        >
                                            <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                {tool.name}
                                            </h3>
                                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                                                {tool.description}
                                            </p>
                                            <div className="mt-auto pt-4 flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                Go to Tool <ArrowRight className="w-3 h-3 ml-1" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
