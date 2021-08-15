import { GetApi } from "./lib/Api"
import { formattedDate } from "./lib/dates"

import "./scss/Header.scss"

export default function Header() {
  const { data, loading, error } = GetApi()
  
  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div>Error: { error }</div>

  return (
    <header className="header">
      <h1 className="header__title">{ data?.name.full }</h1>
      <div className="header__date">{ formattedDate(data?.timeline.inProgress.begin || "") }</div>
    </header>
  )
}
