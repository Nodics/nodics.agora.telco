import { expect, it } from "vitest";
import { readListingLocation, listingLocationSearch } from "./listingLocation";
it("restores search, category, brand, sorting and page after navigation", () => {
  expect(
    readListingLocation(
      listingLocationSearch("phone", "smartphones", "Nodics", "price-asc", 2),
    ),
  ).toEqual({
    query: "phone",
    collectionCode: "smartphones",
    brand: "Nodics",
    sortCode: "price-asc",
    page: 2,
  });
  expect(listingLocationSearch("", "", "", "recommended", 1)).toBe("");
});
it("rejects malformed page and sort preferences", () => {
  const result = readListingLocation("?page=-3&sort=invalid");
  expect(result.page).toBe(1);
  expect(result.sortCode).toBe("recommended");
});
