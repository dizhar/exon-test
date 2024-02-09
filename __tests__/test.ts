import * as request from "supertest"; // Using supertest for api calls
import { mockWebsites, Website } from "../data/mocks"; // Import mock data

describe("Search function", () => {
  const baseUrl = process.env.BASE_URL; // Fix endpoint URL
  const searchTerm = process.env.SEARCH_TERM as string; // Replace with actual search term

  async function makeApiCall(searchTerm: string): Promise<any> {
    // Create a test agent using supertest
    const app = request.agent(baseUrl);

    const response = await app
      .get(`/getSearchTermOptions/${searchTerm}`)
      .set("Content-Type", "application/json");
    return response.body;
  }

  it("should rank website with higher seniority higher", async () => {
    const youngerWebsite = mockWebsites.find((p) => p.seniority < 10); // Pick a young website
    const olderWebsite = mockWebsites.find((p) => p.seniority > 10); // Pick an older website

    const results = await makeApiCall(searchTerm);

    // Assert that older website rank is higher (or at least equal)
    expect(
      results.findIndex((p: Website) => p.id === olderWebsite?.id)
    ).toBeLessThanOrEqual(
      results.findIndex((p: Website) => p.id === youngerWebsite?.id)
    );
  });

  it('should return a success response with empty data and "No Data Found" message when no matches are found', async () => {
    // Assuming a mock database with no matching data
    const searchTerm = "nonexistent-search-term";

    const results = await makeApiCall(searchTerm);

    expect(results).toEqual({
      status: "success",
      data: [],
      msg: "No Data Found",
    });
  });

  // Error handling tests:
  it("should return an error response when the API server is unavailable", async () => {
    // Simulate server unavailability (e.g., using network mocking)
    jest
      .spyOn(request.agent(baseUrl), "get")
      .mockRejectedValue(new Error("Network error"));

    try {
      await makeApiCall(searchTerm);
      fail("Error expected but not thrown");
    } catch (error: any) {
      // Assert error properties using Jest matchers
      expect(error.message).toBe("Sever Unavailable");
    }
  });
});
