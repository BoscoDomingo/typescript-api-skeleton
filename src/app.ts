import path from "node:path";

import dotenv from "dotenv";
import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";

import sampleData from "../data/sample.json";

import BaseController from "./controllers/base.controller.js";
import BaseRouter from "./routes/base.route.js";
import BaseService from "./services/base.service.js";

dotenv.config();
const app = express();

app.set("port", process.env.PORT ?? 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 }),
);

// DI (Composition Root)
const baseService = new BaseService(sampleData);
const baseController = new BaseController(baseService);
const baseRouter = new BaseRouter(baseController);

app.use("/", baseRouter.configureRouter());

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
	// eslint-disable-next-line no-console
	console.error(`Error in request: ${req.method} - ${req.url}\n`, err.stack);
	const returnedErrorMessage = {
		message:
			process.env.NODE_ENV === "production"
				? "Internal server error"
				: err.message,
	};

	if (err instanceof SyntaxError) {
		res.status(400).json(returnedErrorMessage);
		return;
	}
	res.status(500).json(returnedErrorMessage);
});

export default app;
