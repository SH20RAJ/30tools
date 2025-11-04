import CalculatorToolsNavbar from '@/components/navigation/CalculatorToolsNavbar';
import CalculatorToolsFooter from '@/components/footers/CalculatorToolsFooter';

export const metadata = {
    title: 'Calculator Tools - Free Online Calculators | 30tools',
    description: 'Collection of free online calculators for math, finance, health, and everyday calculations. No registration required, instant results.',
    keywords: 'online calculators, free calculators, math calculator, finance calculator, health calculator, percentage calculator, mortgage calculator, bmi calculator',
    openGraph: {
        title: "Calculator Tools - Free Online Calculators",
        description: "Collection of free online calculators for math, finance, health, and everyday calculations.",
        url: "https://30tools.com/calculator-tools",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/calculator-tools.jpg",
                width: 1200,
                height: 630,
                alt: "Free Calculator Tools"
            }
        ],
        type: "website"
    },
};

export default function CalculatorsLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <CalculatorToolsNavbar />
            <main className="flex-1">
                {children}
            </main>
            <CalculatorToolsFooter />
        </div>
    );
}