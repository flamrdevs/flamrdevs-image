declare global {
	interface ExtendedEnv {
		readonly NODE_ENV?: "development" | "production";
		readonly PORT?: string;
		readonly KEY?: string;
	}

	namespace NodeJS {
		interface ProcessEnv extends ExtendedEnv {}
	}
}

export {};
