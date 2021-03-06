export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

export function formattedDate(date: string): string {
  if (!date) return ""

  const formattedDate = new Date(date)
  const day = formattedDate.getDate()
  const month = monthNames[formattedDate.getMonth()]
  const year = formattedDate.getFullYear()

  return `${ day } ${ month } ${ year }`
}

export function formattedTime(date: string): string {
  if (!date) return ""

  const formattedDate = new Date(date)
  const hours = formattedDate.getHours()
  let minutes: string | number = formattedDate.getMinutes()
  if (minutes < 10) minutes = `0${ minutes }`

  return `${ hours }:${ minutes }`
}
