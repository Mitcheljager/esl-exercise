import { GetApi } from "./lib/Api"
import { Result } from "./lib/types"

import Item from "./Item"

import "./scss/Content.scss"

export default function Header() {
  const sortedData = (data: Result) => {
    return data.sort((a: any, b: any) => {
      const dateA: any = new Date(a.beginAt)
      const dateB: any = new Date(b.beginAt)

      return dateA - dateB
    })
  }

  const { data, loading, error } = GetApi("/results")
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: { error }</div>

  if (data) return (
    <div>
      { sortedData(data).map((item: Result) => (
        <Item key={ item.id } data={ item } />
      )) }
    </div>
  )

  return ( <div></div> )
}
