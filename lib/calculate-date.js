export default (lastDay, daysBefore = 6) => {
  const firstDay = new Date(lastDay)
  return new Date(firstDay.setDate(firstDay.getDate() - daysBefore))
}