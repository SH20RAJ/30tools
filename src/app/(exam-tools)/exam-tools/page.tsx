import ToolLayout from "@/components/tools/shared/ToolLayout";
import ExamPillar from "@/components/pillars/ExamPillar";

export const metadata = {
	title: "Free Exam Image & Form Tools Online - No Signup | 30tools",
	description: "Prepare photos, signatures, and PDFs for online UPSC, SSC, NEET, and JEE forms. Crop, resize, and compress to exact KB limits securely in your browser.",
	keywords: "exam tools, upsc photo resizer, ssc photo resizer, neet photo resizer, jee photo resizer, signature resizer 20kb, photo compressor 50kb, exam form resizer, 30tools exam",
	alternates: {
		canonical: "https://30tools.com/exam-tools",
	},
	openGraph: {
		title: "Free Exam Image & Form Tools Online - No Signup | 30tools",
		description: "Prepare photos, signatures, and PDFs for online UPSC, SSC, NEET, and JEE forms. Crop, resize, and compress to exact KB limits securely in your browser.",
		url: "https://30tools.com/exam-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Exam Image & Form Tools Online - No Signup | 30tools",
		description: "Prepare photos, signatures, and PDFs for online UPSC, SSC, NEET, and JEE forms. Crop, resize, and compress to exact KB limits securely in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "exam-tools",
		name: "Exam Image & Form Tools",
		description: "Resize and compress photos, signatures, and PDF certificates to the exact dimensions and size requirements specified in official exam notifications.",
		route: "/exam-tools",
		category: "exam-tools",
		article: `
## Official Exam Document Preparation Online
Preparing files for government and university entrance exam forms can be difficult due to strict size requirements. 30tools provides direct browser-based utilities to crop, resize, and compress your uploads to standard formats.

### NTA JEE & NEET Photo Preparation
Quickly crop your passport photo to NTA specifications (10KB to 200KB) and signatures (4KB to 30KB). You can also resize the NEET postcard photo (4x6 inches) with correct margins.

### UPSC & SSC Form Resizers
Apply the required UPSC IAS/IFS square dimensions (350x350 pixels) or the standard SSC 3.5cm x 4.5cm dimensions to your photo and signature with correct KB weight targets.

### 100% Client-Side Processing
We respect your privacy. No personal files are uploaded to our servers. All document cropping, resizing, and compression are processed locally inside your browser window.
		`
	};

	return (
		<ToolLayout tool={tool}>
			<ExamPillar />
		</ToolLayout>
	);
}
