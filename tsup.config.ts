import { defineConfig } from "tsup";

import { config } from "dotenv";

export default defineConfig(async ({ env }) => {
	const dotenv = config();
	if (dotenv.error) throw dotenv.error;

	const ENV = {
		...(dotenv.parsed || {}),
		...(env || {}),
	};

	const DEV = ENV.NODE_ENV === "development";
	const PROD = ENV.NODE_ENV === "production";

	return {
		env: ENV,
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
