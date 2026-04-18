"use client";

import BaseConverter from "./BaseConverter";

const CONVERTERS: Record<string, (input: string) => string> = {
  "decimal-to-octal": (input: string) => {
    return input
      .trim()
      .split(/[\s,]+/)
      .map((dec) => {
        const num = parseInt(dec, 10);
        return isNaN(num) ? "" : num.toString(8);
      })
      .join(" ");
  },
  "binary-to-octal": (input: string) => {
    return input
      .trim()
      .split(/[\s,]+/)
      .map((bin) => {
        const num = parseInt(bin, 2);
        return isNaN(num) ? "" : num.toString(8);
      })
      .join(" ");
  },
  "ascii-to-text": (input: string) => {
    return input
      .trim()
      .split(/[\s,]+/)
      .map((code) => {
        const num = parseInt(code, 10);
        return isNaN(num) ? "" : String.fromCharCode(num);
      })
      .join("");
  },
  "ascii-to-binary": (input: string) => {
    return input
      .split("")
      .map((char) => {
        const binary = char.charCodeAt(0).toString(2);
        return "00000000".slice(binary.length) + binary;
      })
      .join(" ");
  },
  "decimal-to-binary": (input: string) => {
    return input
      .trim()
      .split(/[\s,]+/)
      .map((dec) => {
        const num = parseInt(dec, 10);
        if (isNaN(num)) return "";
        return num.toString(2);
      })
      .join(" ");
  },
  "decimal-to-text": (input: string) => {
    return input
      .trim()
      .split(/[\s,]+/)
      .map((dec) => {
        const num = parseInt(dec, 10);
        return isNaN(num) ? "" : String.fromCharCode(num);
      })
      .join("");
  },
  "binary-to-text": (input: string) => {
    return input
      .trim()
      .split(/[\s,]+/)
      .map((bin) => {
        const num = parseInt(bin, 2);
        return isNaN(num) ? "" : String.fromCharCode(num);
      })
      .join("");
  },
  "binary-to-ascii": (input: string) => {
    return input
      .trim()
      .split(/[\s,]+/)
      .map((bin) => {
        const num = parseInt(bin, 2);
        return isNaN(num) ? "" : String.fromCharCode(num);
      })
      .join("");
  },
  "decimal-to-hex": (input: string) => {
    return input
      .trim()
      .split(/[\s,]+/)
      .map((dec) => {
        const num = parseInt(dec, 10);
        return isNaN(num) ? "" : num.toString(16).toUpperCase();
      })
      .join(" ");
  },
  "binary-to-hex": (input: string) => {
    return input
      .trim()
      .split(/[\s,]+/)
      .map((bin) => {
        const num = parseInt(bin, 2);
        return isNaN(num) ? "" : num.toString(16).toUpperCase();
      })
      .join(" ");
  },
  "binary-to-decimal": (input: string) => {
    return input
      .trim()
      .split(/[\s,]+/)
      .map((bin) => {
        const num = parseInt(bin, 2);
        return isNaN(num) ? "" : num.toString(10);
      })
      .join(" ");
  },
};

interface StandardConverterProps {
  type: string;
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
  const convertFn = CONVERTERS[type] || ((input: string) => input);

  return (
    <BaseConverter
      title={title}
      inputPlaceholder={inputPlaceholder}
      outputPlaceholder={outputPlaceholder}
      convertFn={convertFn}
    />
  );
}
