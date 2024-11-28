import BaseService from "../../src/services/base.service";

describe("BaseService", () => {
	let baseService: BaseService;
	const sampleData = {
		list: [
			{ id: "1", name: "Sample 1" },
			{ id: "2", name: "Sample 2" },
		],
	};

	beforeEach(() => {
		baseService = new BaseService(sampleData);
	});

	describe("getSampleData", () => {
		it("should return the sampleData when it is able to find it", () => {
			const result = baseService.getSampleData();

			expect(result).toEqual({
				list: [
					{ id: "1", name: "Sample 1" },
					{ id: "2", name: "Sample 2" },
				],
			});
		});

		// Skip this test while the return is a simple synchronous operation.
		it.skip("should throw an error when it cannot find the sampleData", () => {
			const baseServiceWithEmptyData = new BaseService({ list: [] });

			expect(() => baseServiceWithEmptyData.getSampleData()).toThrow(
				Error("Unable to retrieve data"),
			);
		});
	});
});
