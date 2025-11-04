import Link from 'next/link';
import { Heart, RefreshCw } from 'lucide-react';

export default function ConverterToolsFooter() {
    return (
        <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2 group mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                            <RefreshCw className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">30tools</span>
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © 2025 30tools. Made with <Heart className="w-4 h-4 inline text-red-500 animate-pulse" /> for everyone.
                    </p>
                </div>
            </div>
        </footer>
    );
}