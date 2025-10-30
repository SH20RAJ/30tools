export const metadata = {
    title: 'Free Online Calculators - Math, Finance, Health & More | 30tools',
    description: 'Collection of free online calculators for math, finance, health, and everyday calculations. No registration required, instant results.',
    keywords: 'online calculators, free calculators, math calculator, finance calculator, health calculator, percentage calculator, mortgage calculator, bmi calculator'
};

export default function CalculatorsLayout({ children }) {
    return (
        <div className="min-h-screen bg-background">
            {children}
        </div>
    );
}