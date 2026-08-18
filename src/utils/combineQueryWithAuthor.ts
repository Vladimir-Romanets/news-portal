export const combineQueryWithAuthor = (
  query?: string,
  author?: string,
): string | undefined => {
  const parts = [query, author].filter(Boolean)
  return parts.length ? parts.join(" ") : undefined
}
