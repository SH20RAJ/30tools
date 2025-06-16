import Calculator from '@/components/tools/Calculator';

export const metadata = {
  title: 'Advanced Calculator - Scientific Calculator | 30tools',
  description: 'Scientific calculator with advanced functions including trigonometry, logarithms, and statistical operations.',
  keywords: 'calculator, scientific calculator, advanced calculator, math calculator, trigonometry, logarithm',
  openGraph: {
    title: 'Advanced Calculator - Scientific Calculator | 30tools',
    description: 'Scientific calculator with advanced functions.',
    type: 'website',
  },
};

export default function CalculatorPage() {
  return <Calculator />;
}
