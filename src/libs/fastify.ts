import type { FastifyInstance, FastifyReply } from "fastify";

type Route = (fastify: FastifyInstance, opts: { prefix: string }, done: (err?: Error) => void) => void;

const route = (fn: Route) => fn;

function json<T>(reply: FastifyReply, status: number, object: T) {
	reply.status(status);
	return object;
}

class APIError {
	constructor(public status: number, public message: string) {}
}

const isAPIError = (value: unknown): value is APIError => value instanceof APIError;
const apierror = (status: number, message: string) => new APIError(status, message);

export { route };
export { json };
export { APIError, isAPIError, apierror };
