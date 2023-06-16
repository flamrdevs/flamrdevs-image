declare global {
	interface ExtendedEnv {
		readonly MODE?: "development" | "production";
		readonly PORT?: string;
	}

	namespace NodeJS {
		interface ProcessEnv extends ExtendedEnv {}
	}
}

export {};
