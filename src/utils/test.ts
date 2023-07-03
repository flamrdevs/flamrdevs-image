import type { IncomingMessage, OutgoingHttpHeaders, ServerResponse } from "http";

import { expect } from "vitest";

interface Response {
	raw: { res: ServerResponse; req: IncomingMessage };
	rawPayload: Buffer;
	headers: OutgoingHttpHeaders;
	statusCode: number;
	statusMessage: string;
	trailers: { [key: string]: string };
	payload: string;
	body: string;
	json: <T = any>() => T;
	cookies: Array<
		{
			name: string;
			value: string;
			expires?: Date;
			maxAge?: number;
			secure?: boolean;
			httpOnly?: boolean;
			sameSite?: string;
		} & {
			[name: string]: unknown;
		}
	>;
}

const create = (res: Response, statusCode: number) => {
	expect(res.statusCode).toEqual(statusCode);

	return {
		headers(name: string, value: string | null) {
			expect(res.headers[name]).toEqual(value);
			return this;
		},
		content(type: "application/json; charset=utf-8" | "image/svg+xml") {
			for (const [key, value] of Object.entries(res.headers)) if (key.toLowerCase() === "content-type") expect(value).toEqual(type);
			return this;
		},
		json(value: unknown) {
			expect(res.json()).toEqual(value);
			return this;
		},
	};
};

const isOk = (res: Response) => create(res, 200);
const isBadRequest = (res: Response) => create(res, 400);
const isNotFound = (res: Response) => create(res, 404);

export { isOk, isBadRequest, isNotFound };
