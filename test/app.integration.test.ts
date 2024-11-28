import request from "supertest";

import sampleData from "../data/sample.json";
import app from "../src/app.js";

describe("GET /", () => {
	it("should return 200 OK with the sample data", async () => {
		const response = await request(app).get("/").send();

		expect(response.statusCode).toEqual(200);
		expect(response.body).toEqual(sampleData);
	});
});

describe("POST /", () => {
	it("should return 200 OK with a proper body", async () => {
		const dataToSend = {
			valid: true,
		};

		const response = await request(app).post("/").send(dataToSend);

		expect(response.statusCode).toEqual(200);
		expect(response.body).toEqual({
			message: "Message received",
			data: JSON.stringify(dataToSend, null, 2),
		});
	});

	it("should return 400 if it fails to parse", async () => {
		const dataToSend = "invalid";

		const response = await request(app).post("/").send(dataToSend);

		expect(response.statusCode).toEqual(400);
	});

	// supertest is giving errors when setting the content type at the time of writing this
	it.skip("should return 500 if Content-Type is wrong", async () => {
		const dataToSend = {
			valid: true,
		};

		const response = await request(app)
			.post("/")
			.send(dataToSend)
			.set("Content-Type", "text/html");

		expect(response.statusCode).toEqual(500);
	});
});
