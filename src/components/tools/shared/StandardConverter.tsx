"use client";

import BaseConverter, { type BaseConverterKind } from "./BaseConverter";

interface StandardConverterProps {
	type: BaseConverterKind;
	title: string;
	inputPlaceholder: string;
	outputPlaceholder: string;
}

export default function StandardConverter({
	type,
	title,
	inputPlaceholder,
	outputPlaceholder,
}: StandardConverterProps) {
	return (
		<BaseConverter
			title={title}
			inputPlaceholder={inputPlaceholder}
			outputPlaceholder={outputPlaceholder}
			converterKind={type}
		/>
	);
}
