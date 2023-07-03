declare global {
	interface ExtendedEnv {
		MODE?: "development" | "production";
		PORT?: string;
	}

	namespace NodeJS {
		interface ProcessEnv extends ExtendedEnv {}
	}
}

export {};
