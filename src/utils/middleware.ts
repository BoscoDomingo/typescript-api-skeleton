import type { NextFunction, Request, Response } from "express";

export function checkJSON(
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	if (req.headers["content-type"] !== "application/json") {
		res.status(400).send("Content-Type must be application/json");
		return;
	}
	next();
}

module.exports = {
	checkJSON,
};
