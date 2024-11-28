export class BaseService {
	// You can either inject the dependency using a repository interface for lower coupling
	// or call the DB driver in this class directly. First one is recommended, but might take more time.
	constructor(private readonly sampleData: { id: string; name: string }[]) {}

	getSampleData(): { id: string; name: string }[] {
		try {
			return this.sampleData;
		} catch (error) {
			throw new Error("Unable to retrieve data");
		}
	}
}
