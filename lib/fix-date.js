const padMe = input => {
  return input.toString().length > 1 ? `${input}` : `0${input}`
}

const fixDate = date => {
  const base = new Date(date)
  const year = base.getFullYear()
  const month = padMe(base.getMonth() + 1)
  const day = padMe(base.getDate())
  return `${year}-${month}-${day}`
}

export default fixDate