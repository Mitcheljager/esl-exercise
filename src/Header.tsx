import { GetApi } from "./lib/Api"
import { formattedDate } from "./lib/dates"

import "./scss/Header.scss"

export default function Header() {
  const { data, loading, error } = GetApi()
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: { error }</div>

  return (
    <div>
      <div>{ data?.name.full }</div>
      <div>{ formattedDate(data?.timeline.inProgress.begin || "") }</div>
    </div>
  )
}
