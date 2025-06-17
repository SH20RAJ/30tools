import EpochConverterTool from '@/components/tools/utilities/EpochConverterTool';

export const metadata = {
  title: 'Epoch Timestamp Converter - Unix Time to Date | 30tools',
  description: 'Convert Unix timestamps to human-readable dates and vice versa. Free online epoch time converter with multiple date formats.',
  keywords: 'epoch converter, unix timestamp, timestamp converter, epoch time, unix time converter, date to timestamp',
  openGraph: {
    title: 'Epoch Timestamp Converter - Unix Time to Date | 30tools',
    description: 'Convert Unix timestamps to dates and dates to timestamps instantly.',
    type: 'website',
  },
};

export default function EpochConverterPage() {
  return <EpochConverterTool />;
}
