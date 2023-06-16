import type { FastifyReply } from "fastify";

const createKey = (base: string, object: Record<string, string>) =>
	`${base}:${Object.entries(object)
		.map(([key, value]) => `${key}=${value}`)
		.join("&")}`;

const send = (reply: FastifyReply, result: string) => reply.headers({ "content-type": "image/svg+xml" }).send(result);

export { createKey, send };
