const sorts = ["recommended", "name-asc", "price-asc", "price-desc"];
/** Restores browser preferences; Product remains authoritative for filtering. */
export function readListingLocation(search: string) {
  const params = new URLSearchParams(search);
  const page = Number(params.get("page") || "1");
  const sort = params.get("sort") || "recommended";
  return {
    page: Number.isSafeInteger(page) && page > 0 && page <= 10000 ? page : 1,
    sortCode: sorts.includes(sort) ? sort : "recommended",
    brand: params.get("brand") || "",
    query: params.get("q") || "",
    collectionCode: params.get("category") || "",
  };
}
export function listingLocationSearch(
  query: string,
  collectionCode: string,
  brand: string,
  sortCode: string,
  page: number,
) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries({
    q: query,
    category: collectionCode,
    brand,
    sort: sortCode === "recommended" ? "" : sortCode,
    page: page > 1 ? String(page) : "",
  }))
    if (value) params.set(key, value);
  return params.size ? `?${params}` : "";
}
