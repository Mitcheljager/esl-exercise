import { useEffect, useState } from "react"

import { GetApi } from "./lib/Api"
import { Result } from "./lib/types"

import Item from "./Item"

import "./scss/Content.scss"

export default function Header() {
  const sortData = () => {
    if (!data) return

    const sorted = data.sort((a: any, b: any) => {
      const dateA: any = new Date(a.beginAt)
      const dateB: any = new Date(b.beginAt)

      if (sortAscending) return dateA - dateB
      return dateB - dateA
    })

    setSortedData(sorted)
  }

  const [sortedData, setSortedData] = useState<Result | []>([])
  const [sortAscending, setSortAscending] = useState<boolean>(true)

  useEffect(() => { sortData() }, [sortAscending])

  const { data, loading, error } = GetApi("/results")
  
  if (loading) return <div className="loading loading--large"></div>
  if (error) return <div>Error: { error }</div>

  if (data && !sortedData.length) sortData()

  if (data) return (
    <div className="content">
      <div className="content__actions">
        <button className="content__sort" onClick={ () => setSortAscending(!sortAscending) }>
          Date { sortAscending ? "▾" : "▴" }
        </button>
      </div>

      { sortedData.map((item: Result) => (
        <Item key={ item.id } data={ item } />
      )) }
    </div>
  )

  return ( <div></div> )
}
