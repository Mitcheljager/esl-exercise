type Name = {
  full: string
  normal: string
  short: string
}

type Dates = {
  begin: string
  end: string
} 

type Timeline = {
  signUp: Dates
  inProgress: Dates
  finished: Dates
  checkIn: Dates
  lateSignUp: Dates
}

export type Contestant = {
  id: number
  seed: number
  status: string
  alias: string
  name: string
  region?: string
}

export type Participant = {
  id: number
  place: number
  points: number[]
}

export type League = {
  name: Name
  timeline: Timeline
  [key: string]: any
}

export type Result = {
  participants: Participant[]
  beginAt: string
  [key: string]: any
}
