import fastify from "fastify";

import cors from "@fastify/cors";
import compress from "@fastify/compress";

import * as HOST from "~/utils/host";

const app = fastify();

app.register(cors, { origin: "*" });
app.register(compress);

app.get("/", async (_, rep) => {
	rep.status(200);
	return {
		message: "flamrdevs-image",
	};
});

app.get("/host", async (_, rep) => {
	rep.status(200);
	return {
		site: HOST.SITE(),
		static: HOST.STATIC(),
		web: HOST.WEB(),
		api: HOST.API(),
		image: HOST.IMAGE(),
	};
});

app.setNotFoundHandler(async (_, rep) => {
	rep.status(404);
	return {
		message: "not found",
	};
});

export default app;
