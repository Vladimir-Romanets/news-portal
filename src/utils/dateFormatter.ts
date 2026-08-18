export const dateFormatter = (isoDate: string) => {
  const date = new Date(isoDate)

  return new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date)
}
