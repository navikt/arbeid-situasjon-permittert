export default input => {
  const now = new Date()
  const date = new Date(input)
  const thisYear = now.getFullYear()
  const year = date.getFullYear()

  const monthNames = {
    0: 'januar',
    1: 'februar',
    2: 'mars',
    3: 'april',
    4: 'mai',
    5: 'juni',
    6: 'juli',
    7: 'august',
    8: 'september',
    9: 'oktober',
    10: 'november',
    11: 'desember'
  }

  return `${date.getDate()}. ${monthNames[date.getMonth()]}${thisYear !== year ? ' ' + year : ''}`
}
