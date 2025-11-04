'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import AuthComponent from '@/components/auth/AuthComponent';

export default function ConverterToolsNavbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <RefreshCw className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">30tools</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Converters</span>
                    </Link>
                    <div className="flex items-center space-x-2">
                        <Link href="/search">
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                Other Tools
                            </Button>
                        </Link>
                        <Link href="/search">
                            <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                                All Tools
                            </Button>
                        </Link>
                        <AuthComponent />
                    </div>
                </div>
            </div>
        </nav>
    );
}