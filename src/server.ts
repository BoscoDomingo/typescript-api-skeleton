import path from "node:path";

import dotenv from "dotenv";
import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";

import sampleData from "../data/sample.json" with { type: "json" };

import { BaseController } from "./controllers/base.controller.js";
import { BaseRouter } from "./routes/base.route.js";
import { BaseService } from "./services/base.service.js";

dotenv.config();
const app = express();

app.set("port", process.env.PORT ?? 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	express.static(path.join(import.meta.url, "../public"), {
		maxAge: 31557600000,
	}),
);

// DI (Composition Root)
const baseService = new BaseService(sampleData);
const baseController = new BaseController(baseService);
const baseRouter = new BaseRouter(baseController);

app.use("/", baseRouter.configureRouter());

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
	console.error(
		`Error in request: ${req.method} - ${req.url}\n`,
		err.message,
		err.stack,
	);

	if (err instanceof SyntaxError) {
		res.status(400).json({
			message: "Bad Request",
		});
		return;
	}
	res.status(500).json({
		message: "Internal server error",
	});
});

export default app;
