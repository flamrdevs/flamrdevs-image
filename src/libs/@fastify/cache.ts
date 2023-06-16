import fp from "fastify-plugin";

import { __PROD__ } from "~/const/env";

const VALUE = `public, max-age=${__PROD__ ? "86400" : "0"}`;

export default fp(async (fastify) => {
	fastify.addHook("onSend", async (_, rep, payload) => {
		rep.header("cache-control", VALUE);
		return payload;
	});
});
