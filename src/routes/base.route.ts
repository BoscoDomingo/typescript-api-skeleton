import { Router, json } from "express";

import type { BaseController } from "../controllers/base.controller.js";

export class BaseRouter {
	constructor(
		private readonly sampleController: BaseController,
		private readonly router = Router(),
	) {}

	configureRouter(): Router {
		this.router
			.route("/")
			.get(this.sampleController.getSampleData.bind(this.sampleController))
			.post(
				json(),
				this.sampleController.postReceivedData.bind(this.sampleController),
			);
		return this.router;
	}
}
