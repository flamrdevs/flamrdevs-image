import * as si from "simple-icons";

import { h } from "~/libs/image";
import type { Component } from "~/libs/image";

type Props = {
	size?: string | number;
	fill?: string;
};

const DEFAULT_SIZE = 20;

const create =
	(d: string): Component<Props> =>
	({ size = DEFAULT_SIZE, fill = "currentColor" }) => {
		return h("svg", {
			role: "img",
			viewBox: "0 0 24 24",
			width: size,
			height: size,
			fill,
			children: h("path", { d }),
		});
	};

const simpleIcons = {
	adonisjs: create(si.siAdonisjs.path),
	"alpine.js": create(si.siAlpinedotjs.path),
	appwrite: create(si.siAppwrite.path),
	astro: create(si.siAstro.path),
	axios: create(si.siAxios.path),
	behance: create(si.siBehance.path),
	bitbucket: create(si.siBitbucket.path),
	capacitor: create(si.siCapacitor.path),
	cloudflare: create(si.siCloudflare.path),
	cloudflarepages: create(si.siCloudflarepages.path),
	codeberg: create(si.siCodeberg.path),
	commitlint: create(si.siCommitlint.path),
	css3: create(si.siCss3.path),
	deno: create(si.siDeno.path),
	discord: create(si.siDiscord.path),
	docker: create(si.siDocker.path),
	dribbble: create(si.siDribbble.path),
	electron: create(si.siElectron.path),
	eslint: create(si.siEslint.path),
	express: create(si.siExpress.path),
	fastify: create(si.siFastify.path),
	figma: create(si.siFigma.path),
	firebase: create(si.siFirebase.path),
	flutter: create(si.siFlutter.path),
	git: create(si.siGit.path),
	github: create(si.siGithub.path),
	githubpages: create(si.siGithubpages.path),
	githubactions: create(si.siGithubactions.path),
	gitlab: create(si.siGitlab.path),
	graphql: create(si.siGraphql.path),
	html5: create(si.siHtml5.path),
	instagram: create(si.siInstagram.path),
	javascript: create(si.siJavascript.path),
	json: create(si.siJson.path),
	koyeb: create(si.siKoyeb.path),
	laravel: create(si.siLaravel.path),
	linkedin: create(si.siLinkedin.path),
	mastodon: create(si.siMastodon.path),
	mongodb: create(si.siMongodb.path),
	mysql: create(si.siMysql.path),
	nativescript: create(si.siNativescript.path),
	nestjs: create(si.siNestjs.path),
	netlify: create(si.siNetlify.path),
	"next.js": create(si.siNextdotjs.path),
	nginx: create(si.siNginx.path),
	"node.js": create(si.siNodedotjs.path),
	notion: create(si.siNotion.path),
	npm: create(si.siNpm.path),
	"nuxt.js": create(si.siNuxtdotjs.path),
	openai: create(si.siOpenai.path),
	penpot: create(si.siPenpot.path),
	pexels: create(si.siPexels.path),
	php: create(si.siPhp.path),
	pinterest: create(si.siPinterest.path),
	planetscale: create(si.siPlanetscale.path),
	pnpm: create(si.siPnpm.path),
	pocketbase: create(si.siPocketbase.path),
	postgresql: create(si.siPostgresql.path),
	preact: create(si.siPreact.path),
	producthunt: create(si.siProducthunt.path),
	pwa: create(si.siPwa.path),
	python: create(si.siPython.path),
	react: create(si.siReact.path),
	redux: create(si.siRedux.path),
	remix: create(si.siRemix.path),
	rust: create(si.siRust.path),
	simpleicons: create(si.siSimpleicons.path),
	slack: create(si.siSlack.path),
	solid: create(si.siSolid.path),
	supabase: create(si.siSupabase.path),
	svelte: create(si.siSvelte.path),
	tailwindcss: create(si.siTailwindcss.path),
	tauri: create(si.siTauri.path),
	"three.js": create(si.siThreedotjs.path),
	tiktok: create(si.siTiktok.path),
	turborepo: create(si.siTurborepo.path),
	twitter: create(si.siTwitter.path),
	typescript: create(si.siTypescript.path),
	unsplash: create(si.siUnsplash.path),
	vercel: create(si.siVercel.path),
	visualstudiocode: create(si.siVisualstudiocode.path),
	vite: create(si.siVite.path),
	vitest: create(si.siVitest.path),
	"vue.js": create(si.siVuedotjs.path),
	windows: create(si.siWindows.path),
	xampp: create(si.siXampp.path),
	youtube: create(si.siYoutube.path),
};

type Icon = keyof typeof simpleIcons;

const ICON_DEFAULT = "github" satisfies Icon;

const isSimpleIcons = (value?: unknown): value is Icon => (String(value) as Icon) in simpleIcons;

export type { Props };
export { ICON_DEFAULT };
export { isSimpleIcons };
export { simpleIcons };
