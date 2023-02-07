export const getFutureDates = (days = 4) => {
  let localDate = new Date()
  localDate.setDate(localDate.getDate() + days)
  return localDate.getTime()
}