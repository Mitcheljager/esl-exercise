interface Name {
  full: string
  normal: string
  short: string
}

interface Dates {
  begin: string
  end: string
} 

interface Timeline {
  signUp: Dates
  inProgress: Dates
  finished: Dates
  checkIn: Dates
  lateSignUp: Dates
}

export type League = {
  name: Name
  timeline: Timeline
  [key: string]: any
}
