import type { NextFunction, Request, Response } from "express";

import type { BaseService } from "../services/base.service.js";

export class BaseController {
	constructor(private readonly baseService: BaseService) {}

	public getSampleData(_req: Request, res: Response, next: NextFunction): void {
		try {
			const sampleData = this.baseService.getSampleData();
			res.json(sampleData);
		} catch (error) {
			next(error);
		}
	}

	public postReceivedData(
		req: Request,
		res: Response,
		next: NextFunction,
	): void {
		try {
			if (Object.keys(req.body).length === 0) {
				res.status(400).send();
				return;
			}
			const data = JSON.stringify(req.body, null, 2);
			res.json({ message: "Message received", data });
		} catch (error) {
			next(error);
		}
	}
}
