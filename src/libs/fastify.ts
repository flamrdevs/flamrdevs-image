import type { FastifyInstance, FastifyReply } from "fastify";

type Route = (fastify: FastifyInstance, opts: { prefix: string }, done: (err?: Error) => void) => void;

const route = (fn: Route) => fn;

function json<T>(reply: FastifyReply, status: number, object: T) {
	reply.status(status);
	return object;
}

export { route, json };
