import { redirect } from 'next/navigation';

export const metadata = {
    title: "MP4 to MP3 Converter | Legacy URL",
    description: "This path has moved to /mp4-to-mp3. You will be redirected automatically.",
    alternates: {
        canonical: "https://30tools.com/mp4-to-mp3"
    },
    robots: {
        index: false,
        follow: true
    }
};

export default function LegacyMP4ToMP3ConverterPage() {
    redirect('/mp4-to-mp3');
}
