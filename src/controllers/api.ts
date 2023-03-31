import { Application, Request, Response } from "express";

import SampleData from "../../data/sample.json";

export const loadApiEndpoints = (app: Application): void => {
	app.get("/", (req: Request, res: Response) => {
		return res.status(200).send(SampleData);
	});
};
