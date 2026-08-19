export const combineQueryWithAuthor = (
  query?: string,
  author?: string | string[],
): string | undefined => {
  let authorPart = ""
  if (Array.isArray(author)) {
    authorPart = author.length ? `(${author.join(" OR ")})` : ""
  } else if (author) {
    authorPart = author
  }

  const parts = [query, authorPart].filter(Boolean)
  return parts.length ? parts.join(" ") : undefined
}
