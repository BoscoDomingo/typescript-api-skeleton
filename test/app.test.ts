import request from "supertest";

import assert from "node:assert";
import { describe, it } from "node:test";
import sampleData from "../data/sample.json" with { type: "json" };
import app from "../src/server.ts";

describe("GET /", () => {
	it("should return 200 OK with the sample data", async () => {
		const response = await request(app).get("/").send();

		assert.deepStrictEqual(response.statusCode, 200);
		assert.deepStrictEqual(response.body, sampleData);
	});
});

describe("POST /", () => {
	it("should return 200 OK with a proper body", async () => {
		const dataToSend = {
			valid: true,
		};

		const response = await request(app).post("/").send(dataToSend);

		assert.deepStrictEqual(response.statusCode, 200);
		assert.deepStrictEqual(response.body, {
			message: "Message received",
			data: JSON.stringify(dataToSend, null, 2),
		});
	});

	it("should return 400 if it fails to parse", async () => {
		const response = await request(app).post("/").send();

		assert.deepStrictEqual(response.statusCode, 400);
	});
});
