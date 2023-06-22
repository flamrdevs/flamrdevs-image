import fastify from "fastify";

import cors from "@fastify/cors";
import compress from "@fastify/compress";

import { __PROD__ } from "~/const/env";

import { json } from "~/libs/fastify";

import cache from "~/libs/@fastify/cache";
import image from "~/libs/@fastify/image";

import routeTilde from "~/routes/~";
import routeCore from "~/routes/core";

import { isTypeElse } from "~/utils/string";

const app = fastify({ logger: !__PROD__ })
	.register(cors, { origin: "*" })
	.register(compress)

	.register(cache)
	.register(image)

	.register(routeTilde, { prefix: "/~" })
	.register(routeCore, { prefix: "/core" })

	.get("/", async (_, rep) => {
		return json(rep.headers({ "x-me": "flamrdevs" }), 200, {
			name: "flamrdevs-image",
		});
	})

	.setNotFoundHandler(async (_, rep) => {
		return json(rep, 404, {
			message: "not found",
		});
	})

	.setErrorHandler(async (error, _, rep) => {
		app.log.error(error);
		return json(rep, 500, {
			message: isTypeElse(error.message, "internal server error"),
		});
	});

export default app;
