import { useEffect, useState } from "react"

import type { League } from "./types"

export const leagueId = 177161
export const apiBaseUrl = `https://api.eslgaming.com/play/v1/leagues/${ leagueId }`

export const GetApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState<League | null>(null)
  
  useEffect(() => {
    const getData = async() => {
      setLoading(true)
      setError(false)

      try {
        const response = await fetch(apiBaseUrl)
        const data = await response.json()
        
        setData(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [setData])

  return { data, loading, error }
}
