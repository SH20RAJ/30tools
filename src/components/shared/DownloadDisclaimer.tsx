import { AlertTriangle } from "lucide-react";

interface DownloadDisclaimerProps {
	platformName?: string;
}

export default function DownloadDisclaimer({ platformName = "this platform" }: DownloadDisclaimerProps) {
	return (
		<aside
			role="alert"
			aria-label="Copyright disclaimer"
			className="border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20 p-4 rounded-r-lg"
		>
			<div className="flex items-start gap-3">
				<AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
				<div className="space-y-1">
					<p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
						Copyright Notice
					</p>
					<p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
						This tool is intended for downloading non-copyrighted, personal, or openly licensed content only.
						30tools does not host copyrighted media. Users are solely responsible for ensuring they have the
						right to download content from {platformName}. Please respect copyright and only download content
						you own or have permission to use. See our{" "}
						<a href="/dmca" className="underline font-medium">DMCA Policy</a> and{" "}
						<a href="/terms" className="underline font-medium">Terms of Use</a> for details.
					</p>
				</div>
			</div>
		</aside>
	);
}
