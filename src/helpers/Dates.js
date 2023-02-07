export const datesAreOnSameDay = (first, second) =>
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();
