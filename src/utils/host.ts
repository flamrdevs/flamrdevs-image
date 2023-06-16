import { __PROD__ } from "~/const/env";
import * as HOST from "~/const/host";

export const SITE = (...paths: string[]) => [__PROD__ ? HOST.SITE_PROD : HOST.SITE_DEV, ...paths].join("/");

export const STATIC = (...paths: string[]) => [__PROD__ ? HOST.STATIC_PROD : HOST.STATIC_DEV, ...paths].join("/");

export const WEB = (...paths: string[]) => [__PROD__ ? HOST.WEB_PROD : HOST.WEB_DEV, ...paths].join("/");

export const API = (...paths: string[]) => [__PROD__ ? HOST.API_PROD : HOST.API_DEV, ...paths].join("/");

export const IMAGE = (...paths: string[]) => [__PROD__ ? HOST.IMAGE_PROD : HOST.IMAGE_DEV, ...paths].join("/");
