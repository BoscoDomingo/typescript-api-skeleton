import app from "./server.js";

const server = app.listen(app.get("port"), () => {
	console.log(
		`\tApp is running in http://localhost:${app.get("port")} in ${app.get(
			"env",
		)} mode`,
	);
	console.log("\tPress CTRL-C to stop\n");
});

export default server;
