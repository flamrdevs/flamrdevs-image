require("./dist/app")
	.default.listen({ host: "0.0.0.0", port: Number(process.env.PORT || 8000) })
	.then((address) => console.log(`[flamrdevs-image]: ${address}`))
	.catch((error) => console.error(error));
