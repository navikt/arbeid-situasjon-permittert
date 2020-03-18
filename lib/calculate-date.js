import fixDate from './fix-date'
export default (lastDay, daysBefore = 6) => {
  const firstDay = new Date(lastDay)
  return fixDate(new Date(firstDay.setDate(firstDay.getDate() - daysBefore)))
}