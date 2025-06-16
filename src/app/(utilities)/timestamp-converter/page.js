import TimestampConverter from "@/components/tools/utilities/TimestampConverterTool";

export const metadata = {
  title: 'Timestamp Converter - Unix Time Converter | 30tools',
  description: 'Convert between Unix timestamps and readable dates. Convert epoch time to human-readable format and vice versa.',
  keywords: 'timestamp converter, unix timestamp, epoch time, date converter, unix time, timestamp to date',
  openGraph: {
    title: 'Timestamp Converter - Unix Time Converter | 30tools',
    description: 'Convert between Unix timestamps and readable dates.',
    type: 'website',
  },
};

export default function TimestampConverterPage() {
  return <TimestampConverter />;
}
