import fastify from "fastify";

import { __PROD__ } from "~/const/env";

import { json, isAPIError } from "~/libs/fastify";
import { cors, compress, cache, image } from "~/libs/@fastify/plugins";

import routeTilde from "~/routes/~";
import routeCore from "~/routes/core";

const app = fastify({ logger: !__PROD__ })
	.register(cors, { origin: "*" })
	.register(compress)
	.register(cache)
	.register(image)

	.register(routeTilde, { prefix: "/~" })
	.register(routeCore, { prefix: "/core" })

	.get("/", async (_, rep) => json(rep.headers({ "x-me": "flamrdevs" }), 200, { name: "image" }))
	.setNotFoundHandler(async (_, rep) => json(rep, 404, { message: "Not found" }))
	.setErrorHandler(async (error, _, rep) => {
		let status = 500;
		let message = "Internal server error";

		if (isAPIError(error)) {
			status = error.status;
			message = error.message;
		} else if (error instanceof Error) {
			message = error.message;
		}

		return json(rep, status, { message });
	});

export default app;
