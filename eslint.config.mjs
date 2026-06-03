import nextVitals from "eslint-config-next/core-web-vitals";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = [
	...nextVitals,
	{
		ignores: [
			"node_modules/**",
			".next/**",
			".open-next/**",
			".wrangler/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
			"ecc/**",
			"public/sw.js",
			"public/workbox-*.js",
			"scripts/**",
			"src/scripts/**",
			"seo-implementation/**",
			"analyze_tools.cjs",
		],
	},
	{
		plugins: {
			"unused-imports": unusedImports,
		},
		rules: {
			"no-unused-vars": "off",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
			"react/no-unescaped-entities": "off",
		},
	},
];

export default eslintConfig;
