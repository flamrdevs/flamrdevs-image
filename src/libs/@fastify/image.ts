import fp from "fastify-plugin";

import image from "../image";
import type { ImageFunction } from "../image";

declare module "fastify" {
	interface FastifyInstance {
		image: ImageFunction;
	}
}

export default fp(async (fastify) => {
	fastify.decorate("image", await image());
});
