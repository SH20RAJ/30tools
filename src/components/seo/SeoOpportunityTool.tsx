import ApiKeyTester from "@/components/tools/developer/ApiKeyTester";
import ExamPhotoResizer from "@/components/tools/exam/ExamPhotoResizer";
import AttendanceCalculator from "@/components/tools/calculators/AttendanceCalculator";
import AcademicGradesCalculator from "@/components/tools/calculators/AcademicGradesCalculator";
import QrGeneratorPremium from "@/components/tools/utilities/QrGeneratorPremium";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import MetaTagGenerator from "@/components/tools/built-ins/MetaTagGenerator";
import type { SeoOpportunity } from "@/data/seo-opportunities";

export default function SeoOpportunityTool({
	opportunity,
}: {
	opportunity: SeoOpportunity;
}) {
	const preset = opportunity.toolPreset;

	if (preset.type === "exam-image") {
		return (
			<ExamPhotoResizer
				examName={preset.examName}
				presetWidth={preset.width}
				presetHeight={preset.height}
				presetUnit={preset.unit || "px"}
				presetMinKb={preset.minKb}
				presetMaxKb={preset.maxKb}
				showSignatureOption={preset.showSignatureOption ?? true}
				disclaimer="Always verify the latest official upload requirements before submitting a form."
			/>
		);
	}

	if (preset.type === "attendance") {
		return <AttendanceCalculator />;
	}

	if (preset.type === "grades") {
		return <AcademicGradesCalculator defaultTab={preset.defaultTab} />;
	}

	if (preset.type === "api-key") {
		return <ApiKeyTester toolName={preset.provider} />;
	}

	if (preset.type === "qr") {
		return <QrGeneratorPremium initialText={preset.sample} />;
	}

	if (preset.type === "seo-check" && preset.mode === "open-graph") {
		return <BuiltInSafeHttp toolId="open-graph-checker" />;
	}

	return <MetaTagGenerator />;
}
