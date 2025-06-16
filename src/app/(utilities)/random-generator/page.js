import RandomGenerator from '@/components/tools/RandomGenerator';

export const metadata = {
  title: 'Random Generator - Generate Random Data | 30tools',
  description: 'Generate random numbers, strings, passwords, and data. Customizable random data generator for various needs.',
  keywords: 'random generator, random number, random string, random data, number generator, string generator',
  openGraph: {
    title: 'Random Generator - Generate Random Data | 30tools',
    description: 'Generate random numbers, strings, and data.',
    type: 'website',
  },
};

export default function RandomGeneratorPage() {
  return <RandomGenerator />;
}
