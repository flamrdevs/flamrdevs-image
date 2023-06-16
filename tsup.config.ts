import { defineConfig } from "tsup";

export default defineConfig(async ({ env }) => {
	const DEV = env?.MODE === "development";
	const PROD = env?.MODE === "production";

	return {
		env: env,
		entry: ["src/app.ts"],
		target: "node18",
		format: ["cjs"],
		platform: "node",
		clean: true,
		dts: PROD,
		watch: DEV,
		minify: PROD && "terser",
	};
});
