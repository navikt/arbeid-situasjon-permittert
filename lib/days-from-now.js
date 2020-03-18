export default date => {
  const endDate = new Date(date)
  const now = new Date()
  return Math.floor((endDate.getTime() - now.getTime()) / 86400000)
}
