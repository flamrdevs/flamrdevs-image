import { route, json } from "~/libs/fastify";

import * as HOST from "~/utils/host";

export default route((fastify, _, done) => {
	fastify

		.get("/", async (_, rep) => {
			return json(rep, 200, {
				endpoints: {
					"/env": HOST.IMAGE("~", "env"),
				},
			});
		})

		.get("/env", async (_, rep) => {
			return json(rep, 200, {
				MODE: process.env.MODE,
			});
		});

	done();
});
