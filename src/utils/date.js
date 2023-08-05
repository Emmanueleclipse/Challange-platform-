export const convertFromUTC = (date) => {
  const split = date.split('-')

  if (split.length !== 3) return null

  const year = parseInt(split[0])
  const month = parseInt(split[1]) - 1
  const day = parseInt(split[2])

  return new Date(Date.UTC(year, month, day))
}

export const convertDateToUTCString = (date, type) => {
  const newDate = new Date(date)

  // Add +1 day to the date
  if (type === 'end') newDate.setDate(newDate.getDate() + 1)
  else if (type === 'minus') newDate.setDate(newDate.getDate() - 1)
  return `${newDate.getUTCFullYear()}-${(newDate.getUTCMonth() + 1)
    .toString()
    .padStart(2, '0')}-${newDate.getUTCDate().toString().padStart(2, '0')}`
}
